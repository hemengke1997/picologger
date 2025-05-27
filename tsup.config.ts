import { defineConfig } from 'tsup'
import { bundleless } from 'tsup-plugin-bundleless'

export const tsup = defineConfig((option) => ({
  entry: ['src/**/*.ts'],
  dts: true,
  clean: true,
  format: ['esm'],
  platform: 'node',
  splitting: false,
  treeshake: true,
  minify: false,
  sourcemap: !!option.watch,
  tsconfig: option.watch ? 'tsconfig.dev.json' : 'tsconfig.json',
  ...bundleless({
    disable: !!option.watch,
  }),
}))
