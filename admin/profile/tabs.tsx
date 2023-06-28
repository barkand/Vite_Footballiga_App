import React from "react";
import { useTranslation } from "react-i18next";

import { FavoriteIcon, CardsIcon, TeamIcon } from "@/core/icon";

import { TabsHeader, TabLabel, TabPanel } from "@/core/components";
import { Favorites, Buys } from "@/market/components";
import { Games } from "@/game/components";

export default function Tabs() {
  const { t } = useTranslation(["market", "game"]);
  const [value, setValue] = React.useState(0);

  return (
    <div style={{ paddingTop: "20px" }}>
      <TabsHeader value={value} setValue={setValue}>
        <TabLabel
          index={0}
          icon={<TeamIcon />}
          label={t("team", { ns: "game" })}
        />
        <TabLabel index={1} icon={<CardsIcon />} label={t("buyList")} />
        <TabLabel index={2} icon={<FavoriteIcon />} label={t("favorites")} />
      </TabsHeader>
      <TabPanel value={value} index={0}>
        <Games />
      </TabPanel>
      <TabPanel value={value} index={1}>
        <Buys />
      </TabPanel>
      <TabPanel value={value} index={2}>
        <Favorites />
      </TabPanel>
    </div>
  );
}
