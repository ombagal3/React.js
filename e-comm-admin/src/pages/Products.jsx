import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import {
  fetchProducts,
  addProduct,
  deleteProduct,
} from '../features/products/productSlice'

import Sidebar from '../components/Sidebar'

export default function Products() {
  const dispatch = useDispatch()

  const { products } = useSelector(
    (state) => state.products
  )

  const [name, setName] = useState('')
  const [price, setPrice] = useState('')
  const [category, setCategory] = useState('')
  const [search, setSearch] = useState('')

   useEffect(() => {
    dispatch(fetchProducts())
  }, [])

  const handleAdd = () => {
    dispatch(
      addProduct({
        name,
        price,
        category,
      })
    )
  }

  const filteredProducts = products.filter((item) =>
    item.name.toLowerCase().includes(search.toLowerCase())
  )

  return (
    <div className='flex'>
      <Sidebar />

      <div className='p-6 w-full'>
        <h1 className='text-3xl font-bold mb-5'>
          Products
        </h1>

        <div className='flex gap-3 mb-4'>
          <input
            type='text'
            placeholder='Product Name'
            className='border p-2'
            onChange={(e) => setName(e.target.value)}
          />

            <input
            type='number'
            placeholder='Price'
            className='border p-2'
            onChange={(e) => setPrice(e.target.value)}
          />

          <input
            type='text'
            placeholder='Category'
            className='border p-2'
            onChange={(e) => setCategory(e.target.value)}
          />

          <button
            onClick={handleAdd}
            className='bg-blue-500 text-white px-4'
          >
            Add
          </button>
        </div>

        <input
          type='text'
          placeholder='Search Product'
          className='border p-2 mb-4 w-full'
          onChange={(e) => setSearch(e.target.value)}
        />

        <table className='w-full bg-white shadow'>
          <thead className='bg-gray-200'>
            <tr>
              <th className='p-3'>Name</th>
              <th className='p-3'>Price</th>
              <th className='p-3'>Category</th>
              <th className='p-3'>Action</th>
            </tr>
          </thead>

          <tbody className='text-center'>
            {filteredProducts.map((item) => (
              <tr key={item.id}>
                <td className='p-3'>{item.name}</td>
                <td className='p-3'>₹{item.price}</td>
                <td className='p-3'>{item.category}</td>

                <td className='p-3'>
                  <button
                    onClick={() => dispatch(deleteProduct(item.id))}
                    className='bg-red-500 text-white px-3 py-1 rounded'
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}