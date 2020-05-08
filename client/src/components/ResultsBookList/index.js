import React from 'react';
import BookListCard from '../BookListCard';

export default function ResultsBookList() {
    return (
        <div className="container">
            {/* TODO: render thru multiple results via map? */}
            <ul>
                <BookListCard />
                <BookListCard />
                <BookListCard />
                <BookListCard />
            </ul>
        </div>
    );
}