interface SimpleSelectProps {
  value: number;
  onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
}

const SimpleSelect = ({ value, onChange }: SimpleSelectProps) => {
  return (
    <div>
      <select onChange={onChange} value={value}>
        <option value="1">1</option>
        <option value="2">2</option>
        <option value="3">3</option>
      </select>
    </div>
  );
};

export default SimpleSelect;
