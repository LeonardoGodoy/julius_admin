import gql from 'graphql-tag';

export default gql`
  query FetchCustomer($id: ID!){
    customer(id: $id) {
      id
      name
      active
      document
      social_name
    }
  }
`;
