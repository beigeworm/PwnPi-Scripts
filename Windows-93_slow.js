
// =============================================================================
// Title: Start Windows93
// Author: @beigeworm | https://github.com/beigeworm
// Description: Start Windows93 through a browser and fullscreen.
// Target: Windows 10
// =============================================================================

// *USB SETTING*
// startup

// =============================================================================

// Script Setup
layout('us'); 
// typingSpeed(1,1);

// Main Payload
delay(500);
press("GUI r");
delay(1500);
type("cmd");
delay(200)
press("CTRL SHIFT ENTER");
delay(2000);
press("ALT y");
delay(2500);
type("taskkill /F /IM msedge.exe /T > nul")
delay(100);
press("ENTER");
delay(500);
type("exit")
delay(100);
press("ENTER");
delay(2000);
press("GUI r");
delay(1500);
type("msedge.exe --new-window -kiosk www.windows93.net");
delay(200)
press("ENTER");
delay(1500);
press("F11");