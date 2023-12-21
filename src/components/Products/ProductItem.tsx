import { FunctionComponent, useEffect, useState } from "react";
import { ProductItemType } from "../../repo/models";
import { baseURL } from "../../repo/utilities";
import ShowPriceInCardItem from "./ShowPriceInCardItem";

// import { ProductItemProps } from "../repo/models";
interface ProductItemProps {
  data: ProductItemType;
}
const ProductItem: FunctionComponent<ProductItemProps> = ({ data }) => {
  const { title, price, imageUrl, discountedPrice } =
    data;
  // const history = useHistory();
  // const sendUserToProductItemPage = () => {
  //   history.push(`/products/productItem/${id}`);
  // };
  const [truncatedText, settRuncatedText] = useState("");
  useEffect(() => {
    if (title) {
      const rangeStart = 0;
      const rangeEnd = 20;
      const lastWordBoundary = title.lastIndexOf(" ", rangeEnd);
      const truncatedText =
        lastWordBoundary >= rangeEnd
          ? `${title.substring(rangeStart, lastWordBoundary)} ...`
          : `${title.substring(rangeStart, rangeEnd)}`;
      settRuncatedText(truncatedText);
    }
  }, [title]);
  return (
    <div className="relative ">
      <form className=" max-w-xs w-56 h-56 overflow-y-hidden bg-white rounded-lg shadow-md  m-2 relative">
        {/* <LikeAndUnLikeButton item={data} /> */}
        {/* <CheckStockAndChangeButton
          parentStyles={"absolute right-0 top-0 m-1"}
          childStyles={"flex-col bg-green-400 hover:bg-green-500"}
          items={data}
        /> */}
        <div
          // onClick={sendUserToProductItemPage}
          className=" grid justify-items-stretch"
        >
          <div className="flex justify-center items-center">
            <img
              src={`${baseURL}${imageUrl}`}
              alt={title}
              className=" w-full h-24 w-24 object-scale-down object-cover rounded-full m-2"
            />
          </div>

          <div className="text-base px-2 pb-5 flex flex-col justify-between">
            <div>
              <p className="text-lg py-3 h-12 font-bold text-gray-900 flex justify-center items-center">
                {truncatedText}
              </p>

              {/* <GradeDescription grade={grade} color={"black"} /> */}
              <div className="pt-1 flex justify-between items-center">
                {/* <UnitTypeBox unit={unit} unitType={unitType} /> */}
                <ShowPriceInCardItem
                  price={price}
                  discountedPrice={discountedPrice}
                />
              </div>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default ProductItem;
