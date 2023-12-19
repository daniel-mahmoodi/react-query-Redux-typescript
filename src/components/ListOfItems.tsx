import { FunctionComponent, useState } from "react";
import { ListOfItemsParams, ProductItemType } from "../repo/models";
import useListOfItems from "../Hook/useListOfItems";
import ProductItem from "./ProductItem";

interface ListOfItemsProps {}

const ListOfItems: FunctionComponent<ListOfItemsProps> = () => {
  const [pageParams, setPageParams] = useState<ListOfItemsParams>({
    pageNumber: 1,
    rowCount: 10,
  });
  console.log("pagePatams", pageParams);
  const { data, isPending } = useListOfItems(pageParams);
  console.log("data,isPending", data, isPending);
  if (isPending) {
    return <div>Loading............</div>;
  }
  if (!data) {
    return <div>no data</div>;
  }
  return (
    <>
      <div>
        {data.data.map((item: ProductItemType) => (
          <ProductItem key={item.id} data={item} />
        ))}
      </div>
      <span
        className="bg-gray-400 m-2"
        onClick={() =>
          setPageParams({
            pageNumber: pageParams.pageNumber + 1,
            rowCount: pageParams.rowCount,
          })
        }
      >
        Next Page
      </span>
      <span
        className="bg-gray-400"
        onClick={() =>
          setPageParams({
            pageNumber: pageParams.pageNumber - 1,
            rowCount: pageParams.rowCount,
          })
        }
      >
        Prev Page
      </span>
    </>
  );
};

export default ListOfItems;
