import React, { useState, useEffect } from "react";

const url = "http://jsonplaceholder.typicode.com/posts/?_limit=10";

const Fetcher = () => {
  const [posts, setPosts] = useState([]);

  const getPosts = async () => {
    const celebrity = await fetch(url);
    const r = await celebrity.json();
    setPosts(r);
  };
  useEffect(() => {
    getPosts();
  }, []);
  return (
    <>
      <ul>
        {posts.map((post) => {
          const { userId, id, title, body } = post;

          return (
            <li>
              <p>User ID:{userId}</p>
              <p>ID:{id}</p>
              <h2>TITLE </h2>
              <h2> {title} </h2>

              <h5>body</h5>
              <p>{body}</p>
            </li>
          );
        })}
      </ul>
    </>
  );
};

export default Fetcher;
