
import Image from 'next/image';

export default function About() {
  return (
    <div className="min-h-screen bg-white p-6 text-gray-800 max-w-3xl mx-auto">
      <h1 className="text-4xl font-bold mb-6 text-center">About Me</h1>
      <div className="flex flex-col md:flex-row gap-6 items-center">
        <Image src="/layton.jpg" alt="Layton Call" width={250} height={250} className="rounded-xl shadow-md" />
        <p className="text-lg">
          I'm Layton Call, a PMP-certified Project Manager with an MBA and over a decade of leadership experience across international construction and education sectors.
          Through Patriot's Call, I help individuals and organizations lead with confidence using practical tools, coaching, and real-world strategy.
        </p>
      </div>
    </div>
  );
}
