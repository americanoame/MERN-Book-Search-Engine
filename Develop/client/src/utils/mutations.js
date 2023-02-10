import { gql } from '@apollo/client';

export const LOGIN_USER = gql`
mutation Mutation($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      user {
        _id
        username
        email
        savedBooks {
          authors
          description
          bookId
          image
          title
          link
        }
      }
    }
  }`;

export const ADD_USER = gql`
mutation Mutation($username: String!, $email: String!, $password: String!) {
    addUser(username: $username, email: $email, password: $password) {
      token
      user {
        _id
        username
        email
        savedBooks {
          authors
          description
          bookId
          image
          title
          link
        }
      }
    }
  }`;

export const SAVE_BOOK = gql`
mutation Mutation($input: BookInput) {
  saveBook(input: $input) {
    _id
    username
    email
    savedBooks {
      authors
      description
      bookId
      image
      title
      link
    }
  }
}`;

export const DELETE_BOOK = gql`
mutation DeleteBook($bookId: String) {
    deleteBook(bookId: $bookId) {
      _id
      username
      email
      savedBooks {
        authors
        description
        bookId
        image
        title
        link
      }
    }
  }`;