import React from 'react';
import Footer from '../components/Footer';
import Header from '../components/Header';
import Products from '../components/Products';


function Home(props) {
    const genre = props.location.id
    console.log(genre)

    return (
        <div className="content">
            <div className="grid">
                {/* Header */}
                <div className="row">
                    <div className="col l-12 m-12 c-12">
                        <Header />
                    </div>
                </div>
                {/* Product */}
                <Products genre={genre} />
                {/* Pagination */}
                <div className="pagination">
                    <span className="prevBtn page">
                        <i className="fas fa-chevron-left" />
                    </span>
                    <span className="page">1</span>
                    <span className="page">2</span>
                    <span className="page">...</span>
                    <span className="page">5</span>
                    <span className="nextBtn page">
                        <i className="fas fa-chevron-right" />
                    </span>
                </div>
                {/* Footer */}
                <Footer />
            </div>
        </div>
    );
}

export default Home;
