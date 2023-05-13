import { useContext } from "react"
import { AiOutlineDelete } from "react-icons/ai"
import { CartContext } from "../contexts/mycartContext"

const ItemCart = (  {
    itemId,
    itemName,
    itemImage,
    itemRating,
   
    itemPrice,
    itemdiscount,
}) => {

    const {removeFromCart} = useContext(CartContext)
  return (
    <div className="flex p-2 space-x-2 border items-center">
        <img src={itemImage} alt={itemName} className="w-20 aspect-square object-fill" />
        <div className="flex-col flex flex-grow"> 
        <h1>{itemName}</h1>

         {/* Price line */}
         <div className="flex space-x-3 items-end">
          <h1 className="text-xl font-semibold">₹{itemPrice}</h1>
          <h1 className="line-through">₹1,289</h1>
          <h1 className="bg-red-500 rounded-lg text-white text-sm py-0.5 px-2">
            {itemdiscount}% off
          </h1>
        </div>
{/* delete button */}


        </div>

        <button onClick={()=>removeFromCart(itemId)} className="bg-gray-200 p-2 rounded-full">
            <AiOutlineDelete size={25}/>
        </button>


      
    </div>
  )
}

export default ItemCart