import React, { useEffect, useState } from 'react';
import {useDispatch, useSelector} from 'react-redux'
import './App.css';
import { IOnePost } from './posts'
import PostItem from './components/PostItem'
import {success} from './redux/actions/postAction'
import {IStore} from './redux/state/store'

function App() {
  const [news, setNews] = useState<IOnePost[]>([]);
  const dispatch = useDispatch();
  const correntState = useSelector<IStore, IOnePost[]>((state) => state.posts.data);




  useEffect(function () {
    fetch('https://jsonplaceholder.typicode.com/posts/').then(function (result) {
        return result.json();
    })
        .then((data) => {
          dispatch(success(data));
        })
        .catch(function (err) {
        });
  }, []);

  return (
    <div className="App">
      {correntState.map((e) => {return (
        <div key={e.id}>
          <PostItem data = {e}/>
        </div>
      )})}
    </div>
  );
}

export default App;
