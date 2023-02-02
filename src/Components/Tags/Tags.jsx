import React from "react";
import "./Tags.css";

function Tags(props) {


    return (


            <ul className="tag-content">
            {props.tags?.map((tag) => {
                return <li className="tag" key={tag.toString()}><p>{tag}</p></li>
            })}
            </ul>

    );
}
    export default Tags;