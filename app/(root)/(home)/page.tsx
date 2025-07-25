// ❌ REMOVE "use client"
import { MeetingTypeList } from "@/components/meeting-type-list";
import { getCalls } from "@/lib/server/get-calls"; // server-side version of useGetCalls

export const dynamic = "force-dynamic"; // Required if fetching dynamic data server-side

const HomePage = async () => {
  const now = new Date();
  const { upcomingCalls } = await getCalls();

  const time = now.toLocaleTimeString("en-US", {
    hour: "2-digit",
    minute: "2-digit",
  });

  const date = new Intl.DateTimeFormat("en-US", { dateStyle: "full" }).format(now);

  return (
    <section className="flex size-full flex-col gap-10 text-white">
      <div className="h-[300px] w-full rounded-[20px] bg-hero bg-cover">
        <div className="flex h-full flex-col justify-between max-md:px-5 max-md:py-8 lg:p-11">
          <h2 className="glassmorphism max-w-[270px] rounded py-2 text-center text-base font-normal">
            {upcomingCalls?.length === 0
              ? "No upcoming meeting"
              : `Upcoming meeting at: ${new Date(
                  upcomingCalls[upcomingCalls.length - 1].time
                ).toLocaleTimeString("en-US", {
                  hour: "2-digit",
                  minute: "2-digit",
                })}`}
          </h2>

          <div className="flex flex-col gap-2">
            <h1 className="text-4xl font-extrabold lg:text-7xl">{time}</h1>
            <p className="text-lg font-medium text-sky-1 lg:text-2xl">{date}</p>
          </div>
        </div>
      </div>

      <MeetingTypeList />
    </section>
  );
};

export default HomePage;
