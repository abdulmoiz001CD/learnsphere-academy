import Link from 'next/link';

export default function page() {
  return (
    <div className="bg-gray-100 min-h-screen">
      {/* Navbar */}
      <nav className="bg-blue-500 text-white p-4">
        <div className="container mx-auto">
          <div className="flex items-center justify-between">
            <a href="#" className="text-2xl font-bold">
              Client and Server-Side Rendering
            </a>
            <ul className="flex space-x-4">
              <li>
                <Link href="#hero">
                 Homet
                </Link>
              </li>
              <li>
                <Link href="#about" className="hover:text-gray-300">
                 About
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="hero" className="container mx-auto px-4 py-20">
        <div className="text-center">
          <h1 className="text-5xl font-bold text-gray-800 mb-4">
            Welcome to Our Website
          </h1>
          <p className="text-lg text-gray-600 mb-8">
            This is a simple example of a hero section with two link buttons.
          </p>
          <div className="space-x-4">
            <Link href="/Client_side"  className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-lg">
          
               Client Side 
             
            </Link>
           
          </div>
        </div>
      </section>
    </div>
  );
}
