import React, { useEffect, useState } from 'react'
import BeatLoader from "react-spinners/BeatLoader";
import axios from 'axios';

export default function FetchData() {
    const [datar, setDatar] = useState([])
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false)

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get('http://localhost:3000/datenbank');
                setDatar(response.data);
                setLoading(false);
            } catch (error) {
                console.error("Fehler beim Abrufen der Datenbank:", error);
                setError(true);
                setLoading(false);
            }
        };
    
        fetchData();
    }, []);    

    // console.log(datar)

    //Laden.....
    if (loading) return <BeatLoader color="#f13f12" size="10" />

    // Fehler beim Abrufen der Daten
    if (error) return <div>Fehler beim Abrufen der Daten</div>

    // Daten sind geladen
    return (
          <div><h1>{datar[1].name}</h1></div>
    )
}