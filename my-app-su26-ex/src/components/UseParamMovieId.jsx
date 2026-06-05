import { useParams } from "react-router-dom";
import { movies } from "../Data";

function UseParamMovieId(){
    const { id } = useParams();
    const m = movies.find((m) => m.id === Number(id));
    return(
        <div>
            <h3> Showtimes for Movie ID: {id} </h3>
            title: {m.title} <br/>
            duraion: {m.duration}
        </div>
    );
}

export default UseParamMovieId;