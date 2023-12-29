import CartSection from "@/components/CartSection/CartSection";
import PageBanner from "@/components/PageBanner/PageBanner";
import React from "react";

type Props = {};

function page({}: Props) {
  return (
    <>
      <PageBanner />
      <CartSection />
    </>
  );
}

export default page;
