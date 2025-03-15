import styled from "styled-components";

export const Text = styled.p`
  font-size: 20px;
  font-family: "Montserrat", sans-serif;
  line-height: 34px;
  line-spacing: 19px;
  padding: 10px;

  @media (max-width: 600px) {
    font-size: 10px;
  }
`;

export const Footer = styled.div`
  background-color:black;
  color: white;
  padding: 10px;
  text-align: center;
  font-size: 0.9em;

  @media (max-width: 600px) {
    font-size: 9px;
  }
`;

export const Title = styled.h1`
  line-height: 34px;
  line-spacing: 19px;
  font-family: "Newsreader", serif;
  font-size: 34px;
  text-transform: uppercase;
  font-weight: 700;

  @media (max-width: 600px) {
    font-size: 12px;
  }
`

export const IconLink = styled.a`
  text-decoration: none;
  color: white;
  font-size: 10px;
`