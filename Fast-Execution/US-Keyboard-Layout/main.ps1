Function SetkbUS {

Dism /online /Get-Intl
Set-WinSystemLocale en-US
Set-WinUserLanguageList en-US -force

}

SetkbUS
