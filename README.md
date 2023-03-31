# picologger

> A colorful logger used in browser

## Usage

```ts
import { Logger } from 'picologger'
const logger = new Logger('label', false)

logger.log({ text: 'some-text', type: 'success' })
```



```ts
import { Logger } from 'picologger'
const logger = new Logger('label', true)

const logStr = logger.log({ text: 'some-text', type: 'success' })

console.log(logStr)
```

