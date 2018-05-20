import gql from 'graphql-tag';

export default gql`
  query FetchProducts($name: String) {
    products(name: $name) {
      id
      name
      kind
      value
    }
  }
`;
