/*
import { currentUser } from "@clerk/nextjs/server"; // if needed
import { db } from "@/lib/db"; // your data source or logic

export const getCalls = async () => {
  // fetch data from DB or API
  const upcomingCalls = await db.getUpcomingCalls(); // or however you're getting data

  return { upcomingCalls };
};
*/
import { currentUser } from "@clerk/nextjs/server"; // if needed

// Dummy db to prevent errors
export const db = {
  getUpcomingCalls: async () => {
    // return dummy data
    return [
      { id: 1, title: "Sample Call", time: "2025-07-01T10:00:00Z" },
      { id: 2, title: "Another Call", time: "2025-07-02T15:30:00Z" }
    ];
  }
};

export const getCalls = async () => {
  const upcomingCalls = await db.getUpcomingCalls();

  return { upcomingCalls };
};
