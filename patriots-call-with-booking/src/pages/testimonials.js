
export default function Testimonials() {
  const reviews = [
    {
      name: "Sarah M.",
      feedback: "Layton's PM toolkit gave me everything I needed to launch my first project with confidence!",
      stars: 5
    },
    {
      name: "James T.",
      feedback: "The coaching session was invaluable. He helped me land my current PM role.",
      stars: 5
    },
    {
      name: "Nina K.",
      feedback: "Highly professional and resourceful. His templates saved me hours of work.",
      stars: 5
    }
  ];

  return (
    <div className="min-h-screen bg-white px-6 py-10 text-gray-800 max-w-3xl mx-auto">
      <h1 className="text-4xl font-bold text-center mb-6">Testimonials</h1>
      <div className="space-y-6">
        {reviews.map((review, index) => (
          <div key={index} className="p-4 border rounded shadow-sm bg-slate-50">
            <p className="text-xl font-semibold mb-1">{review.name}</p>
            <p className="text-yellow-500 mb-2">{"★".repeat(review.stars)}</p>
            <p className="text-md">{review.feedback}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
