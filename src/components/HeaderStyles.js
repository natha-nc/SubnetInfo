import styled from 'styled-components'

export const Container = styled.div`
  padding:0px;
  margin-left: 0px;
  margin-top:  -30px;
  height: 100px;
  width: 100%;
  background:linear-gradient( to bottom, black, black );
  position: fixed;
  box-shadow: 0px 0px 10px black;
  z-index: 10;
  font-family:myNeucha

    @media (max-width:768px) {
        #ipInfo {
          display: none;
        }

    }
    @media (max-width:425px){
      #computer{
        display: none;
      }
      #ipSubnetCal{
          position: relative;
          top: 40px
    }}

    @media (max-width:375px){

    }
    @media (max-width:320px){

    }

  }
`
export const IpInfo = styled.span`
  position: relative;
  top: -15px;
  left: 10px;
  color: yellow;
  font-size: 1.5em
`
export const TheComputer = styled.span`
  position: relative;
  top: 35px;
  left: 20px;
`
export const IpSubnetCal = styled.p`
  position: relative;
  top: -75px;
  text-align:center;
  padding: 10px 10px;
  font-size: 3em;
  color: yellow;
`
