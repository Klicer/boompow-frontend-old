import { gql } from "@apollo/client";
import { apolloClient } from "apollo";

export const LOGIN_MUTATION = gql`
  mutation login($input: LoginInput!) {
    login(input: $input) {
      token
    }
  }
`;

export const VERIFY_EMAIL_QUERY = gql`
  query verifyEmail($input: VerifyEmailInput!) {
    verifyEmail(input: $input)
  }
`;

export const GET_USER_QUERY = gql`
  query getUser {
    getUser {
      banAddress
      serviceName
      serviceWebsite
      type
      emailVerified
      email
    }
  }
`;

const Auth = {
  // ACCOUNT
  login: async (email, password) => {
    const resp = await apolloClient().mutate({
      mutation: LOGIN_MUTATION,
      variables: {
        input: {
          email,
          password
        }
      }
    });
    if (resp.data?.login) {
      return resp.data.login;
    }
    throw new Error(`Unknown error processing login`);
  },
  register: async ({
    serviceType,
    email,
    password,
    banAddress,
    serviceName,
    serviceWebsite
  }) => true,

  // EMAIL VERIFICATION
  resendVerificationEmail: async () => true,
  verifyEmail: async (email, token) => {
    const resp = await apolloClient().query({
      query: VERIFY_EMAIL_QUERY,
      variables: {
        input: {
          email,
          token
        }
      }
    });
    if (resp.data?.verifyEmail) {
      return resp.data.verifyEmail;
    }
    throw new Error("Unknown error verifying email");
  },

  // PASSWORD RECOVERY
  sendRecoveryEmail: async (email) => true,
  checkRecoveryToken: async (email, token) => true,
  // ! SENDING TOKEN LIKE THIS MIGHT BE UNSAFE?
  recoverPassword: async (email, token, newPassword) => true
};

export default Auth;
