import { Box } from "@mui/joy";
import Header from "./components/Header";
import Main from "./components/Main";
import NavBar from "./components/NavBar";
import CustomerRegister from "./components/CustomerRegister";

function App() {
  return (
    <Box
      sx={{
        mx: "20px",
      }}
    >
      <NavBar />
      <Header />
      <Main />
      <CustomerRegister />
    </Box>
  );
}

export default App;
