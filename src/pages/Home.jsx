import { Link } from "react-router-dom";
import laravelLogo from "../assets/laravel.svg";
import reactLogo from "../assets/react.svg";
import sqlLogo from "../assets/sql.svg";

export default function Home() {
  return (
    <div className="min-h-screen bg-linear-to-br from-sky-50 to-sky-100">
      {/* Hero Section - Responsive */}
      <section className="px-4 md:px-6 py-12 md:py-20 lg:py-32 max-w-7xl mx-auto">
        <div className="text-center">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-sky-900 mb-4 md:mb-6">
            Manage Projects <span className="text-sky-600">Smarter</span>
          </h1>
          <p className="text-base md:text-xl text-gray-600 mb-6 md:mb-8 max-w-2xl mx-auto px-4">
            Streamline your workflow, collaborate with your team, and deliver
            projects on time. Built with Laravel, React, and powered by
            intelligent automation.
          </p>

          {/* Buttons - Stack on mobile */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center px-4">
            <button className="bg-sky-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-sky-700 transition shadow-lg">
              Get Started Free
            </button>
            <button className="bg-white text-sky-600 px-8 py-3 rounded-lg font-semibold hover:bg-sky-50 transition border-2 border-sky-600">
              Watch Demo
            </button>
          </div>
        </div>

        {/* Hero Image */}
        <div className="mt-8 md:mt-16 bg-white rounded-2xl shadow-2xl p-4 md:p-8 max-w-5xl mx-auto">
          <div className="bg-linear-to-br from-sky-50  to-sky-100 rounded-lg h-48 md:h-96 flex items-center justify-center">
            <p className="text-gray-500 text-sm md:text-lg">
              Dashboard Preview
            </p>
          </div>
        </div>
      </section>

      {/* Features Section - Responsive Grid */}
      <section className="px-4 md:px-6 py-12 md:py-20 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Everything you need to succeed
            </h2>
            <p className="text-gray-600 text-base md:text-lg px-4">
              Powerful features designed for modern teams
            </p>
          </div>

          {/* Grid: 1 column on mobile, 3 on desktop */}
          <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-3 gap-6 md:gap-8">
            {/* Feature 1 */}
            <div className="bg-linear-to-br from-blue-50 to-blue-100 p-6 md:p-8 rounded-xl hover:shadow-lg transition">
              <div className="bg-blue-600 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                <svg
                  className="w-6 h-6 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"
                  />
                </svg>
              </div>
              <h3 className="text-lg md:text-xl font-bold text-gray-900 mb-2">
                Task Management
              </h3>
              <p className="text-sm md:text-base text-gray-600">
                Create, assign, and track tasks with ease. Keep everyone on the
                same page.
              </p>
            </div>

            {/* Feature 2 */}
            <div className="bg-linear-to-br from-purple-50 to-purple-100 p-6 md:p-8 rounded-xl hover:shadow-lg transition">
              <div className="bg-purple-600 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                <svg
                  className="w-6 h-6 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                  />
                </svg>
              </div>
              <h3 className="text-lg md:text-xl font-bold text-gray-900 mb-2">
                Team Collaboration
              </h3>
              <p className="text-sm md:text-base text-gray-600">
                Real-time updates, comments, and file sharing. Work together
                seamlessly.
              </p>
            </div>

            {/* Feature 3 */}
            <div className="bg-linear-to-br from-green-50 to-green-100 p-6 md:p-8 rounded-xl hover:shadow-lg transition">
              <div className="bg-green-600 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                <svg
                  className="w-6 h-6 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
                  />
                </svg>
              </div>
              <h3 className="text-lg md:text-xl font-bold text-gray-900 mb-2">
                Analytics & Reports
              </h3>
              <p className="text-sm md:text-base text-gray-600">
                Track progress with detailed insights. Make data-driven
                decisions.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Tech Stack - Responsive */}
      <section className="px-4 md:px-6 py-12 md:py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
            Built with Modern Technology
          </h2>
          <p className="text-gray-600 mb-8 md:mb-12 px-4">
            Powered by industry-leading frameworks and tools
          </p>
          <div className="flex justify-center gap-8 md:gap-12 flex-wrap">
            {/* Laravel */}
            <div className="text-center">
              <div className="bg-white w-20 h-20 md:w-24 md:h-24 rounded-xl shadow-lg flex items-center justify-center mb-3 p-4">
                <img
                  src={laravelLogo}
                  alt="Laravel"
                  className="w-full h-full object-contain"
                />
              </div>
              <p className="font-semibold text-gray-700 text-sm md:text-base">
                Laravel
              </p>
            </div>

            {/* React */}
            <div className="text-center">
              <div className="bg-white w-20 h-20 md:w-24 md:h-24 rounded-xl shadow-lg flex items-center justify-center mb-3 p-4">
                <img
                  src={reactLogo}
                  alt="React"
                  className="w-full h-full object-contain"
                />
              </div>
              <p className="font-semibold text-gray-700 text-sm md:text-base">
                React
              </p>
            </div>

            {/* SQL */}
            <div className="text-center">
              <div className="bg-white w-20 h-20 md:w-24 md:h-24 rounded-xl shadow-lg flex items-center justify-center mb-3 p-4">
                <img
                  src={sqlLogo}
                  alt="SQL"
                  className="w-full h-full object-contain"
                />
              </div>
              <p className="font-semibold text-gray-700 text-sm md:text-base">
                Database
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA - Responsive */}
      <section className="px-4 md:px-6 py-12 md:py-20 bg-linear-to-b from-teal-500 to-sky-900 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4 md:mb-6 ">
            Ready to transform your project management?
          </h2>
          <p className="text-base md:text-xl mb-6 md:mb-8 text-blue-100 px-4">
            Join thousands of teams already using our platform to deliver
            projects faster.
          </p>
          <button className="bg-white text-sky-900 px-8 md:px-10 py-3 md:py-4 rounded-lg font-bold text-base md:text-lg hover:bg-gray-100 transition shadow-xl">
            Start Your Free Trial
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-linear-to-b from-sky-900 to-sky-900 text-gray-400 md:px-6 py-8 md:py-8">
        <div className="max-w-7xl mx-auto text-center">
          <p className="mb-4 text-sm md:text-base">2026 | zephyrus™</p>
        </div>
      </footer>
    </div>
  );
}
