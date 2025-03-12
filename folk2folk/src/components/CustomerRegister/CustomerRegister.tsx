import { Box, Input, Stack, Textarea } from "@mui/joy";
import { useContext, useState } from "react";
import { SnackbarContext } from "../../App";
import { Modal } from "@mui/material";
import FacebookCircularProgress from "../FacebookCircularProgress";
import * as S from "./styled";

const CustomerRegister = () => {
  const [userEmail, setUserEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [userText, setUserText] = useState("");
  const snackbarContext = useContext(SnackbarContext);
  const [loading, setLoading] = useState(false);

  if (!snackbarContext) {
    throw new Error("Component must be used within a SnackbarProvider");
  }

  const { handleClick } = snackbarContext;

  const handleSubmit = async (evt: React.FormEvent<HTMLFormElement>) => {
    evt.preventDefault();

    if (userEmail.trim().length > 8 && subject.trim() && userText.trim()) {
      setLoading(true);
      try {
        const response = await fetch(import.meta.env.VITE_PROD, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            email: userEmail,
            subject: subject,
            message: userText,
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
        setLoading(false)
      } catch (error) {
        setLoading(false);
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
      bgcolor={"black"}
    >
      {" "}
      <Modal
        open={loading}
        sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}
      >
        <FacebookCircularProgress size={50} />
      </Modal>
      <div id="contact">
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            marginBottom: "10px",
            padding: { xs: "0 20px", sm: "0 40px" }, // Mobile friendly
            width: { md: "700px" },
          }}
        >
          <S.Title>
            Questions
          </S.Title>
          <S.Text>
            Here you can ask about anything you want, what you think about our
            company, or if you have any questions that haven't been answered yet.
          </S.Text>
        </Box>
        <form name="contact" onSubmit={handleSubmit}>
          <Stack spacing={2} mx={{ xs: 2 }}>
            <Input
              sx={{ height: "45px" }}
              placeholder="email address"
              type="email"
              name="email"
              value={userEmail}
              onChange={(e) => setUserEmail(e.target.value)}
              required
            />
            <Input
              sx={{ height: "45px" }}
              placeholder="Subject"
              name="subject"
              value={subject}
              onChange={(e) => setSubject(e.target.value)}
              required
            />
            <Textarea
              minRows={4}
              placeholder="Message"
              name="text"
              value={userText}
              onChange={(e) => setUserText(e.target.value)}
              required
            />
            <S.SubmitButton>
              Submit
            </S.SubmitButton>
          </Stack>
        </form>
      </div>
    </Stack>
  );
};

export default CustomerRegister;
