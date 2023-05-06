//========================== Mon's Fake Windows Update ==============================

//SYNOPSIS
// This script will open Microsoft Edge with FakeUpdate.net and fullscreen.


layout('us');
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
type("msedge.exe --new-window -kiosk https://fakeupdate.net/win8");
delay(200)
press("ENTER");