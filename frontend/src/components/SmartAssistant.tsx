"use client";

import { useState } from "react";
import { MessageSquare, X, ChevronRight, ArrowLeft, Phone, HelpCircle, ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

// ─── Decision Tree Data ───────────────────────────────────────────────────────

type Node = {
  id: string;
  message: string;
  options?: { label: string; next: string }[];
  answer?: string;
  link?: { label: string; url: string };
};

const tree: Record<string, Node> = {
  start: {
    id: "start",
    message: "👋 Hello! I'm your Voter Assistant. What do you need help with today?",
    options: [
      { label: "📋 Voter Registration", next: "registration" },
      { label: "🗳️ Voting Day Help", next: "votingday" },
      { label: "🪪 Voter ID Issues", next: "voterid" },
      { label: "📚 Election Information", next: "electioninfo" },
      { label: "📞 Contact ECI Helpline", next: "helpline" },
    ],
  },
  // ── Registration ──
  registration: {
    id: "registration",
    message: "What would you like to know about voter registration?",
    options: [
      { label: "How do I register to vote?", next: "reg_how" },
      { label: "What documents do I need?", next: "reg_docs" },
      { label: "Check my registration status", next: "reg_status" },
      { label: "← Back", next: "start" },
    ],
  },
  reg_how: {
    id: "reg_how",
    message: "How to register as a voter:",
    answer:
      "1. Visit the official Voters' Services Portal.\n2. Click on 'Form 6 - New Voter Registration'.\n3. Fill in your personal details (name, date of birth, address).\n4. Upload your photo, age proof, and address proof.\n5. Submit and note your reference ID to track progress.",
    link: { label: "Register on voters.eci.gov.in →", url: "https://voters.eci.gov.in/" },
    options: [{ label: "← Back to Registration", next: "registration" }],
  },
  reg_docs: {
    id: "reg_docs",
    message: "Documents required for voter registration:",
    answer:
      "Age Proof (any one): Aadhaar Card, PAN Card, Passport, Birth Certificate, School Certificate.\n\nAddress Proof (any one): Aadhaar Card, Driving License, Utility Bill (water/electricity), Bank Passbook.\n\nAlso carry a recent passport-size photograph.",
    options: [{ label: "← Back to Registration", next: "registration" }],
  },
  reg_status: {
    id: "reg_status",
    message: "Check your voter registration status online on the ECI Electoral Search Portal.",
    link: { label: "Search Electoral Roll →", url: "https://electoralsearch.eci.gov.in/" },
    options: [{ label: "← Back to Registration", next: "registration" }],
  },
  // ── Voting Day ──
  votingday: {
    id: "votingday",
    message: "What would you like to know about voting day?",
    options: [
      { label: "How do I find my polling booth?", next: "vd_booth" },
      { label: "What should I carry?", next: "vd_carry" },
      { label: "How does EVM / VVPAT work?", next: "vd_evm" },
      { label: "← Back", next: "start" },
    ],
  },
  vd_booth: {
    id: "vd_booth",
    message: "Find your polling booth using the ECI Electoral Search Portal.",
    answer: "Enter your name, state, and district on the ECI portal. Your polling booth address and booth number will appear on your Voter Slip.",
    link: { label: "Find Polling Booth on ECI →", url: "https://electoralsearch.eci.gov.in/" },
    options: [{ label: "← Back to Voting Day", next: "votingday" }],
  },
  vd_carry: {
    id: "vd_carry",
    message: "What to carry on voting day:",
    answer:
      "✅ EPIC (Voter ID Card) — most preferred.\n\nAlternatives accepted by ECI:\n• Aadhaar Card\n• Passport\n• Driving License\n• MNREGA Job Card\n• PAN Card\n• Bank/Post Office Passbook with photo\n• Smart Card issued by RGI",
    options: [{ label: "← Back to Voting Day", next: "votingday" }],
  },
  vd_evm: {
    id: "vd_evm",
    message: "How the EVM and VVPAT work:",
    answer:
      "1. The Presiding Officer enables the EVM for you.\n2. Go to the voting compartment.\n3. Press the blue button next to your chosen candidate's name and symbol.\n4. A red light glows and a long beep confirms your vote.\n5. The VVPAT machine will show a paper slip with your chosen candidate for 7 seconds — verify it!\n6. The slip then falls into a sealed box.",
    options: [{ label: "← Back to Voting Day", next: "votingday" }],
  },
  // ── Voter ID ──
  voterid: {
    id: "voterid",
    message: "What would you like help with regarding your Voter ID?",
    options: [
      { label: "Apply for a new Voter ID", next: "vid_new" },
      { label: "Update / correct my Voter ID", next: "vid_update" },
      { label: "I lost my Voter ID", next: "vid_lost" },
      { label: "← Back", next: "start" },
    ],
  },
  vid_new: {
    id: "vid_new",
    message: "Apply for a new Voter ID (EPIC) using Form 6 on the ECI portal.",
    answer: "You must be at least 18 years old and an Indian citizen. Fill Form 6 online with your details, photo, and proof documents. After verification, your EPIC card will be dispatched to your address.",
    link: { label: "Apply on voters.eci.gov.in →", url: "https://voters.eci.gov.in/" },
    options: [{ label: "← Back to Voter ID", next: "voterid" }],
  },
  vid_update: {
    id: "vid_update",
    message: "To update or correct your Voter ID details (name, address, photo), use Form 8 on the ECI portal.",
    link: { label: "Update on voters.eci.gov.in →", url: "https://voters.eci.gov.in/" },
    options: [{ label: "← Back to Voter ID", next: "voterid" }],
  },
  vid_lost: {
    id: "vid_lost",
    message: "Lost your Voter ID? Here's what to do:",
    answer:
      "1. File a police complaint (FIR) for the lost card.\n2. Visit the ECI Voters' Services Portal.\n3. Apply for a duplicate EPIC using Form 002.\n4. Upload the FIR copy as supporting document.\n5. You can also use Aadhaar, Passport, or Driving License as alternative ID on voting day.",
    link: { label: "Apply Duplicate EPIC →", url: "https://voters.eci.gov.in/" },
    options: [{ label: "← Back to Voter ID", next: "voterid" }],
  },
  // ── Election Info ──
  electioninfo: {
    id: "electioninfo",
    message: "What would you like to know about Indian elections?",
    options: [
      { label: "Types of elections in India", next: "ei_types" },
      { label: "How is the PM elected?", next: "ei_pm" },
      { label: "What is Model Code of Conduct?", next: "ei_mcc" },
      { label: "← Back", next: "start" },
    ],
  },
  ei_types: {
    id: "ei_types",
    message: "Types of elections in India:",
    answer:
      "🇮🇳 General Elections (Lok Sabha) — Every 5 years to elect 543 MPs.\n\n🏛️ State Assembly Elections (Vidhan Sabha) — Every 5 years per state to elect MLAs.\n\n🏘️ Local Body Elections — Panchayat, Municipal Council, and Corporation elections.",
    options: [{ label: "← Back to Election Info", next: "electioninfo" }],
  },
  ei_pm: {
    id: "ei_pm",
    message: "How is the Prime Minister elected?",
    answer:
      "Citizens vote for Members of Parliament (MPs) from their constituency. The party or coalition that wins 272+ seats out of 543 in the Lok Sabha is invited by the President to form the government. The leader of that majority party is appointed as the Prime Minister of India.",
    link: { label: "Learn more on our site →", url: "/elections/national" },
    options: [{ label: "← Back to Election Info", next: "electioninfo" }],
  },
  ei_mcc: {
    id: "ei_mcc",
    message: "Model Code of Conduct (MCC):",
    answer:
      "The MCC is a set of guidelines issued by the ECI to regulate political parties and candidates during elections. It comes into effect as soon as election dates are announced.\n\nKey rules:\n• No announcement of new policies/schemes\n• No use of government machinery for campaigns\n• Polling stations to be set up fairly\n• No voter bribery or intimidation",
    options: [{ label: "← Back to Election Info", next: "electioninfo" }],
  },
  // ── Helpline ──
  helpline: {
    id: "helpline",
    message: "📞 ECI Voter Helpline",
    answer:
      "Call 1950 (toll-free) from anywhere in India for:\n• Voter registration queries\n• Polling booth information\n• Electoral roll verification\n• Complaints about election violations\n• Any other election-related help\n\nAvailable in multiple Indian languages.",
    options: [{ label: "← Back to Main Menu", next: "start" }],
  },
};

// ─── FAQ Data ──────────────────────────────────────────────────────────────────

const faqs = [
  { q: "What is the minimum age to vote in India?", a: "You must be at least 18 years of age as of January 1st of the year the electoral roll is published." },
  { q: "Can I vote without a Voter ID card?", a: "Yes! ECI allows 12 alternative photo IDs including Aadhaar, Passport, PAN Card, Driving License, MNREGA Job Card, and more." },
  { q: "How can I check if my name is on the electoral roll?", a: "Visit https://electoralsearch.eci.gov.in/ or call the ECI Helpline 1950." },
  { q: "What is VVPAT?", a: "Voter Verifiable Paper Audit Trail. After you vote on the EVM, a paper slip showing your chosen candidate appears in a glass window for 7 seconds, then drops into a sealed box for verification." },
  { q: "Can NRI citizens vote?", a: "Yes! NRIs can register as overseas voters using Form 6A on the ECI portal and vote in person at their registered constituency in India." },
  { q: "What if I am unable to visit the polling booth?", a: "Senior citizens (85+) and persons with disabilities can apply for postal ballot or home voting facility. Contact your local Electoral Registration Officer." },
];

// ─── Component ────────────────────────────────────────────────────────────────

export default function SmartAssistant() {
  const [isOpen, setIsOpen] = useState(false);
  const [view, setView] = useState<"chat" | "faq">("chat");
  const [currentId, setCurrentId] = useState("start");
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const node = tree[currentId];

  const reset = () => { setCurrentId("start"); setView("chat"); };

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            className="mb-4 w-80 sm:w-96 bg-white rounded-2xl shadow-2xl border border-gray-100 overflow-hidden flex flex-col"
            style={{ maxHeight: "520px" }}
          >
            {/* Header */}
            <div className="bg-blue-700 p-4 text-white flex justify-between items-center shrink-0">
              <div>
                <h3 className="font-bold text-base">Voter Assistant</h3>
                <p className="text-blue-200 text-xs">Guided Help • FAQ • ECI 1950</p>
              </div>
              <div className="flex items-center gap-2">
                <a
                  href="tel:1950"
                  title="Call ECI Helpline 1950"
                  className="bg-green-500 hover:bg-green-400 transition-colors p-1.5 rounded-full"
                >
                  <Phone size={15} />
                </a>
                <button onClick={() => setIsOpen(false)} className="hover:bg-blue-600 p-1.5 rounded-full transition-colors">
                  <X size={18} />
                </button>
              </div>
            </div>

            {/* Tab Bar */}
            <div className="flex border-b border-gray-100 shrink-0">
              <button
                onClick={() => setView("chat")}
                className={`flex-1 py-2 text-sm font-semibold flex items-center justify-center gap-1.5 transition-colors ${view === "chat" ? "text-blue-700 border-b-2 border-blue-700" : "text-gray-500 hover:text-gray-700"}`}
              >
                <MessageSquare size={14} /> Guide
              </button>
              <button
                onClick={() => setView("faq")}
                className={`flex-1 py-2 text-sm font-semibold flex items-center justify-center gap-1.5 transition-colors ${view === "faq" ? "text-blue-700 border-b-2 border-blue-700" : "text-gray-500 hover:text-gray-700"}`}
              >
                <HelpCircle size={14} /> FAQ
              </button>
            </div>

            {/* Body */}
            <div className="flex-1 overflow-y-auto">
              {view === "chat" ? (
                <div className="p-4 space-y-4">
                  {/* Bot Message */}
                  <div className="bg-blue-50 border border-blue-100 rounded-2xl rounded-tl-none p-3 text-sm text-gray-800 leading-relaxed">
                    {node.message}
                  </div>

                  {/* Answer Block */}
                  {node.answer && (
                    <div className="bg-gray-50 border border-gray-200 rounded-xl p-3 text-sm text-gray-700 whitespace-pre-line leading-relaxed">
                      {node.answer}
                    </div>
                  )}

                  {/* ECI Link */}
                  {node.link && (
                    <a
                      href={node.link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block bg-blue-600 text-white text-sm font-medium text-center py-2.5 rounded-xl hover:bg-blue-700 transition-colors"
                    >
                      {node.link.label}
                    </a>
                  )}

                  {/* Helpline special card */}
                  {currentId === "helpline" && (
                    <a
                      href="tel:1950"
                      className="flex items-center justify-center gap-2 bg-green-500 text-white font-bold py-3 rounded-xl hover:bg-green-600 transition-colors text-base"
                    >
                      <Phone size={18} /> Call 1950 Now
                    </a>
                  )}

                  {/* Options */}
                  {node.options && (
                    <div className="space-y-2">
                      {node.options.map((opt) => (
                        <button
                          key={opt.next}
                          onClick={() => opt.next === "start" ? reset() : setCurrentId(opt.next)}
                          className="w-full text-left text-sm flex items-center justify-between bg-white border border-gray-200 hover:border-blue-400 hover:bg-blue-50 text-gray-800 rounded-xl px-3 py-2.5 transition-colors"
                        >
                          <span>{opt.label}</span>
                          {opt.label !== "← Back" && opt.label !== "← Back to Registration" && opt.label !== "← Back to Voting Day" && opt.label !== "← Back to Voter ID" && opt.label !== "← Back to Election Info" && opt.label !== "← Back to Main Menu" && (
                            <ChevronRight size={14} className="text-blue-500 shrink-0" />
                          )}
                          {(opt.label.startsWith("←")) && (
                            <ArrowLeft size={14} className="text-gray-400 shrink-0" />
                          )}
                        </button>
                      ))}
                    </div>
                  )}
                </div>
              ) : (
                <div className="divide-y divide-gray-100">
                  {faqs.map((faq, idx) => (
                    <div key={idx}>
                      <button
                        onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
                        className="w-full text-left px-4 py-3 flex items-start justify-between gap-2 hover:bg-gray-50 transition-colors"
                      >
                        <span className="text-sm font-medium text-gray-800">{faq.q}</span>
                        <ChevronDown
                          size={15}
                          className={`shrink-0 mt-0.5 text-blue-600 transition-transform duration-200 ${openFaq === idx ? "rotate-180" : ""}`}
                        />
                      </button>
                      <AnimatePresence>
                        {openFaq === idx && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: "auto", opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.2 }}
                            className="overflow-hidden"
                          >
                            <p className="text-sm text-gray-600 px-4 pb-3 leading-relaxed">{faq.a}</p>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* ECI Helpline Footer */}
            <div className="shrink-0 border-t border-gray-100 bg-gray-50 px-4 py-2 flex items-center justify-between">
              <span className="text-xs text-gray-500">ECI Helpline (Toll Free)</span>
              <a href="tel:1950" className="flex items-center gap-1.5 bg-green-500 text-white text-xs font-bold px-3 py-1.5 rounded-full hover:bg-green-600 transition-colors">
                <Phone size={11} /> 1950
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Floating Button */}
      {!isOpen && (
        <motion.button
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => setIsOpen(true)}
          className="bg-blue-700 text-white p-4 rounded-full shadow-lg hover:bg-blue-800 transition-colors flex items-center gap-2"
        >
          <MessageSquare size={22} />
          <span className="hidden sm:inline font-medium pr-1 text-sm">Help</span>
        </motion.button>
      )}
    </div>
  );
}
