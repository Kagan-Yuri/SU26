import { useParams } from "react-router-dom";
import { books } from "../Data";

function UseParamBookImg(){
    const { id } = useParams();
    const b = books.find((b) => b.id === Number(id));

      if (!b) {
    return <h2>Không tìm thấy sách</h2>;
  }
    return(
        <div>
            <h3> View for Book ID: {id} </h3>
            title: {b.title} <br/>
            author: {b.author} <br/>
            category: {b.category} <br/>
            availableCopies: {b.availableCopies} <br/>
            totalCopies: {b.totalCopies} <br/>
            rating: {b.rating} <br/>
            image: <img
                src={b.image}
                alt={b.title}
                style={{
                  height: "220px",
                  objectFit: "contain",
                  backgroundColor: "#f8f9fa",
                }}
              />
        </div>
    );
}

export default UseParamBookImg;