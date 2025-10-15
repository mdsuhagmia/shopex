import React from 'react'
import Container from './Container'
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaTwitter } from 'react-icons/fa'

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 pt-10">
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
        <div>
          <h1 className='text-white text-4xl font-extrabold font-jose pb-4'>Shopex</h1>
          <p className="text-gray-400">
            We provide exclusive products with premium quality, fast delivery, and guaranteed customer satisfaction.
          </p>
          <div className="flex gap-4 mt-4">
            <a href="#" className="hover:text-white"><FaFacebookF /></a>
            <a href="#" className="hover:text-white"><FaTwitter /></a>
            <a href="#" className="hover:text-white"><FaInstagram /></a>
            <a href="#" className="hover:text-white"><FaLinkedinIn /></a>
          </div>
        </div>
        <div>
          <h3 className="text-white font-semibold mb-3">Quick Links</h3>
          <ul className="space-y-2">
            <li><a href="/" className="hover:text-white">Home</a></li>
            <li><a href="/products" className="hover:text-white">Products</a></li>
            <li><a href="/blog" className="hover:text-white">Blog</a></li>
            <li><a href="/aboutus" className="hover:text-white">About Us</a></li>
            <li><a href="/contact" className="hover:text-white">Contact</a></li>
          </ul>
        </div>
        <div>
          <h3 className="text-white font-semibold mb-3">Customer Service</h3>
          <ul className="space-y-2">
            <li><a href="#" className="hover:text-white">FAQs</a></li>
            <li><a href="#" className="hover:text-white">Shipping & Delivery</a></li>
            <li><a href="#" className="hover:text-white">Returns & Refunds</a></li>
            <li><a href="#" className="hover:text-white">Support</a></li>
          </ul>
        </div>
        <div>
          <h3 className="text-white font-semibold mb-3">Contact Us</h3>
          <p className="text-gray-400">01731-378743</p>
          <p className="text-gray-400">mdshohagmia53200@gmail.com</p>
          <p className="text-gray-400">Jamalpur Sadar, Mymensingh, Bangladesh</p>
        </div>
      </div>
      <div className="border-t-2 border-gray-800 mt-8 py-4 text-center text-gray-300 text-sm">
        © 2025 Shopex. All rights reserved.
      </div>
      </Container>
    </footer>
  )
}

export default Footer