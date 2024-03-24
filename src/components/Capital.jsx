const Capital = ({ country }) => {
  return (
    <div className="h-[143px] w-[540px] pl-[26px] pt-[32px] text-[18px]">
      <p>
        Capital: <span className="font-medium">{country.capital}</span>
      </p>
      <p>
        Region: <span className="font-medium">{country.region}</span>
      </p>
      <p>
        Subregion: <span className="font-medium">{country.subregion}</span>
      </p>
    </div>
  );
};

export default Capital;
