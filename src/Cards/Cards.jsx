/* eslint-disable react/prop-types */
import ShowCard from "../ShowCard/ShowCard";

const Cards = ({ props }) => {
    // items - center text - center justify - center container mx - auto



    return (
        <>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 bg-white h-full
        m-20 
        ">
                {
                    props.map((card) =>
                        <ShowCard key={card.id} card={card} />
                    )
                }

            </div>
            <div className="h-10 bg-white"></div>
        </>

    );
};

export default Cards;