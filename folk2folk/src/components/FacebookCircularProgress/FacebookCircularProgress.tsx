import { CircularProgressProps, Box, CircularProgress, circularProgressClasses } from "@mui/material"
import { forwardRef } from "react"

const FacebookCircularProgress = forwardRef<HTMLDivElement, CircularProgressProps>(
    function FacebookCircularProgress(props, ref) {
      return (
        <Box ref={ref} sx={{ position: 'relative' }}>
          <CircularProgress
            variant="determinate"
            sx={{
              color: theme => theme.palette.grey[theme.palette.mode === 'light' ? 200 : 800],
            }}
            size={40}
            thickness={4}
            {...props}
            value={100}
          />
          <CircularProgress
            variant="indeterminate"
            disableShrink
            sx={{
              color: theme => (theme.palette.mode === 'light' ? '#28cc04' : '#308fe8'),
              animationDuration: '550ms',
              position: 'absolute',
              left: 0,
              [`& .${circularProgressClasses.circle}`]: {
                strokeLinecap: 'round',
              },
            }}
            size={40}
            thickness={4}
            {...props}
          />
        </Box>
      )
    },
  )

  export default FacebookCircularProgress