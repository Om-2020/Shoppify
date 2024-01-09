import React, { useEffect, useState } from 'react';
import { Productcard } from './Productcard';
import { Shimmer } from './Shimmer';
import { Footer } from './Footer';


export const Body = () => {

  const [productlist, setproductlist] = useState([]);

  const [page, setpage] = useState(1);
  const [totalpage,settotalpage] = useState(0);
  const [searchtext,setsearchtext] = useState("");
  const [filterprodlist,setfilterprodlist] = useState([]);

  
  

  const fetchdata = async () => {
    const tempdata = await fetch(`https://dummyjson.com/products?limit=10&skip=${page*10-10}`);
    const data = await tempdata.json();
    setproductlist(data.products);
    setfilterprodlist(data.products);
    settotalpage(data.total/10);
  }

  useEffect(() => {
    fetchdata();
  }, [page])

  
  //console.log(productlist);

  if (productlist.length === 0) {
    return <Shimmer />
  }

  const handlePageClick = (selectedpage)=>{

    if(selectedpage>=1 && selectedpage<=totalpage &&
    selectedpage !==page)
    {
      setpage(selectedpage);
    }


  }

  const Searchclickhandler = ()=>{
    const text = searchtext.toLowerCase();
    
    const filterprodlist = productlist.filter((item)=>{
        return item.title.toLowerCase().includes(text);
    });

    setfilterprodlist(filterprodlist);
  }
  //console.log(searchtext);

  return (
    <div className='body'>
      <div className='search-bar'>

          <input type="text"
            value={searchtext}
            onChange={(e)=>{
              setsearchtext(e.target.value);
            }}
          ></input>
          <button onClick={Searchclickhandler}>Search</button>

      </div>
      <div className='pro-cont'>

        {
          filterprodlist.map((item) => {
            return <Productcard

              key={item.id}
              id={item.id}
              title={item.title}
              pro_img_url={item.thumbnail}
              price={item.price}
              rating={item.rating}
              category={item.category}

            />
          })

        }
        

      </div>

      <div className='pagination-container'>
        <span className={`pagination-arrow ${page === 1 ? 'disabled' : ''}`}
          onClick={() => handlePageClick(page - 1)}>
            ◀
        </span>
        {
          [...Array(totalpage)].map((_, i) => {

            return (
              <div 
              key={i}
              className={`pagination-item ${i + 1 === page ? 'selected' : ''}`}
              onClick={() => handlePageClick(i + 1)}
              >
                {i + 1}
              </div>
            )
          })
        }
        <span className={`pagination-arrow ${page === totalpage? 'disabled' : ''}`}
        onClick={() => handlePageClick(page + 1)}
        >▶</span>
      </div>

      <Footer/>

    </div>
  )
}
