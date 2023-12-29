import PageBanner from "@/components/PageBanner/PageBanner";
import React from "react";
import SaleSection from "@/components/SaleSection/SaleSection";
import ServiceSection from "@/components/ServiceSection/ServiceSection";
import Testimonials from "@/components/Testimonials/Testimonials";

type Props = {};

function page({}: Props) {
  return (
    <>
      <PageBanner />
      <ServiceSection />
      <SaleSection />
      <Testimonials />
    </>
  );
}

export default page;
