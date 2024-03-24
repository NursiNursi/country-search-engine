import ToolTip from "./Tooltip";

const CallingCode = ({ country }) => {
  const callingCode = country?.idd?.suffixes?.[0]
    ? `${country.idd.root}${country.idd.suffixes[0]}`
    : console.error(
        "Country or country.idd is undefined or suffixes array is empty or not an array.",
      );

  return (
    <div className="mt-[25px] flex h-[143px] w-[540px] flex-col gap-2 pl-[25px] pt-[25px]">
      <p className="text-lg font-medium">Calling Code</p>
      <p className="text-5xl font-bold text-[#8362F2]">
        {callingCode.substring(1)}
      </p>
      <p className="font-medium">
        <ToolTip content="In version 3, calling codes are in the idd object. There is no implementation to search by calling codes in V3.">
          <span className="text-[#8362F2] underline">1 country</span>
        </ToolTip>{" "}
        with this calling code
      </p>
    </div>
  );
};

export default CallingCode;
