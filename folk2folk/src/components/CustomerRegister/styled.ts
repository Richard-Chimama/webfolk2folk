import styled from 'styled-components';

export const Container = styled.div`
  min-height: 100vh;
  background: var(--background-dark);
  background: linear-gradient(135deg, var(--background-dark) 0%, var(--background-darker) 100%);
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 60px 0;
  position: relative;
  overflow: hidden;

  &:before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 1px;
    background: linear-gradient(90deg, transparent, var(--primary-color), transparent);
  }

  @media (max-width: 768px) {
    padding: 40px 0;
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
  position: relative;
  z-index: 1;

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

export const Text = styled.p`
  font-size: 16px;
  font-family: "Montserrat", sans-serif;
  line-height: 1.8;
  letter-spacing: 0.3px;
  color: var(--text-color);
  margin: 12px 0;
  text-align: center;
  max-width: 600px;
  
  @media (max-width: 600px) {
    font-size: 14px;
    line-height: 1.6;
  }
`;

export const Title = styled.h2`
  font-family: "Newsreader", serif;
  font-size: 42px;
  font-weight: 700;
  color: #ffffff;
  margin: 0 0 20px;
  position: relative;
  display: inline-block;
  text-align: center;
  
  &:after {
    content: '';
    position: absolute;
    bottom: -8px;
    left: 50%;
    transform: translateX(-50%);
    width: 60px;
    height: 3px;
    background: linear-gradient(90deg, var(--primary-color), var(--primary-hover));
  }

  @media (max-width: 600px) {
    font-size: 28px;
    margin: 0 0 15px;
    
    &:after {
      width: 40px;
      height: 2px;
    }
  }
`;

export const SubmitButton = styled.button`
  width: 100%;
  height: 48px;
  background: linear-gradient(135deg, var(--primary-color) 0%, var(--primary-hover) 100%);
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
  position: relative;
  overflow: hidden;

  &:before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(135deg, var(--primary-hover) 0%, var(--primary-color) 100%);
    opacity: 0;
    transition: opacity 0.3s ease;
  }

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 4px 12px rgba(96, 165, 250, 0.2);

    &:before {
      opacity: 1;
    }
  }

  &:active {
    transform: translateY(0);
  }

  span {
    position: relative;
    z-index: 1;
  }

  @media (max-width: 600px) {
    font-size: 14px;
    height: 40px;
  }
`;