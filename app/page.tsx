import React from "react";
import CompanionCard from '../components/CompanionCard';
import CompanionsList from "@/components/CompanionsList";
import CTA from "@/components/CTA";
import { recentSessions, subjects } from '../constants/index';

const Page = () => {
  return (
    <main>
      <h1>Popular Companion</h1>
      <section className="home-section">
         <CompanionCard
        id='123'
        name='Neural the Brainy Explorer'
        topic="Nueral Networks of the Brain"
        subject='Science'
        duration={45}
        color='#ffda6e'
        />
            <CompanionCard
        id='456'
        name='Countsy the Number Wizard'
        topic="Derivative & Integral"
        subject='maths'
        duration={30}
        color='#e5d0ff'
        />
          <CompanionCard
        id='789'
        name='Verba the Vocabulary Builder'
        topic="Languages"
        subject='English Literature'
        duration={30}
        color='#BDE7FF'
        />
          </section>
      <section className="home-section">
        <CompanionsList
        title='Recently completed sessions'
        Companions={recentSessions}
        className='w-2/3 max-lg:w-full'
        />
        <CTA />
      </section>
    </main>
  );
};

export default Page;
