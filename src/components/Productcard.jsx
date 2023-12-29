
export const Productcard = ({description,pro_img_url,price,title,category,rating}) => {
    return (
        <div className='pro-card'>
            <img alt="pro-logo" src={pro_img_url}></img>
            <h3>${price}</h3>
            <h4>{title}</h4>
            <h3>⭐{rating}</h3>  
        </div>
    )
}