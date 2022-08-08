import { useParams } from "react-router-dom";
import usePet from "../hooks/usePet";




const Pet=()=>{
    const {id} = useParams<{id:string}>()
    const {data,loading,error} = usePet(+id!);

    if(error || !data?.pet) return <div>Something went wrong</div>

    if(loading) return <div>spinner</div>

    return <div>
        <h1>A Pet</h1>
        <h1>{data.pet.name}</h1>
        <p>{data.pet.type}</p>
    </div>
}

export default Pet;