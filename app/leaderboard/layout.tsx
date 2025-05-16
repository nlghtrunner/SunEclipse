import { Metadata } from "next";
import PageLeaderboard from "./page";
import { Suspense } from "react";

export const metadata: Metadata = {
  title: "Leaderboard | osudesu",
  openGraph: {
    title: "Leaderboard | osudesu",
  },
};

export default function Page() {
  return (
    <Suspense>
      <PageLeaderboard />
    </Suspense>
  );
}
