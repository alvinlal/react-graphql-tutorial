import usePet from "../hooks/usePet";




const Pet=()=>{
    const {data,loading,error} = usePet(1);

    if(error || !data) return <div>Something went wrong</div>

    if(loading) return <div>spinner</div>

    return <div>
        <h1>A Pet</h1>
        <h1>{data.pet.name}</h1>
        <p>{data.pet.type}</p>
    </div>
}

export default Pet;