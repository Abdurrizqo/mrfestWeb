import React, { useRef } from "react";
import Shopee from "../../assets/shopee.png";
import Tokped from "../../assets/tokped.png";
import { useDraggable } from "react-use-draggable-scroll";

function DetailItem() {
  const ref = useRef(); // We will use React useRef hook to reference the wrapping div:
  const { events } = useDraggable(ref); // Now we pass the reference to the useDraggable hook:
  return (
    <>
      <div className="flex flex-col md:flex md:flex-row md:pt-24 gap-5 items-start md:mx-20 lg:mx-32">
        <div className="w-full shrink-0 md:w-1/2 h-[460px] bg-gray-300">
          <img
            className="w-full h-full object-cover"
            src="https://images.unsplash.com/photo-1658657458810-e9eb5c8e273b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
          />
        </div>

        <div className="md:w-1/2 w-full border-l-2 border-gray-600 mb-2">
          <div
            className=" w-full items-center flex gap-5 px-5 my-5 md:my-0 md:mb-8 overflow-auto removeScroll"
            {...events}
            ref={ref}
          >
            <div className="w-20 h-20 rounded shrink-0">
              <img
                className="w-20 h-20 rounded object-cover"
                src="https://images.unsplash.com/photo-1658730068416-6acbda9814b3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
              />
            </div>

            <div className="w-20 h-20 rounded shrink-0">
              <img
                className="w-20 h-20 rounded object-cover"
                src="https://images.unsplash.com/photo-1658730068416-6acbda9814b3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
              />
            </div>

            <div className="w-20 h-20 rounded shrink-0">
              <img
                className="w-20 h-20 rounded object-cover"
                src="https://images.unsplash.com/photo-1658730068416-6acbda9814b3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
              />
            </div>

            <div className="w-20 h-20 rounded shrink-0">
              <img
                className="w-20 h-20 rounded object-cover"
                src="https://images.unsplash.com/photo-1658730068416-6acbda9814b3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
              />
            </div>

            <div className="w-20 h-20 rounded shrink-0">
              <img
                className="w-20 h-20 rounded object-cover"
                src="https://images.unsplash.com/photo-1658730068416-6acbda9814b3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
              />
            </div>

            <div className="w-20 h-20 rounded shrink-0">
              <img
                className="w-20 h-20 rounded object-cover"
                src="https://images.unsplash.com/photo-1658730068416-6acbda9814b3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
              />
            </div>
          </div>

          <div className="px-8">
            <div className="flex justify-between mb-3">
              <h1 className="text-xl font-bold">Nama Produk</h1>
              <h4 className="text-xl font-bold">200.000</h4>
            </div>
            <h4 className="text-xl">Detail produk</h4>
            <p className="text-base font-light mb-4">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris in
              dignissim augue, in luctus ligula. Vivamus vestibulum erat sed dui
              aliquet, sed venenatis diam venenatis. Lorem ipsum dolor sit amet,
              consectetur adipiscing elit. Mauris in dignissim augue, in luctus
              ligula. Vivamus vestibulum erat sed dui aliquet, sed venenatis
              diam venenatis. Lorem ipsum dolor sit amet, consectetur adipiscing
              elit. Mauris in dignissim augue, in luctus ligula. Vivamus
              vestibulum erat sed dui aliquet, sed venenatis diam venenatis.
            </p>
            <h4 className="text-base font-medium mb-2 text-center">
              Checkout With :
            </h4>
            <div className="flex justify-center gap-3 pt-3">
              <img alt="checkout" src={Shopee} />
              <img alt="checkout" src={Tokped} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default DetailItem;
