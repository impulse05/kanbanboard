import { FcHighPriority } from "react-icons/fc";
import { BsThreeDots } from "react-icons/bs";
import { RiCheckboxBlankCircleLine } from "react-icons/ri";
import { AiOutlinePlus ,AiOutlineLoading3Quarters} from "react-icons/ai";
import { IoCheckmarkDoneCircleSharp} from "react-icons/io5";
import { VscBlank} from "react-icons/vsc";

import {
  MdSignalCellularAlt1Bar,
  MdSignalCellularAlt,
  MdSignalCellularAlt2Bar,
} from "react-icons/md";


  export const getPriorityIcon = (priority) => {
    switch (priority) {
      case "No priority":
        return <BsThreeDots />;

      case "Low":
        return <MdSignalCellularAlt1Bar />;

      case "High":
        return <MdSignalCellularAlt />;
      case "Medium":
        return <MdSignalCellularAlt2Bar />;

      case "Urgent":
        return <FcHighPriority />;
      case "Done":
        return <IoCheckmarkDoneCircleSharp />;
      case "In progress":
        return <AiOutlineLoading3Quarters />;
      case "Todo":
        return <RiCheckboxBlankCircleLine />;





      default:
        return <VscBlank/>;
    }
  };