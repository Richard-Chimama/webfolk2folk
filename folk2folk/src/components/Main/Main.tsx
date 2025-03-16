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
          <S.Title>Welcome to FolktillFolk</S.Title>
          <S.Text style={{ fontSize: '18px', fontStyle: 'italic', marginBottom: '24px', color: 'var(--text-color-muted)' }}>
            Where Style Meets Sustainability
          </S.Text>
          
          <S.HighlightBox>
            <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
              <LocalMallIcon sx={{ fontSize: 24, color: 'var(--primary-color)', mr: 2 }} />
              <S.Text style={{ margin: 0, fontWeight: 500, color: '#fff' }}>Premium Curated Collection</S.Text>
            </Box>
            <S.Text>
              Discover our handpicked selection of high-quality secondhand fashion:
            </S.Text>
            <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1, mb: 2 }}>
              <S.Badge>Carhartt Workwear</S.Badge>
              <S.Badge>Levi's Denim</S.Badge>
              <S.Badge>Office Attire</S.Badge>
              <S.Badge>Skater Fits</S.Badge>
              <S.Badge>Premium Fur</S.Badge>
              <S.Badge>Leather Pieces</S.Badge>
            </Box>
          </S.HighlightBox>

          <MasonryImageList />

          <S.HighlightBox>
            <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
              <RecyclingIcon sx={{ fontSize: 24, color: 'var(--primary-color)', mr: 2 }} />
              <S.Text style={{ margin: 0, fontWeight: 500, color: '#fff' }}>Sustainable Fashion</S.Text>
            </Box>
            <S.Text>
              Shop premium brands like Nike, Adidas, Puma, and NFL selections while contributing to a more sustainable future.
              Each piece is carefully selected and thoroughly inspected to ensure quality and authenticity.
            </S.Text>
          </S.HighlightBox>

          <Box sx={{ mt: 6 }}>
            <S.Title>Visit Us</S.Title>
            <S.HighlightBox>
              <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                <PeopleIcon sx={{ fontSize: 24, color: 'var(--primary-color)', mr: 2 }} />
                <S.Text style={{ margin: 0, fontWeight: 500, color: '#fff' }}>Community Space</S.Text>
              </Box>
              <S.Text>
                Störtloppsvägen 20,{<br />}129 47 Hägersten
                <S.MapLink href="https://maps.app.goo.gl/XcBLZ3QG6dNX9gnu5">
                  View on Map <ArrowOutwardIcon />
                </S.MapLink>
              </S.Text>
              <S.Text>
                Bring your coffee, make friends, and find your next favorite piece in our welcoming space.
              </S.Text>
            </S.HighlightBox>
          </Box>

          <Box sx={{ mt: 6 }}>
            <S.Title>Our Story</S.Title>
            <S.HighlightBox>
              <S.Text>
                Founded in 2024, FolktillFolk was born from a vision that transcends traditional retail—we're here to sell good feelings.
                Our mission is to make people feel great, not just in what they wear but in how they see themselves.
              </S.Text>
              <S.Text>
                Our carefully curated collection comes from trusted suppliers across the globe, including Spain, the UK, the USA,
                Italy, Poland, France, and India. Each piece tells a story and carries the promise of quality and authenticity
                that defines the FolktillFolk experience.
              </S.Text>
            </S.HighlightBox>
          </Box>
        </Box>
      </div>
    </S.Container>
  );
};

export default Main;
