// import logo from '../assets/Logo.png'
import { AiOutlinePlus, AiOutlineMinus } from "react-icons/ai";
import { MdDelete } from "react-icons/md";
import { removeFromCart, incrementQty, decrementQty } from "../services/cartSlice";
import { useDispatch } from "react-redux";
import propTypes from 'prop-types'

const ItemCart = ({id, title, price, image, quantity}) => {
    const dispatch = useDispatch();
  return (
    <div className='flex gap-2 shadow-md rounded-lg p-2 mb-3 '>
        <MdDelete onClick={() => dispatch(removeFromCart({id, title, price, image, quantity}))} className='absolute right-7 text-gray-600 cursor-pointer'/>
        <img src={image} alt="" 
        className='w-[50px] h-[50px]'
        />
        <div className='leading-5'>
            <h2 className='font-bold text-gray-800'>{title}</h2>
            <div className='flex justify-between'>
                <span className='text-green-500 font-bold'>$ {price} </span>
                <div className='flex justify-center items-center gap-2 absolute right-7'>
                    <AiOutlineMinus onClick={() => dispatch(decrementQty({id}))} className='border-2 border-gray-600 text-gray-600 hover:bg-green-500 hover:border-nonr rounded-md text-xl transition-all ease-linear cursor-pointer'/>
                    <span className="text-gray-600 text-xl font-bold">{quantity}</span>
                    <AiOutlinePlus onClick={() => dispatch(incrementQty({id}))} className='border-2 border-gray-600 text-gray-600 hover:bg-green-500 hover:border-nonr rounded-md text-xl transition-all ease-linear cursor-pointer'/>
                </div>
            </div>
        </div>
    </div>
  )
}

ItemCart.propTypes = {
  id: propTypes.number,
  title: propTypes.string,
  price: propTypes.number,
  image: propTypes.string,
  quantity: propTypes.number
}

export default ItemCart