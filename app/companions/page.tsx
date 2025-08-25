import CompanionCard from '@/components/CompanionCard';
import { getAllCompanions } from '@/lib/actions/companion.actions';
const CompanionsLibrary = async({ searchParams}:SearchParams) => {
const filters = await searchParams;
const subject = filters.subject ? filters.subject:'';
const topic = filters.topic ? filters.topic:'';
const Companions = await getAllCompanions({subject, topic});
console.log(Companions)
  return (
    <main>
        <section className='flex justify-between gap-4 max-sm:flex-col'>
  <h1> Companion Library</h1>
  <div className='flex gap-4'>Filters</div>
        </section>
        <section className='companion-grid'>
            {Companions.map((companion)=>(
                <CompanionCard key={companion.id} {...companion}/>
            ))}
        </section>
    </main>
  )
}

export default CompanionsLibrary
