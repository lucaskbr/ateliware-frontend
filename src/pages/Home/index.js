import React, { useState } from 'react';

import { useHistory } from 'react-router-dom';
import { Container, Title, LanguagesBadge, Languages, Section } from './styles';

import Button from '../../components/Button';
import SearchBar from '../../components/SearchBar';

import none from '../../assets/none.png';
import java from '../../assets/java.png';
import javascript from '../../assets/javascript.png';
import python from '../../assets/python.png';
import ruby from '../../assets/ruby.png';
import elixir from '../../assets/elixir.png';

const languages = [
  {
    name: 'none',
    image: none,
  },
  {
    name: 'java',
    image: java,
  },
  {
    name: 'javascript',
    image: javascript,
  },
  {
    name: 'python',
    image: python,
  },
  {
    name: 'ruby',
    image: ruby,
  },
  {
    name: 'elixir',
    image: elixir,
  },
];

export default function Home() {
  const history = useHistory();
  const [isLoading, setIsLoading] = useState(false);
  const [search, setSearch] = useState('');
  const [languageFilter, setLanguageFilter] = useState('none');

  function handleSearch(event) {
    event.preventDefault();
    setIsLoading(true);
    history.push(`/repositories/${languageFilter}/${search}`);
  }

  return (
    <Container>
      <Section>
        <Title>Search repositories</Title>
      </Section>
      <Section>
        <SearchBar
          type="text"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <Button title="Buscar" onClick={handleSearch} isLoading={isLoading} />
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
