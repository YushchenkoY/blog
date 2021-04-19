import MainLayout from '../../components/MainLayout'
import { useDispatch, useSelector } from 'react-redux';
import React, {useEffect, useState} from 'react';
import {sendPostRequest} from '../../redux/actions/postAction'

export default function New() {
    const dispatch = useDispatch();
    const [postTitle, setPostTitle] = useState('');
    const [postBody, setPostBody] = useState('');
    
    const handleButtonClick = (e) => {
        e.preventDefault();
        if (!!postTitle == false || !!postBody == false) return alert('Заполните оба поля')
        dispatch(sendPostRequest(postTitle as string, postBody as string));
    };


    return (
        <MainLayout page={"New post"}>
            <form>
                <input type="text" value={postTitle} onChange={(e) => setPostTitle(e.target.value)} />
                <input type="text" value={postBody} onChange={(e) => setPostBody(e.target.value)} />
                <button onClick={handleButtonClick}>Send</button>
            </form>
        </MainLayout>
    )
}

