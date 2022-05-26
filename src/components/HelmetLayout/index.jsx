import React from "react";
import { Helmet } from "react-helmet-async";

export const HelmetLayout = ({ title, subtitle }) => {
  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={subtitle} />
    </Helmet>
  );
};
