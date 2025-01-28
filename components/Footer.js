export default function Footer() {
  return (
    <footer className="bg-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex justify-between items-center">
          <p className="text-gray-600">© 2025 Your Name. All rights reserved.</p>
          <div className="flex space-x-6">
            <a href="#" className="text-gray-600 hover:text-blue-600">
              GitHub
            </a>
            <a href="#" className="text-gray-600 hover:text-blue-600">
              LinkedIn
            </a>
            <a href="#" className="text-gray-600 hover:text-blue-600">
              Twitter
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}