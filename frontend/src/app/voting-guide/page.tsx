"use client";
import { useState } from "react";
import { CheckCircle2, XCircle } from "lucide-react";

export default function VotingGuide() {
  const [age, setAge] = useState<number | "">("");
  const [citizen, setCitizen] = useState<boolean | null>(null);

  const isEligible = age !== "" && age >= 18 && citizen === true;
  const isNotEligible = (age !== "" && age < 18) || citizen === false;

  return (
    <div className="max-w-4xl mx-auto space-y-10 pb-16 pt-8">
      <div className="text-center space-y-4">
        <h1 className="text-4xl font-extrabold text-gray-900">Voting Guide</h1>
        <p className="text-xl text-gray-600">Step-by-step guidance to ensure you are ready for election day.</p>
      </div>

      <section className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 space-y-6">
        <h2 className="text-2xl font-bold text-blue-900 border-b pb-2">1. Eligibility Checker</h2>
        <div className="bg-gray-50 p-6 rounded-xl space-y-6">
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">How old are you?</label>
              <input 
                type="number" 
                value={age} 
                onChange={(e) => setAge(e.target.value ? Number(e.target.value) : "")}
                className="w-full sm:w-64 border-gray-300 rounded-lg shadow-sm p-2 border text-black focus:ring-blue-500 focus:border-blue-500"
                placeholder="Enter your age"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Are you a citizen of the country?</label>
              <div className="flex gap-4">
                <button 
                  onClick={() => setCitizen(true)}
                  className={`px-4 py-2 rounded-lg border ${citizen === true ? 'bg-blue-600 text-white border-blue-600' : 'bg-white text-gray-700 border-gray-300 hover:bg-gray-50'}`}
                >
                  Yes
                </button>
                <button 
                  onClick={() => setCitizen(false)}
                  className={`px-4 py-2 rounded-lg border ${citizen === false ? 'bg-blue-600 text-white border-blue-600' : 'bg-white text-gray-700 border-gray-300 hover:bg-gray-50'}`}
                >
                  No
                </button>
              </div>
            </div>
          </div>

          {isEligible && (
            <div className="bg-green-50 border border-green-200 text-green-800 p-4 rounded-lg flex items-start gap-3">
              <CheckCircle2 className="text-green-600 shrink-0 mt-0.5" />
              <div>
                <h4 className="font-bold">You are eligible to vote!</h4>
                <p className="text-sm mt-1">Make sure you have your Voter ID and required documents ready.</p>
              </div>
            </div>
          )}

          {isNotEligible && (
            <div className="bg-red-50 border border-red-200 text-red-800 p-4 rounded-lg flex items-start gap-3">
              <XCircle className="text-red-600 shrink-0 mt-0.5" />
              <div>
                <h4 className="font-bold">You are not currently eligible to vote.</h4>
                <p className="text-sm mt-1">
                  You must be at least 18 years old and a citizen to participate in the elections.
                </p>
              </div>
            </div>
          )}
        </div>
      </section>

      <section className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 space-y-6">
        <h2 className="text-2xl font-bold text-blue-900 border-b pb-2">2. Voting Day Guidance</h2>
        <div className="space-y-6 text-gray-700">
          <div>
            <h3 className="font-bold text-lg text-gray-900">Finding Your Polling Booth</h3>
            <p className="mt-1">You can find your polling station by searching your name on the official electoral roll via the <a href="https://electoralsearch.eci.gov.in/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">ECI Electoral Search Portal</a> or by checking your voter slip.</p>
          </div>
          <div>
            <h3 className="font-bold text-lg text-gray-900">What to carry</h3>
            <p className="mt-1">Carry your official Voter ID card. If you do not have it, you can carry alternatives like an Aadhaar Card, Passport, or Driving License.</p>
          </div>
          <div>
            <h3 className="font-bold text-lg text-gray-900">How EVM works</h3>
            <p className="mt-1">Electronic Voting Machines (EVMs) have a list of candidates and their symbols. Press the blue button next to your chosen candidate. A red light will glow, and a long beep sound confirms your vote is recorded.</p>
          </div>
        </div>
      </section>
      <section className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 space-y-6">
        <h2 className="text-2xl font-bold text-blue-900 border-b pb-2">3. Pictured Guide: Inside the Polling Booth</h2>
        <p className="text-gray-700">Follow these visual steps on voting day to ensure a smooth experience.</p>
        
        <div className="grid md:grid-cols-3 gap-8 mt-6">
          <div className="bg-gray-50 rounded-2xl overflow-hidden border border-gray-200 shadow-sm hover:shadow-md transition-shadow">
            <img src="/queue_at_polling_booth.png" alt="Queue at Polling Booth" className="w-full h-48 object-cover" />
            <div className="p-4 space-y-2">
              <div className="bg-blue-100 text-blue-800 font-bold w-8 h-8 rounded-full flex items-center justify-center mb-2">1</div>
              <h3 className="font-bold text-lg text-gray-900">Wait in Queue</h3>
              <p className="text-sm text-gray-600">Stand in the designated queue for men, women, or senior citizens outside the polling booth. Keep your Voter ID or approved ID ready.</p>
            </div>
          </div>
          
          <div className="bg-gray-50 rounded-2xl overflow-hidden border border-gray-200 shadow-sm hover:shadow-md transition-shadow">
            <img src="/polling_officer.png" alt="Polling Officer Checking ID" className="w-full h-48 object-cover" />
            <div className="p-4 space-y-2">
              <div className="bg-blue-100 text-blue-800 font-bold w-8 h-8 rounded-full flex items-center justify-center mb-2">2</div>
              <h3 className="font-bold text-lg text-gray-900">ID Verification</h3>
              <p className="text-sm text-gray-600">The First Polling Officer will check your name on the electoral roll and verify your ID. The Second Polling Officer will ink your finger, give you a slip, and take your signature.</p>
            </div>
          </div>
          
          <div className="bg-gray-50 rounded-2xl overflow-hidden border border-gray-200 shadow-sm hover:shadow-md transition-shadow">
            <img src="/evm_machine.png" alt="EVM and VVPAT Machine" className="w-full h-48 object-cover" />
            <div className="p-4 space-y-2">
              <div className="bg-blue-100 text-blue-800 font-bold w-8 h-8 rounded-full flex items-center justify-center mb-2">3</div>
              <h3 className="font-bold text-lg text-gray-900">Cast Your Vote</h3>
              <p className="text-sm text-gray-600">Proceed to the voting compartment. Press the blue button on the EVM next to your chosen candidate. Check the VVPAT slip that appears for 7 seconds to verify your vote.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
