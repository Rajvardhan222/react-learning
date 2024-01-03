import {useState,useEffect} from "react"
let useCurrencyInfo=(currency)=>{
    let url = `https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/${currency}.json`;
    let [data,setData] = useState({})
    useEffect(()=>{
        fetch(url)
        .than((res)=>{
           return res.json();
        })
        .than((res)=> res[setData] )

    },[currency])
    console.log(data);
    return data;
}
export default useCurrencyInfo;