const express = require('express');
const app = express();
const PORT = 3003;
const axios = require('axios');
const { response } = require('express');
const cors = require('cors');

app.use(cors());

let day = new Date()
let today = day.toISOString().split('T')[0]

const urlMonth = 'https://schooler.sun-asterisk.com/api/schedules/' + today + '/month/student'

let dataDay;
app.use('/apiSchoolerMonth', async (req, res) => {
    const dataMonth = await axios.get(urlMonth, {
        "headers": {
            "accept": "application/json, text/plain, */*",
            "accept-language": "vi,en;q=0.9",
            "sec-ch-ua": "\"Not?A_Brand\";v=\"8\", \"Chromium\";v=\"108\", \"Google Chrome\";v=\"108\"",
            "sec-ch-ua-mobile": "?0",
            "sec-ch-ua-platform": "\"Windows\"",
            "sec-fetch-dest": "empty",
            "sec-fetch-mode": "cors",
            "sec-fetch-site": "same-origin",
            "x-xsrf-token": "eyJpdiI6IkJpbHZIYmVJRHFta1RrQlNydTcwMGc9PSIsInZhbHVlIjoidkE4WituYThYUzlVRkVRWDdud1BjekxCOTZLbnFzQlI2bmFRQjFreFZlblF5Z1l6Wmp3U1dPSTRKR1NoclYyUCIsIm1hYyI6ImRiMDk3YzU1YTY5NWViZTkxYzI0ZTIwNjVmZDMxMmU3YTk5NTk0ODZiNzRhYjJhMWM5MzU5ZjE1MmI1OWU3ZjAifQ==",
            "cookie": "_ga=GA1.2.113224879.1667826604; remember_student_59ba36addc2b2f9401580f014c7f58ea4e30989d=eyJpdiI6IjFYMlZaRzJTMG5LWXJcLzJ2cUlDVGhRPT0iLCJ2YWx1ZSI6IjVwVlRKaWwrTTNZWkJRdUVhbzJFTGc5aVJ0d2QwWGhGVzRQSDdIRnVFeDhDd2VWZlg5c0RtVHZITHlZTkVDM1ZNZXI4UlgyR0RUQlJGcUtERFVxXC92NjV5bWVCMFlSSXFncEZPdGs0WVZYWVp5a2NUaTlJMkxHTUlDTW8yb3FNXC9ydnc5QzlmMno4VVwvRU5MQmZNZk9oRWZFVERJNWNXUmtRdm8yOEd5V0hNZz0iLCJtYWMiOiI0NDQxNjA2YTZjYmIyMzgwZWUxMjU0NTI1YzgyNDcxMTgxYzZhOWMwNzk5OWY0M2M1ZWNhNDAxYzNiOTdhZTFmIn0%3D; io=8inMBfVh2Pd5rlwMib6x; XSRF-TOKEN=eyJpdiI6IkJpbHZIYmVJRHFta1RrQlNydTcwMGc9PSIsInZhbHVlIjoidkE4WituYThYUzlVRkVRWDdud1BjekxCOTZLbnFzQlI2bmFRQjFreFZlblF5Z1l6Wmp3U1dPSTRKR1NoclYyUCIsIm1hYyI6ImRiMDk3YzU1YTY5NWViZTkxYzI0ZTIwNjVmZDMxMmU3YTk5NTk0ODZiNzRhYjJhMWM5MzU5ZjE1MmI1OWU3ZjAifQ%3D%3D; schooler_session=eyJpdiI6InF4YUx1c0NhN0h0c0xTeURXQVwvRzZBPT0iLCJ2YWx1ZSI6IktoU1VvQzZaWloxakNaWlwvbG5PbWlJazNPZjNWS2UrUVUzUk5cL21CUHh3TmJRUGFYTVg1cXlJWmtheGF2NVBSWiIsIm1hYyI6IjFiMGMwOTA2MGQyODk3YmEyMWU5OWQ4Njk5NmM4Y2EzNTBlMDNlNTU5M2EyN2UwZDczZmZiMzU4ZDE0YWIyMGQifQ%3D%3D",
            "Referer": "https://schooler.sun-asterisk.com/academic/subjects/257/lessons/9905",
            "Referrer-Policy": "strict-origin-when-cross-origin"
        },
        "body": null,
    })
    const api = dataMonth.data;
    const data = api.map(item => {
        return {
            day: item.day,
            lesson_id: item.lesson_id,
        }
    })
    const min = 0;
    for (let index = 0; index < data.length; index++) {
        // if (data[index].day === today) {
        //     let id = data[index].lesson_id;
        //     break;
        // }

        // min = diffDays;
        // console.log(diffDays + " days");
        // if (diffDays >= 0 && diffDays <= min) {
        //     id = data[index].lesson_id;

        // }
    }
    // console.log(id);
    // console.log(data);
    res.send(data);
    // dataDay = data;
    // console.log(dataDay);
})



