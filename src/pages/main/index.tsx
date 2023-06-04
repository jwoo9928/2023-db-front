import * as React from "react";
import ResponsiveAppBar from "../../components/ResponsiveAppBar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { DateRangePicker } from "@mui/x-date-pickers-pro/DateRangePicker";
import { ImageList, ImageListItem, Typography } from "@mui/material";
import { useRecoilState } from "recoil";
import { SearchParams } from "../../types/store";
import { SearchState } from "../../store/state";

const defaultTheme = createTheme();

type VehicleType = "소형" | "대형" | "승합" | "SUV" | "전기차";

const Main = () => {
  const [vehicleTypes, setVehicleTypes] = React.useState<VehicleType[]>([]);
  const [searchParams, setSearchParams] = useRecoilState(SearchState);

  const controlButtons = React.useCallback(
    (type: VehicleType | "전체") => {
      if (type === "전체") {
        setVehicleTypes(["전기차", "SUV", "대형", "소형", "승합"]);
      } else {
        if (vehicleTypes.includes(type)) {
          setVehicleTypes(
            vehicleTypes.filter((vType: VehicleType) => vType !== type)
          );
        } else {
          setVehicleTypes([...vehicleTypes, type]);
        }
      }
    },
    [vehicleTypes]
  );

  const controlAllButtons = React.useCallback(() => {
    return vehicleTypes.length >= 5 ? "contained" : "outlined";
  }, [vehicleTypes]);

  const buttonStyle = React.useCallback(
    (type: VehicleType) => {
      return vehicleTypes.includes(type) ? "contained" : "outlined";
    },
    [vehicleTypes]
  );

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {};

  // const imageDatas = React.useMemo(
  //   () => [
  //     "https://autoimg.danawa.com/photo/3871/49868/color_14_360.png",
  //     "https://autoimg.danawa.com/photo/3853/model_360.png",
  //     "https://autoimg.danawa.com/photo/4455/model_360.png",
  //   ],
  //   []
  // );

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
          />
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
              <DateRangePicker
                localeText={{ start: "시작 날짜", end: "종료 날짜" }}
              />
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
                onSubmit={handleSubmit}
                sx={{ mt: 1 }}
                style={{
                  display: "flex",
                }}
              >
                <Button
                  style={{ margin: 5 }}
                  variant={controlAllButtons()}
                  onClick={() => controlButtons("전체")}
                >
                  전체
                </Button>
                <Button
                  style={{ margin: 5 }}
                  variant={buttonStyle("대형")}
                  onClick={() => controlButtons("대형")}
                >
                  대형
                </Button>
                <Button
                  style={{ margin: 5 }}
                  variant={buttonStyle("소형")}
                  onClick={() => controlButtons("소형")}
                >
                  소형
                </Button>
                <Button
                  style={{ margin: 5 }}
                  variant={buttonStyle("SUV")}
                  onClick={() => controlButtons("SUV")}
                >
                  SUV
                </Button>
                <Button
                  style={{ margin: 5 }}
                  variant={buttonStyle("전기차")}
                  onClick={() => controlButtons("전기차")}
                >
                  전기차
                </Button>
              </Box>
              <Button
                type="submit"
                fullWidth
                variant="contained"
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

export default Main;
