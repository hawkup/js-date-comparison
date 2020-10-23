# JS Date comparison

## Size comparison
|Library        |Size     |
|---------------|---------|
|JS Date Object |-
|moment         |
|moment-timezone|
|luxon          |
|date-fns       |
|date-fns-tz    |
|dayjs          |2kB

## Function comparison
| Expect Output          | JS Date Object     | moment   | moment-timezone | luxon  | date-fns  | date-fns-tz | dayjs |
|------------------------|--------------------|
| now GMT+0              |
| now GMT+Timezone       |
| 21/03/20               |
| 21/03/2020             |
| 21/03/2563             |
| 21/Mar/2020            |
| 21/March/2020          |
| 21/มี.ค./2563           |
| 21/มี.ค./2020           |
| 21/มีนาคม/2563          |
| 21:30:59               |
| 06:11:30 AM            |
| 11 minutes ago         |
| 11 นาทีที่แล้ว             |
| Convert TZ to ms       |
| Convert mz to TZ       |
| Convert TZ to human    |
| Convert ms to human    |