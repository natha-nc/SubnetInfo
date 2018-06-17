import React from 'react'
import {Container, IpInfo, TheComputer, IpSubnetCal} from './HeaderStyles'
import Computer from './Computer'

const Header = (props) => {
  const {ip, mask, netID} = props
    return (
      <Container>
          <TheComputer id='computer'>
              <Computer color='yellow' fs={50}/>
              <IpInfo id='ipInfo'>
                {
                  netID==='0'
                    ?''
                    :`${netID} | `} {ip} {mask===0?'':` /${mask}`
                }
              </IpInfo>
          </TheComputer>

          <IpSubnetCal id='ipSubnetCal'>
            Subnet Info
          </IpSubnetCal>
    </Container>
)}
export default Header
