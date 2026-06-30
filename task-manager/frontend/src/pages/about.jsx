export default function About() {
  return (
    <div className="max-w-5xl mx-auto px-6 py-12">

      <h1 className="text-4xl font-bold text-slate-800">
        About This Project
      </h1>

      <p className="mt-4 text-gray-600 leading-7">
        This project is built to practice full-stack web development using a
        modern JavaScript stack. The goal is to create a responsive and scalable
        web application while learning both frontend and backend development.
      </p>

      <div className="grid md:grid-cols-2 gap-6 mt-10">

        <div className="bg-white rounded-xl shadow-md p-6">
          <h2 className="text-2xl font-semibold mb-3">
            Frontend
          </h2>

          <ul className="list-disc pl-5 space-y-2 text-gray-700">
            <li>React.js</li>
            <li>Vite</li>
            <li>Tailwind CSS</li>
            <li>React Router</li>
            <li>Shadcn UI</li>
          </ul>
        </div>

        <div className="bg-white rounded-xl shadow-md p-6">
          <h2 className="text-2xl font-semibold mb-3">
            Backend
          </h2>

          <ul className="list-disc pl-5 space-y-2 text-gray-700">
            <li>Node.js</li>
            <li>Express.js</li>
            <li>Prisma ORM</li>
            <li>PostgreSQL</li>
          </ul>
        </div>

      </div>

      <div className="mt-10 bg-slate-800 text-white rounded-xl p-6">
        <h2 className="text-2xl font-semibold mb-2">
          Current Goal
        </h2>

        <p>
          Learn React routing, reusable components, API integration, Prisma,
          authentication, and build a complete e-commerce web application.
        </p>
      </div>

    </div>
  );
}