import React from "react";
import { HelmetLayout } from "@components/HelmetLayout";

export function NotFound() {
  return (
    <div>
      <HelmetLayout title="404" subtitle="Page not found" />
      <h1>404</h1>
      <p>Sorry page not found</p>
    </div>
  );
}
