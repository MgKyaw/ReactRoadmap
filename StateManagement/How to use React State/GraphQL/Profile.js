import React from 'react';
import gql from 'graphql-tag';
import { Query } from 'react-apollo';

const GET_CURRENT_USER = gql`
  {
    viewer {
      login
      name
    }
  }
`;

const Profile = () => (
  <Query query={GET_CURRENT_USER}>
    {({ data, loading }) => {
      if (data.viewer) {
        return null;
      }

      if (loading) {
        return <div>Loading ...</div>;
      }

      return (
        <div>
          {data.viewer.name} {data.viewer.login}
        </div>
      );
    }}
  </Query>
);

export default Profile;