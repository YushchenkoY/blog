import React, { useEffect, useState } from 'react';
import {useDispatch, useSelector} from 'react-redux'
import './App.css';
import { IOnePost } from './posts'
import PostItem from './components/PostItem'

function App() {
  const [news, setNews] = useState<IOnePost[]>([]);
  const dispatch = useDispatch();
  // const correntState = useSelector((state) => state.posts);




  useEffect(function () {
    fetch('https://jsonplaceholder.typicode.com/posts/').then(function (result) {
        return result.json();
    })
        .then((data) => {

            setNews(data);
        })
        .catch(function (err) {
        });
  }, []);

  return (
    <div className="App">
      {news.map((e) => {return (
        <div key={e.id}>
          <PostItem data = {e}/>
        </div>
      )})}
    </div>
  );
}

export default App;
