import CheckoutSection from "@/components/CheckoutSection/CheckoutSection";
import PageBanner from "@/components/PageBanner/PageBanner";
import React from "react";

type Props = {};

function page({}: Props) {
  return (
    <div>
      <PageBanner />
      <CheckoutSection />
    </div>
  );
}

export default page;
