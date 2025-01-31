import React, { useState } from 'react'
import About from './components/about/About'
import Experience from './components/experience/Experience'
import Myprojects from './components/myprojects/Myprojects'
import Footer from './components/footer/Footer'
import Navbar from './components/navbar/Navbar'
import { AnimatePresence, motion } from "framer-motion";

const App = () => {
  const [currentPage, setCurrentPage] = useState("home");
  const renderComponent = () => {
    switch (currentPage) {
      case "experience": return <Experience />;
      case "myprojects": return <Myprojects />;
      default: return '';
    }
};
    return (
        
        <>
        <About/>
        <Navbar setCurrentPage={setCurrentPage} />
        <div className="content-container">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentPage}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -50 }}
              transition={{ duration: 0.2 }}
            >
            {renderComponent()}
        </motion.div>
        <Footer/>
                </AnimatePresence>
            </div>
    </>
  )
}

export default App