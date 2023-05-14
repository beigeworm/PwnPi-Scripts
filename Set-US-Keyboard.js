// =============================================================================
// Title: Set System Language to US
// Author: @beigeworm | https://github.com/beigeworm
// Description: Set System Language and keyboard to US.
// Target: Windows 10
// =============================================================================

// *USB SETTING*
// startup

// =============================================================================

// Script Setup
layout('us'); 
// typingSpeed(1,1);

// Main Payload
press("GUI r");
delay(1500);
type("powershell -NoP -NonI -Exec Bypass");
delay(500);
press("CONTROL SHIFT ENTER");
delay(2500);
press("ALT y");
press("left");
delay(4000);
press("ENTER");
type("Dism /online /Get-Intl");
press("ENTER")
delay(4000);
type("Set-WinSystemLocale en-US");
press("ENTER")
delay(500);
type("Set-WinUserLanguageList en-US -Force");
press("ENTER")
delay(1500);
type('exit');
press("ENTER");
delay(3500);