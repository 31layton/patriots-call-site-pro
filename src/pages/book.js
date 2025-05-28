
export default function Book() {
  return (
    <div className="min-h-screen bg-slate-100 p-6 text-center">
      <h1 className="text-4xl font-bold mb-6">Book a Call</h1>
      <iframe
        src="https://calendly.com/laytoncall/30min"
        width="100%"
        height="600"
        frameBorder="0"
        className="rounded-xl shadow mx-auto"
        style={{ maxWidth: '800px' }}
      ></iframe>
    </div>
  );
}
