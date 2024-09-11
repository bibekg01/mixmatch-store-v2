import { IoMdClose } from "react-icons/io";
import ItemCart from "../Components/ItemCart";
import { useSelector } from "react-redux";
import { useState } from "react";
import { FaShoppingCart } from "react-icons/fa";



const Cart = () => {
  const [activeCart, setActiveCart] = useState(false);

  const cartItems = useSelector((state) => state.cart.cart);
  console.log(cartItems);
  const cartCount = useSelector((state) => state.cart.cartCount)

  return (
    <>
      <div
        className={`fixed right-0 top-0 bg-white w-full lg:w-[20vw] h-[85vh] ${
          activeCart ? "translate-x-0" : "translate-x-full"
        } transsition-all duration-500`}
      >
        <div className="flex justify-between items-center my-3 p-5 ">
          <span className="text-xl font-bold text-gray-800">My Order</span>
          <IoMdClose
            onClick={() => setActiveCart(false)}
            className="border-2 border-gray-600 font-bold p-1 text-xl rounded-md hover:text-red-300 cursor-pointer"
          />
        </div>
        {
            cartItems.length > 0 ? cartItems.map((food)=>{
                return  <ItemCart key={food.id} title={food.title} price={food.price} image={food.image} quantity={food.quantity}/>
            }) : <p className="text-center font-bold text-gray-800">No Items</p>
        }

        <div className="absolute bottom-0 items-center p-5">
          <h3 className="font-semibold text-gray-800">Items : </h3>
          <h3 className="font-semibold text-gray-800">Total Amount : </h3>
          <hr className="w-[90vw] lg:w-[18vw] my-2" />
          <button className="bg-green-500 font-bold mb-5 px-3 text-white py-2 rounded-lg w-[90vw] lg:w-[18vw]">
            Check Out
          </button>
        </div>
      </div>

        <div onClick={() => setActiveCart(true)} onDoubleClick={() => setActiveCart(false)} className="fixed cursor-pointer lg:right-24 right-12 top-[80vh] md:top-[87vh]  bg-red-700 px-5 py-2 rounded-full opacity-70">
          <p className=" font-bold pl-6 text-white text-xl ">
            {cartCount}
          </p>
          <FaShoppingCart className=" text-3xl text-white" />
        </div>
    </>
  );
};

export default Cart;
