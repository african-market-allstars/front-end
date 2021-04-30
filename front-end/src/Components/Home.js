import React from "react";
import { Link } from 'react-router-dom'
import data from "./data";
import "../Home.css";

const Home = (()=>{
  let dataList = [];
  const safeList = [];

  const findIndex = (list, item) => {
    for(let i = 0; i < list.length; i += 1){
      if(list[i].id == item.id){
        return i;
      }
    }
  }

  for(const d of data){
    dataList.push(d);
    safeList.push(d);
  }

  let randProd1 = dataList[Math.floor(Math.random() * dataList.length)]
  dataList.splice(findIndex(dataList, randProd1), 1)

  let randProd2 = dataList[Math.floor(Math.random() * dataList.length)]
  dataList.splice(findIndex(dataList, randProd2), 1)

  let randProd3 = dataList[Math.floor(Math.random() * dataList.length)]
  dataList.splice(findIndex(dataList, randProd3), 1)

  let randProd4 = dataList[Math.floor(Math.random() * dataList.length)]
  dataList.splice(findIndex(dataList, randProd4), 1)

  let randProd5 = dataList[Math.floor(Math.random() * dataList.length)]
  dataList.splice(findIndex(dataList, randProd5), 1)

  let randProd6 = dataList[Math.floor(Math.random() * dataList.length)]

  dataList = safeList;

  return(
    <div>
      <h2>Welcome Back</h2>
      <h3>Jump right back into the savings with these quality products</h3>

      <div className="homeImgContainer">
        <div className="homeImgFrame">
          <img className="homeImg" src={randProd1.imageUrl}/>
          <p className="homeImgCaption">{randProd1.commodityproduct}</p>
        </div>
        <div className="homeImgFrame">
          <img className="homeImg" src={randProd2.imageUrl}/>
          <p className="homeImgCaption">{randProd2.commodityproduct}</p>
        </div>
        <div className="homeImgFrame">
          <img className="homeImg" src={randProd3.imageUrl}/>
          <p className="homeImgCaption">{randProd3.commodityproduct}</p>
        </div>
        <div className="homeImgFrame">
          <img className="homeImg" src={randProd4.imageUrl}/>
          <p className="homeImgCaption">{randProd4.commodityproduct}</p>
        </div>
        <div className="homeImgFrame">
          <img className="homeImg" src={randProd5.imageUrl}/>
          <p className="homeImgCaption">{randProd5.commodityproduct}</p>
        </div>
        <div className="homeImgFrame">
          <img className="homeImg" src={randProd6.imageUrl}/>
          <p className="homeImgCaption">{randProd6.commodityproduct}</p>
        </div>
      </div>

      <div className="linkShopContainer">
        <Link className="linkShop" to="/shop">Shop Now</Link>
      </div>
    </div>
  );
})

export default Home;
