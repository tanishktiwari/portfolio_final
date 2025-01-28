import Link from 'next/link'

export default function Navbar() {
  return (
    <nav className="fixed top-0 w-full bg-black text-white z-50 shadow-lg backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Portfolio Link */}
          <Link href="/" className="font-mono text-3xl tracking-widest hover:text-green-400 transition-all duration-300 ease-in-out transform hover:scale-110">
            Portfolio
          </Link>

          {/* Navigation Links */}
          <div className="flex space-x-8">
            {['/', '/about', '/experience', '/projects', '/contact'].map((path, index) => (
              <Link
                key={index}
                href={path}
                className="relative text-white font-mono text-lg group"
              >
                {/* Link text with typing effect */}
                <span className="z-10">{path === '/' ? 'Home' : path.charAt(1).toUpperCase() + path.slice(2)}</span>

                {/* Typing Animation Underline Effect */}
                <span className="absolute bottom-0 left-0 w-0 group-hover:w-full h-[2px] bg-green-400 transition-all duration-300 ease-in-out"></span>

                {/* Blinking Cursor Effect */}
                <span className="absolute top-0 right-0 w-0 group-hover:w-[2px] h-[2px] bg-white opacity-0 group-hover:opacity-100 animate-blink transition-all duration-500"></span>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </nav>
  )
}
