import React from "react";
import SectionTab from "@/components/sectionTab";
import Sidebar from "@/components/Sidebar";
import Restaurant from "@/components/Restaurant";

export default function Home() {
  return (
    <>
      <SectionTab />
      <div className="container flex mt-4">
        <Sidebar />
        <Restaurant />
      </div>
    </>
  );
}
