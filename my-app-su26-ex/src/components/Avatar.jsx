import { React } from "react";

function Avatar(props) {
    const { name, gender, image } = props;
    return (
        <div>
            <h3>Hello{gender ? "Mr" : "Miss"} {name} ! </h3>
            <img src={image} style={{borderRadius: "50%", border: "2px solid #ccc", backgroundColor: "chocolate"}} width="100" height="100" alt={name} />
            <hr/>
        </div>

    )

}

export default Avatar;