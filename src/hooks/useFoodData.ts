import axios, { AxiosPromise } from "axios"
import { FoodData } from "../interface/FoodData";

const API_URL = "http://localhost:5432"; 

const fetchData = async (): AxiosPromise<FoodData[]> => {
    const response = axios.get(API_URL + '/food');
    return response;
}

export function useFoodData(){

    const query = useQuery({
        queryfn: fetchData,
        queryKey:['food-data'],
        retry: 2
    })
    return{
        ...query,
    data:query.data?.data
    }

}