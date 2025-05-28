
import Image from 'next/image';

export default function About() {
  return (
    <div className="min-h-screen bg-white px-6 py-10 text-gray-800 max-w-3xl mx-auto">
      <h1 className="text-4xl font-bold text-center mb-6">About Me</h1>
      <div className="flex flex-col md:flex-row items-center gap-6">
        <Image src="/layton.jpg" alt="Layton Call" width={250} height={250} className="rounded-xl shadow-md" />
        <p className="text-lg">
          I’m Layton Call—MBA, PMP-certified, and a seasoned leader in project and construction management with over a decade of experience. I lead international HDD operations and serve as a project management professor at Dunwoody College.
          I specialize in helping professionals and businesses streamline processes, scale efficiently, and execute on critical projects.
        </p>
      </div>
    </div>
  );
}
