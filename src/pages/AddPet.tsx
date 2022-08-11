import { gql, useMutation } from '@apollo/client';
import { useState } from 'react';

const ADD_PET = gql`
  mutation createPet($createPetInput: CreatePetInput!) {
    createPet(createPetInput: $createPetInput) {
      id
      name
      type
    }
  }
`;

const AddPet: React.FC = () => {
  const [name, setName] = useState<string>('');
  const [type, setType] = useState<string>('');
  const [ownerId, setOwnerId] = useState<number>(1);

  const [createPet, { data, loading, error }] = useMutation<
    { createPet: Pet },
    { createPetInput: { name: string; type?: string; ownerId: number } }
  >(ADD_PET, {
    variables: {
      createPetInput: {
        name,
        type,
        ownerId,
      },
    },
  });

  console.log(error?.graphQLErrors);
  const handleSubmit = async () => {
    try {
      const res = await createPet();
      console.log(res);
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div>
      <input type='text' placeholder='name' onChange={e => setName(e.target.value)} />
      <br></br>
      <input type='text' placeholder='type' onChange={e => setType(e.target.value)} />
      <br></br>
      <input type='text' placeholder='owner id' onChange={e => setOwnerId(+e.target.value)} />
      <button onClick={() => handleSubmit()}>Submit</button>
      {loading && <p>loading...</p>}
      {error && <p>something went wrong</p>}
      {data && (
        <div>
          <h1>{data.createPet.name}</h1>
          <h1>{data.createPet.type}</h1>
          <h1>{data.createPet.ownerId}</h1>
        </div>
      )}
    </div>
  );
};

export default AddPet;
