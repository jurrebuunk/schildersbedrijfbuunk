import { useEffect, useState } from 'react'
import { createPortal } from 'react-dom'

type GalleryImageProps = {
  alt: string
  src?: string
  className?: string
  forceSkeleton?: boolean
}

export function GalleryImage({ alt, src, className = '', forceSkeleton = false }: GalleryImageProps) {
  const [isOpen, setIsOpen] = useState(false)
  const [hasError, setHasError] = useState(false)

  const showSkeleton = forceSkeleton || !src || hasError

  useEffect(() => {
    if (!isOpen) return

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setIsOpen(false)
    }

    window.addEventListener('keydown', onKeyDown)
    return () => window.removeEventListener('keydown', onKeyDown)
  }, [isOpen])

  return (
    <>
      <button
        type="button"
        className={`gallery-image ${className}`.trim()}
        onClick={() => setIsOpen(true)}
        aria-label={`Bekijk afbeelding: ${alt}`}
      >
        {showSkeleton ? (
          <span className="gallery-image-skeleton" aria-hidden="true" />
        ) : (
          <img src={src} alt={alt} loading="lazy" onError={() => setHasError(true)} />
        )}
      </button>

      {isOpen && typeof document !== 'undefined'
        ? createPortal(
        <div className="gallery-modal" role="dialog" aria-modal="true" aria-label={alt} onClick={() => setIsOpen(false)}>
          <button
            type="button"
            className="gallery-modal-close"
            onClick={() => setIsOpen(false)}
            aria-label="Sluit afbeelding"
          >
            X
          </button>
          <div className="gallery-modal-content" onClick={(event) => event.stopPropagation()}>
            {showSkeleton ? (
              <div className="gallery-modal-skeleton" aria-hidden="true" />
            ) : (
              <img src={src} alt={alt} />
            )}
          </div>
        </div>,
        document.body,
      )
        : null}
    </>
  )
}
