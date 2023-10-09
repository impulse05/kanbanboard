

const API_BASE_URL = 'https://api.quicksell.co/v1/internal/frontend-assignment';

export async function fetchTickets() {
  try {
    const response = await fetch(`${API_BASE_URL}`);
    const data = await response.json();
    const users= data.users;
    const tickets = data.tickets;
    console.log(users);
    return tickets.map((ticket) => {
        const user = users.find((user) => user.id === ticket.userId);
        const priority = ["No priority","Low","Medium","High","Urgent"];
        return {
          ...ticket,
          priorityName: priority[ticket.priority],
          userActive : user.available,
          user: user ? user.name : 'Unknown',
        };
      });
  } catch (error) {
    console.error('Error fetching tickets:', error);
    throw error;
  }
}