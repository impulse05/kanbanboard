
import React from "react";
import { FcHighPriority } from "react-icons/fc";
import { BsThreeDots } from "react-icons/bs";
import {
  MdSignalCellularAlt1Bar,
  MdSignalCellularAlt,
  MdSignalCellularAlt2Bar,
} from "react-icons/md";
import "./ticket.css";
import { getPriorityIcon } from "./priority";

function Ticket({
  ticket = {
    id: "CAM-10",
    img: "https://lh3.googleusercontent.com/ogw/AKPQZvyNPx3eF8d0yjrvKa76uPkcWMjNyYWHniBMSS7Kvg=s32-c-mo",
    priority: 1,
    priorityName: "Low",
    status: "Backlog",
    tag: ["Feature Request"],
    title: "Conduct Security Vulnerability Assessment",
    user: "Ramesh",
    userId: "usr-4",
  },
}) {
  const priorityInd = [
    <BsThreeDots />,
    <MdSignalCellularAlt1Bar />,
    <MdSignalCellularAlt2Bar />,
    <MdSignalCellularAlt />,
    <FcHighPriority />,
  ];
  return (
    <div className={`ticket`}>
      <div className={`ticketHeader`}>
        <h3>{ticket.id}</h3>
        <div class="profile">
          <div class="profile-image">
            <img
              src={`https://ui-avatars.com/api/?rounded=true&name=${ticket.user}&bold=true`}
              alt="Profile Image"
            />
            <span class="active-badge" active={ticket.userActive?.toString()}></span>
          </div>
        </div>
      </div>
      <div className="ticketTitle">
        {getPriorityIcon(ticket.status)}
        <h3 >
          {ticket.title.length > 40
            ? ticket.title.slice(0, 40) + "..."
            : ticket.title}
        </h3>
      </div>

      <div className="footer">
        <div className="priorityInd">{priorityInd[ticket.priority]}</div>
        {ticket.tag.map((tg) => {
          return <div className="priorityInd tags">{tg}</div>;
        })}
      </div>
    </div>
  );
}

export default Ticket;
