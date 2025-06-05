import styled from "styled-components";

export const ReviewContainer = styled.div`
  min-height: 400px;
  background: var(--background-dark);
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 60px 20px;

  @media (max-width: 768px) {
    padding: 40px 20px;
  }
`;

export const ContentWrapper = styled.div`
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  animation: fadeIn 0.5s ease-out;

  @keyframes fadeIn {
    from {
      opacity: 0;
      transform: translateY(20px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
`;

export const Title = styled.h2`
  font-family: "Newsreader", serif;
  font-size: 36px;
  font-weight: 700;
  color: #ffffff;
  margin: 0 0 16px;
  position: relative;
  display: inline-block;
  text-align: center;

  @media (max-width: 600px) {
    font-size: 28px;
  }
`;

export const Text = styled.p`
  font-size: 16px;
  font-family: "Montserrat", sans-serif;
  line-height: 1.8;
  letter-spacing: 0.3px;
  color: var(--text-color);
  margin: 0;
  text-align: center;
  max-width: 500px;
  
  @media (max-width: 600px) {
    font-size: 14px;
    line-height: 1.6;
  }
`;

export const SubText = styled(Text)`
  font-size: 14px;
  color: var(--text-color-muted);
  margin-top: 16px;
  font-style: italic;
  
  @media (max-width: 600px) {
    font-size: 12px;
  }
`;

export const ReviewButton = styled.button`
  height: 48px;
  padding: 0 32px;
  background-color: var(--primary-color);
  color: var(--background-darker);
  border: none;
  border-radius: 24px;
  font-size: 16px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  text-transform: none;
  letter-spacing: 0.5px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 8px;

  &:hover {
    background-color: var(--primary-hover);
    transform: translateY(-2px);
    box-shadow: 0 4px 12px rgba(96, 165, 250, 0.2);
  }

  &:active {
    transform: translateY(0);
  }

  @media (max-width: 600px) {
    font-size: 14px;
    height: 40px;
    padding: 0 24px;
  }
`;