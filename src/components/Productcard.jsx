import { useDispatch} from "react-redux";
import {addItems} from "../redux/cartSlice";

export const Productcard = ({id,pro_img_url,price,title,rating}) => {


    const disptach = useDispatch();

    const clickHandler = ()=>{
        const item = {id,pro_img_url,price,title,rating};
        disptach(addItems(item));
    }
    
    return (
        <div>
            
            <div className='pro-card'>
                <img alt="pro-logo" src={pro_img_url}></img>
                <h3>${price}</h3>
                <h4>{title}</h4>
                <h3>⭐{rating}</h3>
                <div className="prod-card-button">
                    <button onClick={clickHandler}>Add</button>
                </div>

            </div>



        </div>

    )
}