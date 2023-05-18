import React from "react";



const Card = (props) =>{
return (
<div className='bg-light-green dib br3 pa2 ma2 grow bw2 shadow-5 outline w-20' >
    <img alt = 'robots' src ={`https://robohash.org/${props.id}?size=200x200`} />
    <div>
        <h2>{props.name}</h2>
        <p> {props.email}</p>
    </div>
</div>

);

}
export default Card;