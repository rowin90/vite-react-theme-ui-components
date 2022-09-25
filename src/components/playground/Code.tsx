// Code.tsx

import Prism from '@theme-ui/prism'
import {useEffect, useState} from "react";
import {Box} from "theme-ui";

const alias: { [key: string]: string } = {
    'js': 'javascript',
    'sh': 'bash'
}

export const Code = (props: { url: string }) => {
    const {url} = props
    const [code, setCode] = useState<string>('');
    // 默认是tsx
    let extname = 'tsx'
    if (url.includes('.')) {
        extname = url.split('.').pop()
    }

    useEffect(() => {
        import(`../../${url}?raw`).then(module => {
            setCode(module.default)
        })
    }, [])
    return (
        <Box sx={{flex: 1}}>
            <Prism className={alias[extname] || extname}>
                {code}
            </Prism>
        </Box>
    )
}
