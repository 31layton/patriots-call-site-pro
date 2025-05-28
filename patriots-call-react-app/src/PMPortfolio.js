import React from 'react';

export default function PMPortfolio() {
  return (
    <div className="min-h-screen bg-white text-gray-800 p-6">
      <header className="text-center mb-12">
        <h1 className="text-4xl font-bold">Patriot's Call</h1>
        <p className="text-lg mt-2">Business Administration & Project Management Consultations</p>
        <p className="text-sm mt-1 text-gray-600">
          laytoncall@gmail.com | (480) 974-9722 | 
          <a href="https://linkedin.com/in/layton-call-684a88203" className="text-blue-600 hover:underline ml-1">LinkedIn</a>
        </p>
      </header>

      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-4">About Me</h2>
        <p>
          I’m a seasoned Project Management professional with over a decade of experience delivering successful projects across construction, infrastructure, and education sectors. I specialize in remote leadership, cross-functional coordination, and project lifecycle management. I currently lead international HDD operations while teaching project management at Dunwoody College.
        </p>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-4">Core Skills</h2>
        <ul className="list-disc pl-6 space-y-1">
          <li>Project Lifecycle Management</li>
          <li>Remote Team Leadership</li>
          <li>Stakeholder Communication</li>
          <li>Budgeting & Forecasting</li>
          <li>Construction Oversight</li>
          <li>Curriculum Development</li>
          <li>Microsoft Project, Asana, Smartsheet</li>
        </ul>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-4">Products & Services</h2>
        <ul className="space-y-4">
          <li>
            <strong>🧰 Project Manager Starter Toolkit – $49</strong><br/>
            <a href="https://buy.stripe.com/dRm5kDdlw8AX0lW1OS9oc04" className="text-white bg-blue-600 px-4 py-2 rounded inline-block mt-2">Buy Now</a>
          </li>
          <li>
            <strong>🧑‍🏫 1-on-1 PM Coaching Call – $129</strong><br/>
            <a href="https://buy.stripe.com/00w3cv81c6sPecMctw9oc03" className="text-white bg-blue-600 px-4 py-2 rounded inline-block mt-2">Buy Now</a>
          </li>
          <li>
            <strong>📄 Resume + LinkedIn Optimization – $99</strong><br/>
            <a href="https://buy.stripe.com/5kQeVd5T44kH9Ww8dg9oc02" className="text-white bg-blue-600 px-4 py-2 rounded inline-block mt-2">Buy Now</a>
          </li>
          <li>
            <strong>🧠 Custom Project Consultation – $250</strong><br/>
            <a href="https://buy.stripe.com/5kQbJ1chseZl2u4dxA9oc01" className="text-white bg-blue-600 px-4 py-2 rounded inline-block mt-2">Buy Now</a>
          </li>
        </ul>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-4">Contact Me</h2>
        <p>
          Interested in working together or need help on a project? Reach out at{' '}
          <a href="mailto:laytoncall@gmail.com" className="text-blue-600 hover:underline">laytoncall@gmail.com</a>.
        </p>
      </section>
    </div>
  );
}
