const CountryName = ({ country }) => {
  const altSpellings = country.altSpellings;

  return (
    <>
      <div className="mb-2 flex">
        <h1 className="mr-[10px] text-5xl font-bold">{country.name.common}</h1>
        <div className="pt-[14px]">
          <img
            className="h-[30px] w-[46px]"
            src={country.flags.png}
            alt={country.flags.alt}
          />
        </div>
      </div>
      <div className="flex gap-3">
        {altSpellings.map((altSpelling, i) => (
          <div
            key={i}
            className="flex items-center justify-center rounded-full bg-[#8DD4CC] px-[15px] pb-[6px] pt-[5px]"
          >
            <p className="text-center text-xs font-bold text-white">
              {altSpelling}
            </p>
          </div>
        ))}
      </div>
    </>
  );
};

export default CountryName;
