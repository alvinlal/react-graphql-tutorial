import { gql, useLazyQuery } from '@apollo/client';

const GET_PETS = gql`
  query allPets {
    pets {
      id
      name
      type
    }
  }
`;

const Search: React.FC = () => {
  const [getAllPets, { loading, error, data }] = useLazyQuery<{ pets: Pet[] }>(GET_PETS);

  return (
    <div>
      <button onClick={() => getAllPets()}>load pets</button>
      {loading && <p>loading...</p>}
      {error && <p>something went wrong</p>}
      {data &&
        data.pets.map(pet => (
          <div key={pet.id}>
            <h1>{pet.name}</h1>
            <p>{pet.type}</p>
          </div>
        ))}
    </div>
  );
};

export default Search;