app.use('/apiSchoolerDay', async (req, res) => {
    axios.get('http://localhost:3003/apiSchoolerMonth').then(async (results) => {
        const monthData = results.data;

        // console.log(diffDays);
        // console.log(monthData);
        let i = 0;
        let id;
        let diffDays;
        do {
            const date1 = new Date(monthData[i].day);
            const date2 = new Date(today);
            diffDays = date1.getDate() - date2.getDate();
            id = monthData[i].lesson_id;
            i = i + 1;
            console.log({
                "date1": date1,
                "date2": date2,
            });
        } while (diffDays < 0);
        const urlDay = "https://schooler.sun-asterisk.com/api/academic/subjects/257/lessons/" + id + "/detail";

        const response = await axios.get(urlDay, {
            "headers": {
                "accept": "application/json, text/plain, */*",
                "accept-language": "vi,en;q=0.9",
                "sec-ch-ua": "\"Not?A_Brand\";v=\"8\", \"Chromium\";v=\"108\", \"Google Chrome\";v=\"108\"",
                "sec-ch-ua-mobile": "?0",
                "sec-ch-ua-platform": "\"Windows\"",
                "sec-fetch-dest": "empty",
                "sec-fetch-mode": "cors",
                "sec-fetch-site": "same-origin",
                "x-xsrf-token": "eyJpdiI6IkJpbHZIYmVJRHFta1RrQlNydTcwMGc9PSIsInZhbHVlIjoidkE4WituYThYUzlVRkVRWDdud1BjekxCOTZLbnFzQlI2bmFRQjFreFZlblF5Z1l6Wmp3U1dPSTRKR1NoclYyUCIsIm1hYyI6ImRiMDk3YzU1YTY5NWViZTkxYzI0ZTIwNjVmZDMxMmU3YTk5NTk0ODZiNzRhYjJhMWM5MzU5ZjE1MmI1OWU3ZjAifQ==",
                "cookie": "_ga=GA1.2.113224879.1667826604; remember_student_59ba36addc2b2f9401580f014c7f58ea4e30989d=eyJpdiI6IjFYMlZaRzJTMG5LWXJcLzJ2cUlDVGhRPT0iLCJ2YWx1ZSI6IjVwVlRKaWwrTTNZWkJRdUVhbzJFTGc5aVJ0d2QwWGhGVzRQSDdIRnVFeDhDd2VWZlg5c0RtVHZITHlZTkVDM1ZNZXI4UlgyR0RUQlJGcUtERFVxXC92NjV5bWVCMFlSSXFncEZPdGs0WVZYWVp5a2NUaTlJMkxHTUlDTW8yb3FNXC9ydnc5QzlmMno4VVwvRU5MQmZNZk9oRWZFVERJNWNXUmtRdm8yOEd5V0hNZz0iLCJtYWMiOiI0NDQxNjA2YTZjYmIyMzgwZWUxMjU0NTI1YzgyNDcxMTgxYzZhOWMwNzk5OWY0M2M1ZWNhNDAxYzNiOTdhZTFmIn0%3D; io=8inMBfVh2Pd5rlwMib6x; XSRF-TOKEN=eyJpdiI6IkJpbHZIYmVJRHFta1RrQlNydTcwMGc9PSIsInZhbHVlIjoidkE4WituYThYUzlVRkVRWDdud1BjekxCOTZLbnFzQlI2bmFRQjFreFZlblF5Z1l6Wmp3U1dPSTRKR1NoclYyUCIsIm1hYyI6ImRiMDk3YzU1YTY5NWViZTkxYzI0ZTIwNjVmZDMxMmU3YTk5NTk0ODZiNzRhYjJhMWM5MzU5ZjE1MmI1OWU3ZjAifQ%3D%3D; schooler_session=eyJpdiI6InF4YUx1c0NhN0h0c0xTeURXQVwvRzZBPT0iLCJ2YWx1ZSI6IktoU1VvQzZaWloxakNaWlwvbG5PbWlJazNPZjNWS2UrUVUzUk5cL21CUHh3TmJRUGFYTVg1cXlJWmtheGF2NVBSWiIsIm1hYyI6IjFiMGMwOTA2MGQyODk3YmEyMWU5OWQ4Njk5NmM4Y2EzNTBlMDNlNTU5M2EyN2UwZDczZmZiMzU4ZDE0YWIyMGQifQ%3D%3D",
                "Referer": "https://schooler.sun-asterisk.com/academic/subjects/257/lessons/9905",
                "Referrer-Policy": "strict-origin-when-cross-origin"
            },
            "body": null,
        })
        const api = response.data;
        const infor = {
            date: api.schedule[0].day,
            name: api.name,
            content: api.content,
            teacher: api.schedule[0].teachers[0].name,
            room: api.schedule[0].room,
            test: api.score_names.name,
        }
        console.log(infor);
        res.send(infor);
    })
})

app.use('/test', async (req, res) => {
    return res.json("Hello");
})

app.listen(PORT, () => console.log("running..."))