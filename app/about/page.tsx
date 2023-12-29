import AboutSection from "@/components/AboutSection/AboutSection";
import ChooseUs from "@/components/ChooseUs/ChooseUs";
import FollowUs from "@/components/FollowUs/FollowUs";
import PageBanner from "@/components/PageBanner/PageBanner";
import React from "react";
import Team from "@/components/Team/Team";

type Props = {};

function page({}: Props) {
  return (
    <>
      <PageBanner />
      <AboutSection />
      <ChooseUs />
      <Team />
      <FollowUs />
    </>
  );
}

export default page;
