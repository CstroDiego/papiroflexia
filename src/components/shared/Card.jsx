import React from "react";

const Card = (props) => {
    const {img, description, price, inventory} = props;
    return (
        <div className={"bg-[#1F1D2B] p-12 rounded-xl flex flex-col items-center text-center text-gray-300 gap-2"}>
            <img src={img} className={"w-40 h-40 object-cover -mt-20 shadow-2xl rounded-full"}
                 alt={""}/>
            <p className={"text-xl"}>{description}</p>
            <span className={"text-gray-400"}>${price}</span>
            <p className={"text-gray-600"}>{inventory} Bowl available</p>
        </div>
    )
}

export default Card;