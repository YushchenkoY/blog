import { useEffect } from 'react';
import MainLayout from '../../components/MainLayout';
import axios from 'axios';




export default function Posts() {

    useEffect(() => {
        axios.get('https://bloggy-api.herokuapp.com/posts')
            .then(function (response) {
                // handle success
                console.log(response);
            })
            .catch(function (error) {
                // handle error
                console.log(error);
            })
            .then(function () {
                // always executed
            });
    }, []);

    return (
        <MainLayout page={"Posts page"}>
            <div>posts page</div>
        </MainLayout>
    )
}