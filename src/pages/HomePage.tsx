import { Link } from "react-router-dom";

const HomePage = () => {
  return (
    <div className="min-h-[calc(100vh-160px)] flex flex-col">
      {/* Cover Section */}
      <section className="flex-grow flex flex-col md:flex-row justify-between items-center px-4 md:px-12 lg:px-20 py-12 container mx-auto">
        {/* Content - Left Side */}
        <div className="w-full md:w-1/2 lg:w-5/12 text-center md:text-left order-2 md:order-1 md:pr-8">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 dark:text-white">Rose Kavinya</h1>
          <h2 className="text-xl md:text-2xl font-light mb-6 dark:text-gray-200">Fashion Design Portfolio</h2>
          
          <div className="w-16 h-1 bg-black dark:bg-white mx-auto md:mx-0 mb-6"></div>
          
          <p className="text-gray-600 dark:text-gray-300 mb-6 text-lg">Creativity. Passion. Innovation.</p>

          {/* Extended Intro */}
          <div className="space-y-4 mb-8 text-gray-700 dark:text-gray-300">
            <p className="leading-relaxed">
              I am a fashion designer with a passion for creating pieces that blend contemporary aesthetics with timeless elegance, inspired by modern minimalism and rich textures.
            </p>
            <p className="leading-relaxed">
              My designs focus on sustainable practices and innovative pattern cutting, creating distinctive silhouettes that celebrate individuality and self-expression.
            </p>
          </div>
          
          {/* Specialties */}
          <div className="flex flex-wrap gap-2 mb-8 justify-center md:justify-start">
            <span className="px-3 py-1 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded text-sm">Sustainable Design</span>
            <span className="px-3 py-1 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded text-sm">Pattern Making</span>
            <span className="px-3 py-1 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded text-sm">Textile Art</span>
            <span className="px-3 py-1 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded text-sm">Contemporary Fashion</span>
          </div>

          {/* CTA Button */}
          <Link
            to="/portfolio"
            className="px-8 py-3 bg-black dark:bg-white text-white dark:text-black hover:bg-gray-800 dark:hover:bg-gray-200 transition-colors rounded inline-block"
          >
            View My Work
          </Link>
        </div>

        {/* User Image - Right Side */}
        <div className="w-full md:w-1/2 lg:w-5/12 flex justify-center order-1 md:order-2 mb-8 md:mb-0">
          <div className="relative overflow-hidden shadow-lg">
            <div className="w-64 h-80 md:w-72 md:h-96 overflow-hidden border border-gray-200 dark:border-gray-700">
              <img
                src="/images/Rose2.jpg"
                alt="Rose Kavinya"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute inset-0 bg-black bg-opacity-5 dark:bg-opacity-20"></div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;