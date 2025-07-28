import React from 'react'
import "../../utils-css/hero2css/News.css"
import line from "../../assets/Line.png"
import news1 from "../../assets/news1.png"
import news2 from "../../assets/news2.png"
import news3 from "../../assets/news3.png"
import news4 from "../../assets/news4.png"
import news5 from "../../assets/news5.png"
import right from "../../assets/Right.png";



const News = () => {
  return (
    <section className='news'>

        <img src={line} alt="" />
        <div className='news-upper'>
            <div className='ri'>
        <h1>local news & activities</h1>
        <h3>latest news update </h3>
        </div>
        <div className='discover1'>
            <h1> <span>discover more</span><span>&gt;</span></h1>
        </div>
</div>
<div className='news-lower'>
    <img className='imgm' src={news1} alt="" />
    <img  className='imgm' src={news2} alt="" />
    <img className='imgb' src={news5} alt="" />
    <div className='image-lower'>
    <img className='imgm' src={news3} alt="" />
    <img className='imgm' src={news4} alt="" />
    </div>
</div>
    </section>
  )
}

export default News