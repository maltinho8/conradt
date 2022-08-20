import Card from './Card';
import '../PagesContent/ContentLandingPage';
import styled from 'styled-components';

const HorizontalContainer = styled.div`
    
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    
    @media screen and (max-width: 768px) {
      flex-direction: column;
      align-content: center;
    }
  
  `; 

  const DetailsCards = ({ cards }) => {
    return (
      <HorizontalContainer>
        
          {cards.map((card) => {
            const { headline, description, details, image} = card;

            
            return (
              
              <Card
                key={card.id}
                headline={headline}
                description={description}
                details={details}
                image={image}
                
              />
              
            )
          })}
          </HorizontalContainer>
      
    )
}

export default DetailsCards;