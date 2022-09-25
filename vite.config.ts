import {defineConfig} from 'vite'
import react from '@vitejs/plugin-react'

import {resolve} from 'path';
import * as fs from 'fs';

const root = process.cwd()
const configName = 'rdoc.config.json'
const configPath = resolve(root, configName)
const config = {
    title: "dd",
    logo: "",
    repository: "dd/doc",
    menus: {},
    chapters: {},
    htmlTags: []
}

if (fs.existsSync(configPath)) {
    Object.assign(config, JSON.parse(fs.readFileSync(configPath, 'utf-8')))
}


// https://vitejs.dev/config/
export default defineConfig(async () => {
    const mdx = await import('@mdx-js/rollup')

    return {
        plugins: [
            react({
                jsxRuntime: 'automatic',
            }),
            mdx.default({
                jsxRuntime: 'automatic',
                providerImportSource: '@mdx-js/react'
            }),
            {
                name: 'dd',
                load(id) {
                    if(id === '/@config'){
                        return `export default ${JSON.stringify(config)}`
                    }
                },
                transform(code,id){
                    if(code.includes('@config')){
                        console.log("-> code", code);
                    }

                }

            }

        ],
        resolve: {
            alias: {
                'config':'/@config'
            }
        }

    }

})
