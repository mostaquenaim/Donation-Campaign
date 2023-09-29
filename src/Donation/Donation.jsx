import { useState } from "react";
import ShowDonationDetails from "./ShowDonationDetails";
import { getStoredItems } from "../localstorage";
import { Link } from "react-router-dom";

const Donation = () => {
    const cards = getStoredItems()
    const [maxCard,setMaxCard] = useState(4)

    // useEffect(()=>{
    //     setCards(getStoredItems())
    // },[])
    return (
        <div className="bg-white">
        {
            cards.length === 0 && 
            <div className="flex flex-col items-center text-center justify-center gap-5 h-screen text-black font-bold bg-white">
               <h1 className="text-3xl">You have not donated yet</h1>
               <Link className="text-xl text-blue-900 hover:text-3xl duration-500" to='/'>Donate now</Link>
            </div>
        }
            <div className="w-5/6 grid lg:grid-cols-2 gap-5 items-center mx-auto my-10 bg-white">
                {
                    cards.slice(0, maxCard).map((card) => <ShowDonationDetails key={card.id} card={card} />)
                }
            </div>
            {
                cards.length > maxCard ?
                    <div className="text-center">
                        <button className="bg-green-700 text-center p-3 m-5 rounded-lg text-white px-5" onClick={() => setMaxCard(cards.length)}>See all</button>
                    </div>
                    : ''
            }
            <div className="h-10 bg-white"></div>

        </div>

    );
};

export default Donation;