"use client";
import { clothing } from "@/app/DataDB";
import { CartContext } from "@/app/contexts/mycartContext";
import React, { useContext, useState } from "react";
import { AiFillStar } from "react-icons/ai";

function ProductDetailsPage({ params }) {
  const [selectSize, setSelectSize] = useState(0);
  const [selectCustomSize, setSelectCustomSize] = useState();
  const [sizeResult, setSizeResult] = useState("");
  const [openSizeBox, setOpenSizeBox] = useState(false);

  const item = clothing.filter((e) => e?.itemId === params?.productName);

  const { mycart, addToCart, removeFromCart } = useContext(CartContext);

  function checkSize() {
    if ((selectCustomSize) => 35 || selectCustomSize < 37) {
      setSizeResult({
        status: "ok",
        size: "S",
        shoulder: "16",
        length: "26.5",
        sleeve: "7",
      });
    }
    if ((selectCustomSize) => 37 || selectCustomSize < 39) {
      setSizeResult({
        status: "ok",
        size: "M",
        shoulder: "16.5",
        length: "27.5",
        sleeve: "7.25",
      });
    }
    if ((selectCustomSize) => 39 || selectCustomSize < 41) {
      setSizeResult({
        status: "ok",
        size: "L",
        shoulder: "17.5",
        length: "28.5",
        sleeve: "7.5",
      });
    }
    if ((selectCustomSize) => 41 || selectCustomSize < 43) {
      setSizeResult({
        status: "ok",
        size: "XL",
        shoulder: "18.5",
        length: "29.5",
        sleeve: "8",
      });
    }

    if (selectCustomSize < 35 || selectCustomSize >= 43) {
      setSizeResult({
        status: "Not Available",
      });
    }
  }

  return (
    <div className="flex flex-row items-start px-10 py-5 space-x-10">
      <img src={item[0]?.itemImage} alt={item[0]?.itemName} className="w-1/3" />

      <div className="flex-col flex flex-1  items-start">
        <p className="font-bold text-gray-400">Duma</p>
        <h1 className="text-2xl">{item[0]?.itemName}</h1>
        {/* Price line */}
        <div className="flex space-x-3 items-end">
          <h1 className="text-3xl font-semibold">₹{item[0]?.itemPrice}</h1>
          <h1 className="line-through">₹1,289</h1>
          <h1 className="bg-red-500 rounded-lg text-white text-sm py-0.5 px-2">
            {item[0]?.itemdiscount}% off
          </h1>
        </div>

        <div className="flex space-x-3 py-5">
          {mycart.findIndex((product) => product.itemId === item[0]?.itemId) ===
          -1 ? (
            <button
              onClick={() => addToCart(item[0])}
              className="bg-green-700 py-1 px-3 rounded-lg text-white "
            >
              Add to cart
            </button>
          ) : (
            <button
              className="bg-gray-400 py-1 px-3 rounded-lg text-white "
              onClick={() => removeFromCart(item[0].itemId)}
            >
              Remove from cart
            </button>
          )}
        </div>

        <div className="flex space-x-3 pb-3 items-end ">
          <h1 className="bg-green-500 rounded-lg text-white text-sm py-0.5 px-2 flex items-center">
            <AiFillStar /> <span>{item[0]?.itemRating} </span>
          </h1>

          <span className="text-gray-500">145 Ratings & Reviews</span>
        </div>
        {/* Size Bar */}
        <h1>Select Size</h1>
        <div className="flex items-center space-x-5">
          <div className="flex rounded-lg border overflow-hidden">
            {item[0]?.itemSize.map((e, i) => (
              <button
                key={e}
                onClick={() => setSelectSize(i)}
                className={`${
                  selectSize === i && "bg-green-500 text-white"
                } py-1 px-3 `}
              >
                {e}
              </button>
            ))}
          </div>

          <button
            className="text-blue-500"
            onClick={() => setOpenSizeBox(!openSizeBox)}
          >
            Size trial
          </button>
        </div>
        {/* trail size */}
        {openSizeBox && (
          <div className="border w-full p-5 rounded-lg flex my-5 space-x-4 ">
            <img
              src="https://rukminim1.flixcart.com/www/240/240/prod/images/sizechart/t_shirt-half_sleeve-men_s-round_neck-d3fa68ae.jpg?q=90"
              alt="size"
            />
            <div className="flex-col flex flex-1">
              <p>Enter Chest Size</p>
              <div className="flex">
                <input
                  type="number"
                  value={selectCustomSize}
                  placeholder="36"
                  className="border p-1 flex-1"
                  onChange={(e) => setSelectCustomSize(Number(e.target.value))}
                />
                <button
                  className="bg-green-500 px-3 text-white"
                  onClick={checkSize}
                >
                  Submit
                </button>
              </div>
              {sizeResult.status === "ok" ? (
                <table className="border">
                  <tr>
                    <th className="p-2">Size</th>
                    <th className="p-2">Shoulder</th>
                    <th className="p-2">Length</th>
                    <th className="p-2">Sleeve</th>
                  </tr>
                  <tr className="text-center">
                    <td className="p-2">{sizeResult.size}</td>
                    <td className="p-2">{sizeResult.shoulder}</td>
                    <td className="p-2">{sizeResult.length}</td>
                    <td className="p-2">{sizeResult.sleeve}</td>
                  </tr>
                </table>
              ) : (
                sizeResult.status
              )}
            </div>
          </div>
        )}

        {/* Description */}

        <h1>Description</h1>
        <p>
         It is a popular type of casual garment that is typically made of lightweight fabric and features short sleeves and a rounded neckline. 
         It is one of the most versatile and widely worn clothing items across the globe. T-shirts are available in various styles, colors, patterns, and designs, catering to diverse fashion preferences.
         The fabric used for t-shirts can vary but is commonly made from cotton or a blend of cotton with other materials like polyester or rayon. Cotton t-shirts are known for their softness, breathability, 
         and comfort, while blended fabrics can offer added durability and stretch. The choice of fabric depends on factors such as desired comfort, durability, and performance.
         T-shirts come in different silhouettes, including crew neck, V-neck, scoop neck, Henley, and more. They can have a loose, relaxed fit or a more fitted style, depending on personal preference and intended use.
         T-shirts are often unisex, suitable for both men and women, but there are also gender-specific designs available.
         T-shirts are a popular canvas for expressing personal style, interests, and affiliations. They can feature various graphics, slogans, logos, or artwork, ranging from plain solid colors to intricate designs. 
         
        </p>
      </div>
    </div>
  );
}

export default ProductDetailsPage;
