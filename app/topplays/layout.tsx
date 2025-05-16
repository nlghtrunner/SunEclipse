import { Metadata } from "next";
import TopPlaysPage from "./page";
import { Suspense } from "react";

export const metadata: Metadata = {
  title: "Top Plays | osudesu",
  openGraph: {
    title: "Top Plays | osudesu",
  },
};

export default function Page() {
  return (
    <Suspense>
      <TopPlaysPage />
    </Suspense>
  );
}
