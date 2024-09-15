import { Metadata } from "next";
import Navigation from "../components/navigation";

export const metadata: Metadata = {
  title: "Next.js",
};
export default function Home() {
  return (
    <>
      <Navigation />
      <div className="pt-6">Hello, first stream translation</div>
      <iframe
        src="https://player.twitch.tv/?channel=youmustdie123&parent=germangrib.github.io&muted=true"
        height="600"
        width="800"
        allowFullScreen
      ></iframe>
    </>
  );
}
