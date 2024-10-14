"use client";

import React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useTheme } from "@mui/material/styles";
import AssignmentIcon from "@mui/icons-material/Assignment";
import { useGetInfoQuery } from "@/redux/services/main/about";
import { saveAs } from "file-saver";
import { useTranslation } from "react-i18next";
import Cookies from "js-cookie";

const HeroButtons = () => {
  const selectedLang = Cookies.get("selectedLang");
  const { data } = useGetInfoQuery("en");
  const { t } = useTranslation(["translation"]);

  const theme = useTheme();
  const isMd = useMediaQuery(theme.breakpoints.up("md"), {
    defaultMatches: true,
  });

  const cvDownload = () => {
    const fileUrl = data[0]?.media.cv;
    const filename = "Rashin_Latify_Full_Stack.pdf";

    saveAs(fileUrl, filename);
  };

  return (
    <>
      <Box
        className={`${
          selectedLang === "fa" || selectedLang === "ar"
            ? "justify-end"
            : "justify-start"
        }`}
        display="flex"
        flexDirection={{ xs: "column", sm: "row" }}
        alignItems={{ xs: "stretched", sm: "flex-start" }}
        // justifyContent='right'
        marginTop={4}
      >
        <Button
          component="a"
          variant="contained"
          color="primary"
          size="large"
          onClick={cvDownload}
          endIcon={<AssignmentIcon />}
          fullWidth={isMd ? false : true}
          disableElevation={true}
          sx={{
            padding: "10px 25px",
            // marginRight: '15px',
            fontSize: "16px",
            textTransform: "none",
            border: "2px solid " + theme.palette.primary.main,
            "&:hover": {
              backgroundColor: "transparent",
              color: theme.palette.primary.main,
              border: "2px solid " + theme.palette.primary.main,
            },
          }}
        >
          {t("components.herobotton.cv")}
        </Button>
        <Box
          marginTop={{ xs: 2, sm: 0 }}
          marginLeft={{ sm: 1 }}
          width={{ xs: "100%", md: "auto" }}
        ></Box>
      </Box>
    </>
  );
};

export default HeroButtons;
