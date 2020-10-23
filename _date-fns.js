import { format } from 'date-fns'

let date

date = format(new Date())
console.log('now GMT+0', date)

date = format(new Date(), 'MM/dd/yyyy')