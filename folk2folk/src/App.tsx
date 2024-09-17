import { Box, Snackbar, SnackbarOrigin } from "@mui/joy";
import Header from "./components/Header";
import Main from "./components/Main";
import NavBar from "./components/NavBar";
import CustomerRegister from "./components/CustomerRegister";
import Footer from "./components/Footer";
import { createContext, useState } from "react";
import GoogleReviewRequest from "./components/GoogleReview";
interface State {
  open: boolean;
  message: string;
  vertical: "top" | "bottom";
  horizontal: "center" | "left" | "right";
  color: string;
}

// Define the context type
interface SnackbarContextType {
  state: State;
  handleClick: (
    newState: SnackbarOrigin,
    message: string,
    color: string
  ) => void;
  handleClose: () => void;
}

// Create the context
export const SnackbarContext = createContext<SnackbarContextType | undefined>(
  undefined
);

function App() {
  const [state, setState] = useState<State>({
    open: false,
    message: "",
    vertical: "top",
    horizontal: "center",
    color: "white",
  });

  const { vertical, horizontal } = state;

  const handleClick = (
    newState: SnackbarOrigin,
    message: string,
    color: string
  ) => {
    setState({ ...newState, open: true, message: message, color: color });
  };

  const handleClose = () => {
    setState({ ...state, open: false });
  };

  return (
    <Box
      sx={{
        mx: { xs: 1, md: 5 },
      }}
    >
      <SnackbarContext.Provider value={{ state, handleClick, handleClose }}>
        <Snackbar
          anchorOrigin={{ vertical, horizontal }}
          open={state.open}
          onClose={handleClose}
          key={`${vertical}-${horizontal}`}
          sx={{
            backgroundColor: state.color,
          }}
        >
          {state.message}
        </Snackbar>
        <NavBar />
        <Header />
        <Main />
        <CustomerRegister />
        <GoogleReviewRequest />
        <Footer />
      </SnackbarContext.Provider>
    </Box>
  );
}

export default App;
