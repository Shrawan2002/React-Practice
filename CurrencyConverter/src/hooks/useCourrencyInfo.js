import { useEffect, useState } from "react";


export default function useCourrencyInfo(currency){

    let [data, setData] = useState({});

    useEffect(()=>{
        fetch(`https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/${currency}.json`)
        .then((resp)=> resp.json())
        .then((respData)=> setData(respData[currency]));
    },[currency]);
    console.log(data);
}