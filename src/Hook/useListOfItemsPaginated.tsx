import { useQuery } from "@tanstack/react-query";
import { ListOfItemsParams } from "../repo/models";
import axios from "axios";

const useListOfItemsPaginated = (pageParams: ListOfItemsParams) => {
  // console.log("useListOfItems", pageNumber, rowCount);
  let totalItem = 0;
  const { isPending, data } = useQuery({
    queryKey: ["items", pageParams],
    queryFn: async function ({ queryKey }) {
      const { pageNumber, rowCount } = queryKey[1] as ListOfItemsParams;
      const url = `https://core.api.alpha.mivekani.com/api/Product/GetProducts`;
      const queryParams: ListOfItemsParams = { pageNumber, rowCount };
      const result = await axios.get(url, { params: queryParams });
      return result.data;
    },
    select: (result) => {
      totalItem = result.totalItems;
      return result.data;
    },
  });
  return { data, isPending, totalItem };
};

export default useListOfItemsPaginated;
