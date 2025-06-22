import React, { use } from 'react'
import { useEffect } from 'react';
import { useLoaderData } from 'react-router-dom';

function GIthub() {

/*
    const [data, setData] = React.useState(null);
    useEffect(() => {
        fetch('https://api.github.com/users/manmayghosh')
        .then((response) => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then((data) => {
            console.log(data);
            setData(data);
        })
    }, []);
*/

    const data = useLoaderData();
    return (
        <div
            className='text-center m-4 bg-gray-600 text-white p-4 text-3xl'
        >
            Github followers: {data ? data.followers : 'Loading...'}
            <br />
            <img src={data ? data.avatar_url : ''} width = {300} alt="Avatar" className='rounded-full w-32 h-32 mt-4' />
            <br />
        </div>
    )
}

export default GIthub

export const githubInfoLoader = async () => {
    const response = await fetch('https://api.github.com/users/manmayghosh')
    return response.json()
}