import React from 'react'
import Container from '../components/Container'
import { useSelector } from 'react-redux'

const Process = () => {
  let rdata = useSelector((state)=>state.product.cartItem)
  let {totalPrice, totalQunatity} = rdata.reduce((item, index)=>{
    item.totalPrice += index.price * index.qun
    item.totalQunatity += index.qun
    return item ;
  },{totalPrice: 0, totalQunatity: 0})
  return (
    <section className="py-16 bg-gray-50">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          <div className="bg-white p-8 rounded-lg shadow-md border border-gray-200">
            <h2 className="text-2xl font-bold text-indigo-950 mb-6">Billing & Shipping</h2>
            <form className="space-y-5">
              <div>
                <label className="block text-sm font-medium text-gray-700">Full Name</label>
                <input type="text" className="mt-1 w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Email Address</label>
                <input type="email" className="mt-1 w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Shipping Address</label>
                <textarea rows="3" className="mt-1 w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"></textarea>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Phone Number</label>
                <input type="tel" className="mt-1 w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500" />
              </div>
            </form>
          </div>
          <div className="bg-white p-8 rounded-lg shadow-md border border-gray-200">
            <h2 className="text-2xl font-bold text-indigo-950 mb-6">Order Summary</h2>
            <table className="w-full border border-gray-300 rounded-lg">
              <thead className="bg-gray-100">
                <tr>
                  <th className="text-left px-4 py-3 border-b">Item</th>
                  <th className="text-right px-4 py-3 border-b">Price</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="px-4 py-3 border-b text-gray-700">Subtotal</td>
                  <td className="px-4 py-3 border-b text-right text-gray-800 font-semibold">${totalPrice.toFixed(2)}</td>
                </tr>
                <tr>
                  <td className="px-4 py-3 border-b text-gray-700">Quantity</td>
                  <td className="px-4 py-3 border-b text-right text-gray-800 font-semibold">{totalQunatity}</td>
                </tr>
                <tr>
                  <td className="px-4 py-3 border-b text-gray-700">Shipping</td>
                  <td className="px-4 py-3 border-b text-right text-gray-800 font-semibold">${(totalPrice + 15).toFixed(2)}</td>
                </tr>
                <tr>
                  <td className="px-4 py-3 border-b text-indigo-950 font-bold">Total</td>
                  <td className="px-4 py-3 border-b text-right text-indigo-950 font-bold">$</td>
                </tr>
              </tbody>
            </table>
            <div className="mt-6">
              <h3 className="text-lg font-semibold text-gray-800 mb-3">Payment Method</h3>
              <select className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500">
                <option>Credit/Debit Card</option>
                <option>Cash on Delivery</option>
                <option>Mobile Banking (bKash/Nagad)</option>
              </select>
            </div>
            <button className="mt-8 w-full bg-blue-600 text-white py-3 rounded-md font-semibold hover:bg-blue-500 transition">
              Place Order
            </button>
          </div>
        </div>
      </Container>
    </section>
  )
}

export default Process