import React from "react";
import { useTranslation } from "react-i18next";

import { PublicContext } from "../../core/context";
import {
  Box,
  GridHeader,
  GridItem,
  Label,
  Divider,
  Media,
} from "../../core/components";
import {
  TopPlayers,
  Groups,
  ChartCntPostPlayers,
  ChartAvgAges,
  ChartCntSales,
  ChartPriceChange,
} from "../../market/components";

export default function HomePage() {
  const { publicCtx } = React.useContext(PublicContext);
  const { t } = useTranslation(["public", "market"]);

  return (
    <>
      <Box
        sx={{
          marginTop: "20px",
          alignItems: "center",
          width: publicCtx.device.isMobile ? "100%" : "80%",
          marginLeft: "auto",
          marginRight: "auto",
        }}
      >
        <GridHeader
          direction="row"
          alignItems="center"
          justifyContent="space-evenly"
          textAlign="center"
          columnSpacing={{ md: 2, lg: 3 }}
          sx={{ padding: "40px" }}
        >
          <GridItem lg={4} md={6} sm={12}>
            <GridHeader
              direction="column"
              alignItems="center"
              justifyContent="center"
              textAlign="-webkit-center"
            >
              <GridItem xs={12}>
                <Media
                  image="assets\media\pwa\logo-512.png"
                  alt="Logo Footballiga"
                  sx={{ width: "250px" }}
                />
              </GridItem>
              <GridItem xs={12}>
                <Label
                  size={publicCtx.device.isMobile ? "h3" : "h2"}
                  sx={{ pt: 2, pb: 2, fontFamily: "Alegreya,serif" }}
                >
                  {t("site-name")}
                </Label>
                <Label size="p" sx={{ pb: 3 }}>
                  {t("site-description")}
                </Label>
              </GridItem>
            </GridHeader>
          </GridItem>

          <GridItem
            lg={4}
            md={6}
            sm={12}
            sx={{ height: "100%", width: "100%" }}
          >
            <ChartCntSales />
          </GridItem>
          <GridItem
            lg={4}
            md={6}
            sm={12}
            sx={{ height: "100%", width: "100%" }}
          >
            <ChartCntPostPlayers />
          </GridItem>
          <GridItem
            lg={4}
            md={6}
            sm={12}
            sx={{ height: "100%", width: "100%" }}
          >
            <ChartAvgAges />
          </GridItem>
          <GridItem
            lg={8}
            md={12}
            sm={12}
            sx={{ height: "100%", width: "100%" }}
          >
            <ChartPriceChange />
          </GridItem>

          <Divider sx={{ mt: 5, mb: 5 }} />

          <GridItem xs={12}>
            <Groups />
          </GridItem>
          <Divider sx={{ mt: 5, mb: 10 }} />

          <GridItem xs={12}>
            <TopPlayers />
          </GridItem>
        </GridHeader>
      </Box>
    </>
  );
}
