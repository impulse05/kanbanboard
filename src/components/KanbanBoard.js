import React, { useEffect, useState } from "react";
import { fetchTickets } from "../api";

export default function KanbanBoard() {

    // add states for the data
  const [tickets, setTickets] = useState([]);
  const [groupBy, setGroupBy] = useState(
    localStorage.getItem("groupBy") || "status"
  ); // 'status', 'user', 'priority'
  const [sort, setSort] = useState(localStorage.getItem("sort") || "priority"); // 'priority', 'title'
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
  return (
    <div>
      {tickets.length && <>
      <h1> Kan ban baord</h1>
      {tickets.map(ticket=><h1>hello</h1> )}
      </>}
    </div>
  );
}
