import React from 'react'
import SvgIcon from '@material-ui/core/SvgIcon'
import Desktop from '@material-ui/icons/DesktopWindows'

const Computer = ({color='black',fs=35}) =>
  <SvgIcon style={{color:color,fontSize:fs}}>
      <Desktop />
  </SvgIcon>

export default Computer
