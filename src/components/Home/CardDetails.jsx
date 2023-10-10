import { useEffect, useState } from "react";
import { useLoaderData, useParams, useSearchParams } from "react-router-dom";
import Card from "./Card";

const CardDetails = () => {
    const [card, setCard] = useState();
    const {id} = useParams();
    console.log(id);
    const cards = useLoaderData();
    console.log(cards);
    useEffect(()=>{
        const findCard = cards?.find((card)=> card.id == id)
        setCard(findCard);


    },[id, cards])
    console.log(card);
    return (
        <div>
            <Card card={card}></Card>
        </div>
    );
};

export default CardDetails;