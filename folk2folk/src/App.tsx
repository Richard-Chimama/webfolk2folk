import { Box, Snackbar, SnackbarOrigin, IconButton } from "@mui/joy";
import Main from "./components/Main";
import NavBar from "./components/NavBar";
import { createContext, useState, lazy, Suspense } from "react";
import './App.css';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import ErrorIcon from '@mui/icons-material/Error';
import InfoIcon from '@mui/icons-material/Info';
import CloseIcon from '@mui/icons-material/Close';

// Lazy load components that are below the fold
const CustomerRegister = lazy(() => import("./components/CustomerRegister"));
const Footer = lazy(() => import("./components/Footer"));
const GoogleReviewRequest = lazy(() => import("./components/GoogleReview"));

interface State {
  open: boolean;
  message: string;
  vertical: "top" | "bottom";
  horizontal: "center" | "left" | "right";
  color: string;
  variant: "success" | "error" | "info";
}

// Define the context type
interface SnackbarContextType {
  state: State;
  handleClick: (
    newState: SnackbarOrigin,
    message: string,
    variant: "success" | "error" | "info"
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
    variant: "info"
  });

  const { vertical, horizontal } = state;

  const getSnackbarColor = (variant: "success" | "error" | "info") => {
    switch (variant) {
      case "success":
        return "var(--primary-color)";
      case "error":
        return "#f95e85";
      case "info":
        return "var(--background-lighter)";
    }
  };

  const getSnackbarIcon = (variant: "success" | "error" | "info") => {
    switch (variant) {
      case "success":
        return <CheckCircleIcon />;
      case "error":
        return <ErrorIcon />;
      case "info":
        return <InfoIcon />;
    }
  };

  const handleClick = (
    newState: SnackbarOrigin,
    message: string,
    variant: "success" | "error" | "info"
  ) => {
    setState({ 
      ...newState, 
      open: true, 
      message: message, 
      color: getSnackbarColor(variant),
      variant 
    });
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
          autoHideDuration={4000}
          key={`${vertical}-${horizontal}`}
          variant="solid"
          size="lg"
          sx={{
            backgroundColor: state.color,
            minWidth: { xs: '90%', sm: '400px' },
            maxWidth: '600px',
            borderRadius: '12px',
            boxShadow: '0 8px 32px rgba(0, 0, 0, 0.2)',
            border: '1px solid var(--border-color)',
            '&::before': {
              content: '""',
              position: 'absolute',
              bottom: 0,
              left: 0,
              width: '100%',
              height: '3px',
              background: 'rgba(255, 255, 255, 0.2)',
            },
            '&::after': {
              content: '""',
              position: 'absolute',
              bottom: 0,
              left: 0,
              width: '100%',
              height: '3px',
              background: 'rgba(255, 255, 255, 0.4)',
              animation: 'progress 4s linear forwards',
            },
            '@keyframes progress': {
              '0%': {
                width: '100%',
              },
              '100%': {
                width: '0%',
              },
            },
          }}
          startDecorator={getSnackbarIcon(state.variant)}
          endDecorator={
            <IconButton 
              variant="plain" 
              onClick={handleClose}
              sx={{ 
                color: 'white',
                '&:hover': {
                  backgroundColor: 'rgba(255, 255, 255, 0.1)',
                }
              }}
            >
              <CloseIcon />
            </IconButton>
          }
        >
          {state.message}
        </Snackbar>
        <NavBar />
        <Main />
        <Suspense fallback={<div>Laddar...</div>}>
          <CustomerRegister />
          <GoogleReviewRequest />
          <Footer />
        </Suspense>
      </SnackbarContext.Provider>
    </Box>
  );
}

export default App;
