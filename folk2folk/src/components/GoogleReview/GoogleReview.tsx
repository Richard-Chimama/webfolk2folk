import { Box, Stack } from "@mui/joy";
import { useContext } from "react";
import { SnackbarContext } from "../../App";
import * as S from "./styled";
import StarIcon from '@mui/icons-material/Star';

const GoogleReviewRequest = () => {
  const snackbarContext = useContext(SnackbarContext);

  if (!snackbarContext) {
    throw new Error("Component must be used within a SnackbarProvider");
  }

  const { handleClick } = snackbarContext;

  const handleReviewClick = () => {
    window.open("https://g.page/r/CUOkkSgeafHhEBM/review", "_blank");
    handleClick(
      { vertical: "top", horizontal: "center" },
      "Tack för att du lämnar en recension!",
      "success"
    );
  };

  return (
    <S.ReviewContainer>
      <S.ContentWrapper>
        <Box
          sx={{
            maxWidth: "700px",
            padding: { xs: "30px 20px", md: "40px" },
            backgroundColor: 'var(--background-light)',
            borderRadius: "12px",
            border: '1px solid var(--border-color)',
            boxShadow: '0 8px 32px rgba(0, 0, 0, 0.2)',
            textAlign: "center",
            position: 'relative',
            overflow: 'hidden',
          }}
        >
          <Box sx={{ 
            position: 'absolute', 
            top: 0, 
            left: 0, 
            right: 0, 
            height: '4px', 
            background: 'linear-gradient(90deg, var(--primary-color), var(--primary-hover))'
          }} />
          
          <Stack spacing={3} alignItems="center">
            <Box sx={{ mb: 1 }}>
              <StarIcon sx={{ color: '#FFC107', fontSize: 40, mb: 2 }} />
            </Box>
            
            <S.Title>Dela din upplevelse</S.Title>
            
            <S.Text>
              Din feedback hjälper oss att växa och förbättras. Dela din upplevelse med vår gemenskap
              och hjälp andra att upptäcka hållbart mode på FolktillFolk.
            </S.Text>

            <S.ReviewButton onClick={handleReviewClick}>
              Skriv en recension på Google
            </S.ReviewButton>

            <S.SubText>
              Din ärliga feedback betyder världen för oss och hjälper till att forma framtiden för hållbart mode.
            </S.SubText>
          </Stack>
        </Box>
      </S.ContentWrapper>
    </S.ReviewContainer>
  );
};

export default GoogleReviewRequest;
