import React from "react";
import styled from "styled-components";

const Container = styled.div`
    max-width: 800px;
    margin: 0 auto;
    padding: 10px;
    box shadow: 0 0 30px rgba(0,0,0, .25);
    `;

const Image = styled.img`
    width: 100%;
    height: auto;
    display: block;
    margin-bottom: 20px;
    
    background: white;
    box-shadow: 0 0 15px rgba(0, 0, 0, 0.2);
    box-sizing: border-box;
    `;


const ImageList = () => {
    return (
        <Container>
            <Image alt="img1" src="https://www.hausvoneden.de/wp-content/uploads/2019/07/rsz_istock-927074272-951x588.jpg" />
            <Image alt="img1" src="https://www.daviderizzoarchitects.com/dynamic-images?src=https://www.daviderizzoarchitects.com/app/uploads/2021/04/Jundef_Masterbad_terrazzo_floor.jpg&w=1278&h=852&crop=center&token=k?B2a3QNPRZjg" />
            <Image alt="img1" src="https://www.daviderizzoarchitects.com/dynamic-images?src=https://www.daviderizzoarchitects.com/app/uploads/2021/04/P07-01-davide-rizzo-interior-design-luxury-apartment-entrance-parquet-oak-bronzed-brass.jpg&w=1278&h=852&crop=center&token=k?B2a3QNPRZjg" />
        </Container>
    );
};

export default ImageList;