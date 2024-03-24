import arrowLeft from "../assets/arrow-left.png";

const Button = ({ navigate }) => {
  return (
    <button
      onClick={() => navigate(-1)}
      className="mb-[50px] flex h-[50px] w-[229px] items-center self-start rounded-[10px] bg-[#8362F2] font-bold text-white"
    >
      <img src={arrowLeft} className="ml-[15px] mr-[10px] h-6 w-6" alt="Icon" />
      <span className="text-[18px] font-medium">Back to Homepage</span>
    </button>
  );
};

export default Button;
