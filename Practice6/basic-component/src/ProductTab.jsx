import Product from "./Product";
import "./ProductTab.css";
export default function ProductTab(){
    return(
        <div className="ProductTab">
              <Product title="Deals on home improvement essentials" idx={0}/> 
              <Product title="Revamp your home in style" idx={1}/>
               <Product title="PlayStation 5 Slim" idx={2}/>
                <Product title="Accessories | No Cost EMI*" idx={3}/>
        </div>
    )
}