import { gql, useQuery } from '@apollo/client';

const GET_PET = gql`
  query pet($id: Int!) {
    pet(id: $id) {
      id
      name
      type
      owner {
        id
        name
        pets {
          id
        }
      }
    }
  }
`;

const usePet = (id: number) => {
  const { data, error, loading } = useQuery<{ pet: Pet }, { id: number }>(GET_PET, {
    variables: {
      id,
    },
  });

  return {
    data,
    error,
    loading,
  };
};

export default usePet;
