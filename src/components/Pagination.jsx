import React from 'react';

function Pagination(props) {
    const { page, totalPages, onPageChange } = props

    const handlePageChange = (newPage) => {
        if (!onPageChange) return
        onPageChange(newPage)
    }

    let arrPages = [0, 1, 2, 3, 4]
    switch (page) {
        case 1:
            arrPages = [0, 1, 2, 3, 4]
            break
        case 2:
            arrPages = [-1, 0, 1, 2, 3]
            break
        case 3:
            arrPages = [-2, -1, 0, 1, 2]
            break
        default:
            arrPages = [-2, -1, 0, 1, 2]
    }

    return (
        <div className="pagination">
            <button
                className={`prevBtn page ${page <= 1 ? "disabled" : ""}`}
                disabled={page <= 1}
                onClick={() => handlePageChange(page - 1)}
            >
                <i className="fas fa-chevron-left" />
            </button>

            {arrPages.map(arrPage => (
                <span
                    key={arrPage}
                    className={`page ${page + arrPage === page ? "active-page" : ""}`}
                    onClick={() => handlePageChange(page + arrPage)}
                >
                    {page + arrPage}
                </span>
            ))}

            <button
                className={`nextBtn page ${page >= totalPages ? "disabled" : ""}`}
                disabled={page >= totalPages}
                onClick={() => handlePageChange(page + 1)}
            >
                <i className="fas fa-chevron-right" />
            </button>
        </div>
    );
}

export default Pagination;