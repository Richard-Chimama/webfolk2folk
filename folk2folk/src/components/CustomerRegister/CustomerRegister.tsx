import { Box, Button, Input, Stack, Typography, Textarea } from "@mui/joy";
import { useContext, useState } from "react";
import { SnackbarContext } from "../../App";

const CustomerRegister = () => {
  const [userEmail, setUserEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [userText, setUserText] = useState("");
  const snackbarContext = useContext(SnackbarContext);

  if (!snackbarContext) {
    throw new Error("Component must be used within a SnackbarProvider");
  }

  const { handleClick } = snackbarContext;

  const handleSubmit = async (evt: React.FormEvent<HTMLFormElement>) => {
    evt.preventDefault();

    if (userEmail.trim().length > 8 && subject.trim() && userText.trim()) {
      try {
        const response = await fetch(import.meta.env.VITE_PROD, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            email: userEmail,
            subject: subject,
            text: userText,
          }),
        });

        if (response.status !== 200) {
          throw new Error("Network response was not ok");
        }

        handleClick(
          { vertical: "top", horizontal: "center" },
          "E-post har skickats!",
          "#07f9c1"
        );
        setUserEmail("");
        setSubject("");
        setUserText("");
      } catch (error) {
        handleClick(
          { vertical: "top", horizontal: "center" },
          "Hoppsan! Något gick fel.",
          "#f95e85"
        );
        console.error("Error:", error);
      }
    } else {
      handleClick(
        { vertical: "top", horizontal: "center" },
        "Vänligen fyll i alla fält korrekt.",
        "#f95e85"
      );
    }
  };

  return (
    <Stack
      height="100vh"
      justifyContent="center"
      alignItems="center"
      bgcolor={"lightgrey"}
    >
      <div id="contact">
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            marginBottom: "10px",
            padding: { xs: "0 20px", sm: "0 40px" }, // Mobile friendly
            width:{md: "700px"}
          }}
        >
          <Typography
            component="h1"
            sx={{
              fontSize: "28px", // Adjusted for mobile
              lineHeight: "42px",
              fontWeight: "600",
              fontFamily: "Montserrat, sans-serif",
              textAlign: "center",
            }}
          >
            Har du några frågor?
          </Typography>
          <Typography
            component="i"
            sx={{
              width: "100%", // Full width for mobile responsiveness
              textAlign: "center",
              lineHeight: "19px",
              fontFamily: "Montserrat, sans-serif",
              marginBottom: "20px",
            }}
          >
            Kontakta oss, vi är ett e-postmeddelande bort.
          </Typography>
        </Box>
        <form name="contact" onSubmit={handleSubmit}>
          <Stack spacing={2} mx={{ xs: 2 }} >
            <Input
              sx={{ height:"45px",}}
              placeholder="Skriv in din e-postadress"
              type="email"
              name="email"
              value={userEmail}
              onChange={(e) => setUserEmail(e.target.value)}
              required
            />
            <Input
              sx={{ height:'45px' }}
              placeholder="Ämne"
              name="subject"
              value={subject}
              onChange={(e) => setSubject(e.target.value)}
              required
            />
            <Textarea
              minRows={4}
              placeholder="Meddelande"
              name="text"
              value={userText}
              onChange={(e) => setUserText(e.target.value)}
              required
            />
            <Button
              type="submit"
              sx={{
                width: "100%",
                backgroundColor: "black",
                color: "white",
                height: '45px'
              }}
            >
              Skicka in
            </Button>
          </Stack>
        </form>
      </div>
    </Stack>
  );
};

export default CustomerRegister;
