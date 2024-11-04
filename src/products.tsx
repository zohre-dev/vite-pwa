import { useState } from "react";
import imgFloatingMenu from "../public/assets/images/floatingMenuImg.svg";
import imgShoppingBag from "../public/assets/images/shoppingBag.svg";
import imgHome from "../public/assets/images/home.svg";
import imgShoppingCart from "../public/assets/images/shoppingCart.svg";
import imgPay from "../public/assets/images/pay.svg";
import imgPayment from "../public/assets/images/payment.svg";
import imgProfle from "../public/assets/images/profile.svg";
import Draggable from "react-draggable";

const Products = () => {
  const [activeDrags, seActiveDrags] = useState<number>(0);
  const onStop = () => {
    seActiveDrags((prev) => prev - 1);
  };
  const onStart = () => {
    seActiveDrags((prev) => prev + 1);
  };
  const dragHandlers = { onStart, onStop };
  return (
    <main className="h-screen flex flex-col  items-center relative">
      <div className="w-full border border-blue-300 h-[150px] shadow-outerBoxShadow bg-gradient-to-r from-[#37B160] to-[#174B29]">
        <div className="h-full -mt-4  pt-8 flex flex-col items-center justify-center gap-[11px] shadow-innerBoxShadow">
          <span className="text-white text-xl">Hello</span>
          <span className="text-white">Welcome Back!</span>
        </div>
      </div>
      <Draggable {...dragHandlers}>
        <img src={imgFloatingMenu} alt="" />
      </Draggable>
      <div className="flex gap-[22px] p-5 bg-[linear-gradient(132.76deg,rgba(255, 255, 255, 0.3)_3.98%,rgba(115, 115, 115, 0.3)_98.45%)]  border-2 rounded-[20px]">
        <div className="flex flex-col gap-[15px]">
          <div className="flex flex-col items-center justify-center">
            <img src={imgShoppingCart} className="w-8 h-8" />
            <span>Cart</span>
          </div>
          <div className="flex flex-col items-center justify-center">
            <img src={imgProfle} className="w-8 h-8" />
            <span>Profile</span>
          </div>
        </div>

        <div className="flex flex-col gap-[15px]">
          <div className="flex flex-col items-center justify-center">
            <img src={imgHome} className="w-8 h-8" />
            <span>Home</span>
          </div>

          <div className="flex flex-col items-center justify-center">
            <img src={imgPayment} className="w-8 h-8" />
            <span>Payment</span>
          </div>
        </div>
        <div className="flex flex-col gap-[15px]">
          <div className="flex flex-col items-center justify-center">
            <img src={imgShoppingBag} className="w-8 h-8" />
            <span>Orders</span>
          </div>
          <div className="flex flex-col items-center justify-center">
            <img src={imgPay} className="w-8 h-8" />
            <span>Pay</span>
          </div>
        </div>
      </div>
    </main>
  );
};
export default Products;
