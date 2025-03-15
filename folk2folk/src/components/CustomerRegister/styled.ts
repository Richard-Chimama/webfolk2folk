import styled from 'styled-components';

export const Text = styled.p`
  font-size: 16px;
  font-family: "Montserrat", sans-serif;
  line-height: 34px;
  line-spacing: 19px;

  @media (max-width: 600px) {
    font-size: 10px;
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

export const SubmitButton = styled.button`
    width:100%;
    border: none;
    border-radius: 8px;
    height: 45px;
    text-decoration: none;
    background-color:rgb(2, 10, 3);
    font-size: 16px;
    font-family: "Montserrat", sans-serif;
    font-weight: bold;
    outline: 1px solid white;
`