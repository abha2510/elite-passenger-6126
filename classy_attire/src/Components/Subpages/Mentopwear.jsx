import React, { useEffect, useState } from 'react'
import ApiCall from '../ApiCall';
import styles from './Prod.module.css'
import handleClick  from './CartAxioscall';
import {Link as RouterLink} from "react-router-dom"

export default function Mentopwear(){

    const [loading, setLoading] = useState(true);
    const [data, setData] = useState(null);

    useEffect(() =>{
      setLoading(true);
      
        ApiCall("mens", "get", null )
        .then((res)=>{
          setLoading(false);
          setData(res.data["men-topwear"]);
        })
        .catch((err)=>{
          setLoading(false);
          console.log(err)
        })        
    },[])
    // console.log("data",data);

  return (
    <div className={styles.main_prod_box}>
    {
      
      data?.map((prod)=>{
        return(
          <div>
            {
              <div className={styles.prod_box}>
                <div>
                  <img className={styles.prod_imgs} src={prod.img} />

                  <div className={styles.prod_price_btn}>
                    <div className={styles.prod_price}>{`₹ ${prod.price}`}</div>
                    <div  className={styles.prod_add_cart}>
                    <RouterLink to="/cart">
                          <button onClick={() => handleClick(prod)}className={styles.prod_cart_btn}>Add To Cart</button>
                          </RouterLink>
                      
                      </div>
                  </div>

                  <div className={styles.prod_brand}>{prod.brand}</div>
                </div>
              </div>
            }
          </div>
        )
      })
    }
    </div>
  )
}

// hyphen keys are always accessed by bracket notation.