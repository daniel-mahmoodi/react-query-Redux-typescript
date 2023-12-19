import { useQuery } from "@tanstack/react-query";
import { ListOfItemsParams } from "../repo/models";

const useListOfItems = ({ pageNumber, rowCount }: ListOfItemsParams) => {
  console.log("useListOfItems", pageNumber, rowCount);
  const { isPending, data } = useQuery({
    queryKey: ["items"],
    queryFn: async function () {
      const url = `https://core.api.alpha.mivekani.com/api/Product/GetProducts?PageNumber=${pageNumber}&RowCount=${rowCount}`;
      
      console.log("useListO url",url);
      const result = await fetch(url);
      return result.json();
    },
  });
  return { data, isPending };
};

export default useListOfItems;
