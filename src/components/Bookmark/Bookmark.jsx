import React from 'react';

const Bookmark = ({bookmark,readingTime}) => {
    return (
        <div>
            <h2>Spent time on read: {readingTime} min</h2>
            <h2>Bookmark Blog:{bookmark.length}</h2>
            {
                bookmark.map(blog=><p>{blog.text}</p>)
            }
            <button className='btn-clear'>Clear All</button>
        </div>
    );
};

export default Bookmark;