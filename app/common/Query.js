import {gql} from 'apollo-boost';
export const getPost = gql`
  query {
    getPost {
      body
      kullanici {
        kullaniciAd
      }
    }
  }
`;
