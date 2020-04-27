import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

import Button from '../../components/Button';
import SearchBar from '../../components/SearchBar';

import languageImages from '../../config/languageImages';

import { Container, Title, LanguagesBadge, Languages, Section } from './styles';

const languages = languageImages;

export default function Home() {
  const history = useHistory();
  const [isLoading, setIsLoading] = useState(false);
  const [search, setSearch] = useState('');
  const [languageFilter, setLanguageFilter] = useState('random');

  function handleSearch(event) {
    event.preventDefault();
    setIsLoading(true);
    history.push(`/repositories/${languageFilter}/${search}`);
  }

  return (
    <Container>
      <Section>
        <Title>
          Search repositories/
          <span role="img" aria-label="glass">
            😀
          </span>
        </Title>
      </Section>
      <Section>
        <SearchBar
          type="text"
          placeholder="Cookie"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <Button
          title="Search"
          notAllowed={search.length === 0}
          onClick={handleSearch}
          isLoading={isLoading}
        />
      </Section>
      <Section>
        {languages.map((l) => (
          <LanguagesBadge
            key={l.name}
            isSelected={l.name === languageFilter}
            onClick={() => setLanguageFilter(l.name)}
          >
            <Languages src={l.image} alt={l.name} />
          </LanguagesBadge>
        ))}
      </Section>
    </Container>
  );
}
