import React from 'react'
import axios from 'axios'
import { useState, useEffect } from 'react';
import Post from './Post';
import BeatLoader from "react-spinners/BeatLoader";

export default function PostFeed() {
    const [posts, setPosts] = useState([])
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false)
    const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

    useEffect(() => {
        const fetchData = async () => {
            try {
                await delay(3566);          // Test für Ladebalken sichtbarkeit
                const response = await axios.get('http://localhost:3000/posts');
                setPosts(response.data);
                setLoading(false);
            } catch (error) {
                console.error("Fehler beim Abrufen der Datenbank:", error);
                setError(true);
                setLoading(false);
            }
        };
    
        fetchData();
    }, []);    

    console.log(posts)

    //Laden.....
    if (loading) return (
        <div className="flex h-screen">
            <div className="m-auto">
                <BeatLoader color="#f13f12" size="10" />
            </div>
        </div>
    )

    // Fehler beim Abrufen der Daten
    if (error) return <div>Fehler beim Abrufen der Posts</div>

    // Daten sind geladen
    return (
          <div className='posts-container'>
            <ul>
                {posts.map((posts) => (
                    <Post 
                        key={posts.id}
                        username={posts.username}
                        postcontent={posts.postcontent}
                        timestamp={posts.timestamp}
                    />
                ))}
            </ul>
          </div>
    )
}