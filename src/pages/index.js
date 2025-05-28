
import Image from 'next/image';
import Link from 'next/link';

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-100 to-slate-200 text-gray-800 px-4 py-10">
      <header className="text-center mb-12">
        <Image src="/logo.png" alt="Patriot's Call Logo" width={120} height={120} className="mx-auto mb-4" />
        <h1 className="text-4xl font-bold">Patriot's Call</h1>
        <p className="text-lg mt-2">Business Administration & Project Management Consultations</p>
        <p className="text-sm mt-2 text-gray-600">
          laytoncall@gmail.com | (480) 974-9722 |{' '}
          <a href="https://linkedin.com/in/layton-call-684a88203" className="text-blue-600 underline">LinkedIn</a>
        </p>
        <nav className="mt-6 space-x-6 text-blue-700">
          <Link href="/about" className="underline hover:text-blue-900">About Me</Link>
          <Link href="/testimonials" className="underline hover:text-blue-900">Testimonials</Link>
          <Link href="/book" className="underline hover:text-blue-900">Book a Call</Link>
        </nav>
      </header>

      <section className="max-w-4xl mx-auto bg-white rounded-xl shadow p-6 mb-12">
        <h2 className="text-3xl font-semibold mb-6 text-center">About Me</h2>
        <div className="flex flex-col md:flex-row items-center gap-6">
          <Image src="/layton.jpg" alt="Layton Call" width={250} height={250} className="rounded-lg shadow-md" />
          <p className="text-lg leading-relaxed">
            I’m Layton Call—MBA, PMP-certified, and a seasoned leader in project and construction management with over a decade of experience. I lead international HDD operations and serve as a project management professor at Dunwoody College. My mission is to help people plan smarter, lead better, and execute with confidence.
          </p>
        </div>
      </section>

      <section className="max-w-4xl mx-auto bg-white rounded-xl shadow p-6 mb-12">
        <Image src="/teamwork.jpg" alt="Project Collaboration" width={800} height={400} className="rounded-xl mx-auto" />
      </section>

      <section className="max-w-4xl mx-auto bg-white rounded-xl shadow p-6 mb-12">
        <h2 className="text-3xl font-semibold mb-4 text-center">Core Skills</h2>
        <ul className="list-disc pl-6 space-y-2 text-lg">
          <li>Project Lifecycle Management</li>
          <li>Remote Team Leadership</li>
          <li>Stakeholder Communication</li>
          <li>Budgeting & Forecasting</li>
          <li>Construction Oversight</li>
          <li>Curriculum Development</li>
          <li>Microsoft Project, Asana, Smartsheet</li>
        </ul>
      </section>

      <section className="max-w-4xl mx-auto bg-white rounded-xl shadow p-6 mb-12">
        <h2 className="text-3xl font-semibold mb-6 text-center">Products & Services</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-slate-50 p-4 rounded-xl shadow">
            <h3 className="text-xl font-bold">🧰 Project Manager Starter Toolkit – $49</h3>
            <a href="https://buy.stripe.com/dRm5kDdlw8AX0lW1OS9oc04" className="inline-block mt-3 text-white bg-blue-600 px-4 py-2 rounded hover:bg-blue-700">Buy Now</a>
          </div>
          <div className="bg-slate-50 p-4 rounded-xl shadow">
            <h3 className="text-xl font-bold">🧑‍🏫 1-on-1 PM Coaching Call – $129</h3>
            <a href="https://buy.stripe.com/00w3cv81c6sPecMctw9oc03" className="inline-block mt-3 text-white bg-blue-600 px-4 py-2 rounded hover:bg-blue-700">Buy Now</a>
          </div>
          <div className="bg-slate-50 p-4 rounded-xl shadow">
            <h3 className="text-xl font-bold">📄 Resume + LinkedIn Optimization – $99</h3>
            <a href="https://buy.stripe.com/5kQeVd5T44kH9Ww8dg9oc02" className="inline-block mt-3 text-white bg-blue-600 px-4 py-2 rounded hover:bg-blue-700">Buy Now</a>
          </div>
          <div className="bg-slate-50 p-4 rounded-xl shadow">
            <h3 className="text-xl font-bold">🧠 Custom Project Consultation – $250</h3>
            <a href="https://buy.stripe.com/5kQbJ1chseZl2u4dxA9oc01" className="inline-block mt-3 text-white bg-blue-600 px-4 py-2 rounded hover:bg-blue-700">Buy Now</a>
          </div>
        </div>
      </section>

      <section className="max-w-4xl mx-auto bg-white rounded-xl shadow p-6">
        <h2 className="text-3xl font-semibold mb-4 text-center">Contact Me</h2>
        <p className="text-lg text-center">
          Interested in working together or need help on a project? Reach out at{' '}
          <a href="mailto:laytoncall@gmail.com" className="text-blue-700 underline">laytoncall@gmail.com</a>.
        </p>
      </section>
    </div>
  );
}
