interface PokemonCardProps {
  name: string;
  image: string;
  weight: number;
  xp: number;
  abilities: string[];
}

const PokemonCard = ({
  name,
  image,
  weight,
  abilities,
  xp,
}: PokemonCardProps) => {
  return (
    <div className="pokemon-card-large">
      <h2>{name}</h2>
      <img src={image} alt={name} width="100px" />
      <div className="card-section">
        <p className="card-section-title">XP</p>
        <div className="card-section-content">{xp}</div>
      </div>
      <div className="card-section">
        <p className="card-section-title">Weight</p>
        <div className="card-section-content">{weight / 10} kg</div>
      </div>
      <div className="card-section">
        <p className="card-section-title">Abilities</p>
        <ul>
          {abilities.map((ability) => (
            <li key={ability}>{ability}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default PokemonCard;
