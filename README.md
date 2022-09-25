# vite
# 目录结构
- components/playground 是预览组件，可以预览代码和组件
- docs 写入组件 demo 说明文件，最终这个会被渲染
```typescript jsx

## 第一篇文章

我是一个简单的md文档

1. 我用mdx生成
2. 我能直接写react组件

import { Playground } from '../components/playground/index.tsx';

<Playground url="/views/Demo"/>

```
- views 写入组件的源码部分，最后会用 playground 组件渲染到 mdx 中
![效果图](https://tva1.sinaimg.cn/large/e6c9d24ely1h6iuki22xtj21jw0u076y.jpg)

# 主题
1. App.js 中默认的主题，可以根据对应生成的标签修改主题颜色
```js
const theme = {
    colors: {
        text: '#383838',
        background: '#fff',
        primary: '#a862ea',
        secondary: '#609',
        lightgray: '#fafafa',
    },
    fonts: {
        body:
            'system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", sans-serif',
        heading: 'inherit',
        monospace: 'Menlo, monospace',
        color: 'text',
    },
    lineHeights: {
        body: 1.5,
        heading: 1.125,
    },
    styles: {
        root: {
            fontFamily: 'body',
            lineHeight: 'body',
            color: 'text',
            bg: 'background',
        },
        body: {
            color: 'text',
            fontSize: 15,
            lineHeight: '30px',
            wordBreak: 'break-word'
        },
        h2: {
            fontSize: '1.2em',
            margin: '24px 0 12px',
            color: 'primary'
        },
        ul: {
            pl: '2em',
        },
        li: {
            pl: '0.2em',
            '::marker': {
                color: 'primary'
            }
        },
        code: {
            fontFamily: 'monospace',
        },
        pre: {
            variant: 'prism',
            fontFamily: 'monospace',
            p: 3,
            borderRadius: 4,
        },
        a: {
            color: 'primary',
            textDecoration: 'none',
            ':hover': {
                color: 'secondary',
                textDecoration: 'underline',
            },
        },
    },
    prism: {
        [[
            '.comment',
            '.prolog',
            '.doctype',
            '.cdata',
            '.punctuation',
            '.operator',
            '.entity',
            '.url',
        ]]: {
            color: 'gray',
        },
        '.comment': {
            fontStyle: 'italic',
        },
        [[
            '.property',
            '.tag',
            '.boolean',
            '.number',
            '.constant',
            '.symbol',
            '.deleted',
            '.function',
            '.class-name',
            '.regex',
            '.important',
            '.variable',
        ]]: {
            color: 'purple',
        },
        [['.atrule', '.attr-value', '.keyword']]: {
            color: 'primary',
        },
        [[
            '.selector',
            '.attr-name',
            '.string',
            '.char',
            '.builtin',
            '.inserted',
        ]]: {
            color: 'secondary',
        },
        ...vsDark
    },
}
```
2. 代码高亮主题，是用 @theme-ui/prism库，里面也内置了很多主题
```js
import {ThemeProvider} from 'theme-ui'
import Prism from '@theme-ui/prism'
import vsDark from '@theme-ui/prism/presets/dracula.json'

// 要显示代码高亮的添加代码 ，详见 theme-ui
const components = {
    pre: ({children}: { children: React.ReactNode }) => <div>{children}</div>,
    code: Prism,
}

function App() {
    return (
        <ThemeProvider theme={theme} components={components}>
            <Home/>
        </ThemeProvider>

    )
}
```
