import { Box, Button, Stack } from "@mui/joy";
import { useContext } from "react";
import { SnackbarContext } from "../../App";
import * as S from "./styled";

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
      "Tack för att du lämnar ett omdöme!",
      "#07f9c1"
    );
  };

  return (
    <Stack
      height="400px"
      justifyContent="center"
      alignItems="center"
      px={{ xs: 2, sm: 4 }}
    >
      <Box
        sx={{
          maxWidth: "600px",
          padding: "20px",
          backgroundColor: "rgba(38, 37, 37, 0.7)",
          borderRadius: "10px",
          boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)",
          textAlign: "center",
        }}
      >
        <S.Title>We would appreciate your feedback!</S.Title>
        <S.Text>
          help us to get better by leaving a review on Google. Your review means
          a lot to us and our customers!
        </S.Text>
        <Button
          onClick={handleReviewClick}
          sx={{
            padding: "10px 20px",
            backgroundColor: "#4285F4",
            color: "white",
            fontSize: "16px",
            fontWeight: "600",
            textTransform: "none",
            borderRadius: "15px",
            "&:hover": {
              backgroundColor: "#357ae8",
            },
          }}
        >
          Leave a review
        </Button>
      </Box>
    </Stack>
  );
};

export default GoogleReviewRequest;
