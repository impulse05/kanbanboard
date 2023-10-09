
export const filterAndSortTickets=(tickets, groupBy, sort) =>{
    
    let filteredTickets = [...tickets];

    if (sort === "priority") {
      filteredTickets = Object.values(filteredTickets)
        .flatMap((group) => group)
        .sort((a, b) => b.priority - a.priority);
    } else if (sort === "title") {
      filteredTickets = Object.values(filteredTickets)
        .flatMap((group) => group)
        .sort((a, b) => a.title.localeCompare(b.title));
    }

  
    if (groupBy === "status") {
      // Group by status
      const groupedTickets = {};
      filteredTickets.forEach((ticket) => {
        const status = ticket.status;
        if (!groupedTickets[status]) {
          groupedTickets[status] = [];
        }
        groupedTickets[status].push(ticket);
        // console.log(groupedTickets);
        filteredTickets=groupedTickets;
      });
    } else if (groupBy === "user") {
      // Group by user
      const groupedTickets = {};
      filteredTickets.forEach((ticket) => {
        const user = ticket.user;
        if (!groupedTickets[user]) {
          groupedTickets[user] = [];
        }
        groupedTickets[user].push(ticket);
      });
      filteredTickets=groupedTickets;
    } else if (groupBy === "priority") {
      // Group by priority
      const groupedTickets = {
          Urgent: [],
          High: [],
          Medium: [],
          Low: [],
        "No priority": [],
      };
      filteredTickets.forEach((ticket) => {
        const priority = ticket.priorityName;
        groupedTickets[priority].push(ticket);
      });
      filteredTickets=groupedTickets;
    }

    return filteredTickets
  }


