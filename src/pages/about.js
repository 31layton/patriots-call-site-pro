
import Image from 'next/image';

export default function About() {
  return (
    <div className="min-h-screen bg-white px-6 py-10 text-gray-800 max-w-4xl mx-auto">
      <h1 className="text-4xl font-bold text-center mb-8">About Me</h1>
      <div className="flex flex-col md:flex-row gap-8 items-center">
        <Image src="/layton.jpg" alt="Layton Call" width={300} height={300} className="rounded-xl shadow-md" />
        <p className="text-lg leading-relaxed">
          I'm Layton Call, PMP-certified project leader and MBA with over 10 years of experience in construction, international infrastructure, and education project delivery.
          Through Patriot's Call, I offer strategic consulting, career coaching, and custom-built tools to help project managers and organizations lead with clarity and confidence.
        </p>
      </div>
    </div>
  );
}
