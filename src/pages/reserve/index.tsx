import React from "react";
import { useLocation } from "react-router";
import { rentCarsInfo } from "../../types/reserve";
import ResponsiveAppBar from "../../components/ResponsiveAppBar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { DateRangePicker } from "@mui/x-date-pickers-pro/DateRangePicker";
import { Typography } from "@mui/material";
import { useRecoilState } from "recoil";
import { SearchState } from "../../store/state";
import { DateRange } from "@mui/x-date-pickers-pro";
import ImageList from "@mui/material/ImageList";
import RentCarItem from "../../components/Reserve/RentCarItem";

const defaultTheme = createTheme();

const Reserve = () => {
  const { state } = useLocation();
  const rentcars = state as rentCarsInfo;
  // rentcars
  return (
    <div>
      <ResponsiveAppBar />
      <ThemeProvider theme={defaultTheme}>
        <Grid container component="main" sx={{ height: "100vh" }}>
          <CssBaseline />
          <Grid
            item
            xs={false}
            sm={4}
            md={7.5}
            sx={{
              // backgroundImage:
              //   "url(https://source.unsplash.com/random?wallpapers)",
              backgroundRepeat: "no-repeat",
              backgroundColor: (t) =>
                t.palette.mode === "light"
                  ? t.palette.grey[50]
                  : t.palette.grey[900],
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            {/* <RentCarItem rentCar={rentcars}/> */}
          </Grid>
          <Grid
            item
            xs={12}
            sm={8}
            md={4.5}
            component={Paper}
            elevation={6}
            square
          >
            <Box
              sx={{
                my: 8,
                mx: 4,
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              <Typography
                variant="h6"
                style={{
                  marginTop: 50,
                }}
              >
                차량의 종류를 선택해 주세요
              </Typography>
              <Box
                component="form"
                noValidate
                sx={{ mt: 1 }}
                style={{
                  display: "flex",
                }}
              ></Box>
              <Button
                type="submit"
                fullWidth
                variant="contained"
                // onClick={handleSubmit}
                sx={{ mt: 3, mb: 2 }}
              >
                차량 조회하고 예약하기
              </Button>
            </Box>
          </Grid>
        </Grid>
      </ThemeProvider>
    </div>
  );
};

export default Reserve;
