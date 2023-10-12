import React, { useEffect, useState } from 'react';
import Blog from '../Blog/Blog';
import './Home.css'
import Bookmark from '../Bookmark/Bookmark';

const Home = () => {
    const [blogs, setBlogs] = useState([]);
    const [bookmark, setBookmark] = useState([]);
    const [readingTime, setReadingTime] = useState(0);

    useEffect(() => {
        const loadData = async () => {
            const res = await fetch('learning.json');
            const data = await res.json();
            setBlogs(data);
            console.log(data);
        }
        loadData();
    }, [])

    const handleAddToBookmark = (blog) => {
        const newBlog = [...bookmark, blog];
        setBookmark(newBlog);
    }
    const handleAddToRead = (id, time) => {
        const totalTime = readingTime + time;
        setReadingTime(totalTime)
    }
    const handleRemoveBookmark=()=>{
        setBookmark([]);
        setReadingTime(0);
    }


    // useEffect(()=>{
    //     fetch('learning.json')
    //     .then(res=>res.json())
    //     .then(data=>setBlogs(data))
    // },[])


    return (
        <div className='home-container'>
            <div className='blogs-container'>
                {
                    blogs.map(blog => <Blog
                        key={blog.id}
                        blog={blog}
                        handleAddToBookmark={handleAddToBookmark}
                        handleAddToRead={handleAddToRead}
                    ></Blog>)
                }

            </div>
            <div className='order-summary'>
                <Bookmark
                    bookmark={bookmark}
                    readingTime={readingTime}
                    handleRemoveBookmark={handleRemoveBookmark}
                ></Bookmark>

            </div>

        </div>
    );
};

export default Home;