import React from "react";

import { PublicContext } from "@/core/context";
import { SideFormTemplate } from "@/template";
import { Gap, HomeMenu } from "@/core/components";
import { DarkModeButton } from "@/core/theme";
import {
  MiniProfileGadget,
  AdminMenu,
  SettingButton,
} from "@/admin/components";
import { MarketMenu } from "@/market/components";

export default function Menu() {
  const { publicCtx }: { publicCtx: any } = React.useContext(PublicContext);

  const [isDrawerOpen, setIsDrawerOpen] = React.useState(false);
  let closeDrawer = () => setIsDrawerOpen(false);

  return (
    <SideFormTemplate
      isDrawerOpen={isDrawerOpen}
      setIsDrawerOpen={setIsDrawerOpen}
    >
      <MiniProfileGadget onClose={closeDrawer} />

      <div className={publicCtx.culture.name}>
        <HomeMenu onClose={closeDrawer} />
        <AdminMenu onClose={closeDrawer} />
        <MarketMenu onClose={closeDrawer} />
      </div>

      <Gap />
      <div
        style={{
          display: "flex",
          justifyContent: "space-evenly",
          paddingBottom: "10px",
          paddingLeft: "5px",
          paddingRight: "5px",
        }}
      >
        <DarkModeButton />
        <Gap />
        <SettingButton />
      </div>
    </SideFormTemplate>
  );
}
