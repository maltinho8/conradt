import React from 'react';
import styled from "styled-components";
import { HashLink as Link } from 'react-router-hash-link';

const Text = styled(Link)`
    color: ${({ theme }) => theme.palette.text.light};
    font-size: 1rem;
    margin-left: 10rem;
    font-weight: 500;
    cursor: pointer;
    @media screen and (max-width: 900px) {
      margin: 0;
      transition: ease all .5s;
      margin-top: 50px;
      font-size: 1.5rem;
      &:hover {
        color: #fbbe01;
      }
     
    }
  `;


const Container = styled.div`
@media (max-width: 900px) {
display: flex;
flex-direction: column;
align-items: center;
width: 100%;
}
`

const Description = styled.p`
color: black;
`

/* Nutzung der Methode closeMenu durch Übergabe in rightnav.js  */
const Content = ({closeMenu}) => {
    
    return(

        <Container>
          <br/>
          <br/>
          <br/>
          <br/>
          <br/>
          <br/>
          
        {/* durch onClick - closeMenu wird genutzt, um beim Klicken des Links das Menü zu schließen  */}
        <Text onClick={closeMenu} to="/LandingPage" style={{ textDecoration: 'none', color: 'black' }}><b>FRANK CONRADT GMBH</b></Text>
        <Text onClick={closeMenu} to="/LandingPage#anchor1" style={{ textDecoration: 'none', color: 'black' }}>WORK</Text>
        <br/>
        <Text onClick={closeMenu} to="/Impressum" style={{ textDecoration: 'none', color: 'black' }}>IMPRESSUM</Text>
        <Text onClick={closeMenu} to="/LandingPage#anchor2" style={{ textDecoration: 'none', color: 'black' }}>KONTAKT</Text>
        <br/>
        <br/>
        <Description>Immer für Sie erreichbar - egal wann, egal wo.</Description>
        </Container>


    );
};

export default Content;