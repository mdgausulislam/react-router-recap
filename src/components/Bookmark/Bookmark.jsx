import React from 'react';
import './Bookmark.css'

const Bookmark = ({bookmark,readingTime,handleRemoveBookmark}) => {
    return (
        <div>
            <h2>Spent time on read: {readingTime} min</h2>
            <h2>Bookmark Blog:{bookmark.length}</h2>
            {
                bookmark.map(blog=><p 
                key={blog.id}
                >{blog.text}</p>)
            }
            <button onClick={handleRemoveBookmark} className='btn-clear'>Clear All</button>
        </div>
    );
};

export default Bookmark;