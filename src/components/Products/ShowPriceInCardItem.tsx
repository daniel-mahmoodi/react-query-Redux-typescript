

const ShowPriceInCardItem = (props) => {
  const discountedPricePercent = Math.floor(
    ((props.price - props.discountedPrice) / props.price) * 100
  );
  return (
    <div className="text-xs font-bold">
      {props.discountedPrice === props.price ? (
        <div className="flex justify-center items-center">
          <p>
            <span>{props.price.toLocaleString()}</span>
          </p>
          <p className="pl-1 text-orange-500 ">
            <span>price</span>
          </p>
        </div>
      ) : (
        <div className="flex flex-col justify-center items-center">
          <div className="flex justify-center items-center line-through mb-1">
            <p>
              <span className="text-gray-500">{props.price.toLocaleString()}</span>
            </p>
            <p className="pl-1 text-orange-500  ">
              <span>price</span>
            </p>
          </div>
          <div className="flex justify-center items-center">
            <div className="bg-red-600 rounded pt-1 px-1 text-zinc-50">{`%${discountedPricePercent}`}</div>
            <p className=" text-green-500 ">
              <span>{props.discountedPrice.toLocaleString()}</span>
            </p>
            <p className="pl-1 text-orange-500 ">
              <span>price</span>
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

export default ShowPriceInCardItem;