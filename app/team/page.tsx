import PageBanner from "@/components/PageBanner/PageBanner";
import React from "react";
import TeamSection from "@/components/TeamSection/TeamSection";

type Props = {};

function page({}: Props) {
  return (
    <>
      <PageBanner />
      <TeamSection />
    </>
  );
}

export default page;
