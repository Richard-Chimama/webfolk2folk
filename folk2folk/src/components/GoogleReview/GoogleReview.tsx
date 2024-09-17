import { Box, Button, Stack, Typography } from "@mui/joy";
import { useContext } from "react";
import { SnackbarContext } from "../../App";

const GoogleReviewRequest = () => {
  const snackbarContext = useContext(SnackbarContext);

  if (!snackbarContext) {
    throw new Error("Component must be used within a SnackbarProvider");
  }

  const { handleClick } = snackbarContext;

  const handleReviewClick = () => {
    window.open(
      "https://g.page/r/CUOkkSgeafHhEBM/review",
      "_blank"
    );
    handleClick(
      { vertical: "top", horizontal: "center" },
      "Tack för att du lämnar ett omdöme!",
      "#07f9c1"
    );
  };

  return (
    <Stack
      height="60vh"
      justifyContent="center"
      alignItems="center"
      px={{ xs: 2, sm: 4 }}
    >
      <Box
        sx={{
          maxWidth: "600px",
          padding: "20px",
          backgroundColor: "white",
          borderRadius: "10px",
          boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)",
          textAlign: "center",
        }}
      >
        <Typography
          component="h1"
          sx={{
            fontSize: "28px",
            lineHeight: "42px",
            fontWeight: "600",
            fontFamily: "Montserrat, sans-serif",
            marginBottom: "10px",
          }}
        >
          Vi skulle uppskatta din feedback!
        </Typography>
        <Typography
          sx={{
            fontSize: "16px",
            lineHeight: "24px",
            fontFamily: "Montserrat, sans-serif",
            color: "#555",
            marginBottom: "20px",
          }}
        >
          Hjälp oss att förbättra genom att lämna ett omdöme på Google. Ditt
          omdöme betyder mycket för oss och våra kunder!
        </Typography>
        <Button
          onClick={handleReviewClick}
          sx={{
            padding: "10px 20px",
            backgroundColor: "#4285F4",
            color: "white",
            fontSize: "16px",
            fontWeight: "600",
            textTransform: "none",
            borderRadius: "50px",
            "&:hover": {
              backgroundColor: "#357ae8",
            },
          }}
        >
          Lämna ett omdöme
        </Button>
      </Box>
    </Stack>
  );
};

export default GoogleReviewRequest;
