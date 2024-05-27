import React from 'react'

const Application = () => {
  const inputs = [
{
  label :"Company" , placeholder:"" , type:"text"
},
{
  label :"Email" , placeholder:"" , type:"text"
},
{
  label :"Phone" , placeholder:"" , type:"text"
},
{
  label :"Format date" , placeholder:"" , type:"date"
},
{
  label :"Language" , placeholder:"" , type:"dropdown",
  options: [
    { label: 'USA', value: 'USA' },
    { label: 'Canada', value: 'Canada' },
    { label: 'Mexico', value: 'Mexico' },
    { label: 'UK', value: 'UK' }
    
  ]
},
{
  label :"Country" , placeholder:"" , type:"dropdown",
  options: [
    { label: 'USA', value: 'USA' },
    { label: 'Canada', value: 'Canada' },
    { label: 'Mexico', value: 'Mexico' },
    { label: 'UK', value: 'UK' }
    
  ]
},
{
  label :"Currency" , placeholder:"" , type:"text"
},
{
  label :"Address" , placeholder:"" , type:"text"
},
{
  label :"Logo" , placeholder:"" , type:"file"
},
  ]
  return (
    <div
    className="  bg-yellow-50 h-full bg-opacity-75 flex justify-center"

  >
    <div className="bg-white p-6 m-6 rounded-lg shadow-lg w-full  ">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-3xl ">Application setting</h2>
      </div>
      <div>
        <div className={`grid gap-4 ${inputs.length > 4 ? 'grid-cols-2' : 'grid-cols-1'}`}>
          {inputs.map((input, index) => (
            <div key={index} className="mb-4">
              <label htmlFor={`input-${index}`} className="block text-sm font-semibold mb-2">
                {input.label}
              </label>
              {input.type === 'dropdown' ? (
                <select
                  id={`input-${index}`}
                  className="w-full p-2 border border-gray-300 rounded bg-[#fffef0]"
                >
                  {input.options.map((option, idx) => (
                    <option key={idx} value={option.value}>
                      {option.label}
                    </option>
                  ))}
                </select>
              ) : (
                <input
                  type={input.type}
                  id={`input-${index}`}
                  placeholder={input.placeholder}
                  className="w-full p-2 border border-gray-300 rounded bg-[#fffef0]"
                />
              )}
            </div>
          ))}
          <div>
            <img src='/login.png' className='w-[290px]' />
          </div>
        </div>
        <div className="flex  mt-6">
          <button
           
            className="py-2 px-4 border-2 border-cyan-500 text-gray-700 rounded-xl mr-2 hover:bg-cyan-500 hover:text-white transition-all"
          >
            Save
          </button>

        </div>
      </div>
    </div>
  </div>
  )
}

export default Application