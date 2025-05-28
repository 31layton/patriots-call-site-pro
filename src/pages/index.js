
import Image from 'next/image';
import Link from 'next/link';

export default function Home() {
  return (
    <div className="min-h-screen bg-slate-50 text-gray-800 p-6">
      <header className="text-center mb-10">
        <Image src="/logo.png" alt="Patriot's Call Logo" width={120} height={120} className="mx-auto" />
        <h1 className="text-4xl font-bold mt-4">Patriot's Call</h1>
        <p className="mt-2 text-lg">Business Administration & Project Management Consultations</p>
        <nav className="mt-4 space-x-6 text-blue-700 underline">
          <Link href="/about">About Me</Link>
          <Link href="/book">Book a Call</Link>
          <Link href="/thank-you">Thank You</Link>
        </nav>
      </header>

      <section className="max-w-3xl mx-auto text-center mb-10">
        <h2 className="text-2xl font-semibold mb-4">Project Manager Starter Toolkit – $49</h2>
        <p className="mb-4">Includes 5 pro templates, a usage guide, and a bonus walkthrough to kickstart your PM journey.</p>
        <a href="https://buy.stripe.com/dRm5kDdlw8AX0lW1OS9oc04" className="bg-blue-600 text-white px-6 py-2 rounded shadow hover:bg-blue-700">Buy Now</a>
      </section>

      <section className="max-w-3xl mx-auto text-center mb-10">
        <h2 className="text-2xl font-semibold mb-4">1-on-1 PM Coaching Call – $129</h2>
        <p className="mb-4">60-minute session with Layton Call to review your resume, career strategy, or PM challenges.</p>
        <a href="https://buy.stripe.com/00w3cv81c6sPecMctw9oc03" className="bg-blue-600 text-white px-6 py-2 rounded shadow hover:bg-blue-700">Book Now</a>
      </section>

      <section className="max-w-3xl mx-auto text-center mb-10">
        <h2 className="text-2xl font-semibold mb-4">Resume + LinkedIn Optimization – $99</h2>
        <p className="mb-4">Get a full resume rewrite and an optimized LinkedIn profile tailored for your PM career goals.</p>
        <a href="https://buy.stripe.com/5kQeVd5T44kH9Ww8dg9oc02" className="bg-blue-600 text-white px-6 py-2 rounded shadow hover:bg-blue-700">Buy Now</a>
      </section>

      <section className="max-w-3xl mx-auto text-center mb-10">
        <h2 className="text-2xl font-semibold mb-4">Custom Project Consultation – $250</h2>
        <p className="mb-4">A 90-minute deep dive session to unpack and improve a project you’re managing or planning.</p>
        <a href="https://buy.stripe.com/5kQbJ1chseZl2u4dxA9oc01" className="bg-blue-600 text-white px-6 py-2 rounded shadow hover:bg-blue-700">Book Now</a>
      </section>
    </div>
  );
}
