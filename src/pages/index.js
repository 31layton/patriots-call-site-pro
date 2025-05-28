
import Image from 'next/image';
import Link from 'next/link';

export default function Home() {
  return (
    <div className="min-h-screen bg-slate-100 text-gray-800 px-4 py-10">
      <header className="text-center mb-12">
        <Image src="/logo.png" alt="Patriot's Call Logo" width={120} height={120} className="mx-auto mb-4" />
        <h1 className="text-4xl font-bold">Patriot's Call</h1>
        <p className="text-lg mt-2">Business Administration & Project Management Consultations</p>
        <p className="text-sm mt-2 text-gray-600">
          laytoncall@gmail.com | (480) 974-9722 |{' '}
          <a href="https://linkedin.com/in/layton-call-684a88203" className="text-blue-600 underline">LinkedIn</a>
        </p>
        <nav className="mt-6 space-x-6 text-blue-700">
          <Link href="/about" className="underline hover:text-blue-900">About</Link>
          <Link href="/testimonials" className="underline hover:text-blue-900">Testimonials</Link>
          <Link href="/book" className="underline hover:text-blue-900">Book a Call</Link>
        </nav>
      </header>

      <section className="max-w-4xl mx-auto mb-10 bg-white p-6 rounded-xl shadow">
        <h2 className="text-2xl font-semibold text-center mb-4">About Patriot’s Call</h2>
        <p className="text-lg text-center leading-relaxed">
          Founded by Layton Call, MBA & PMP-certified, Patriot’s Call helps emerging project managers and businesses
          bring structure, clarity, and leadership to every phase of execution. With 10+ years of experience managing
          international construction and education-based projects, this platform delivers real-world PM tools and coaching with integrity and precision.
        </p>
      </section>

      <section className="max-w-4xl mx-auto mb-10 bg-white p-6 rounded-xl shadow">
        <h2 className="text-2xl font-semibold text-center mb-4">Trusted Tools</h2>
        <div className="flex justify-center items-center space-x-6">
          <Image src="/tool_excel.png" width={60} height={60} alt="Excel" />
          <Image src="/tool_trello.png" width={60} height={60} alt="Trello" />
          <Image src="/tool_smartsheet.png" width={60} height={60} alt="Smartsheet" />
          <Image src="/tool_asana.png" width={60} height={60} alt="Asana" />
        </div>
      </section>

      <section className="max-w-4xl mx-auto mb-10 bg-white p-6 rounded-xl shadow">
        <h2 className="text-2xl font-semibold text-center mb-6">What Clients Are Saying</h2>
        <div className="grid md:grid-cols-3 gap-4 text-sm">
          <div className="bg-slate-50 p-4 rounded shadow">
            <p className="text-yellow-500 mb-1">★★★★★</p>
            <p>"Layton's toolkit helped me launch my first project in tech. Straightforward and practical!"</p>
            <p className="mt-2 text-right font-medium">– James T.</p>
          </div>
          <div className="bg-slate-50 p-4 rounded shadow">
            <p className="text-yellow-500 mb-1">★★★★★</p>
            <p>"I booked a session with Layton and it changed how I approach planning. Game-changer."</p>
            <p className="mt-2 text-right font-medium">– Nina K.</p>
          </div>
          <div className="bg-slate-50 p-4 rounded shadow">
            <p className="text-yellow-500 mb-1">★★★★★</p>
            <p>"The templates are clear, usable, and look good in front of clients. Worth every penny."</p>
            <p className="mt-2 text-right font-medium">– Sarah M.</p>
          </div>
        </div>
      </section>

      <section className="max-w-4xl mx-auto mb-10 bg-white p-6 rounded-xl shadow">
        <h2 className="text-2xl font-semibold mb-6 text-center">Products & Services</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-slate-50 p-4 rounded-xl shadow">
            <h3 className="text-lg font-bold">🧰 Project Manager Starter Toolkit – $49</h3>
            <a href="https://www.patriotscall.site/thank-you" className="inline-block mt-2 text-white bg-blue-600 px-4 py-2 rounded hover:bg-blue-700">Buy Now</a>
          </div>
          <div className="bg-slate-50 p-4 rounded-xl shadow">
            <h3 className="text-lg font-bold">🧑‍🏫 1-on-1 PM Coaching Call – $129</h3>
            <a href="https://buy.stripe.com/00w3cv81c6sPecMctw9oc03" className="inline-block mt-2 text-white bg-blue-600 px-4 py-2 rounded hover:bg-blue-700">Book Now</a>
          </div>
        </div>
      </section>

      <section className="max-w-4xl mx-auto bg-white p-6 rounded-xl shadow">
        <h2 className="text-2xl font-semibold mb-4 text-center">Contact Me</h2>
        <p className="text-lg text-center">
          Questions? Reach out anytime at <a href="mailto:laytoncall@gmail.com" className="text-blue-700 underline">laytoncall@gmail.com</a>
        </p>
      </section>
    </div>
  );
}
