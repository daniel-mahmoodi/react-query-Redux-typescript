import { FunctionComponent } from "react";
import { ProductItemType } from "../repo/models";

// import { ProductItemProps } from "../repo/models";
interface ProductItemProps {
  data: ProductItemType;
}
const ProductItem: FunctionComponent<ProductItemProps> = ({ data }) => {
  console.log("daata", data);
  return <div>{data.title}</div>;
};

export default ProductItem;
