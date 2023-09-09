import { Bar, BarChart, ResponsiveContainer, XAxis, YAxis } from "recharts";
import { Logo } from "./Logo";
import { NoData } from "./errors/NoData";

const defaultData = [
  {
    date: "Jan",
    count: Math.floor(Math.random() * 5000) + 1000,
  },
  {
    date: "Feb",
    count: Math.floor(Math.random() * 5000) + 1000,
  },
  {
    date: "Mar",
    count: Math.floor(Math.random() * 5000) + 1000,
  },
  {
    date: "Apr",
    count: Math.floor(Math.random() * 5000) + 1000,
  },
  {
    date: "May",
    count: Math.floor(Math.random() * 5000) + 1000,
  },
  {
    date: "Jun",
    count: Math.floor(Math.random() * 5000) + 1000,
  },
  {
    date: "Jul",
    count: Math.floor(Math.random() * 5000) + 1000,
  },
  {
    date: "Aug",
    count: Math.floor(Math.random() * 5000) + 1000,
  },
  {
    date: "Sep",
    count: Math.floor(Math.random() * 5000) + 1000,
  },
  {
    date: "Oct",
    count: Math.floor(Math.random() * 5000) + 1000,
  },
  {
    date: "Nov",
    count: Math.floor(Math.random() * 5000) + 1000,
  },
  {
    date: "Dec",
    count: Math.floor(Math.random() * 5000) + 1000,
  },
];

export function Overview({ data = defaultData }) {
  return (
    <>
      {data.length > 0 ? (
        <ResponsiveContainer width="100%" height={350}>
          <BarChart data={data}>
            <XAxis
              dataKey="date"
              stroke="#888888"
              fontSize={12}
              tickLine={false}
              axisLine={false}
            />
            <YAxis
              stroke="#888888"
              fontSize={12}
              tickLine={true}
              axisLine={false}
              allowDecimals={false}
              tickFormatter={(value: string) => `${value} subs`}
            />
            <Bar dataKey="count" fill="#FDBB30" radius={[4, 4, 0, 0]} />
          </BarChart>
        </ResponsiveContainer>
      ) : (
        <NoData />
      )}
    </>
  );
}
