import { Box, Input, Stack, Textarea } from "@mui/joy";
import { useContext, useState } from "react";
import { SnackbarContext } from "../../App";
import { Modal } from "@mui/material";
import FacebookCircularProgress from "../FacebookCircularProgress";
import * as S from "./styled";
import EmailIcon from '@mui/icons-material/Email';
import SubjectIcon from '@mui/icons-material/Subject';
import MessageIcon from '@mui/icons-material/Message';
import SendIcon from '@mui/icons-material/Send';

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
    <S.Container>
      <Modal
        open={loading}
        sx={{ 
          display: "flex", 
          justifyContent: "center", 
          alignItems: "center",
          '& .MuiBackdrop-root': {
            backgroundColor: 'rgba(2, 6, 23, 0.8)'
          }
        }}
      >
        <FacebookCircularProgress size={50} />
      </Modal>

      <S.ContentWrapper>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            width: "100%",
            maxWidth: "700px",
            margin: "0 auto",
            padding: { xs: "0 20px", sm: "0 40px" },
          }}
        >
          <S.Title>
            Get in Touch
          </S.Title>
          <S.Text>
            Have a question or feedback? We'd love to hear from you. Send us a message
            and we'll respond as soon as possible.
          </S.Text>

          <Box
            sx={{
              width: '100%',
              maxWidth: '500px',
              mt: 4,
              p: { xs: 2, sm: 4 },
              backgroundColor: 'var(--background-light)',
              borderRadius: '12px',
              border: '1px solid var(--border-color)',
              boxShadow: '0 8px 32px rgba(0, 0, 0, 0.2)',
            }}
          >
            <form name="contact" onSubmit={handleSubmit}>
              <Stack spacing={3}>
                <Box sx={{ position: 'relative' }}>
                  <EmailIcon sx={{ 
                    position: 'absolute',
                    left: '12px',
                    top: '50%',
                    transform: 'translateY(-50%)',
                    color: 'var(--text-color-muted)',
                    fontSize: '20px'
                  }} />
                  <Input
                    sx={{
                      height: "45px",
                      pl: '44px !important',
                      backgroundColor: 'var(--background-dark)',
                      border: '1px solid var(--border-color)',
                      color: 'var(--text-color)',
                      '&:hover': {
                        borderColor: 'var(--primary-color)',
                      },
                      '&:focus-within': {
                        borderColor: 'var(--primary-color)',
                        boxShadow: '0 0 0 3px rgba(96, 165, 250, 0.15)',
                      },
                      '&::placeholder': {
                        color: 'var(--text-color-muted)',
                      },
                    }}
                    placeholder="Email address"
                    type="email"
                    name="email"
                    value={userEmail}
                    onChange={(e) => setUserEmail(e.target.value)}
                    required
                  />
                </Box>

                <Box sx={{ position: 'relative' }}>
                  <SubjectIcon sx={{ 
                    position: 'absolute',
                    left: '12px',
                    top: '50%',
                    transform: 'translateY(-50%)',
                    color: 'var(--text-color-muted)',
                    fontSize: '20px'
                  }} />
                  <Input
                    sx={{
                      height: "45px",
                      pl: '44px !important',
                      backgroundColor: 'var(--background-dark)',
                      border: '1px solid var(--border-color)',
                      color: 'var(--text-color)',
                      '&:hover': {
                        borderColor: 'var(--primary-color)',
                      },
                      '&:focus-within': {
                        borderColor: 'var(--primary-color)',
                        boxShadow: '0 0 0 3px rgba(96, 165, 250, 0.15)',
                      },
                      '&::placeholder': {
                        color: 'var(--text-color-muted)',
                      },
                    }}
                    placeholder="Subject"
                    name="subject"
                    value={subject}
                    onChange={(e) => setSubject(e.target.value)}
                    required
                  />
                </Box>

                <Box sx={{ position: 'relative' }}>
                  <MessageIcon sx={{ 
                    position: 'absolute',
                    left: '12px',
                    top: '14px',
                    color: 'var(--text-color-muted)',
                    fontSize: '20px'
                  }} />
                  <Textarea
                    minRows={4}
                    placeholder="Your message"
                    name="text"
                    value={userText}
                    onChange={(e) => setUserText(e.target.value)}
                    required
                    sx={{
                      pl: '44px !important',
                      backgroundColor: 'var(--background-dark)',
                      border: '1px solid var(--border-color)',
                      color: 'var(--text-color)',
                      '&:hover': {
                        borderColor: 'var(--primary-color)',
                      },
                      '&:focus-within': {
                        borderColor: 'var(--primary-color)',
                        boxShadow: '0 0 0 3px rgba(96, 165, 250, 0.15)',
                      },
                      '&::placeholder': {
                        color: 'var(--text-color-muted)',
                      },
                    }}
                  />
                </Box>

                <S.SubmitButton>
                  Send Message
                  <SendIcon sx={{ ml: 1, fontSize: '18px' }} />
                </S.SubmitButton>
              </Stack>
            </form>
          </Box>
        </Box>
      </S.ContentWrapper>
    </S.Container>
  );
};

export default CustomerRegister;
