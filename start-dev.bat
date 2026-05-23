@echo off
SET PATH=E:\Chic\node-temp;%PATH%
echo Starting Chic dev server...
echo Open http://localhost:5173 in your browser.
cd /d E:\Chic
call npm.cmd run dev
pause
