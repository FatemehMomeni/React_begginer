import React, { useState, useEffect, useCallback } from "react";
import Button from "../Button/Button";
import './Blog.css';


const Blog = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [pageCounts, setPageCounts] = useState(0);
  const [activePageNumber, setActivePageNumber] = useState(1);

  const loadPosts = async () => {
    setLoading(true);
    const responsePosts = await fetch('http://www.mocky.io/v3/3e3c59f9-2596-4d5e-941e-7fcd96ba4557');
    const posts = await responsePosts.json();
    await setPosts(posts);
    setLoading(false);
    console.log("posts: ", posts);    
  };

  useEffect(() => {
    loadPosts();
  }, []);

  const calculatePageCounts = useCallback(() => {
    if (posts.length % 3 > 0) {
      return parseInt(posts.length / 3 + 1);
    }
    return parseInt(posts.length / 3);
  }, [posts]);

  useEffect(() => {
    setPageCounts(calculatePageCounts());
  }, [posts, calculatePageCounts])
  
  const handleClickOnPages = useCallback((pageNumber) => {
    setActivePageNumber(pageNumber);
  }, []);

  return (
    <div className="Blog">
      {loading && <div>در حال بارگذاری</div>}
      {posts.length === 0 && !loading && <div>پستی وجود ندارد</div>}
      {posts.length > 0 && (
        <>
          <ul>
            {posts.slice(3 * (activePageNumber-1), 3 * activePageNumber).map((post) => (
              <li className="blogItem" key={`post-${post.id}`}>
                <h3>{post.title}</h3>
                <p>{post.content}</p>
              </li>
            ))}
          </ul>
        </>
      )}
      <div>
        <ul className="Pagination">
          {new Array(pageCounts).fill(0).map((item, index) => (
            <li className={activePageNumber === index + 1 ? "active" : ""}>
              <Button handleClick={() => handleClickOnPages(index+1)}>
                {index + 1}
              </Button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Blog;