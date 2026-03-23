{ pkgs ? import <nixpkgs> {} }:

pkgs.mkShell {
  packages = with pkgs; [
    nodejs_20
    git
  ];

  shellHook = ''
    echo "Dev shell ready: node $(node --version), npm $(npm --version)"
  '';
}