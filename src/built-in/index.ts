import dayjs from 'dayjs'
import tz from 'dayjs/plugin/timezone.js'
import utc from 'dayjs/plugin/utc.js' // https://github.com/iamkun/dayjs/issues/1167
import { Logger } from '..'

dayjs.extend(utc)
dayjs.extend(tz)

export function logTimeInfo(prefix: string, timeText = 'BuildTime') {
  const currentBuildTime = dayjs().tz('Asia/Shanghai').format('YYYY-MM-DD HH:mm:ss')

  const logger = new Logger(undefined, true)

  const t = logger.log(
    { text: prefix, type: 'success' },
    { text: timeText, type: 'warn' },
    { text: currentBuildTime, type: 'info' },
  )!

  return `console.log(${t.map((str) => `"${str}"`)});`
}
