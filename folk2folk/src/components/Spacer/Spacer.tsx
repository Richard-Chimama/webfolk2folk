import { Box } from "@mui/joy"
import { FC } from "react"

type ownprop = {
    h?: string,
    height?: string
}

const Spacer: FC<ownprop> = ({h, height})=>{
    return(
        <Box sx={{
            width: '100%',
            height: h || height || '5px'
        }}></Box>
    )
}

export default Spacer