import React from "react";
import { Card, CardContent } from "./Card/Card";
import { PieChart, Pie, Cell } from "recharts";
import { User, BookOpen, Building } from "lucide-react";

const data = [
  { name: "Returned", value: 40 },
  { name: "Borrowed", value: 60 },
];
const COLORS = ["#0a0a0a", "#3f3f3f"];

const Dashboard = () => {
  return (
    <div className="w-full p-6 flex  gap-6 bg-gray-50 min-h-72">
      {/* Pie Chart */}
      <div className="w-1/2 flex flex-col items-center h-fit rounded-2xl shadow p-4">
        <PieChart width={300} height={300}>
          <Pie
            data={data}
            cx="50%"
            cy="50%"
            // innerRadius={80}
            outerRadius={150}
            fill="#8884d8"
            dataKey="value"
          >
            {data.map((entry, index) => (
              <Cell
                key={`cell-${index}`}
                fill={COLORS[index % COLORS.length]}
              />
            ))}
          </Pie>
        </PieChart>
        <div className="mt-4 flex gap-4">
          <div className="flex items-center gap-2">
            <div className="w-4 h-4 rounded-full bg-[#3f3f3f]" />
            <span className="text-sm">Total Borrowed Books</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-4 h-4 rounded-full bg-[#0a0a0a]" />
            <span className="text-sm">Total Returned Books</span>
          </div>
        </div>
      </div>

      <div className="w-1/2">
        {/* Stats */}
        <div className="flex h-[347px] py-1 justify-between  gap-2">
          <div className=" flex flex-col gap-4">
            <Card>
              <CardContent className="flex items-center gap-4 p-6">
                <User className="text-gray-700" />
                <div>
                  <p className="text-2xl font-bold">0150</p>
                  <p>Total User Base</p>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="flex items-center gap-4 p-6">
                <BookOpen className="text-gray-700" />
                <div>
                  <p className="text-2xl font-bold">01500</p>
                  <p>Total Book Count</p>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="flex items-center gap-4 p-6">
                <Building className="text-gray-700" />
                <div>
                  <p className="text-2xl font-bold">0010</p>
                  <p>Branch Count</p>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Right Panels */}
          {/* <div className="flex flex-col"> */}
          <Card className="overflow-auto">
            <CardContent className="p-4">
              <h2 className="text-lg font-semibold mb-2">Overdue Borrowers</h2>
              {[...Array(5)].map((_, i) => (
                <div
                  key={i}
                  className="flex items-center justify-between border rounded-xl p-3 mb-2"
                >
                  <div className="flex items-center gap-3">
                    <User />
                    <div>
                      <p>Sasmith Gunasekara</p>
                      <p className="text-sm text-gray-500">Borrowed ID: 10</p>
                    </div>
                  </div>
                  <span className="text-gray-400">⟳</span>
                </div>
              ))}
            </CardContent>
          </Card>
        </div>

        {/* <Card>
            <CardContent className="p-4">
              <h2 className="text-lg font-semibold mb-2">Branch Network</h2>
              {[...Array(5)].map((_, i) => (
                <div
                  key={i}
                  className="flex items-center gap-3 border rounded-xl p-3 mb-2"
                >
                  <Building />
                  <div>
                    <p>BookWorm - Matara</p>
                    <p className="text-sm text-gray-500">Branch ID: 1</p>
                  </div>
                </div>
              ))}
            </CardContent>
          </Card> */}
        {/* </div> */}

        {/* Admins */}
        <div className="">
          <Card>
            <CardContent className="p-4">
              <h2 className="text-lg font-semibold mb-4">BookWorm Admins</h2>
              <div className="flex flex-col gap-2">
                {[...Array(4)].map((_, i) => (
                  <div
                    key={i}
                    className="flex items-center justify-between border rounded-xl p-3"
                  >
                    <div className="flex items-center gap-3">
                      <User />
                      <div>
                        <p>Nisal Gunasekara</p>
                        <p className="text-sm text-gray-500">Admin ID: 1</p>
                      </div>
                    </div>
                    <div className="text-sm text-green-500">● Active</div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
