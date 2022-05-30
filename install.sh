#!/usr/bin/bash

pkg upgrade -y
pkg update -y
pkg install nodejs -y
pkg clean
pkg install tty-clock -y
pkg install sox -y
pkg install jq -y
pkg install mc -y
pkg install figlet -y
pkg install wget -y
pkg install yarn
pkg install ffmpeg
pkg install libwebp -y
pkg install nodejs -y
pkg install tesseract -y
pkg install imagemagick -y
wget -O ~/../usr/share/tessdata/ind.traineddata "https://github.com/tesseract-ocr/tessdata/blob/master/ind.traineddata?raw=true"
yarn

echo ":::::::::::::::::::::::::::::::::"
echo ":::::::::::::::::::::::::::::::::"
echo ":::::         Aine          :::::"
echo ":::::                       :::::"
echo ":::::   :::::      :::::    :::::"
echo ":::::   :::::      :::::    :::::"
echo ":::::                       :::::"
echo ":::::     ::::::::::::      :::::"
echo ":::::     ::::::::::::      :::::"
echo ":::::                       :::::"
echo ":::::::::::::::::::::::::::::::::"
echo ":::::::::::::::::::::::::::::::::"
echo "[*] JANGAN DISHARE, DI SHARE REPO INI AKAN DI HAPUS !!"
echo "[*] Made by Muhammad Ridwan Reynaldy"
echo "[*] All dependencies have been installed, please run the command \"npm start\" to immediately start the script"
npm start
