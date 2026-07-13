import React from "react";
import { graphql, useFragment} from "react-relay";

export default function ArtistCard(props) {
  const {href, image, bio} = useFragment(
    graphql`
      fragment ArtistHeader_artist on Artist {
        href
        bio
        image {
          url
        }
      }
    `,
    props.artist
  );
  const imageUrl = image && image.url;

  return (
    <Card>
      <Link href={href}>
        <Image imageUrl={imageUrl} />
        <Bio>{bio}</Bio>
      </Link>
    </Card>
  );
}