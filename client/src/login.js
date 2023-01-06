var request = require('request');
var options = {
    'method': 'POST',
    'url': 'https://schooler.sun-asterisk.com/api/login',
    'headers': {
        'X-XSRF-TOKEN': 'eyJpdiI6ImtadXRKR21FemhNSlFWdmNZT0FlOWc9PSIsInZhbHVlIjoiTGJjVVVLbzhNS2lVd2FaOEhlQ2xOeTk5OFhBRjJuU0J0b09zVW1pQXlyNHlGaWIwWEFpTWFDWFNCZ3QybjNpeCIsIm1hYyI6IjVlYjRjNjQ1OWJjNGJjNDRmNmU1MTE1ZjYzZjhkYWVkN2JkYzI0MWI4NDM4YzlkMjQyZjU0NWIwMmE2ZDAzZWIifQ==',
        'Accept': 'application/json',
        'Referer': 'https://schooler.sun-asterisk.com/login',
        'Content-Type': 'application/json',
        'Cookie': 'XSRF-TOKEN=eyJpdiI6Im5DTVhidVlPcW55blU1WE9BZU9XXC9RPT0iLCJ2YWx1ZSI6IlQ0QXJYVnF4SHBIMitvODYraU5DdTdsTUJQbTBHM2JrUCtPU1p6Q09hWk9XSStPTVV0NlFZUVpxUnpYZjRNSU0iLCJtYWMiOiJhNzMwMDM1YTc5NTgxZDhkM2YxZjIxYTVkNTMwYTAxMjk2Njk3N2ZjMGJjNjUwNGJkN2E0NTUzODA0NzI0ZWMyIn0%3D; remember_student_59ba36addc2b2f9401580f014c7f58ea4e30989d=eyJpdiI6IkM2YVllWFhkQ0pRQ3g3dDlmazVpRmc9PSIsInZhbHVlIjoiNkxzWFwvTGlUUnBrOHFhRnBrYXJGc0E2OWxhOUpOTFpvWDFUSlwva1RuTGZzeitPZk9UdEF0QXphY2hzc0Rwd2dTcU1tcTNFaytcL2pTUFdSMU02SkwzalZIZWJUcE1SMnRLMVNEbXowSjhcL2NqdnR4VzVSTDQ5TmttcW1neHl1S0tqOW5zZXhZSWlab3k4QzVHeFN3VmFBV2xkQzl4UmRrbzBcL0g4TXZFWHB5N1k9IiwibWFjIjoiOWNmOTA1NzFjMjNmZDI5YzBkYjcwZjViNGE3NGUxYmUxNTRmNTMzNjU4ZTI3MjJmNjliODE1NzFmNjdmNDU0NCJ9; schooler_session=eyJpdiI6Ik9GcGVLWTFib3JMMVplUCtJRkwwZ3c9PSIsInZhbHVlIjoiWHR5bHVqdkNZaWNwY1ZjOE9Ocm1CaHFcL2lYUUtZVkhoTUF5Yk9xRDhLZjgzZXFmU0g3cjI4UkcxYnNXWmxZY2EiLCJtYWMiOiJiMmQxZDRmMTU4ZjBkZjk3MTZjNjdkNjQwMmVlMDNlZGZkYTg5Y2NjOTUyZDE2YWY2YWI3ZmZiNjQ1NGY5ZjkxIn0%3D'
    },
    body: JSON.stringify({
        "email": "nghia.hn205006@sis.hust.edu.vn",
        "password": "Khang.HN276",
        "location": {
            "pathname": "/login",
            "state": {
                "from": {
                    "pathname": "/",
                    "search": "",
                    "hash": ""
                }
            },
            "search": "",
            "hash": "",
            "key": "l0lr8o"
        }
    })

};
request(options, function (error, response) {
    if (error) throw new Error(error);
    console.log(response.body);
});
