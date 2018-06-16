import React from 'react';
import { Section } from 'bloomer/lib/layout/Section';
import { Container } from 'bloomer/lib/layout/Container';
import Mesh from '../../mesh';

const query = `{
  fields {
    ... on season {
      anime {
        __typename
        ... on reference {
          reference {
            uuid
            path
            fields {
              ... on anime {
                name
                malScore
                malId
              }
            }
          }
        }
        ... on tier {
          name
        }
      }
    }
  }
}
`

export default function Season({ node }) {
  const animeCount = node.fields.anime
    .filter(anime => anime.__typename === 'reference')
    .length;
  return (
    <Section>
      <Container>
        <Section>
          {node.fields.anime.map((mn, i) => <Mesh.Node key={i} data={mn}/>)}
        </Section>
        <Section>
          {animeCount} Anime gesamt
        </Section>
      </Container>
    </Section>
  );
}

Season.mesh = {
  query,
  schema: "season"
}