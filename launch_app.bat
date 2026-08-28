@echo off
setlocal

:: Get the directory where this script is located
set "APP_DIR=%~dp0"
set "APP_URL=file:///%APP_DIR:\=/%index.html"

:: 1. Try launching in standalone App Mode with Microsoft Edge
start "" msedge --app="%APP_URL%" --window-size=480,880 >nul 2>&1
if %ERRORLEVEL% equ 0 goto done

:: 2. Try Google Chrome App Mode if Edge isn't available
start "" chrome --app="%APP_URL%" --window-size=480,880 >nul 2>&1
if %ERRORLEVEL% equ 0 goto done

:: 3. Fallback to default browser
start "" "%APP_DIR%index.html"

:done
exit
