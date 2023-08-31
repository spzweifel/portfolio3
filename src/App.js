import './App.css';
import './Background.css';
import React, { useState } from 'react';
import Footer from './components/Footer';
import Header from './components/Header';
import Frontpage from './Frontpage';
import Navigation from './components/Navigation'; 

function App() {
    const [currentPage, setCurrentPage] = useState("About");

    const handlePageChange = (page) => {
        setCurrentPage(page);
    };

    return (
        <div>
            <Navigation currentPage={currentPage} handlePageChange={handlePageChange} />
            <Header />
            <Frontpage />
            <Footer />
        </div>
    )
}

export default App;

