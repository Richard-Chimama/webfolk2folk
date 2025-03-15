import styled from "styled-components";

export const Text = styled.p`
  font-size: 16px;
  font-family: "Montserrat", sans-serif;
  line-height: 34px;
  line-spacing: 19px;

  @media (max-width: 600px) {
    font-size: 12px;
  }
`;

export const MapLink = styled.a`
  text-decoration: none;
  font-size: 16px;
  line-height: 34px;
  line-spacing: 19px;
  display: flex;
  align-items: center;
`

export const Title = styled.h1`
  font-family: "Newsreader", serif;
  line-height: 34px;
  line-spacing: 19px;
  font-size: 34px;
  text-transform: uppercase;
  font-weight: 700;

  @media (max-width: 600px) {
    font-size: 12px;
  }
`