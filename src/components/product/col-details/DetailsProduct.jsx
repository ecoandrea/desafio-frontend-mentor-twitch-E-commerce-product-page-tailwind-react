import CartIcon from "@/components/icons/CartIcon";
export default () => {
  return (
    <section className="container mx-auto px-4 md:px-0">
      <p className="font-bold uppercase tracking-wide text-orange-primary">
        Sneaker Company
      </p>
      <h2 className="mb-4 text-3xl font-bold">
        {" "}
        Fall Limited Edition Sneakers
      </h2>
      <p className="text-dark-grayish-blue">
        These low-profile sneakers are your perfect casual wear companion.
        Featuring a durable rubber outer sole, theyll withstand everything the
        weather can offer.
      </p>

      <div className=" mb-5 grid-cols-3 items-center  gap-4 font-bold md:grid-cols-[1fr_3fr]">
        <span className="text-3xl">$125.00</span>
        <span className="mr-auto rounded-md bg-pale-orange py-1 px-2 text-orange-primary">
          50%
        </span>
        <span className=" text-right text-lg text-grayish-blue line-through md:col-span-3 md:text-left">
          $250.00
        </span>
      </div>

      <div className=" md:grid-cols-[1fr_1.7 fr] grid grid-cols-3 gap-4 font-bold">
        <div className="md:col-span-1col-span-3 flex items-baseline justify-between rounded-md bg-gray-200 py-2 px-5 pb-3">
          <button className="text-3xl text-orange-primary">-</button>
          <span className="text-xl">0</span>
          <button className="text-3xl text-orange-primary">+</button>
        </div>
        <button className="col-span-3 flex items-center justify-center gap-x-3 rounded-md bg-orange-primary py-3 text-white md:col-span-1">
          <CartIcon />
          <span>Add to cart</span>
        </button>
      </div>
    </section>
  );
};
