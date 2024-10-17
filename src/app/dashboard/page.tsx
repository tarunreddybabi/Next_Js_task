import { Card, Chart, Rightbar, Transactions } from "@/components";

export default function Dashboard() {
  return (
    <div className="flex gap-5 mt-5">
      <div className="flex  flex-col gap-5 flex-[3]">
        <div className="flex gap-5 justify-between">
          <Card />
          <Card />
          <Card />
        </div>
        <Transactions />
        <Chart />
      </div>
      <div className="flex-[1]">
        <Rightbar />
      </div>
    </div>
  );
}
