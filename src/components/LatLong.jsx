import globe from "../assets/globe.svg";

const LatLong = ({ country }) => {
  const lat = country.latlng ? country.latlng[0].toFixed(1) : "";
  const lng = country.latlng ? country.latlng[1].toFixed(1) : "";

  return (
    <div className="flex h-[143px] w-[540px] justify-between">
      <div className="ml-[25px] mt-[25px] flex flex-col gap-2">
        <p className="text-lg font-medium">LatLong</p>
        <p className="text-5xl font-bold text-[#8362F2]">
          {lat}, {lng}
        </p>
      </div>
      <div className="w-[204px] overflow-hidden pr-16 sm:mr-0 sm:pr-0">
        <img className="mt-[22px]" src={globe} alt="" />
      </div>
    </div>
  );
};

export default LatLong;
