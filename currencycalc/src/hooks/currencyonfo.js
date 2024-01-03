import {useState,useEffect} from "react"
let useCurrencyInfo=(currency)=>{
    let url = `https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/${currency}.json`;
    let [data,setData] = useState({})
    useEffect(()=>{
        fetch(url)
        .then((res)=>{
           return res.json();
        })
        .then((res)=>setData(res[currency]) )

    },[currency])
    console.log("this is data " + data);
    return data;
}
export default useCurrencyInfo;