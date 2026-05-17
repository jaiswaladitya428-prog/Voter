export default function AboutElections() {
  return (
    <div className="max-w-4xl mx-auto space-y-10 pb-16 pt-8">
      <div className="text-center space-y-4">
        <h1 className="text-4xl font-extrabold text-gray-900">About Elections</h1>
        <p className="text-xl text-gray-600">Understanding the core of our democracy and how the electoral process works.</p>
      </div>

      <section className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 space-y-6">
        <h2 className="text-2xl font-bold text-blue-900 border-b pb-2">1. Introduction to Indian Elections</h2>
        <div className="grid md:grid-cols-2 gap-6 text-gray-700">
          <div className="space-y-3">
            <h3 className="font-semibold text-lg text-gray-900">What is an election?</h3>
            <p>In India, the world's largest democracy, an election is a formal process where citizens choose their representatives for the Lok Sabha (National), Vidhan Sabha (State), and local bodies (Panchayats/Municipalities).</p>
          </div>
          <div className="space-y-3">
            <h3 className="font-semibold text-lg text-gray-900">The Election Commission of India</h3>
            <p>The <a href="https://eci.gov.in/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">Election Commission of India (ECI)</a> is an autonomous constitutional authority responsible for administering election processes in India fairly and impartially.</p>
          </div>
        </div>
      </section>

      <section className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 space-y-6">
        <h2 className="text-2xl font-bold text-blue-900 border-b pb-2">2. Election Workflow</h2>
        <p className="text-gray-600 mb-6">The step-by-step process of how an election is conducted by the ECI from start to finish.</p>
        
        <div className="relative border-l-4 border-blue-200 ml-4 space-y-8 pb-4">
          {[
            { title: "Election Announcement", desc: "The Election Commission of India (ECI) officially declares the dates for the upcoming elections." },
            { title: "Candidate Nomination", desc: "Interested candidates file their nomination papers to the Returning Officer to contest." },
            { title: "Campaigning", desc: "Candidates present their manifestos and campaign to win the support of voters. The Model Code of Conduct comes into effect." },
            { title: "Voting Day", desc: "Eligible citizens cast their votes at designated polling booths using EVMs and VVPATs." },
            { title: "Vote Counting", desc: "Votes are securely counted under the strict supervision of ECI officials." },
            { title: "Result Declaration", desc: "The final results are announced, and the winning candidates are officially declared." },
          ].map((step, idx) => (
            <div key={idx} className="relative pl-8">
              <div className="absolute -left-[22px] bg-blue-600 text-white w-10 h-10 rounded-full flex items-center justify-center font-bold border-4 border-white shadow-sm">
                {idx + 1}
              </div>
              <h3 className="font-bold text-xl text-gray-900">{step.title}</h3>
              <p className="text-gray-600 mt-1">{step.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="grid md:grid-cols-3 gap-6 mt-8">
        <a href="/elections/national" className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-all hover:-translate-y-1 group">
          <div className="bg-blue-100 text-blue-600 w-12 h-12 rounded-xl flex items-center justify-center mb-4">
            <span className="text-2xl">🇮🇳</span>
          </div>
          <h3 className="text-lg font-bold text-gray-900 mb-2">National Elections</h3>
          <p className="text-sm text-gray-600">Learn how the Prime Minister is elected and the Lok Sabha is formed.</p>
        </a>

        <a href="/elections/state" className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-all hover:-translate-y-1 group">
          <div className="bg-green-100 text-green-600 w-12 h-12 rounded-xl flex items-center justify-center mb-4">
            <span className="text-2xl">🏛️</span>
          </div>
          <h3 className="text-lg font-bold text-gray-900 mb-2">State Elections</h3>
          <p className="text-sm text-gray-600">Understand the Vidhan Sabha and how the Chief Minister is chosen.</p>
        </a>

        <a href="/elections/local" className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-all hover:-translate-y-1 group">
          <div className="bg-purple-100 text-purple-600 w-12 h-12 rounded-xl flex items-center justify-center mb-4">
            <span className="text-2xl">🏘️</span>
          </div>
          <h3 className="text-lg font-bold text-gray-900 mb-2">Local Body Elections</h3>
          <p className="text-sm text-gray-600">Discover how Panchayats and Municipalities govern at the grassroots.</p>
        </a>
      </section>

      <section className="bg-blue-50 p-8 rounded-2xl border border-blue-100 text-center space-y-4">
        <h2 className="text-2xl font-bold text-blue-900">Ready to participate?</h2>
        <p className="text-blue-800">Check out our voting guide to make sure you are prepared for the next election day.</p>
        <a href="/voting-guide" className="inline-block mt-2 bg-blue-600 text-white px-6 py-3 rounded-full font-medium hover:bg-blue-700 transition-colors">
          View Voting Guide
        </a>
      </section>
    </div>
  );
}
