import { Box } from "@mui/joy";
import * as S from "./styled";
import ArrowOutwardIcon from "@mui/icons-material/ArrowOutward";
import MasonryImageList from "./MasonryImageList";
import LocalMallIcon from '@mui/icons-material/LocalMall';
import RecyclingIcon from '@mui/icons-material/Recycling';
import PeopleIcon from '@mui/icons-material/People';

const Main = () => {
  return (
    <S.Container>
      <div id="about">
        <Box sx={{ position: 'relative', mb: 6 }}>
          <S.Title>Välkommen till FolktillFolk</S.Title>
          <S.Text style={{ fontSize: '18px', fontStyle: 'italic', marginBottom: '24px', color: 'var(--text-color-muted)' }}>
            Där stil möter hållbarhet
          </S.Text>
          
          <S.HighlightBox>
            <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
              <LocalMallIcon sx={{ fontSize: 24, color: 'var(--primary-color)', mr: 2 }} />
              <S.Text style={{ margin: 0, fontWeight: 500, color: '#fff' }}>Premium kuraterad kollektion</S.Text>
            </Box>
            <S.Text>
              Upptäck vårt handplockade utbud av högkvalitativ second hand-mode:
            </S.Text>
            <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1, mb: 2 }}>
              <S.Badge>Carhartt Arbetskläder</S.Badge>
              <S.Badge>Levi's Jeans</S.Badge>
              <S.Badge>Kontorskläder</S.Badge>
              <S.Badge>Skater-stil</S.Badge>
              <S.Badge>Premium päls</S.Badge>
              <S.Badge>Läderprodukter</S.Badge>
            </Box>
          </S.HighlightBox>

          <MasonryImageList />

          <S.HighlightBox>
            <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
              <RecyclingIcon sx={{ fontSize: 24, color: 'var(--primary-color)', mr: 2 }} />
              <S.Text style={{ margin: 0, fontWeight: 500, color: '#fff' }}>Hållbart mode</S.Text>
            </Box>
            <S.Text>
              Handla premium varumärken som Nike, Adidas, Puma och NFL-produkter medan du bidrar till en mer hållbar framtid.
              Varje plagg är noga utvalt och noggrant inspekterat för att säkerställa kvalitet och äkthet.
            </S.Text>
          </S.HighlightBox>

          <Box sx={{ mt: 6 }}>
            <S.Title>Besök oss</S.Title>
            <S.HighlightBox>
              <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                <PeopleIcon sx={{ fontSize: 24, color: 'var(--primary-color)', mr: 2 }} />
                <S.Text style={{ margin: 0, fontWeight: 500, color: '#fff' }}>Gemenskapsplats</S.Text>
              </Box>
              <S.Text>
                Störtloppsvägen 20,{<br />}129 47 Hägersten
                <S.MapLink href="https://maps.app.goo.gl/XcBLZ3QG6dNX9gnu5">
                  Visa på karta <ArrowOutwardIcon />
                </S.MapLink>
              </S.Text>
              <S.Text>
                Ta med ditt kaffe, träffa nya vänner och hitta ditt nästa favoritplagg i vårt välkomnande rum.
              </S.Text>
            </S.HighlightBox>
          </Box>

          <Box sx={{ mt: 6 }}>
            <S.Title>Vår historia</S.Title>
            <S.HighlightBox>
              <S.Text>
                Grundat 2024, FolktillFolk föddes ur en vision som går bortom traditionell handel—vi är här för att sälja goda känslor.
                Vårt uppdrag är att få människor att känna sig bra, inte bara i vad de bär utan i hur de ser sig själva.
              </S.Text>
              <S.Text>
                Vår noggrant kuraterade kollektion kommer från pålitliga leverantörer över hela världen, inklusive Spanien, Storbritannien, USA,
                Italien, Polen, Frankrike och Indien. Varje plagg berättar en historia och bär löftet om kvalitet och äkthet
                som definierar FolktillFolk-upplevelsen.
              </S.Text>
            </S.HighlightBox>
          </Box>
        </Box>
      </div>
    </S.Container>
  );
};

export default Main;
