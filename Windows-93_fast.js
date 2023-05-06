layout('us');
delay(500);
press("GUI r");
delay(500);
type("cmd");
delay(200)
press("CTRL SHIFT ENTER");
delay(500);
press("ALT y");
delay(500);
type("taskkill /F /IM msedge.exe /T > nul")
delay(100);
press("ENTER");
delay(200);
type("exit")
delay(100);
press("ENTER");
delay(1000);
press("GUI r");
delay(500);
type("msedge.exe --new-window -kiosk www.windows93.net");
delay(200)
press("ENTER");