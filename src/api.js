// api.js

const API_BASE_URL = 'https://api.quicksell.co/v1/internal/frontend-assignment';

// Fetch tickets from the API
export async function fetchTickets() {
  try {
    const response = await fetch(`${API_BASE_URL}`);
    const data = await response.json();
    const users= data.users;
    const tickets = data.tickets;
    return tickets.map((ticket) => {
        const user = users.find((user) => user.id === ticket.userId);
        const priority = ["No priority","Low","Medium","High","Urgent"];
        return {
          ...ticket,
          priorityName: priority[ticket.priority],
          user: user ? user.name : 'Unknown',
        };
      });
  } catch (error) {
    console.error('Error fetching tickets:', error);
    throw error;
  }
}