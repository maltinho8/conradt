import React from 'react';
import Slider from 'react-animated-slider';
import 'react-animated-slider/build/horizontal.css';
import "./index.css";
import "./styles.css";

const content = [
  {
    title: "Sicherheit",
    description:
    "Aenean eu leo quam. Pellentesque ornare sem lacinia  nibh, ut fermentum massa justo sit amet risus. Cras justo odio, dapibus ac facilisis.",
    button: "Mehr dazu",
    image: "https://i.imgur.com/ZXBtVw7.jpg",
    user: "Frank Conradt",
    userProfile: "https://media-exp1.licdn.com/dms/image/C4D03AQFT0dRl9iXpxQ/profile-displayphoto-shrink_200_200/0/1613655783652?e=2147483647&v=beta&t=b2wE5LPto1KBfBAOmbhHoWhdJEAlkC0C7rHN6gaxNi8"
  },
  {
    title: "Finanzwissen",
    description:
    "Aenean eu leo quam. Pellentesque ornare sem lacinia  nibh, ut fermentum massa justo sit amet risus. Cras justo odio, dapibus ac facilisis.",
    button: "Mehr dazu",
    image: "https://i.imgur.com/DCdBXcq.jpg",
    user: "Frank Conradt",
    userProfile: "https://media-exp1.licdn.com/dms/image/C4D03AQFT0dRl9iXpxQ/profile-displayphoto-shrink_200_200/0/1613655783652?e=2147483647&v=beta&t=b2wE5LPto1KBfBAOmbhHoWhdJEAlkC0C7rHN6gaxNi8"
  },
  {
    title: "Strategisches Denken",
    description:
    "Aenean eu leo quam. Pellentesque ornare sem lacinia  nibh, ut fermentum massa justo sit amet risus. Cras justo odio, dapibus ac facilisis.",
    button: "Mehr dazu",
    image: "https://i.imgur.com/DvmN8Hx.jpg",
    user: "Frank Conradt",
    userProfile: "https://media-exp1.licdn.com/dms/image/C4D03AQFT0dRl9iXpxQ/profile-displayphoto-shrink_200_200/0/1613655783652?e=2147483647&v=beta&t=b2wE5LPto1KBfBAOmbhHoWhdJEAlkC0C7rHN6gaxNi8"
  }
];

const ImageSlider = () =>{
    
    return(
    <>
    
    <Slider className="slider-wrapper">
      {content.slice(0, 3).map((item, index) => (
        <div
          key={index}
          className="slider-content"
          style={{ background: `url('${item.image}') no-repeat center center` }}
        >
          <div className="inner">
            <h1>{item.title}</h1>
            <p>{item.description}</p>
            
          </div>
          <section>
            <img src={item.userProfile} alt={item.user} />
            <span>
             <strong>{item.user}</strong>
            </span>
          </section>
        </div>
      ))}
    </Slider>
		
		
    </>
    );
  };

  export default ImageSlider;