import React from "react";
import CompanionCard from '../components/CompanionCard';

const Page = () => {
  return (
    <main>
      <h1 className="text-2xl underline">Popular Companion</h1>
        <section className="home-sections">

            <CompanionCard/>
            <CompanionCard/>
            <CompanionCard/>

        </section>
    </main>
  );
};

export default Page;
