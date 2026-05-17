import Link from "next/link";
import { ArrowLeft, Building2 } from "lucide-react";

export default function StateElectionPage() {
  return (
    <div className="max-w-4xl mx-auto space-y-10 pb-16 pt-8">
      <Link href="/about" className="inline-flex items-center text-blue-600 hover:text-blue-800 font-medium transition-colors">
        <ArrowLeft size={16} className="mr-2" /> Back to About Elections
      </Link>

      <div className="text-center space-y-4">
        <div className="bg-green-100 text-green-600 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4">
          <Building2 size={32} />
        </div>
        <h1 className="text-4xl font-extrabold text-gray-900">State Elections (Vidhan Sabha)</h1>
        <p className="text-xl text-gray-600">The process of electing the Chief Minister and forming the state government.</p>
      </div>

      <section className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 space-y-6">
        <h2 className="text-2xl font-bold text-green-900 border-b pb-2">How Assembly Elections Work</h2>
        <p className="text-gray-700">
          State Legislative Assembly elections (Vidhan Sabha) are held every five years to elect representatives for the state government.
        </p>

        <div className="relative border-l-4 border-green-200 ml-4 space-y-8 pb-4 mt-8">
          {[
            {
              title: "1. Constituency Division",
              desc: "Each state is divided into specific territorial constituencies based on population. The Election Commission sets the schedule for the state."
            },
            {
              title: "2. Candidate Nomination",
              desc: "Candidates file nominations for specific state constituencies. Local party members and independents contest to become Members of the Legislative Assembly (MLAs)."
            },
            {
              title: "3. Campaigning & Voting",
              desc: "Candidates campaign extensively on state-specific issues. On polling day, citizens of the state vote for their preferred candidate in their respective constituency."
            },
            {
              title: "4. Counting Votes",
              desc: "Votes are counted, and the candidate with the maximum votes in a constituency is declared its MLA."
            },
            {
              title: "5. Securing a Majority",
              desc: "To form the state government, a political party or coalition must win more than half of the total seats in the state's Legislative Assembly."
            },
            {
              title: "6. Appointment of the Chief Minister",
              desc: "The Governor of the state invites the leader of the majority party or coalition to form the government and appoints them as the Chief Minister."
            },
            {
              title: "7. State Cabinet Formation",
              desc: "The Chief Minister advises the Governor to appoint other MLAs as ministers to head various departments in the state government."
            }
          ].map((step, idx) => (
            <div key={idx} className="relative pl-8">
              <div className="absolute -left-[22px] bg-green-600 text-white w-10 h-10 rounded-full flex items-center justify-center font-bold border-4 border-white shadow-sm">
                {idx + 1}
              </div>
              <h3 className="font-bold text-xl text-gray-900">{step.title}</h3>
              <p className="text-gray-600 mt-2 leading-relaxed">{step.desc}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
