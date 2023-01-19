import { ProfileComponent } from "../../../admin/components";

import { default as ProfileTabs } from "../../admin/profile/tabs";

export default function Profile() {
  return (
    <ProfileComponent>
      <ProfileTabs />
    </ProfileComponent>
  );
}
