import { useState } from "react";

const Tooltip = ({ content, children }) => {
  const [isVisible, setIsVisible] = useState(false);

  const showTooltip = () => setIsVisible(true);
  const hideTooltip = () => setIsVisible(false);

  return (
    <div
      className="relative inline-block"
      onMouseEnter={showTooltip}
      onMouseLeave={hideTooltip}
    >
      {children}
      {isVisible && (
        <div className="absolute left-1 top-full mt-2 w-[200px] -translate-x-1 transform rounded-md bg-[#525252] p-[20px] text-xs text-white">
          {content}
        </div>
      )}
    </div>
  );
};

export default Tooltip;
