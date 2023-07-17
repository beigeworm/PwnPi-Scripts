# PwnPi-Scripts

![pwnpiOLED](https://github.com/beigeworm/PwnPi-Scripts/assets/93350544/0bb4f5b5-6549-49da-ac7d-72fc6ee1e2f6)

**A collection of BadUSB scripts for the PwnPi A.L.O.A.** 
These scripts range from harmless pranks to nefarious red team tools. For educational purposes only.

# Pre-Deployment Setup
Most of these scripts will require some setup before they will work.
Make sure to read through all the scripts and follow any setup instructions.

eg. `replace DISCORD_WEBHOOK to your webhook.` etc..

**Setup for Telegram, Discord, Dropbox**

**DROPBOX ACCESS TOKEN SETUP**
1. make an app at https://www.dropbox.com/developers/apps (make sure to grant full access to your new app)
2. generate an access token for your app.

**DISCORD WEBHOOK SETUP**
1. (Server Admin Required) On a discord server chat goto > "edit channel" > "integrations" > "webhooks" 
2. make a new webhook, name it and then click "copy webhook URL".

**TELEGRAM BOT SETUP**
1. visit https://t.me/botfather and make a bot.
2. add bot api to script.
3. search for bot in top left box in telegram and start a chat then type /start.
4. add chat ID for the chat bot (use this below to find the chat id) 

`$token='YOUR_TOKEN' #Replace this with your bot Token
$URL='https://api.telegram.org/bot{0}' -f $Token
$inMessage=Invoke-RestMethod -Method Get -Uri ($URL +'/getUpdates') -ErrorAction Stop
$inMessage.result.message | write-output
$inMessage.result.message | get-member`

# If you like my work please leave a star. ⭐
