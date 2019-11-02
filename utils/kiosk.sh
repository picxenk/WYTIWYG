#!/bin/bash
xset s noblank
xset s off
xset -dpms

sed -i 's/"exited_cleanly":false/"exited_cleanly":true/' /home/pi/.config/chromium/Default/Preferences
sed -i 's/"exit_type":"Crashed"/"exit_type":"Normal"/' /home/pi/.config/chromium/Default/Preferences

/usr/bin/chromium-browser --noerrdialogs --disable-infobars --kiosk http://localhost:8080 &

# chromium-browser \
#     --app=http://localhost:8080 \
#     --disable \
#     --disable-translate \
#     --disable-infobars \
#     --disable-suggestions-service \
#     --disable-save-password-bubble \
#     --start-fullscreen
    # --disk-cache-dir=$CHROMIUM_TEMP/cache/ \
    # --user-data-dir=$CHROMIUM_TEMP/user_data/ \
    # --start-maximized \
    # --kiosk "http://localhost:8080" &
# sleep 5
# xdotool search --sync --onlyvisible --class "chromium" key F11 
