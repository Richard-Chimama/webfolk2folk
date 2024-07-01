import { Box, Button, Input, Stack, Typography } from "@mui/joy";

const CustomerRegister = () => {
  return (
    <Stack
      height="60vh"
      justifyContent="center"
      alignItems="center"
      bgcolor={"lightgrey"}
    >
      <Box>
        <Box sx={{display:'flex', flexDirection:'column', justifyContent:'center', alignItems: 'center', marginBottom:'10px'}}>
        <Typography component="h1" sx={{
            fontSize: '34px',
            lineHeight: "62px",
            fontWeight: "600",
            fontFamily: "Montserrat, sans-serif",
        }}>Bli medlem hos oss!</Typography>
        <Typography component="i" sx={{width:'60%', textAlign: 'center',  lineHeight: "19px", fontFamily: "Montserrat, sans-serif"}}>
          Registrera dig för att få uppdateringar från vår butik, inklusive nya
          teval och kommande evenemang.
        </Typography>
        </Box>
        <form method="POST" data-netlify="true">
          <Input
            sx={{ "--Input-decoratorChildHeight": "45px" }}
            placeholder="skriv in din mailadress"
            type="email"
            name="email"
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
      </Box>
    </Stack>
  );
};

export default CustomerRegister;
