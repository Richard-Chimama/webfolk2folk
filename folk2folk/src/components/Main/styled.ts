import styled from "styled-components";

export const Text = styled.p`
  font-size: 16px;
  font-family: "Montserrat", sans-serif;
  line-height: 1.8;
  letter-spacing: 0.3px;
  color: var(--text-color);
  margin: 12px 0;
  
  @media (max-width: 600px) {
    font-size: 14px;
    line-height: 1.6;
  }
`;

export const MapLink = styled.a`
  text-decoration: none;
  font-size: 16px;
  color: var(--primary-color);
  display: flex;
  align-items: center;
  transition: color 0.3s ease;
  margin-top: 8px;
  
  &:hover {
    color: var(--primary-hover);
  }

  svg {
    margin-left: 4px;
    font-size: 18px;
  }
`;

export const Title = styled.h1`
  font-family: "Newsreader", serif;
  font-size: 42px;
  font-weight: 700;
  color: #ffffff;
  text-transform: uppercase;
  margin: 40px 0 20px;
  position: relative;
  display: inline-block;
  
  &:after {
    content: '';
    position: absolute;
    bottom: -8px;
    left: 0;
    width: 60px;
    height: 3px;
    background: var(--primary-color);
  }

  @media (max-width: 600px) {
    font-size: 28px;
    margin: 30px 0 15px;
    
    &:after {
      width: 40px;
      height: 2px;
    }
  }
`;

export const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
`;

export const ImageGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  gap: 24px;
  margin: 40px 0;
`;

export const HighlightBox = styled.div`
  background: var(--background-light);
  border: 1px solid var(--border-color);
  border-radius: 8px;
  padding: 24px;
  margin: 20px 0;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.2);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  
  &:hover {
    transform: translateY(-4px);
    box-shadow: 0 6px 8px rgba(0, 0, 0, 0.3);
  }
`;

export const Badge = styled.span`
  display: inline-block;
  padding: 6px 12px;
  background: var(--background-lighter);
  color: var(--text-color);
  border: 1px solid var(--border-color);
  border-radius: 20px;
  font-size: 14px;
  font-weight: 500;
  margin-right: 8px;
  margin-bottom: 8px;
  transition: all 0.3s ease;

  &:hover {
    background: var(--primary-color);
    color: var(--background-darker);
    border-color: var(--primary-color);
  }
`;