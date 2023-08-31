import './App.css';
import './Background.css';
import React, { useState } from 'react';
import Footer from './components/Footer';
import Header from './components/Header';
import Frontpage from './Frontpage';
import Navigation from './components/Navigation'; // Import the Navigation component

function App() {
    const [currentPage, setCurrentPage] = useState("About");

    const handlePageChange = (page) => {
        setCurrentPage(page);
    };

    return (
        <div>
            <Navigation currentPage={currentPage} handlePageChange={handlePageChange} /> {/* Add the Navigation component */}
            <Header />
            <Frontpage />
            <Footer />
        </div>
    )
}

export default App;

