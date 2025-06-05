import * as S from "./style";
import InstagramIcon from '@mui/icons-material/Instagram';
import MusicNoteIcon from '@mui/icons-material/MusicNote';
import SlideshowIcon from '@mui/icons-material/Slideshow';

const Footer = () => {
  const date = new Date().getFullYear();
  return (
    <S.FooterContainer>
      <S.FooterContent>
        <S.SocialSection>
          <S.Title>Kontakta oss</S.Title>
          <S.SocialLinks>
            <S.SocialLink
              target="_blank"
              href="https://www.instagram.com/folktillfolk1"
            >
              <InstagramIcon />
              <span>Instagram</span>
            </S.SocialLink>
            <S.SocialLink
              target="_blank"
              href="https://www.tiktok.com/@folktillfolk?_t=ZN-8uhSU2ybsUY&_r=1"
            >
              <SlideshowIcon />
              <span>TikTok</span>
            </S.SocialLink>
            <S.SocialLink
              target="_blank"
              href="https://open.spotify.com/playlist/7ge9SmHzBAcUAEcIgsJhzR?si=JWzMRruTRGS1I-fi1HDc0Q&pi=DFnNf9ivS3SSq&nd=1&dlsi=5ba85d1944934072"
            >
              <MusicNoteIcon />
              <span>Spotify</span>
            </S.SocialLink>
          </S.SocialLinks>
        </S.SocialSection>
        
        <S.Divider />
        
        <S.Copyright>
          &copy; {date} FolktillFolk Secondhand Butik. Alla rättigheter förbehållna.
        </S.Copyright>
      </S.FooterContent>
    </S.FooterContainer>
  );
};

export default Footer;
