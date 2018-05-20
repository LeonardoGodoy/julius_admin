import gql from 'graphql-tag';

export default gql`
  query FetchCustomers($name: String, $order: String, $page: Int, $per_page: Int){
    customers(name: $name, order_by: $order, pagination: { page: $page, per_page: $per_page }) {
      id
      name
      active
      document
    }
  }
`;
