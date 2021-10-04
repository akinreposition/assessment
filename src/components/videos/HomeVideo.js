import React from 'react'
import styled from 'styled-components'
import Custodian from '../../assets/videos/Custodian.mp4'
const HomeVideo = () => {

    return (
        <Container id="video">
            <Wrapper>
                <Video src={Custodian} controls loops autoplay muted />
            </Wrapper>
        </Container>
    )
}

export default HomeVideo

const Video = styled.video`
    width:  90%;
    height: 80%;
    margin: 30px auto;
    object-fit: cover;
    boreder-radius: 10px;
`
const Container = styled.div`
    width:  80%;
    // heigth: 100%;
    background-color:   black;
    color: white;
`
const Wrapper = styled.div`
    display: flex;
    justify-content: center;
`