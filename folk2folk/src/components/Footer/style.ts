import styled from "styled-components";

export const FooterContainer = styled.footer`
  background: var(--background-darker);
  padding: 60px 0 30px;
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
    padding: 40px 0 20px;
  }
`;

export const FooterContent = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const SocialSection = styled.div`
  text-align: center;
  margin-bottom: 40px;
`;

export const Title = styled.h3`
  font-family: "Newsreader", serif;
  font-size: 28px;
  color: #ffffff;
  margin-bottom: 24px;
  position: relative;
  display: inline-block;
  
  &:after {
    content: '';
    position: absolute;
    bottom: -8px;
    left: 50%;
    transform: translateX(-50%);
    width: 40px;
    height: 2px;
    background: linear-gradient(90deg, var(--primary-color), var(--primary-hover));
  }

  @media (max-width: 600px) {
    font-size: 24px;
  }
`;

export const SocialLinks = styled.div`
  display: flex;
  gap: 24px;
  justify-content: center;
  flex-wrap: wrap;
`;

export const SocialLink = styled.a`
  display: flex;
  align-items: center;
  gap: 8px;
  color: var(--text-color);
  text-decoration: none;
  padding: 10px 16px;
  border-radius: 20px;
  background: var(--background-light);
  border: 1px solid var(--border-color);
  transition: all 0.3s ease;
  
  span {
    font-size: 14px;
  }

  svg {
    font-size: 20px;
  }

  &:hover {
    transform: translateY(-2px);
    border-color: var(--primary-color);
    box-shadow: 0 4px 12px rgba(96, 165, 250, 0.15);
    color: var(--primary-color);
  }

  @media (max-width: 600px) {
    padding: 8px 12px;
    
    span {
      font-size: 13px;
    }

    svg {
      font-size: 18px;
    }
  }
`;

export const Divider = styled.div`
  width: 100%;
  height: 1px;
  background: linear-gradient(90deg, transparent, var(--border-color), transparent);
  margin-bottom: 30px;
`;

export const Copyright = styled.p`
  color: var(--text-color-muted);
  font-size: 14px;
  text-align: center;
  
  @media (max-width: 600px) {
    font-size: 12px;
  }
`;