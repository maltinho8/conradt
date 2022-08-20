import React from "react";
import styled from "styled-components";
import Avatar from '@mui/material/Avatar';

const CardContainer = styled.div`
  min-width: 225px;
  min-height: 400px;
  max-width: 225px;
  max-height: 400px;
  display: flex;
  flex-direction: column;
  background-color: transparent;
  color: #fff;
  position: relative;
  margin-right: 30px;
  @media (max-width: 300px) {
    margin-left: 20px;
  }
`;

const TopContainer = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1.2;
  position: relative;
  align-items: center;
  justify-content: flex-end;
  padding: -1em 10px;
  
`;

const BottomContainer = styled.div`
  display: flex;
  flex: 0.8;
  align-items: center;
`;

const DetailsContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  line-height: 1.4;
  align-items: center;
`;

const MediumText = styled.span`
  font-size: 13px;
  color: black;
  font-weight: 800;
  margin-top: 12px;
  text-transform: uppercase;
`;

const SmallText = styled.span`
  font-size: 11px;
  color: black;
  font-weight: 400;
`;

const Card = (props) => {
  return (
    <CardContainer>
      <TopContainer>
      <Avatar sx={{width: 170, height: 170}}>{props.image}</Avatar>
      </TopContainer>

      <BottomContainer>
        <DetailsContainer>
          <MediumText>{props.headline}</MediumText>
          
          <SmallText>
              {props.description}
            </SmallText>
        </DetailsContainer>
      </BottomContainer>
    </CardContainer>
  );
};

export default Card;