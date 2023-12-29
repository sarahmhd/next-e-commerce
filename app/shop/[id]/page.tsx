import PageBanner from "@/components/PageBanner/PageBanner";
import ProductDetails from "@/components/ProductDetails/ProductDetails";
import React from "react";

type Props = {};

function page({}: Props) {
  return (
    <>
      <PageBanner />
      <ProductDetails />
    </>
  );
}

export default page;
