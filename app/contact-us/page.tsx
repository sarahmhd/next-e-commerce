import ClientsSection from "@/components/ClientsSection/ClientsSection";
import ContactSection from "@/components/ContactSection/ContactSection";
import Map from "@/components/Map/Map";
import OurAddress from "@/components/OurAddress/OurAddress";
import PageBanner from "@/components/PageBanner/PageBanner";
import React from "react";

type Props = {};

function page({}: Props) {
  return (
    <>
      <PageBanner />
      <OurAddress />
      <Map />
      <ContactSection />
      <ClientsSection />
    </>
  );
}

export default page;
