import React from 'react'

export default function Footer() {
  return (
    <div>
        <footer className="bg-gray-800 flex justify-center items-center w-full text-white text-center">
            <div className='p-4'>
            <p>Follow us on social media:</p>
            <div className="flex justify-center space-x-4">
                <a href="https://twitter.com" className="text-white hover:text-blue-400">Twitter</a>
                <a href="https://facebook.com" className="text-white hover:text-blue-400">Facebook</a>
                <a href="https://instagram.com" className="text-white hover:text-blue-400">Instagram</a>
            </div>
            <p>&copy; 2025 Nandini App</p>
            </div>
        </footer>
    </div>
  )
}
