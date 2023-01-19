import { useTranslation } from "react-i18next";

import { RoutesTypeEnum } from "../../../../core/constant";
import { ButtonList } from "../../../../core/components";
import { HomeIcon } from "../../../../core/icon";

export default function MenuList(props: any) {
  const { t } = useTranslation(["public"]);

  return (
    <ButtonList
      to={RoutesTypeEnum.Home}
      name={t("home")}
      icon={<HomeIcon />}
      onclick={props.onClose}
    />
  );
}
