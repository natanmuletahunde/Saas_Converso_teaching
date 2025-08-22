import Image from "next/image"
import Link from "next/link";
import NewCompanion from '../app/companions/new/page';
const CTA = () => {
  return (
    <section className="cta-section">
        <div className="cta-badge">Start learning your way.</div>
        <h2 className="text-3xl font-bold">
            Build Personalized Learning Companion
        </h2>
         <p>Pick a name , subject, voice & Personality - and start learning through voice conversation that feel natural and fun.</p>
            <Image src='images/cta.svg' alt="plus" width={362} height={232}/>
            <button className="btn-primary">
            <Link  href='/companions/new'>
           <p> Build a New Companion</p>
            </Link>
            </button>

    </section>
  )
}

export default CTA
