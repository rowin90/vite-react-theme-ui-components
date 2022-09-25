import React, {useState} from 'react'
import Home from "./docs/index.mdx"
import {ThemeProvider} from 'theme-ui'
import Prism from '@theme-ui/prism'
import vsDark from '@theme-ui/prism/presets/dracula.json'


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

export default App
