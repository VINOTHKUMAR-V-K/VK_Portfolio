import React from 'react'
import SimpleImageSlider from "react-simple-image-slider";
import HTML from "../asserts/html.jpg";
import CSS from "../asserts/css.jpeg";
import JS from "../asserts/js.jpeg";
import Code from "../asserts/1228014.png";
import Wallpaper from "../asserts/desktop-wallpaper-javascript-developer-and-mobile-code-programming-quote-background-front-end-thumbnail.jpg";
export const ImgSlider = () => {
    const sliderImages =[
        {url:HTML}, {url:CSS}, {url:JS}, {url:Code}, {url:Wallpaper}
    ];
  return (
    <div>
         <SimpleImageSlider
            width={"80%"}
            height={600}
            images={sliderImages}
            showNavs={true}
            autoPlay={true}
         />
    </div>
  )
}
