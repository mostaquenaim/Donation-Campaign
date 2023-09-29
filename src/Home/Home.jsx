import {  useState } from "react";
import Banner from "../Banner/Banner";
import Cards from "../Cards/Cards";
import { useLoaderData } from "react-router-dom";


const Home = () => {
    // const cards = useContext(CardsContext);
    // console.log("cards are",cards)

    const cards = useLoaderData();

    const [selectedCards, setSelectedCards] = useState(cards)
    console.log(selectedCards)

    const handleSearch = (data) => {
        const newCards = cards.filter((card) => card.category.toLowerCase().includes(data.toLowerCase()));
        setSelectedCards(newCards);
    };


    return (
        <div className='bg-white'>
            <Banner
                handleSearch={handleSearch}
            />
            <Cards props={selectedCards} />
        </div>

    );
};

export default Home;
