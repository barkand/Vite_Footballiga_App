import { FooterTemplate } from "../../../template";

export default function Footer() {
  return (
    <FooterTemplate>
      <div style={{ padding: "10px", color: "gray" }}>
        {import.meta.env.VITE_DEFAULT_COPY_RIGHT}
      </div>
    </FooterTemplate>
  );
}
