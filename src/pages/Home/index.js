import React, { useState } from 'react';

import { useHistory } from 'react-router-dom';
import { Container, Title, LanguagesBadge, Languages, Section } from './styles';

import Button from '../../components/Button';
import SearchBar from '../../components/SearchBar';

import java from '../../assets/java.png';
import javascript from '../../assets/javascript.png';
import python from '../../assets/python.png';
import ruby from '../../assets/ruby.png';
import elixir from '../../assets/elixir.png';

const languages = [
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
  const [languageFilter, setLanguageFilter] = useState('');

  function handleSearch(event) {
    event.preventDefault();
    setIsLoading(true);
    console.log(languageFilter);
    history.push('/repositories/java');
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

/**
 *       <button type="button" onClick={handleSearch}>
        {isLoading ? 'Loading...' : 'Search'}
      </button>
 */

/**
  *  <LanguagesBadge onClick={() => setLanguageFilter('java')}>
          <Languages src={java} alt="java" />
        </LanguagesBadge>
        <LanguagesBadge onClick={() => setLanguageFilter('javascript')}>
          <Languages src={javascript} alt="javascript" />
        </LanguagesBadge>
        <LanguagesBadge onClick={() => setLanguageFilter('ruby')}>
          <Languages src={ruby} alt="ruby" />
        </LanguagesBadge>
        <LanguagesBadge onClick={() => setLanguageFilter('python')}>
          <Languages src={python} alt="python" />
        </LanguagesBadge>
  */
