import SideForm from "../sideForm";

import { CompanyName, Gap } from "../../../core/components";
import { HeaderTemplate } from "../../../template";
import { AuthButton, NotificationBadge } from "../../../admin/components";

export default function Header() {
  return (
    <>
      <HeaderTemplate>
        <SideForm />
        <Gap />

        <CompanyName />
        <Gap />

        <NotificationBadge />
        <AuthButton />
      </HeaderTemplate>
    </>
  );
}
