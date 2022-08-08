import { useQuery, gql } from '@apollo/client';

interface PetsData {
  pets: Pet[];
}

const GET_PETS = gql`
  query pets {
    pets {
      id
      name
      type
      owner {
        id
      }
    }
  }
`;

export const usePets = () => {
  const { error, loading, data } = useQuery<PetsData>(GET_PETS);

  return {
    error,
    loading,
    data,
  };
};
