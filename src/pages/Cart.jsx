import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Container from '../components/Container'
import { decrement, increment, productRemove } from '../components/slice/productSlice'
import { BsFillCartXFill } from 'react-icons/bs'
import { Link } from 'react-router-dom'

const Cart = () => {
  const rdata = useSelector((state) => state.product.cartItem)
  const dispatch = useDispatch()

  let {totalPrice, totalQuantity} = rdata.reduce((item, index)=>{
    item.totalPrice += index.price * index.qun
    item.totalQuantity += index.qun
    return item ;
  },{totalPrice: 0, totalQuantity: 0})

  return (
    <section className="py-16">
      <Container>
        {rdata.length > 0 ? (
          <div>
            <div className="overflow-x-auto rounded-lg shadow-md">
              <table className="min-w-full bg-white border border-gray-200">
                <thead className="bg-gray-100">
                  <tr className="text-left text-indigo-950 font-bold text-lg">
                    <th className="px-6 py-4">Product</th>
                    <th className="px-6 py-4">Price</th>
                    <th className="px-6 py-4">Remove</th>
                    <th className="px-6 py-4">Total</th>
                    <th className="px-6 py-4">Quantity</th>
                  </tr>
                </thead>
                <tbody>
                  {rdata.map((item) => (
                    <tr key={item.id} className="border-t-2 border-[#0000001d] hover:bg-gray-50 transition">
                      <td className="px-6 py-4 flex items-center gap-4">
                        <img src={item.image} alt={item.title} className="h-20 w-20 object-contain" />
                        <tr>
                          <h2 className="font-semibold font-jose text-indigo-950">{item.title}</h2>
                          <h3 className="font-medium font-lat text-gray-600">{item.category}</h3>
                        </tr>
                      </td>
                      <td className="px-6 py-4 text-gray-700 font-semibold">${item.price}</td>
                      <td className="px-6 py-4">
                        <button
                          onClick={() => dispatch(productRemove(item))}
                          className="text-red-500 hover:text-red-400 font-semibold cursor-pointer">
                          Remove
                        </button>
                      </td>
                      <td className="px-6 py-4 font-semibold text-gray-800">
                        ${(item.price * item.qun).toFixed(2)}
                      </td>
                      <td className="px-6 py-4">
                        <div className="flex items-center gap-3">
                          <button
                            onClick={() => dispatch(decrement(item))}
                            className="px-2 py-1 bg-gray-200 rounded hover:bg-gray-300 cursor-pointer">
                            -
                          </button>
                          <span className="font-medium">{item.qun}</span>
                          <button
                            onClick={() => dispatch(increment(item))}
                            className="px-2 py-1 bg-gray-200 rounded hover:bg-gray-300 cursor-pointer">
                            +
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <table className="w-full max-w-xl ml-auto mt-10 border border-gray-300 rounded-lg shadow-md bg-white">
              <thead className="bg-gray-100">
                <tr>
                  <th className="text-left px-6 py-4 text-indigo-950 font-bold text-lg border-b border-gray-300">Summary</th>
                  <th className="text-right px-6 py-4 text-indigo-950 font-bold text-lg border-b border-gray-300">Amount</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="px-6 py-4 text-gray-700 font-medium border-b border-gray-200">Subtotal</td>
                  <td className="px-6 py-4 text-right text-gray-800 font-semibold border-b border-gray-200">${totalPrice.toFixed(2)}</td>
                </tr>
                <tr>
                  <td className="px-6 py-4 text-gray-700 font-medium border-b border-gray-200">Total Quantity</td>
                <td className="px-6 py-4 text-right text-gray-800 font-semibold border-b border-gray-200">{totalQuantity}</td>
                </tr>
                <tr>
                  <td className="px-6 py-4 text-gray-700 font-medium border-b border-gray-200">Shipping</td>
                  <td className="px-6 py-4 text-right text-gray-800 font-semibold border-b border-gray-200">$15.00</td>
                </tr>
                <tr>
                  <td className="px-6 py-4 text-indigo-950 font-bold border-b border-gray-300">Total</td>
                  <td className="px-6 py-4 text-right text-indigo-950 font-bold border-b border-gray-300">
                    ${(totalPrice + 15).toFixed(2)}
                  </td>
                </tr>
                <tr>
                  <td colSpan="2" className="px-6 py-4 text-center">
                    <Link to={"/checkout"} className="w-full bg-blue-600 text-white py-3 rounded hover:bg-blue-500 transition font-semibold inline-block">
                      Process to Checkout
                    </Link>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        ) : (
          <div className="text-center py-12">
            <div className="flex items-center justify-center gap-2 pb-6">
              <h2 className="text-4xl font-bold font-jose text-indigo-950">Your cart is Empty</h2>
              <BsFillCartXFill className="text-xl text-indigo-950" />
            </div>
            <Link
              to="/products"
              className="bg-indigo-950 text-white px-8 py-3 rounded font-semibold hover:bg-indigo-800 text-md transition">
               Continue Shopping
            </Link>
          </div>
        )}
      </Container>
    </section>
  )
}

export default Cart