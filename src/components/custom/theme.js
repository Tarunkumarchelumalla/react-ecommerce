import { createTheme } from '@mui/material'
import React from 'react'
import { cyan } from '@mui/material/colors'
export const theme=createTheme({
    palette:{
        primary:{
            main:"#67E8F9",
        },
        secondary:{
            main:'#2A2A2A',
        },
        success:{
           main:"#4caf50",
        },
        error:{
           main:"#ef5350",
        },
    },
    typography: {
        fontFamily: [
          "Poppins",
          "Roboto",
          "Helvetica Neue",
          "Arial",
          "sans-serif"
        ].join(",")
      }
})