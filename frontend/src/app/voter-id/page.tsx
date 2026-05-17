import { FileText, Check, AlertCircle } from "lucide-react";

export default function VoterIDAssistance() {
  const documents = [
    "Aadhaar Card",
    "PAN Card",
    "Passport",
    "Driving License",
    "Utility Bills (Water/Electricity)",
    "Bank Passbook with Photo"
  ];

  return (
    <div className="max-w-4xl mx-auto space-y-10 pb-16 pt-8">
      <div className="text-center space-y-4">
        <h1 className="text-4xl font-extrabold text-gray-900">Voter ID Assistance</h1>
        <p className="text-xl text-gray-600">Everything you need to know about registering and securing your Voter ID.</p>
      </div>

      <section className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 space-y-6">
        <h2 className="text-2xl font-bold text-blue-900 border-b pb-2 flex items-center gap-2">
          <FileText className="text-blue-600" /> Required Documents
        </h2>
        <p className="text-gray-600">To apply for a new Voter ID or update an existing one, you will need to provide proof of age and proof of address. Here are the commonly accepted documents:</p>
        
        <div className="grid sm:grid-cols-2 gap-4 mt-4">
          {documents.map((doc, idx) => (
            <div key={idx} className="bg-gray-50 border border-gray-200 p-4 rounded-xl flex items-center gap-3">
              <div className="bg-green-100 text-green-600 p-1 rounded-full">
                <Check size={16} />
              </div>
              <span className="font-medium text-gray-800">{doc}</span>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 space-y-6">
        <h2 className="text-2xl font-bold text-blue-900 border-b pb-2">Application Guide</h2>
        <div className="space-y-6">
          <div className="flex gap-4">
            <div className="bg-blue-100 text-blue-800 font-bold w-8 h-8 rounded-full flex items-center justify-center shrink-0">1</div>
            <div>
              <h3 className="font-bold text-lg text-gray-900">Visit the Official Portal</h3>
              <p className="text-gray-600">Go to the <a href="https://voters.eci.gov.in/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">Voters' Services Portal (voters.eci.gov.in)</a> or download the official Voter Helpline App provided by the ECI.</p>
            </div>
          </div>
          <div className="flex gap-4">
            <div className="bg-blue-100 text-blue-800 font-bold w-8 h-8 rounded-full flex items-center justify-center shrink-0">2</div>
            <div>
              <h3 className="font-bold text-lg text-gray-900">Fill the Application Form</h3>
              <p className="text-gray-600">Select Form 6 for new voter registration. Fill in all your personal details accurately as per your documents.</p>
            </div>
          </div>
          <div className="flex gap-4">
            <div className="bg-blue-100 text-blue-800 font-bold w-8 h-8 rounded-full flex items-center justify-center shrink-0">3</div>
            <div>
              <h3 className="font-bold text-lg text-gray-900">Upload Documents</h3>
              <p className="text-gray-600">Upload clear, scanned copies of your passport-size photograph, age proof, and address proof.</p>
            </div>
          </div>
          <div className="flex gap-4">
            <div className="bg-blue-100 text-blue-800 font-bold w-8 h-8 rounded-full flex items-center justify-center shrink-0">4</div>
            <div>
              <h3 className="font-bold text-lg text-gray-900">Track Status</h3>
              <p className="text-gray-600">After submission, you will receive a reference ID. Use this ID to track your application status online.</p>
            </div>
          </div>
        </div>
      </section>

      <div className="bg-yellow-50 border-l-4 border-yellow-400 p-6 rounded-r-xl">
        <div className="flex items-start gap-3">
          <AlertCircle className="text-yellow-600 shrink-0 mt-0.5" />
          <div>
            <h3 className="font-bold text-yellow-800">Important Note</h3>
            <p className="text-yellow-700 mt-1">Make sure you register at least a few months before the upcoming elections, as the verification process can take time.</p>
          </div>
        </div>
      </div>
    </div>
  );
}
