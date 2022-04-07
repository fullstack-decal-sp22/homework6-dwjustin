import {useState, useEffect} from 'react';
import axios from 'axios';


function Example() {
    const [data, setData] = useState();
  
    const getPostsData = () => {
      axios
        .get('http://localhost:3002/posts') //THIS IS YOUR URL OF YOUR API
        .then((data) => setData(data.data)) //PROMISE API, THAT MEANS WHEN YOU GET THE DATA WHAT DO I DO WITH IT
        .catch((error) => console.log(error)); //ERROR CATCHING IN CASE WE RECEIVE AN ERROR
    };
  
    useEffect(() => {
      getPostsData();
    }, []);
  
    return <p>{data ? JSON.stringify(data[0]) : 'loading'}</p>;
  }

  export default Example;