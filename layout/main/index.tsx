import Routes from "../../routes";

import { MainTemplate } from "@/template";
import { Authentication } from "@/admin/components";

export default function index() {
  return (
    <Authentication>
      <MainTemplate>
        <Routes />
      </MainTemplate>
    </Authentication>
  );
}
