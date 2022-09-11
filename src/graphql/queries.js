import { gql } from "@apollo/client";

export const GET_REPOSITORIES = gql`
  query {
    repositories {
      edges {
        node {
          id
          ownerName
          name
          fullName
          createdAt
          ratingAverage
          reviewCount
          forksCount
          stargazersCount
          description
          language
          ownerAvatarUrl
        }
        cursor
      }
    }
  }
`;

// other queries...