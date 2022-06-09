#!/bin/sh
echo Running Ducky\'s Debian script!
read -p "Enter username: " uname
apt install celluloid evince file-roller flatpak fonts-noto gdm3 gedit git gnome-control-center gnome-shell gnome-software gnome-software-plugin-flatpak gnome-system-monitor gnome-terminal gnome-tweak-tool gthumb nautilus network-manager-openvpn sudo
flatpak remote-add --if-not-exists flathub https://flathub.org/repo/flathub.flatpakrepo
flatpak override --filesystem=/home/$uname/.themes
systemctl enable gdm
systemctl enable NetworkManager
systemctl enable bluetooth
echo Done! Make sure to enable non-free repositories and install \"nvidia-driver\" and \"nvidia-settings\"!
