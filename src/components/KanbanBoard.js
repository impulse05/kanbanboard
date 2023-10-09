import React, { useEffect, useState } from "react";
import { fetchTickets } from "../api";
import Ticket from "./Ticket";
import { BsThreeDots } from "react-icons/bs";
import { AiOutlinePlus } from "react-icons/ai";
import "./kanban.css";
import { getPriorityIcon } from "./priority";
import {filterAndSortTickets} from "./filter"



export default function KanbanBoard() {

  const [tickets, setTickets] = useState([]);
  const [groupBy, setGroupBy] = useState(
    localStorage.getItem("groupBy") || "status"
  ); 
  const [sort, setSort] = useState(localStorage.getItem("sort") || "priority");
  const [groupedTickets, setGroupedTickets] = useState([]);

  //   fetch the data
  useEffect(() => {
    async function fetchData() {
      const ticketsData = await fetchTickets();
      setTickets(ticketsData);
    }
    fetchData();
    console.log(tickets);
  }, []);

  useEffect(() => {
    // Filter and sort tickets based on groupBy and sort criteria
    const filteredAndSortedTickets = filterAndSortTickets(
      tickets,
      groupBy,
      sort
    );
    setGroupedTickets(filteredAndSortedTickets);
  }, [tickets, groupBy, sort]);

  

  return (
    <div>
      
      <nav class="navbar">
        <ul class="nav-list controls">
          <li class="nav-item"></li>
          <li class="nav-item">Group by:</li>

          <li class="nav-item">
            <select
              className="select-control"
              onChange={(e) => {
                localStorage.setItem("groupBy", e.target.value);
                setGroupBy(e.target.value);
              }}
              value={groupBy}
            >
              <option value="status">Status</option>
              <option value="user">User</option>
              <option value="priority">Priority</option>
            </select>
          </li>
          <li class="nav-item">Sortby:</li>
          <li class="nav-item">
            <select
              className="select-control"
              onChange={(e) => {
                localStorage.setItem("sort", e.target.value);
                setSort(e.target.value);
              }}
              value={sort}
            >
              <option value="priority">Priority</option>
              <option value="title">Title</option>
            </select>
          </li>
        </ul>
      </nav>

      <div className="kanban-board">
        <div className="columns">
          {Object.keys(groupedTickets).map((category) => (
            <div key={category} className="column">
              <div className="categoryLabel">
                <div className="start">
                  {getPriorityIcon(category)}
                  {category}
                </div>
                <div className="end">
                  <BsThreeDots />
                  <AiOutlinePlus />
                </div>
              </div>
              {groupedTickets[category].map((ticket) => (
                <Ticket key={ticket.id} ticket={ticket} />
              ))}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
