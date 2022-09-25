// Preview.tsx

import { Box } from "theme-ui";
import React, { Suspense, lazy } from "react";

export const Preview = (props: { url: string }) => {
    const { url } = props
    const Comp = lazy(() => import(`../../${url}`))
    return (
        <Box
            p={2}
            sx={{
                bg: 'muted',
                overflow: 'auto',
                flex: 1,
                my: 3
            }}
        >
            <Suspense fallback={<div>loading</div>}>
                <Comp/>
            </Suspense>
        </Box>
    )
}
