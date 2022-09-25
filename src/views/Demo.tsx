import { Button } from "theme-ui";
import { useState } from "react";

 const Demo = () => {
    const [count, setCount] = useState(0)
     // 这是注释
    return (
        <>
            <p>{count}</p>
            <Button onClick={() => setCount(val => ++val)}>+</Button>
        </>
    )
}

export default  Demo
