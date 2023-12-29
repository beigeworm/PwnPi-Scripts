# Beigeworm's Telegram C2 Client 

MAIN SCRIPT HERE - https://github.com/beigeworm/PoshGram-C2

**SYNOPSIS**
-------------

Using a Telegram Bot's Chat to Act as a Command and Control Server.

Telegram Bots are able to both receive AND send messages. so can you use it as a C2 Server?

-----------------------------------------------------------------------------------------------------------------------------

**INFORMATION**
---------------

This script will wait until it is called in the Telegram chat by it's host computer name (eg. DESKTOP-WG65HY). Then Click 'Enter Commands' or 'Options' to begin the session and accept commands from Telegram chat. 

During a connected session, A list of Modules can be accessed by typing 'options' in chat. Or you can use the chat to act simply as a reverse shell with standard PowerShell commands.

-----------------------------------------------------------------------------------------------------------------------------

Confirmed working with no Microsoft AV detections, on a variety of Windows systems over a week or so of testing 14/08/23

*(Win 10 Laptop, Win 11 Laptop, 2 Win 11 Desktops, 2 Win10 Desktops, Win 10 VM, AtlasOS Win 10 Laptop. ReviOS Win 10 Macbook w/ Bootcamp) will add more in future...*

-----------------------------------------------------------------------------------------------------------------------------

**FEATURES**
-------------

**Session Queue**          - While running, this script waits for a start phrase (the computer name) before connecting, allowing multiple computers to wait for interaction.

**Botnet Mode**            - Add simultaneous sessions to control multiple computers at once. (enter computer names one after the other into chat)

**Persistance**            - Can add itself to startup folder (RemovePersistance command will undo this)

**Auto Update**            - The script checks for a newer version and updates if neccecary.

**Options List**           - Once connected type "Options" to see a list of operations. ("ExtraInfo" will show more command info)

**Pause Session**          - exits the current session and script waits for re-authrentication.

**Key Capture Standby**    - only sends messages if keys are pressed and remains idle otherwise.

**File Size Intellegence** - Auto split Uploads over 50mb.

**Privilege Escalation**   - The ability to send the user a UAC prompt for this script and restart if succesful.

**Toggle Error Messaging** - Turn On or Off returning error messages to the chat. (Off by default)

**Reverse shell**          - apart from running the modules, once connected the chat can act as a reverse shell.

**Killswitch**             - Any Modules such as "KeyCapture" and "Exfiltrate" can be killed by typing "KILL" into chat
                         (this returns the session so it can accept further commands (does not kill the current session.))
                         
-----------------------------------------------------------------------------------------------------------------------------

**TELEGRAM SETUP INSTRUCTIONS**
----------------------
 1. Install Telegram and make an account if you haven't already.

 2. Visit https://t.me/botfather and make a bot. (make a note of the API token)
 
 3. Click the provided link to open the chat E.G. "t.me/****bot" then type or click /start)

 4. At the start off the the Script - Replace `$tg` with your Telegram Bot API Token (only when running ps1 directly (not changed using Flipper, VBScript etc as it should be pre-defined there.. eg. `$tg = 'TOKEN'`))
 
 5. Run the script on target system
 
 6. Check telegram chat for 'waiting to connect' message.
 
 7. This script has a feature to wait until you start the session from Telegram.
 
 8. Type the computer name from the 'waiting' message into Telegram bot chat to connect to that computer's session.

-----------------------------------------------------------------------------------------------------------------------------

**MODULES INFORMATION**
-----------------------

`Options`           : Show a menu in chat listing all the below functions

`Kill`              : Killswitch for `Key-Capture` and `Exfiltrate` commands (can take a few seconds to kill.)

`Extra-Info`        : Extra command information and examples sent to the chat

`Close`             : Close the Session completely

`Pause-Session`      : Pauses the session (to reconnect type in the computer name again)

`Toggle-Errors`      : Toggle error messages to the chat ON or OFF and returns the current state to chat

`Folder-Tree`        : Gets Directory trees for User folders and sends it zipped to the chat

`SpeechToText`       : Send audio transcript to Discord 

`Screenshot`         : Sends a screenshot of the desktop as a png file

`Key-capture`        : Capture Keystrokes and send them (collected keystrokes are only sent after 10 seconds of keyboard inactivity)

`System-info`        : Send System info as text file (system, user, hardware, ip information and more)

`Enumerate-LAN`      : find info on other network devices (IPv4, MAC address, Hostname, Manufacturer) (eg. `Enumerate-LAN -prefix 192.168.1`)

`Add-Persistance`    : Add Telegram C2 to Startup (Copy the script to a default windows location and a vbs script to the startup folder)

`Remove-Persistance` : Remove Startup Persistance (Remove the ps1 script and vbs file)

`Is-Admin`           : Checks if session has admin Privileges and returns the result

`Attempt-Elevate`    : Send user a prompt to grant Administrator privilages in a new session. (if the user accepts the prompt)

`Message`           : Send a message in a pop-up window to connected computer `Message "Your Message Here!"`

`Take-Picture`       : Take a picture with any connected camera/webcam and upload to chat.

`Record-Audio`       : Record microphone to mp3 file and upload to chat. eg. `Record-Audio -t 100` in seconds 

`Record-Screen`       : Record Screen to mkv file and upload to chat. eg. `Record-Screen -t 100` in seconds

`Nearby-Wifi`         : Show nearby wifi networks       

`Send-Hydra`         : Never ending popups (use killswitch)   

`Exfiltrate`        : Searches for, and sends, files to the chat as zip files split into 50mb each (Telegram max upload limit.)

 EXFILTRATION EXAMPLE COMMAND  =  `Exfiltrate -path [FOLDERS] -filetype [FILETYPES]`
 
 FOLDERS = Documents, Desktop, Downloads, OneDrive, Pictures, Videos
 
 FILETYPES = log, db, txt, doc, pdf, jpg, jpeg, png, wdoc, xdoc, cer, key, xls, xlsx, cfg, conf, docx, rft
 
**ADMIN ONLY FUNCTIONS**

`Disable-AV`        : Attempt to exclude C:/ from Defender Scanning (Crude disable method)

`Disable-HID`       : Disable Mice and Keyboards on the target system

`Enable-HID`        : Enable Mice and Keyboards on the target system

*(Commands are not case sensitive)*

-----------------------------------------------------------------------------------------------------------------------------

Builder GUI example
![Screenshot_1](https://github.com/beigeworm/Powershell-Tools-and-Toys/assets/93350544/5424ba95-d4bd-4667-a2b5-cf681f049698)

Telegram Chat example
![telec2](https://github.com/beigeworm/Powershell-Tools-and-Toys/assets/93350544/58ec957d-4792-4d5a-9f06-ced4ccc3408d)
o 'kill' to stop 'KeyCapture' or 'Exfiltrate' command and return to waiting for commands.