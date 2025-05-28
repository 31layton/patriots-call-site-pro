
export default function Book() {
  return (
    <div className="min-h-screen bg-white px-6 py-10 text-gray-800 max-w-3xl mx-auto">
      <h1 className="text-4xl font-bold text-center mb-6">Book a 30-Minute Consultation</h1>
      <div className="aspect-w-16 aspect-h-9">
        <iframe
          src="https://calendly.com/laytoncall/30min"
          width="100%"
          height="600"
          frameBorder="0"
          title="Schedule Appointment"
          style={{ minHeight: '600px' }}
        ></iframe>
      </div>
    </div>
  );
}
