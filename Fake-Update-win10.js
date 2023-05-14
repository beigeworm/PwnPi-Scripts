// =============================================================================
// Title: Fake Update for Windows
// Author: @beigeworm | https://github.com/beigeworm
// Description: Start a fake Update for Windows through a browser.
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
delay(4000);
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
type("msedge.exe --new-window -kiosk https://fakeupdate.net/win8");
delay(200)
press("ENTER");
delay(1500);
press("F11");