import Link from "next/link";
import { ArrowLeft, Home } from "lucide-react";

export default function LocalElectionPage() {
  return (
    <div className="max-w-4xl mx-auto space-y-10 pb-16 pt-8">
      <Link href="/about" className="inline-flex items-center text-blue-600 hover:text-blue-800 font-medium transition-colors">
        <ArrowLeft size={16} className="mr-2" /> Back to About Elections
      </Link>

      <div className="text-center space-y-4">
        <div className="bg-purple-100 text-purple-600 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4">
          <Home size={32} />
        </div>
        <h1 className="text-4xl font-extrabold text-gray-900">Local Body Elections</h1>
        <p className="text-xl text-gray-600">The grassroots level of democracy: Panchayats and Municipalities.</p>
      </div>

      <section className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 space-y-6">
        <h2 className="text-2xl font-bold text-purple-900 border-b pb-2">How Local Elections Work</h2>
        <p className="text-gray-700">
          Managed by State Election Commissions (SECs), local elections empower citizens to elect leaders for their immediate communities, such as villages (Panchayats) and cities (Municipalities/Corporations).
        </p>

        <div className="relative border-l-4 border-purple-200 ml-4 space-y-8 pb-4 mt-8">
          {[
            {
              title: "1. Ward Division",
              desc: "A village or city is divided into smaller units called 'Wards'. The State Election Commission notifies the election schedule for these local bodies."
            },
            {
              title: "2. Filing Nominations",
              desc: "Local residents file nominations to contest as Ward Members, Corporators, or for the position of Sarpanch/Mayor."
            },
            {
              title: "3. Grassroots Campaigning",
              desc: "Campaigning is highly localized, focusing on neighborhood issues like water supply, streetlights, local roads, and sanitation."
            },
            {
              title: "4. Voting Day",
              desc: "Residents of the ward vote for their local representatives. In many Panchayat elections, ballot papers are still used, while urban areas use EVMs."
            },
            {
              title: "5. Electing Ward Members",
              desc: "The votes are counted, and the candidate with the most votes becomes the representative (e.g., Ward Panchayat Member or Municipal Councilor) for that specific ward."
            },
            {
              title: "6. Choosing the Head (Sarpanch/Mayor)",
              desc: "Depending on the state's rules, the head of the local body (like a Village Sarpanch or City Mayor) is either elected directly by the public or indirectly chosen by the elected Ward Members."
            },
            {
              title: "7. Formation of Local Council",
              desc: "The elected members and the head form the local governing council, taking decisions on local infrastructure and welfare schemes."
            }
          ].map((step, idx) => (
            <div key={idx} className="relative pl-8">
              <div className="absolute -left-[22px] bg-purple-600 text-white w-10 h-10 rounded-full flex items-center justify-center font-bold border-4 border-white shadow-sm">
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
