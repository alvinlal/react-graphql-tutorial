import { usePets } from "../hooks/usePets";

const Pets = () => {

  const {error,loading,data} = usePets();

  if (loading) {
    return <div>loading...</div>;
  }

  if (error) {
    return <div>something went wrong,</div>;
  }

  return (
    <div className='pets'>
      {data?.pets.map(pet => {
        return (
          <div key={pet.id}>
            <h1>{pet.name}</h1>
          </div>
        );
      })}
    </div>
  );
};

export default Pets;
