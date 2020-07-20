curl -v -X POST https://api-data.line.me/v2/bot/richmenu/$1/content \
-H "Authorization: Bearer '$2'" \
-H "Content-Type: image/jpeg" \
-T $3