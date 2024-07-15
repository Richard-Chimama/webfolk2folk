import { Box, Button, Input, Stack, Typography } from "@mui/joy";
import { useContext, useState } from "react";
import { SnackbarContext } from "../../App";

const CustomerRegister = () => {
  const isProd:boolean = import.meta.env.VITE_ISPROD
  const url = !isProd ? import.meta.env.VITE_PROD :import.meta.env.VITE_DEV
  console.log(url)
  const [userEmail, setUserEmail] = useState("");
  const snackbarContext = useContext(SnackbarContext);

  if (!snackbarContext) {
    throw new Error("Component2 must be used within a SnackbarProvider");
  }

  const { handleClick } = snackbarContext;

  const handleSubmit = async (evt: React.FormEvent<HTMLFormElement>) => {
    evt.preventDefault();

    if (userEmail.trim().length > 8) {
      console.log("email", userEmail);

      try {
        console.log(url)
        const response = await fetch(url, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            email: userEmail,
          }),
        });

        if (response.status !== 200) {
          throw new Error("Network response was not ok");
        }

        await response;
        handleClick(
          { vertical: "top", horizontal: "center" },
          "E-post har skickats!",
          '#07f9c1'
        );
        setUserEmail('')
      } catch (error) {
        handleClick(
          { vertical: "top", horizontal: "center" },
          "Hoppsan! Något gick fel.",
          '#f95e85'
        );
        console.error("Error:", error);
      }
    }
  };

  return (
    <Stack
      height="60vh"
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
          }}
        >
          <Typography
            component="h1"
            sx={{
              fontSize: "34px",
              lineHeight: "62px",
              fontWeight: "600",
              fontFamily: "Montserrat, sans-serif",
            }}
          >
            Bli medlem hos oss!
          </Typography>
          <Typography
            component="i"
            sx={{
              width: "60%",
              textAlign: "center",
              lineHeight: "19px",
              fontFamily: "Montserrat, sans-serif",
            }}
          >
            Registrera dig för att få uppdateringar från vår butik, inklusive
            nya teval och kommande evenemang.
          </Typography>
        </Box>
        <form name="contact" onSubmit={handleSubmit}>
          <Input
            sx={{ "--Input-decoratorChildHeight": "45px", mx: { xs: 2 } }}
            placeholder="skriv in din mailadress"
            type="email"
            name="email"
            value={userEmail}
            onChange={(e) => setUserEmail(e.target.value)}
            required
            endDecorator={
              <Button
                variant="solid"
                type="submit"
                sx={{
                  borderTopLeftRadius: 0,
                  borderBottomLeftRadius: 0,
                  backgroundColor: "black",
                }}
              >
                Skicka in
              </Button>
            }
          />
        </form>
      </div>
    </Stack>
  );
};

export default CustomerRegister;
