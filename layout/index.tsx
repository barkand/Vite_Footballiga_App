import { LayoutTemplate } from "../../template";

import Header from "./header";
import Main from "./main";
import Footer from "./footer";

export default function Layout() {
  return (
    <LayoutTemplate>
      <Header />
      <Main />
      <Footer />
    </LayoutTemplate>
  );
}
