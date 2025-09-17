import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './components/Home'
import LeaveReportPage from './components/LeaveReportPage'
import LeaveReportPage2 from './components/LeaveReportPage2'
import LeaveReportPage3 from './components/LeaveReportPage3'
import LeaveReportPage4 from './components/LeaveReportPage4'
import LeaveReportPage5 from './components/LeaveReportPage5'
import './index.css'

export default function App() {
  return (
    <div className="app">
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/1" element={<LeaveReportPage />} />
          <Route path="/2" element={<LeaveReportPage2 />} />
          <Route path="/3" element={<LeaveReportPage3 />} />
          <Route path="/4" element={<LeaveReportPage4 />} />
          <Route path="/5" element={<LeaveReportPage5 />} />
        </Routes>
      </Router>
    </div>
  )
}
