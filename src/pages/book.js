
export default function Book() {
  return (
    <div className="min-h-screen bg-slate-100 px-6 py-10 text-center">
      <h1 className="text-4xl font-bold mb-6">Schedule Your Consultation</h1>
      <iframe
        src="https://calendly.com/laytoncall/30min"
        width="100%"
        height="600"
        frameBorder="0"
        className="rounded-lg shadow"
        style={{ maxWidth: '800px', margin: '0 auto' }}
      ></iframe>
    </div>
  );
}
