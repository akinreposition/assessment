import React from "react";
import styled from "styled-components";
import autoservice from "../../assets/videos/autoservice.mp4";
const HomeVideo = () => {
  return (
    <Container id="video">
      <Wrapper>
        <Video src={autoservice} controls loops autoplay muted />
      </Wrapper>
    </Container>
  );
};

export default HomeVideo;

const Video = styled.video`
  width: 90%;
  height: 10%;
  margin: 30px auto;
  object-fit: cover;
  boreder-radius: 10px;
`;
const Container = styled.div`
  width: 50%;
  height: 10%;
  margin-top: 5%;
  margin-left: 27%;
  justify-content: center;
  background-color: #807e7e;
  border-radius: 5px;
`;
const Wrapper = styled.div`
  display: flex;
  justify-content: center;
`;
