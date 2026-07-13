import React from "react";
import { graphql, usePreloadedQuery, /* ... */ } from "react-relay";

const artistsQuery = graphql`
  query ArtistQuery($artistID: String!) {
    artist(id: $artistID) {
      name
      ...ArtistDescription_artist
    }
  }
`;
const artistsQueryReference = loadQuery(
  environment,
  artistsQuery,
  {artistID: "1"}
);

export default function ArtistPage() {
  return (
    <EnvironmentProvider environment={environment}>
      <React.Suspense fallback={<LoadingIndicator />}>
        <ArtistView />
      </React.Suspense>
    </EnvironmentProvider>
  )
}

function ArtistView() {
  const data = usePreloadedQuery(artistsQuery, artistsQueryReference);
  return (
    <>
      <Name>{data?.artist?.name}</Name>
      {data?.artist && <ArtistCard artist={data?.artist} />}
    </>
  );
}