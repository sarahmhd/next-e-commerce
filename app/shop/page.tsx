import PageBanner from "@/components/PageBanner/PageBanner";
import React from "react";
import ShopSection from "@/components/ShopSection/ShopSection";

type Props = {};

function page({}: Props) {
  return (
    <>
      <PageBanner />
      <ShopSection />
    </>
  );
}

export default page;
