import React from 'react'
import Navbar from './Navbar'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from "./Home"
import Hatch from "./Hatch"
import Sedan from "./Sedan"
import SUV from './SUV'
import Detail from './Detail'
import { Context } from './Context'
import ScrollToTop from './ScrollToTop'
import PageNotFound from './PageNotFound'


const App = () => {
  return (
    <Context>
      <Router>
        <ScrollToTop />
        <Navbar />
        <Routes>
          <Route path='' element={<Home />} />
          <Route path='/Home' element={<Home />} />
          <Route path='/Category/Hatch' element={<Hatch />} />
          <Route path='Category/Sedan' element={<Sedan />} />
          <Route path='/Category/SUV' element={<SUV />} />
          <Route path='/Category/:type/Article/:id' element={<Detail />} />
          <Route path='/*' element={<PageNotFound />} />


        </Routes>
      </Router>
    </Context>
  )
}

export default App