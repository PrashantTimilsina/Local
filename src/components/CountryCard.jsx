// eslint-disable-next-line
const CountryCard = ({ country }) => {
  // eslint-disable-next-line
  const { flags, name, languages, capital } = country;
  console.log(flags, name, languages, capital);
  return (
    <div className="card">
      {/* eslint-disable */}
      <img src={flags.png} alt="country" />
      <h2>{name.common}</h2>
      <h3>{languages?.eng}</h3>
      <h4>{capital?.at(0)}</h4>
    </div>
  );
};
export default CountryCard;
