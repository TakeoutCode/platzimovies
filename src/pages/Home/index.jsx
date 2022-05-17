import React from "react";
import { Search } from "@components/Search";
import { Trends } from "@components/Trends";

export function Home() {
  return (
    <div>
      <h1>PlatziMovies</h1>
      <Search />
      <Trends />
    </div>
  );
}
