"use client";
import { useEffect, useState } from "react";

const LocalClock = () => {
  const [now, setNow] = useState(null);

  useEffect(() => {
    const tick = () => setNow(new Date());
    tick();
    const id = setInterval(tick, 1000);
    return () => clearInterval(id);
  }, []);

  if (!now) return null;

  const time = new Intl.DateTimeFormat("en-GB", {
    timeZone: "Africa/Tunis",
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
    hour12: false,
  }).format(now);

  return (
    <div className="flex flex-col items-center gap-1 text-center">
      <span className="flex items-center gap-2 font-semibold tracking-wider text-[#ddddc3]">
        <span className="inline-block h-2 w-2 animate-pulse rounded-full bg-green-500" />
        {time}
      </span>
      <span className="text-xs text-gray-400">Tunisia · GMT+1</span>
    </div>
  );
};

export default LocalClock;
