import Image from "next/image";

export default function Home() {
  return (
  


      <div className="flex min-h-screen bg-gray-100">
      {/* Sidebar */}
      <aside className="w-64 bg-white shadow-md">
        <div className="p-6">
          <h2 className="text-2xl font-bold text-gray-800">Dashboard</h2>
        </div>
        <nav className="mt-6">
          <ul>
            <li>
              <a href="#" className="block px-6 py-2 text-gray-700 hover:bg-gray-200">
                Overview
              </a>
            </li>
            <li>
              <a href="#" className="block px-6 py-2 text-gray-700 hover:bg-gray-200">
                Reports
              </a>
            </li>
            <li>
              <a href="#" className="block px-6 py-2 text-gray-700 hover:bg-gray-200">
                Analytics
              </a>
            </li>
            <li>
              <a href="#" className="block px-6 py-2 text-gray-700 hover:bg-gray-200">
                Settings
              </a>
            </li>
          </ul>
        </nav>
      </aside>

      {/* Main Content */}
      <div className="flex-1 flex flex-col">
        {/* Top Bar */}
        <header className="bg-white shadow-md p-4">
          <div className="container mx-auto flex justify-between items-center">
            <h1 className="text-xl font-semibold text-gray-800">Welcome to the Dashboard</h1>
            <div>
              <button className="text-gray-800 hover:text-gray-600">Profile</button>
              <button className="ml-4 text-gray-800 hover:text-gray-600">Logout</button>
            </div>
          </div>
        </header>

        {/* Main Dashboard Content */}
        <main className="flex-grow p-6">
          <div className="container mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h2 className="text-lg font-bold text-gray-700">Statistics</h2>
                <p className="mt-2 text-gray-600">Some summary of statistics...</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h2 className="text-lg font-bold text-gray-700">Recent Activities</h2>
                <p className="mt-2 text-gray-600">Details about recent activities...</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h2 className="text-lg font-bold text-gray-700">Reports</h2>
                <p className="mt-2 text-gray-600">A summary of recent reports...</p>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
 
 
  );
}
