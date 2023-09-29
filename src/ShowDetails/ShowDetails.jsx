import { useLoaderData, useParams } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import { storeDonatedItems } from "../localstorage";
import 'react-toastify/dist/ReactToastify.css';

const ShowDetails = () => {
    const { id } = useParams();
    const idInt = parseInt(id);
    const cards = useLoaderData();
    const card = cards.find(card => card.id === idInt);
    const { picture, price, text_button_bg, title, description } = card

    const textStyle = {
        backgroundColor: text_button_bg, // Use the card_bg value as the background color
    };

    const notify = () => {
        console.log("id",id)
        const store = storeDonatedItems(card)
        if (store) toast("Donation added");
        else toast("Already donated! Thank you!")
    }

    return (
        <>
            <div className="container my-20 flex flex-col items-center bg-white">
                <figure className="relative w-3/5 rounded-2xl">
                    <img className="w-full rounded-2xl" src={`../${picture}`} alt="" />
                    <div className="absolute bottom-0 left-0 bg-black w-full bg-opacity-50 rounded-b-2xl">
                        <button className="btn btn-primary border-none m-5" style={textStyle} onClick={notify} >Donate {price}</button>
                    </div>
                </figure>
                <div className="my-5 w-3/5">
                    <h1 className="font-bold text-2xl text-black">{title}</h1>
                    <p className="text-black opacity-80">{description}</p>
                </div>

            </div>
            <ToastContainer
            />


        </>
    );
};

export default ShowDetails;