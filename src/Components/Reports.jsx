import React from 'react'
import { useNavigate } from 'react-router-dom'

const Reports = () => {
  const navigate = useNavigate()
  return (
    <div className='bg-gray-100 shadow-xl p-5 '>
      <div className='text-2xl  border-b  border-gray-400 py-5 text-gray-600'>All reports</div>
      <div className='grid grid-cols-2 gap-5 mt-5   text-lg '>
        
        <div className='border-r border-gray-400 px-5'>
        <p className='border-b border-gray-400 text-[#68B3C8] cursor-pointer flex py-5 items-center' onClick={()=>navigate("/report/asset-activity-report")}>Asset activity report</p>
        <p className='border-b border-gray-400 text-[#68B3C8] cursor-pointer flex py-5 items-center' onClick={()=>navigate("/report/report-by-status")}>Report by status</p>
        <p className='border-b border-gray-400 text-[#68B3C8] cursor-pointer flex py-5 items-center'  onClick={()=>navigate("/report/component-activity-report")} >Component activity report</p>
        <p className='border-b border-gray-400 text-[#68B3C8] cursor-pointer flex py-5 items-center' onClick={()=>navigate("/report/report-by-supplier")}>Report by supplier</p>
        </div>
        <div>
        <p className='border-b border-gray-400 text-[#68B3C8] cursor-pointer flex py-5 items-center' onClick={()=>navigate("/report/maintenance-report")}>Maintenance report</p>
        <p className='border-b border-gray-400 text-[#68B3C8] cursor-pointer flex py-5 items-center' onClick={()=>navigate("/report/report-by-location")}>Report by location</p>
        <p className='border-b border-gray-400 text-[#68B3C8] cursor-pointer flex py-5 items-center' onClick={()=>navigate("/report/report-by-type")}>Report by type</p>
        </div>
      </div>
    </div>
  )
}

export default Reports