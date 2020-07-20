curl -v -X POST https://api.line.me/v2/bot/richmenu \
-H "Authorization: Bearer '$1'" \
-H "Content-Type: application/json" \
-d \
'{
    "size":{
        "width":2500,
        "height":843
    },
    "selected": true,
    "name": "LINE Accounting bot",
    "chatBarText": "開始記帳吧",
    "areas": [
        {
            "bounds": {
                "x": 0,
                "y": 0,
                "width": 1250,
                "height": 843
            },
            "action": {
                "type": "uri",
                "uri": "https://liff.line.me/1654464072-6pdBbdmn"
            }
        },
        {
            "bounds": {
                "x": 1250,
                "y": 0,
                "width": 1250,
                "height": 843
            },
            "action": {
                "type": "uri",
                "uri": "https://liff.line.me/1654464072-xro90oLB"
            }
        }
    ]
}'