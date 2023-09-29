import { createContext, useEffect, useState } from 'react';
import Header from '../Header/Header';
import { Outlet } from 'react-router-dom';

export const CardsContext = createContext(null);


const Base = () => {
    const [cards, setCards] = useState([])

    useEffect(() => {
        fetch('donation.json')
        .then(res => res.json())
        .then(data => setCards(data))
    }, [])

    return (
        <CardsContext.Provider value={cards}>

            <div className='bg-white h-screen max-h-full'>
                <Header />
                <Outlet />
            </div>
        </CardsContext.Provider>


    );
};

export default Base;