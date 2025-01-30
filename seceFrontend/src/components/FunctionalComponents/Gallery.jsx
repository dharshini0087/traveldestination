import React from "react";

const Gallery=(props)=>{
    var styling={
        textAlign: "center"
    }
    return(
        <div style={styling}>
            <h3>Explore the wonders of world</h3>
            <img src="/destination.jpg" alt="Explore the wonders of world"></img>
            <h3>Destination</h3>
        </div>
    );
};
export default Gallery;