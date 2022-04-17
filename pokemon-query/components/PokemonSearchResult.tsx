const PokemonsSearchResult = ({ pokemons }: { pokemons: string[] }) => {
  return pokemons.length > 0 ? (
    <div className="search-grid">
      {pokemons.map((pokemon, index) => (
        <div className="pokemon-card" key={index}>
          {pokemon}
        </div>
      ))}
    </div>
  ) : (
    <div className="search-message"> No pokemons found</div>
  );
};

export default PokemonsSearchResult;
