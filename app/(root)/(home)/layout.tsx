import type { PropsWithChildren } from "react";

import { Navbar } from "@/components/navbar";
import { Sidebar } from "@/components/sidebar";

// ✅ Add metadata export for SEO
export const metadata = {
  title: "Meetup | Schedule and Join Video Meetings",
  description: "Easily schedule, manage, and join your video meetings with Meetup.",
  keywords: ["meetings", "video call", "schedule", "calendar", "Meetup app"],
  authors: [{ name: "Prasunet", url: "https://prasunet.com" }],
  creator: "Prasunet",
  metadataBase: new URL("https://meetup.prasunet.com"),
  openGraph: {
    title: "Meetup | Schedule and Join Video Meetings",
    description: "Easily schedule, manage, and join your video meetings with Meetup.",
    url: "https://meetup.prasunet.com",
    siteName: "Meetup",
    images: [
      {
        url: "https://meetup.prasunet.com/og-image.png", // ✅ update this with your actual image path
        width: 1200,
        height: 630,
        alt: "Meetup App Open Graph Image",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
};

const HomeLayout = ({ children }: PropsWithChildren) => {
  return (
    <main>
      <Navbar />

      <div className="flex">
        <Sidebar />

        <section className="flex min-h-screen flex-1 flex-col px-6 pb-6 pt-28 max-md:pb-14 sm:px-14">
          <div className="w-full">{children}</div>
        </section>
      </div>
    </main>
  );
};

export default HomeLayout;
