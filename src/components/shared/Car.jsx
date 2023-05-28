import React from "react";
import {RiCloseLine, RiDeleteBin6Line} from "react-icons/ri";
const Car = (props) => {
    const {showOrder, setShowOrder} = props;
    return (
        <div
            className={`lg:col-span-2 fixed top-0 bg-[#1F1D2B] w-full lg:w-96 lg:right-0 h-full transition-all z-50 ${showOrder ? "right-0" : "-right-full"}`}>
            {/* Order */}
            <div className={"relative pt-16 lg:pt-8 text-gray-300 p-8 h-full"}>
                <RiCloseLine onClick={() => setShowOrder(false)}
                             className={"absolute left-4 top-4 text-xl p-3 box-content text-gray-300 bg-[#262837] rounded-full lg:hidden"}/>
                <h1 className={"text-2xl my-4"}>Order #761834925</h1>

                {/* Pills */}
                <div className={"flex items-center gap-4 flex-wrap mb-8"}>
                    <button className={"bg-[#ec7c6a] text-white py-2 px-4 rounded-xl"}>
                        Dine in
                    </button>
                    <button className={"text-[#ec7c6a] py-2 px-4 rounded-xl border border-gray-800"}>
                        To go
                    </button>
                    <button className={"text-[#ec7c6a] py-2 px-4 rounded-xl border border-gray-800"}>
                        Delivery
                    </button>
                </div>

                {/* Car */}
                <div>
                    <div className={"grid grid-cols-6 mb-4 p-4"}>
                        <h5 className={"col-span-4"}>Item</h5>
                        <h5>Qty</h5>
                        <h5>Price</h5>
                    </div>

                    {/* Products */}
                    <div className={"h-[400px] md:h-[700px] lg:h-[600px] overflow-scroll"}>

                        {/* Product */}
                        <div className={"bg-[#262837] p-4 rounded-xl mb-4"}>
                            <div className={"grid grid-cols-6 mb-4"}>
                                {/* Product Description */}
                                <div className={"col-span-4 flex items-center gap-3"}>
                                    <img src={"comida.png"} alt={""} className={"w-10 h-10 object-cover"}/>
                                    <div>
                                        <h5 className={"text-sm"}>Spicy season...</h5>
                                        <p className={"text-xs text-gray-500"}>$2.29</p>
                                    </div>
                                </div>

                                {/* Qty */}
                                <div>
                                    <span>2</span>
                                </div>

                                {/* Price */}
                                <div>
                                    <span>$4.58</span>
                                </div>
                            </div>

                            {/* Notes */}
                            <div className={"grid grid-cols-6 items-center"}>
                                <form className={"col-span-5 pr-4"}>
                                    <input
                                        type="text"
                                        className={"bg-[#1F1D2B] py-2 px-4 rounded-lg outline-none w-full text-gray-300"}
                                        placeholder={"Add a note"}
                                    />
                                </form>
                                <div className={""}>
                                    <button className={"border border-[#ec7c6a] p-2 rounded-lg"}>
                                        <RiDeleteBin6Line className={"text-[#ec7c6a]"}/>
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div className={"bg-[#262837] p-4 rounded-xl mb-4"}>
                            <div className={"grid grid-cols-6 mb-4"}>
                                {/* Product Description */}
                                <div className={"col-span-4 flex items-center gap-3"}>
                                    <img src={"comida.png"} alt={""} className={"w-10 h-10 object-cover"}/>
                                    <div>
                                        <h5 className={"text-sm"}>Spicy season...</h5>
                                        <p className={"text-xs text-gray-500"}>$2.29</p>
                                    </div>
                                </div>

                                {/* Qty */}
                                <div>
                                    <span>2</span>
                                </div>

                                {/* Price */}
                                <div>
                                    <span>$4.58</span>
                                </div>
                            </div>

                            {/* Notes */}
                            <div className={"grid grid-cols-6 items-center"}>
                                <form className={"col-span-5 pr-4"}>
                                    <input
                                        type="text"
                                        className={"bg-[#1F1D2B] py-2 px-4 rounded-lg outline-none w-full text-gray-300"}
                                        placeholder={"Add a note"}
                                    />
                                </form>
                                <div className={""}>
                                    <button className={"border border-[#ec7c6a] p-2 rounded-lg"}>
                                        <RiDeleteBin6Line className={"text-[#ec7c6a]"}/>
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div className={"bg-[#262837] p-4 rounded-xl mb-4"}>
                            <div className={"grid grid-cols-6 mb-4"}>
                                {/* Product Description */}
                                <div className={"col-span-4 flex items-center gap-3"}>
                                    <img src={"comida.png"} alt={""} className={"w-10 h-10 object-cover"}/>
                                    <div>
                                        <h5 className={"text-sm"}>Spicy season...</h5>
                                        <p className={"text-xs text-gray-500"}>$2.29</p>
                                    </div>
                                </div>

                                {/* Qty */}
                                <div>
                                    <span>2</span>
                                </div>

                                {/* Price */}
                                <div>
                                    <span>$4.58</span>
                                </div>
                            </div>

                            {/* Notes */}
                            <div className={"grid grid-cols-6 items-center"}>
                                <form className={"col-span-5 pr-4"}>
                                    <input
                                        type="text"
                                        className={"bg-[#1F1D2B] py-2 px-4 rounded-lg outline-none w-full text-gray-300"}
                                        placeholder={"Add a note"}
                                    />
                                </form>
                                <div className={""}>
                                    <button className={"border border-[#ec7c6a] p-2 rounded-lg"}>
                                        <RiDeleteBin6Line className={"text-[#ec7c6a]"}/>
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div className={"bg-[#262837] p-4 rounded-xl mb-4"}>
                            <div className={"grid grid-cols-6 mb-4"}>
                                {/* Product Description */}
                                <div className={"col-span-4 flex items-center gap-3"}>
                                    <img src={"comida.png"} alt={""} className={"w-10 h-10 object-cover"}/>
                                    <div>
                                        <h5 className={"text-sm"}>Spicy season...</h5>
                                        <p className={"text-xs text-gray-500"}>$2.29</p>
                                    </div>
                                </div>

                                {/* Qty */}
                                <div>
                                    <span>2</span>
                                </div>

                                {/* Price */}
                                <div>
                                    <span>$4.58</span>
                                </div>
                            </div>

                            {/* Notes */}
                            <div className={"grid grid-cols-6 items-center"}>
                                <form className={"col-span-5 pr-4"}>
                                    <input
                                        type="text"
                                        className={"bg-[#1F1D2B] py-2 px-4 rounded-lg outline-none w-full text-gray-300"}
                                        placeholder={"Add a note"}
                                    />
                                </form>
                                <div className={""}>
                                    <button className={"border border-[#ec7c6a] p-2 rounded-lg"}>
                                        <RiDeleteBin6Line className={"text-[#ec7c6a]"}/>
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div className={"bg-[#262837] p-4 rounded-xl mb-4"}>
                            <div className={"grid grid-cols-6 mb-4"}>
                                {/* Product Description */}
                                <div className={"col-span-4 flex items-center gap-3"}>
                                    <img src={"comida.png"} alt={""} className={"w-10 h-10 object-cover"}/>
                                    <div>
                                        <h5 className={"text-sm"}>Spicy season...</h5>
                                        <p className={"text-xs text-gray-500"}>$2.29</p>
                                    </div>
                                </div>

                                {/* Qty */}
                                <div>
                                    <span>2</span>
                                </div>

                                {/* Price */}
                                <div>
                                    <span>$4.58</span>
                                </div>
                            </div>

                            {/* Notes */}
                            <div className={"grid grid-cols-6 items-center"}>
                                <form className={"col-span-5 pr-4"}>
                                    <input
                                        type="text"
                                        className={"bg-[#1F1D2B] py-2 px-4 rounded-lg outline-none w-full text-gray-300"}
                                        placeholder={"Add a note"}
                                    />
                                </form>
                                <div className={""}>
                                    <button className={"border border-[#ec7c6a] p-2 rounded-lg"}>
                                        <RiDeleteBin6Line className={"text-[#ec7c6a]"}/>
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div className={"bg-[#262837] p-4 rounded-xl mb-4"}>
                            <div className={"grid grid-cols-6 mb-4"}>
                                {/* Product Description */}
                                <div className={"col-span-4 flex items-center gap-3"}>
                                    <img src={"comida.png"} alt={""} className={"w-10 h-10 object-cover"}/>
                                    <div>
                                        <h5 className={"text-sm"}>Spicy season...</h5>
                                        <p className={"text-xs text-gray-500"}>$2.29</p>
                                    </div>
                                </div>

                                {/* Qty */}
                                <div>
                                    <span>2</span>
                                </div>

                                {/* Price */}
                                <div>
                                    <span>$4.58</span>
                                </div>
                            </div>

                            {/* Notes */}
                            <div className={"grid grid-cols-6 items-center"}>
                                <form className={"col-span-5 pr-4"}>
                                    <input
                                        type="text"
                                        className={"bg-[#1F1D2B] py-2 px-4 rounded-lg outline-none w-full text-gray-300"}
                                        placeholder={"Add a note"}
                                    />
                                </form>
                                <div className={""}>
                                    <button className={"border border-[#ec7c6a] p-2 rounded-lg"}>
                                        <RiDeleteBin6Line className={"text-[#ec7c6a]"}/>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Submit payment */}
                <div className={"bg-[#262837] w-full absolute bottom-0 left-0 p-4"}>
                    <div className={"flex items-center justify-between mb-4"}>
                        <span className={"text-gray-500"}>Discount</span>
                        <span>$0</span>
                    </div>
                    <div className={"flex items-center justify-between mb-6"}>
                        <span className={"text-gray-500"}>SubTotal</span>
                        <span>$201.03</span>
                    </div>
                    <div>
                        <button className={"bg-[#ec7c6a] w-full py-2 px-4 rounded-lg"}>Cotinue to payment
                        </button>
                    </div>
                </div>

            </div>
        </div>
    )
}
export default Car;