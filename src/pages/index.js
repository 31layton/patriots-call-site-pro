
import Image from 'next/image';
import Link from 'next/link';

export default function Home() {
  return (
    <div className="bg-slate-50 min-h-screen text-gray-800 px-6 py-10">
      <header className="text-center mb-10">
        <Image src="/logo.webp" alt="Patriot's Call Logo" width={120} height={120} className="mx-auto" />
        <h1 className="text-4xl font-bold mt-4">Patriot's Call</h1>
        <p className="text-lg text-gray-600">Business Administration & Project Management Consultations</p>
        <nav className="mt-6 space-x-4">
          <Link href="/about" className="text-blue-700 underline">About</Link>
          <Link href="/book" className="text-blue-700 underline">Book a Call</Link>
          <Link href="/thank-you" className="text-blue-700 underline">Download</Link>
        </nav>
      </header>

      <main className="max-w-5xl mx-auto">
        <section className="grid md:grid-cols-2 gap-8">
          <div className="bg-white p-6 rounded-xl shadow">
            <h2 className="text-xl font-bold mb-2">🧰 Project Manager Starter Toolkit – $49</h2>
            <p>5 ready-to-use templates, a quick-start guide, and everything you need to kick off a project the right way.</p>
            <a href="https://buy.stripe.com/dRm5kDdlw8AX0lW1OS9oc04" className="inline-block mt-4 bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">Buy Now</a>
          </div>
          <div className="bg-white p-6 rounded-xl shadow">
            <h2 className="text-xl font-bold mb-2">🧑‍🏫 1-on-1 PM Coaching Call – $129</h2>
            <p>A 60-minute session with Layton to review your goals, resume, or project challenges.</p>
            <a href="https://buy.stripe.com/00w3cv81c6sPecMctw9oc03" className="inline-block mt-4 bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">Book Now</a>
          </div>
          <div className="bg-white p-6 rounded-xl shadow">
            <h2 className="text-xl font-bold mb-2">📄 Resume + LinkedIn Optimization – $99</h2>
            <p>Get a polished resume + optimized LinkedIn profile designed to land PM roles.</p>
            <a href="https://buy.stripe.com/5kQeVd5T44kH9Ww8dg9oc02" className="inline-block mt-4 bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">Buy Now</a>
          </div>
          <div className="bg-white p-6 rounded-xl shadow">
            <h2 className="text-xl font-bold mb-2">🧠 Custom Project Consultation – $250</h2>
            <p>Get clarity and expert strategy on a current project or planning challenge in a 90-minute deep dive.</p>
            <a href="https://buy.stripe.com/5kQbJ1chseZl2u4dxA9oc01" className="inline-block mt-4 bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">Book Now</a>
          </div>
        </section>
      </main>

      <footer className="mt-20 text-center text-sm text-gray-500">
        &copy; {new Date().getFullYear()} Patriot's Call. All rights reserved.
      </footer>
    </div>
  );
}
