import {useMutation} from '@apollo/react-hooks';
import {gql} from 'apollo-boost';

export const RegisterMutations = gql`
  mutation (
    $uname: String!
    $enamil: String!
    $password: String!
    $conpassword: String!
  ) {
    uyeOl(
      kullaniciAd: $uname
      email: $enamil
      parola: $password
      parolaKontrol: $conpassword
    )
  }
`;
