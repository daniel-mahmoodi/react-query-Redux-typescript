import {useInfiniteQuery} from "@tanstack/react-query";
import axios from "axios";
import {useCallback} from "react";

function useInfiniteAds() {
    const {isPending, data, fetchNextPage, hasNextPage, isFetchingNextPage} = useInfiniteQuery({
        queryKey: ['Ads'],
        initialPageParam: 1,
        queryFn: async function ({pageParam}) {
            const url = 'http://127.0.0.1:8000/ads/advertises/paged/'
            const result = await axios.get<{ count: number, results:{} }>(url, {p})
            return result.data
        },
        getNextPageParam: function (lastPage, lastPageParam) {
            if (lastPage.next) {
                return lastPageParam + 1;
            } else {
                return null
            }
        },

        select: useCallback((result)=>{
             console.log('select')
            return result.pages.flatMap(e => e.results)
        }, [])

    })
    return {isPending, data, fetchNextPage, hasNextPage, isFetchingNextPage}
}

export default useInfiniteAds;


