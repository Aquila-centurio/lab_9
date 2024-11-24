import React from "react";

function ToDO(props) {
    return(
        <div className="ToDO">
            <img src={props.img} />
            <h2>{props.title}</h2>
            <p>{props.text}</p>
        </div>
    );
}
export default ToDO;