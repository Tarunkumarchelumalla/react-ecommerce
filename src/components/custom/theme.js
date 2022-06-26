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
        }
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