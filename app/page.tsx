import React from "react";
import CompanionCard from "../components/CompanionCard";
import CompanionsList from "@/components/CompanionsList";
import CTA from "@/components/CTA";

const Page = () => {
  return (
    <main>
      <h1>Popular Companion</h1>
      <section className="home-sections">
        <CompanionCard />
        <CompanionCard />
        <CompanionCard />
      </section>
      <section className="home-section">
        <CompanionsList />
        <CTA />
      </section>
    </main>
  );
};

export default Page;
