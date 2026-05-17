import Link from "next/link";
import { ArrowRight, BookOpen, CheckSquare, FileText } from "lucide-react";

export default function Home() {
  return (
    <div className="space-y-12 pb-16">
      <section className="text-center space-y-6 pt-10">
        <h1 className="text-5xl font-extrabold text-blue-900 tracking-tight">
          Empowering Indian Citizens Through <span className="text-blue-600">Knowledge</span>
        </h1>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
          Your one-stop guide to understanding the Indian democratic process, Election Commission guidelines, checking your eligibility, and getting ready to vote.
        </p>
        <div className="flex justify-center gap-4 pt-4">
          <Link href="/voting-guide" className="bg-blue-600 text-white px-6 py-3 rounded-full font-medium hover:bg-blue-700 transition-colors flex items-center gap-2 shadow-lg shadow-blue-200">
            Get Started <ArrowRight size={18} />
          </Link>
          <Link href="/about" className="bg-white text-blue-600 border border-blue-200 px-6 py-3 rounded-full font-medium hover:bg-blue-50 transition-colors shadow-sm">
            Learn More
          </Link>
        </div>
      </section>

      <section className="grid md:grid-cols-3 gap-6 mt-16">
        <Link href="/about" className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow group">
          <div className="bg-blue-100 text-blue-600 w-12 h-12 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
            <BookOpen size={24} />
          </div>
          <h3 className="text-xl font-bold text-gray-900 mb-2">About Elections</h3>
          <p className="text-gray-600">Understand the complete election process, timelines, and why your vote matters.</p>
        </Link>
        
        <Link href="/voting-guide" className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow group">
          <div className="bg-green-100 text-green-600 w-12 h-12 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
            <CheckSquare size={24} />
          </div>
          <h3 className="text-xl font-bold text-gray-900 mb-2">Voting Guide</h3>
          <p className="text-gray-600">Step-by-step guidance on how to vote, finding polling booths, and checking eligibility.</p>
        </Link>
        
        <Link href="/voter-id" className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow group">
          <div className="bg-purple-100 text-purple-600 w-12 h-12 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
            <FileText size={24} />
          </div>
          <h3 className="text-xl font-bold text-gray-900 mb-2">Voter ID Assistance</h3>
          <p className="text-gray-600">Learn about required documents and how to apply or update your Voter ID.</p>
        </Link>
      </section>

      <section className="bg-blue-900 text-white rounded-3xl p-8 md:p-12 mt-16 flex flex-col md:flex-row items-center justify-between gap-8 relative overflow-hidden">
        <div className="relative z-10 space-y-4 max-w-xl">
          <h2 className="text-3xl font-bold">Have Questions? Ask our AI Assistant!</h2>
          <p className="text-blue-100">
            Click the chat button in the bottom right corner to get instant answers about eligibility, required documents, or the voting process.
          </p>
        </div>
        <div className="relative z-10">
          <button className="bg-white text-blue-900 font-bold px-6 py-3 rounded-full hover:bg-blue-50 transition-colors shadow-lg pointer-events-none">
            Try it now
          </button>
        </div>
        <div className="absolute -right-10 -bottom-10 opacity-10 pointer-events-none">
          <span className="text-[20rem]">🤖</span>
        </div>
      </section>
    </div>
  );
}
