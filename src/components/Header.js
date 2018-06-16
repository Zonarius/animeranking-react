import React from 'react';
import { HeroBody } from 'bloomer/lib/layout/Hero/HeroBody';
import { Container } from 'bloomer/lib/layout/Container';
import { Title } from 'bloomer/lib/elements/Title';
import { Hero } from 'bloomer/lib/layout/Hero/Hero';

export default function Header() {
  return (
    <Hero isColor="primary" className="header">
      <HeroBody>
        <Container>
          <Title isSize={1}>Anime Ranking</Title>
        </Container>
      </HeroBody>
    </Hero>
  )
}