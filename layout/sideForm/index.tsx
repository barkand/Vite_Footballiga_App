import React from "react";

import { PublicContext } from "../../../core/context";
import { Gap } from "../../../core/components";
import { SideFormTemplate } from "../../../template";
import { MiniProfileGadget } from "../../../admin/components";

import { default as HomeMenuList } from "./menu";
import { default as AdminMenuList } from "../../../admin/menu";
import { default as MarketMenuList } from "../../../market/menu";

import { DarkModeButton } from "../../../core/theme";
import { SettingButton } from "../../../admin/components";

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
        <HomeMenuList onClose={closeDrawer} />
        <AdminMenuList onClose={closeDrawer} />
        <MarketMenuList onClose={closeDrawer} />
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
