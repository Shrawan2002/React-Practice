import "./Price.css"
export default function Price({oldPrice, newPrice}){

    return(
        <div className="Price">
            <span id="old" className="sp">{oldPrice} </span>
            &nbsp; &nbsp;
              <span id="new" className="sp"> {newPrice} </span>
        </div>
    )
}