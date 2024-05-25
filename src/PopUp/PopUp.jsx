import React, { useState } from 'react'
import { RxCross2 } from 'react-icons/rx'

const PopUp =({ heading, buttonText, inputs, open, onClose}) => {

  return (
    <div>
    {open && (
      <div
        className="fixed inset-0 bg-gray-500 bg-opacity-75 flex justify-center items-center"
        style={{ zIndex: 1, overflowY: 'auto' }}
      >
        <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-2xl mx-auto">
          <div className="flex justify-end items-center">
            <RxCross2 className="text-2xl cursor-pointer" onClick={onClose} />
          </div>
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-xl font-semibold">{heading}</h2>
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
            </div>
            <div className="flex justify-end mt-6">
              <button
                onClick={onClose}
                className="py-2 px-4 bg-[#e0e0e0] text-gray-700 rounded mr-2"
              >
                Close
              </button>
              <button
                onClick={onClose}
                className="py-2 px-4 bg-[#673ab7] text-white rounded"
              >
                {buttonText}
              </button>
            </div>
          </div>
        </div>
      </div>
    )}
  </div>
  )
}

export default PopUp 