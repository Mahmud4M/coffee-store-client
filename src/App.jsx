import { Link, useLoaderData } from 'react-router-dom'
import './App.css'
import ReadCoffee from './Components/ReadCoffee'
import { TbCup } from "react-icons/tb";
import { useState } from 'react';

function App() {
  const loadCoffees = useLoaderData()
  const [coffees, setCoffees] = useState(loadCoffees);

  return (
    <>
      <div className='text-center space-y-3 mt-10'>
        <div>
          <h1 className='font-raleway'>--- Sip & Savor ---</h1>
        </div>
        <div>
          <h1 className="text-3xl font-rancho font-medium">Our Popular Products</h1>
        </div>
        <div>
          <Link to="/addCoffee">
            <button className='btn bg-[#d2b48c] font-rancho'>
              Add Coffee
              <TbCup />
            </button>
          </Link>
        </div>
      </div>
      {/* Card */}
      <div className="grid grid-cols-3 gap-2 mt-10 px-16">
        {
          coffees.map(coffee => <ReadCoffee
            key={coffee._id}
            coffee={coffee}
            coffees={coffees}
            setCoffees={setCoffees}
          ></ReadCoffee>)
        }
      </div>
    </>
  )
}

export default App
