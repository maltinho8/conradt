import React from "react";
import styled from "styled-components";
import "./index.css";
import DetailsCards from "../../Card/CardContent";
import { Link } from "react-router-dom";
import ImageSlider from "../../ImageSlider/index";

const ButtonMailto = ({ mailto, label }) => {
  return (
      <Link
      style={{ textDecoration: 'none' , color: 'black'}} 
          to='#'
          onClick={(e) => {
              window.location.href = mailto;
              e.preventDefault();
          }}
      >
          {label}
      </Link>
  );
};

const Container = styled.div``;

const Headline = styled.h2`
  line-height: 1;
  margin-bottom: 1rem;
  color: white;
  margin-top: 2rem;
  text-transform: uppercase;
  @media (max-width: 768px) {
    text-align: center;
    font-size: 3rem;
    margin-top: 2rem;
    font-size: 2.5rem;
  }
`;

const SubHeadline = styled.h2`
  line-height: 1;
  margin-bottom: 8rem;
  color: white;
  margin-top: 1rem;
  text-transform: uppercase;
  @media (max-width: 768px) {
    text-align: center;
    font-size: 3rem;
    margin-top: 2rem;
    font-size: 2.5rem;
  }
`;

const TextHeadline = styled.h3`
margin-bottom: 1rem;
  @media screen and (max-width: 768px) {
    text-align: center;
  }
`;

const Text = styled.p`
margin-bottom: 2rem;
  @media screen and (max-width: 768px) {
    font-size: 0.9rem;
    text-align: center;
  }
`;

const Button = styled.button`
cursor: pointer;
outline: 0;
display: inline-block;
font-weight: 400;
line-height: 1.5;
text-align: center;
background-color: transparent;
border: 1px solid transparent;
padding: 6px 12px;
font-size: 1rem;
border-radius: .25rem;
transition: color .15s ease-in-out,background-color .15s ease-in-out,border-color .15s ease-in-out,box-shadow .15s ease-in-out;
color: #0d6efd;
border-color: black;
:hover {
    color: white;
    background-color: transparent;
    border-color: lightgrey;
}



`
;

const BackgroundContainer = styled.div`
  width: 100vw;
  background-color: white;
`;

const ContentContainer = styled.div`
  margin-top: 5rem;
  margin-left: 15rem;
  margin-right: 15rem;
  margin-bottom: 5rem;
  @media screen and (max-width: 768px) {
    margin-left: 3rem;
    margin-right: 3rem;
    display: block;
  }
`;

const Boxes = styled.div`
  overflow: hidden;
  width: 100%;
  margin: 0 auto;
  box-shadow: 0px 12px 18px -6px rgba (0, 0, 0, 0.3);
  border-radius: 10px 10px 10px 10px;
  object-fit: contain;
`;

const Background = styled.div`
  background-image: linear-gradient(
    rgba(0, 0, 0, 0.4), 
    rgba(0, 0, 0, 0.4)
  ),url("https://images.unsplash.com/photo-1658732049821-0e5ce13224cb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80");
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  width: 100vw;
  height: 80vh;
  position: relative;
`;

const HeaderContainer = styled.div`
  position: absolute;
  top: 55%;
  left: 8%;
  @media screen and (max-width: 768px) {
    
    position: absolute;
    left: 0%;
  }
`;

const CenterButton = styled.div`
display: flex;
  justify-content: center;
  align-items: center;
`;

const CardContainer = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  @media screen and (max-width: 768px) {
    flex-direction: column;
    align-content: center;
  }
`;




const ContentLandingPage = () => {
  
  const detailsCard = [
    {
      id: "1",
      headline: "Elon Musk",
      description: "TESLA Geschäftsführung",
      image: (
        <img
          alt="1"
          src= "https://upload.wikimedia.org/wikipedia/commons/thumb/3/34/Elon_Musk_Royal_Society_%28crop2%29.jpg/1200px-Elon_Musk_Royal_Society_%28crop2%29.jpg"
          style={{ objectFit: "cover", width: 180, height: 180 }}
        />
      )
      
    },
    {
      id: "2",
      headline: "Max Mustermann",
      description: "Shareholder Apple Inc.",
      image: (
        <img
          alt="1"
          src= "https://www.lifefinance.de/wp-content/uploads/2016/12/max-mustermann.jpg"
          style={{ objectFit: "cover", width: 180, height: 180 }}
        />
      )
      
    },
    {
      id: "3",
      headline: "Olaf Scholz",
      description: "Bundeskanzler Deutschland",
      image: (
        <img
          alt="1"
          src= "https://www.bundesregierung.de/resource/image/1991322/16x9/1023/575/42b49fc71975ae93570ac2bf79bb176e/Xo/2021-12-14-lebenslauf-olaf-scholz.jpg"
          style={{ objectFit: "cover", width: 180, height: 180 }}
        />
      )
      
      
    },
    {
      id: "4",
      headline: "Bill Gates",
      description: "Gründer Microsoft",
      image: (
        <img
          alt="1"
          src= "https://cdn.prod.www.spiegel.de/images/cf32e15a-c5a8-4665-94d7-b56d6ff8db55_w1600_r0.6672554347826087_fpx54_fpy36.jpg"
          style={{ objectFit: "cover", width: 180, height: 180 }}
        />
      )
      
      
    },
  ];

  
  return (
    <Container>
      <Background>
      <HeaderContainer>
          <Headline>Ihr Fels in der Brandung</Headline>
          <SubHeadline>auch bei unruhigem Wellengang.</SubHeadline>
        </HeaderContainer>
      </Background>
      <BackgroundContainer>
        <ContentContainer id="anchor1">
          <Boxes>
            <Text>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.</Text>
          </Boxes>
        </ContentContainer>
        <ContentContainer>
          <Boxes>
            <ImageSlider/>
          </Boxes>
        </ContentContainer>
        <ContentContainer>
          <Boxes>
            <TextHeadline>Wer bereits auf mich baut.</TextHeadline>
            <Text>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.</Text>
            <CardContainer>
            <DetailsCards cards={detailsCard} />
          </CardContainer>
          </Boxes>
        </ContentContainer>
        <ContentContainer id="anchor2">
          <Boxes>
            <TextHeadline>Gehen Sie mit mir auf Nummer sicher.</TextHeadline>
            <Text>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.</Text>
            <br />
            <br />
          <CenterButton>
          <Button><ButtonMailto label="Kontaktieren Sie mich" mailto="mailto:frankconradt@example.com" /></Button>
          </CenterButton>
            <br />
          </Boxes>
        </ContentContainer>
        
        
       
      </BackgroundContainer>
      
    </Container>
  );
};

export default ContentLandingPage;
