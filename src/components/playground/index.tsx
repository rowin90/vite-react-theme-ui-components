// index.tsx

import { Flex } from "theme-ui";
import { Preview } from "./Preview";
import { Code } from './Code'

export const Playground = (props: { url: string }) => {
    return (
        <Flex style={{width:'100vw'}}>
            <Code url={props.url}/>
            <Preview url={props.url} />
        </Flex>
    )
}
