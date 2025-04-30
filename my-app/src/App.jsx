import { useState, useEffect } from "react";
import './App.css'



function App() {
  var [posts, setPosts] = useState([]);
  var [load, setLoad] = useState(false);
  const [err, setErr] = useState(false);
  const [page, setPage] = useState(1);


  const getData = (url) => {
    return fetch(url).then((res) => res.json());
  };

  const handleClick = (value) => {
    var updatePage = page + value;
    setPage(updatePage);
    // fetchDataAndUpdate(updatePage);
  };

  useEffect(() => {
    fetchDataAndUpdate(page);
  }, [page]);

  const fetchDataAndUpdate = async (page) => {
    try {
      setLoad(true);
      const data = await getData(
        `https://jsonplaceholder.typicode.com/posts?_limit=10&_page=${page}`
      );
      console.log(data);
      setPosts(data);
      setLoad(false);
    } catch (error) {
      setErr(true);
      setLoad(false);
      console.log(error, error.message);
    }
  };
  if (load) {
    return <h1>Loading...</h1>;
  }

  if (err) {
    return <h1>Something went wrong Error:404 ...</h1>;
  }

  return (
    <div className="App">
      <h1>Todo App</h1>


      {posts.map((el) => (
        <div style={{ border: "2px solid teal", margin: "20px" }}>
          <>
            <h3 style={{
              backgroundColor: "grey", padding: "20px"}}>ID: {el.id}</h3>
             
            <p style={{
              backgroundColor: "green", padding: "20px"}}> Title: {el.title}</p>
             
            <h6 style={{
              backgroundColor: " brown", padding: "20px"  }}> Body: {el.body}</h6>
          </>
        </div>
      ))}
      <button disabled={page == 1} onClick={() => handleClick(-1)}>
        Previous
      </button>
      <button>{page}</button>
      <button onClick={() => handleClick(1)}>Next</button>
    </div>
  );
}

export default App
