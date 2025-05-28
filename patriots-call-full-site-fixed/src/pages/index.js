
import Image from 'next/image';
import Link from 'next/link';

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-900 px-4 py-10">
      <header className="text-center mb-12">
        <Image src="/logo.png" alt="Patriot's Call Logo" width={120} height={120} className="mx-auto mb-4" />
        <h1 className="text-4xl font-bold">Patriot's Call</h1>
        <p className="text-lg mt-2 font-medium">Business Administration & Project Management Consultations</p>
        <p className="text-sm mt-2 text-gray-600">
          laytoncall@gmail.com | (480) 974-9722 |{' '}
          <a href="https://linkedin.com/in/layton-call-684a88203" className="text-blue-600 underline">LinkedIn</a>
        </p>
        <nav className="mt-4 space-x-4">
          <Link href="/about" className="text-blue-700 underline">About Me</Link>
          <Link href="/testimonials" className="text-blue-700 underline">Testimonials</Link>
        </nav>
      </header>
    </div>
  );
}
