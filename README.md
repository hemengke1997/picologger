# browser-logger

> A colorful logger used in browser

## Usage

```ts
import { ClientLogger } from '@minko-fe/client-logger'
const logger = new ClientLogger('label', false)

logger.log({ text: 'some-text', type: 'success' })
```



```ts
import { ClientLogger } from '@minko-fe/client-logger'
const logger = new ClientLogger('label', true)

const logStr = logger.log({ text: 'some-text', type: 'success' })

console.log(logStr)
```

