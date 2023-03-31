import dayjs from 'dayjs'
import utc from 'dayjs/plugin/utc.js' // https://github.com/iamkun/dayjs/issues/1167
import tz from 'dayjs/plugin/timezone.js'
import { ClientLogger } from '..'

dayjs.extend(utc)
dayjs.extend(tz)

export function logTimeInfo(prefix: string, timeText = 'BuildTime') {
  const currentBuildTime = dayjs().tz('Asia/Shanghai').format('YYYY-MM-DD HH:mm:ss')

  const logger = new ClientLogger(undefined, true)

  const t = logger.log(
    { text: prefix, type: 'success' },
    { text: timeText, type: 'warn' },
    { text: currentBuildTime, type: 'info' },
  )!

  return `console.log(${t.map((str) => `"${str}"`)});`
}
