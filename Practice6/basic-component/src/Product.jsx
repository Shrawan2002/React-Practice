import Price from "./Price"
import "./Product.css"
export default function Product({title,idx}){

 let description = [["Cushion covers, bedsheets & More","PS5 Slim digital edition"],
    ["PS5 Slim digital edition","PS5 Slim disc edition"], ["PS5 Slim Fortnite digital edition","PS5 DualSense Wireless Controller"],
    ["PS5 DualSense Wireless Controller","Cushion covers, bedsheets & More" ]]

    let oldPrice = [8000,16000,12000,18000];
    let newPrice = [7999,14999,11999,16999];

    return(
        <div className="Product">
            <h4>{title}</h4>
            <p>{description[idx][0]}</p>
            <p>{description[idx][1]}</p>
            <Price oldPrice = {oldPrice[idx]} newPrice = {newPrice[idx]}/>
        </div>
    )
}