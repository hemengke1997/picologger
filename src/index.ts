// Taken from https://tailwindcss.com/docs/customizing-colors
const colors = {
  info: '#3b82f6',
  error: '#ef4444',
  success: '#22c55e',
  warn: '#f97316',
}

type LogType = 'info' | 'success' | 'error' | 'warn'

interface TextLogType {
  text: string
  type?: LogType
  color?: string
}

export class Logger {
  private label: TextLogType | undefined
  private silent = false

  constructor(label?: TextLogType, silent?: boolean) {
    this.label = label
    this.silent = silent || false
  }

  private styleize(item: TextLogType, isFirst: boolean, isLast: boolean) {
    const { text, color, type } = item
    const style: string[] = []

    if (isFirst) {
      style.push('border-radius: 4px 0 0 4px')
    } else if (isLast) {
      style.push('border-radius: 0 4px 4px 0')
    }

    style.push('padding: 2px 4px', `background: ${type ? colors[type] : color || '#000'}`, 'color: #fff')

    return {
      text,
      style: style.join('; '),
    }
  }

  log(...data: TextLogType[]) {
    this.label && data.unshift(this.label)
    const args = [...data.map((item, i) => this.styleize(item, i === 0, i === data.length - 1))]

    let c = ''
    const r: string[] = []
    args.forEach((item) => {
      c = c.concat(`%c${item.text}`)
    })

    r.push(c)
    args.forEach((item) => {
      r.push(item.style ?? '')
    })

    if (this.silent) return r

    console.log(...r)
  }
}
