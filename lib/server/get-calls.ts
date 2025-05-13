import { currentUser } from "@clerk/nextjs/server"; // if needed
import { db } from "@/lib/db"; // your data source or logic

export const getCalls = async () => {
  // fetch data from DB or API
  const upcomingCalls = await db.getUpcomingCalls(); // or however you're getting data

  return { upcomingCalls };
};
