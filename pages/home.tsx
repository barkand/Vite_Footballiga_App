import React from "react";
import { useTranslation } from "react-i18next";
import { ageData, pieData, stackedBarData, lineData } from "./data";

import { PublicContext } from "../../core/context";
import {
  Box,
  GridHeader,
  GridItem,
  Label,
  Divider,
  Media,
  PieChart,
  StackedBarChart,
  BarChart,
  LineChart,
} from "../../core/components";
import { Background, Colors } from "../../core/theme";
import { TopPlayers, Groups } from "../../market/components";

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

          <CardDashboard
            title={t("cnt-sale-cards", { ns: "market" })}
            lg={4}
            md={6}
            sm={12}
          >
            <StackedBarChart
              data={stackedBarData}
              fill={
                Colors[publicCtx.theme.color][publicCtx.theme.background.name]
                  .primary
              }
            />
          </CardDashboard>
          <CardDashboard title={t("cnt-post-players", { ns: "market" })} lg={4} md={6} sm={12}>
            <PieChart data={pieData} />
          </CardDashboard>
          <CardDashboard title={t("avg-age-players", { ns: "market" })} lg={4} md={6} sm={12}>
            <BarChart data={ageData} />
          </CardDashboard>
          <CardDashboard title={t("avg-age-players", { ns: "market" })} lg={8} md={12} sm={12}>
            <LineChart
              data={lineData}
              color={
                Colors[publicCtx.theme.color][publicCtx.theme.background.name]
                  .primary
              }
            />
          </CardDashboard>

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

function CardDashboard({ children, title, lg, md, sm }: any) {
  const { publicCtx } = React.useContext(PublicContext);

  return (
    <GridItem lg={lg} md={md} sm={sm} sx={{ height: "100%" }}>
      <>
        <div
          style={{
            height: "350px",
            margin: "5px",
            borderRadius: "25px",
            background: Background[publicCtx.theme.background.name].tertiary,
          }}
        >
          {children}
        </div>
        <Label size="p" sx={{ pb: 3 }}>
          {title}
        </Label>
      </>
    </GridItem>
  );
}
