import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Dashboard from './Dashboard/Dashboard'
import LogIn from './LogIn/LogIn'
import Wrapper from './Wrapper'
import Assets from './Components/Assets'
import Components from './Components/Components'
import Maintenance from './Components/Maintenance'
import Depreciation from './Components/Depreciation'
import AssetType from './Components/AssetType'
import Brand from './Components/Brand'
import Supplier from './Components/Supplier'
import Location from './Components/Location'
import Employees from './Components/Employees'
import Department from './Components/Department'
import Reports from './Components/Reports'
import Users from './Components/Setting/Users'
import Application from './Components/Setting/Application'
import AssetActivityReports from './Components/Reports/AssetActivityReports'
import MaintenanceReport from './Components/Reports/MaintenanceReport'
import ReportByStatus from './Components/Reports/ReportByStatus'
import ReportByLocation from './Components/Reports/ReportByLocation'
import ComponentActivityReport from './Components/Reports/ComponentActivityReport'
import ReportByType from './Components/Reports/ReportByType'
import ReportBySupplier from './Components/Reports/ReportBySupplier'


function App() {

  return (
   <BrowserRouter>
   <Routes>
    
    <Route path='/' element={<LogIn/>}/>
    <Route path='/' element={<Wrapper/>}> 
    <Route path='/dashboard' element={<Dashboard/>}/>
    <Route path='/assets' element={<Assets/>}/>
    <Route path='/component' element={<Components/>}/>
    <Route path='/maintenance' element={<Maintenance/>}/>
    <Route path='/depreciation' element={<Depreciation/>}/>
    <Route path='/asset-type' element={<AssetType/>}/>
    <Route path='/brand' element={<Brand/>}/>
    <Route path='/supplier' element={<Supplier/>}/>
    <Route path='/location' element={<Location/>}/>
    <Route path='/employees' element={<Employees/>}/>
    <Route path='/department' element={<Department/>}/>
    <Route path='/report' element={<Reports/>}/>
    <Route path='/setting/users' element={<Users/>}/>
    <Route path='/setting/application' element={<Application/>}/>
    <Route path='/report/asset-activity-report' element={<AssetActivityReports/>}/>
    <Route path='/report/maintenance-report' element={<MaintenanceReport/>}/>
    <Route path='/report/report-by-status' element={<ReportByStatus/>}/>
    <Route path='/report/report-by-location' element={<ReportByLocation/>}/>
    <Route path='/report/component-activity-report' element={<ComponentActivityReport/>}/>
    <Route path='/report/report-by-type' element={<ReportByType/>}/>
    <Route path='/report/report-by-supplier' element={<ReportBySupplier/>}/>


    </Route>
   </Routes>
   </BrowserRouter>
  )
}

export default App
