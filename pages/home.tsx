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
import { TopPlayers, Groups } from "../../market/components";

export default function HomePage() {
  const { publicCtx } = React.useContext(PublicContext);
  const { t } = useTranslation(["public"]);

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
          sx={{ padding: "40px" }}
        >
          <GridItem md={6} xs={12} sx={{ display: "contents" }}>
            <Media
              image="assets\media\pwa\logo-512.png"
              alt="Logo Footballiga"
              sx={{ width: "250px" }}
            />
          </GridItem>
          <GridItem md={6} xs={12}>
            <Label
              size={publicCtx.device.isMobile ? "h3" : "h2"}
              sx={{ pt: 5, pb: 5, fontFamily: "Alegreya,serif" }}
            >
              {t("site-name")}
            </Label>
            <Label size="p" sx={{ pb: 10 }}>
              {t("site-description")}
            </Label>
          </GridItem>
          <Divider sx={{ mt: 1, mb: 5 }} />

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
