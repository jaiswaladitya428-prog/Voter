import Link from "next/link";
import { ArrowLeft, Landmark } from "lucide-react";

export default function NationalElectionPage() {
  return (
    <div className="max-w-4xl mx-auto space-y-10 pb-16 pt-8">
      <Link href="/about" className="inline-flex items-center text-blue-600 hover:text-blue-800 font-medium transition-colors">
        <ArrowLeft size={16} className="mr-2" /> Back to About Elections
      </Link>

      <div className="text-center space-y-4">
        <div className="bg-blue-100 text-blue-600 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4">
          <Landmark size={32} />
        </div>
        <h1 className="text-4xl font-extrabold text-gray-900">National Elections (Lok Sabha)</h1>
        <p className="text-xl text-gray-600">The process of electing the Prime Minister and forming the central government of India.</p>
      </div>

      <section className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 space-y-6">
        <h2 className="text-2xl font-bold text-blue-900 border-b pb-2">How the General Election Works</h2>
        <p className="text-gray-700">
          General elections are held every five years to elect members of the Lok Sabha (House of the People), which is the lower house of India's bicameral Parliament.
        </p>

        <div className="relative border-l-4 border-blue-200 ml-4 space-y-8 pb-4 mt-8">
          {[
            {
              title: "1. Notification & Nomination",
              desc: "The Election Commission of India (ECI) announces the schedule. Candidates from political parties or independents file their nomination papers for specific constituencies across the country."
            },
            {
              title: "2. Scrutiny & Campaigning",
              desc: "Nominations are scrutinized. Once finalized, candidates begin their election campaigns. The Model Code of Conduct ensures fair play during this period."
            },
            {
              title: "3. Polling Day",
              desc: "Citizens vote using Electronic Voting Machines (EVMs). India is divided into 543 constituencies, and each constituency elects one Member of Parliament (MP)."
            },
            {
              title: "4. Counting & Results",
              desc: "Votes are counted under ECI supervision. The candidate with the highest number of votes in a constituency becomes its MP."
            },
            {
              title: "5. Majority Formation",
              desc: "To form the central government, a political party or a coalition of parties must secure a simple majority of seats in the Lok Sabha (at least 272 out of 543)."
            },
            {
              title: "6. Appointment of the Prime Minister",
              desc: "The President of India invites the leader of the majority party (or coalition) to form the government and appoints them as the Prime Minister of India."
            },
            {
              title: "7. Cabinet Formation",
              desc: "On the advice of the Prime Minister, the President appoints other Members of Parliament as Cabinet Ministers to run various government ministries."
            }
          ].map((step, idx) => (
            <div key={idx} className="relative pl-8">
              <div className="absolute -left-[22px] bg-blue-600 text-white w-10 h-10 rounded-full flex items-center justify-center font-bold border-4 border-white shadow-sm">
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
