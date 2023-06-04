import { BrowserRouter, Route, Routes } from "react-router-dom";
import Main from "./pages/main";
import Login from "./pages/login";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import Reserve from "./pages/reserve";
import { RecoilRoot } from "recoil";

function App() {
  return (
    <RecoilRoot>
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Main />} />
            <Route path="login" element={<Login />} />
            <Route path="reserve" element={<Reserve />} />
          </Routes>
        </BrowserRouter>
      </LocalizationProvider>
    </RecoilRoot>
  );
}

export default App;
