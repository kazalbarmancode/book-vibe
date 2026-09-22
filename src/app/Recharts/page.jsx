"use client";
import { BookContexts } from "@/Context/BooksContexts";
import React, { useContext } from "react";
import {
  Bar,
  BarChart,
  CartesianGrid,
  Label,
  LabelList,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

const colors = [
  "#0088FE",
  "#00C49F",
  "#FFBB28",
  "#FF8042",
  "red",
  "pink",
  "black",
];

// #endregion
const getPath = (x, y, width, height) => {
  return `M${x},${y + height}C${x + width / 3},${y + height} ${x + width / 2},${y + height / 3}
  ${x + width / 2}, ${y}
  C${x + width / 2},${y + height / 3} ${x + (2 * width) / 3},${y + height} ${x + width}, ${y + height}
  Z`;
};
const TriangleBar = (props) => {
  const { x, y, width, height, index } = props;

  const color = colors[index % colors.length];

  return (
    <path
      strokeWidth={props.isActive ? 5 : 0}
      d={getPath(Number(x), Number(y), Number(width), Number(height))}
      stroke={color}
      fill={color}
      style={{
        transition: "stroke-width 0.3s ease-out",
      }}
    />
  );
};

const CustomColorLabel = (props) => {
  const fill = colors[(props.index ?? 0) % colors.length];
  return <Label {...props} fill={fill} />;
};

const RechartPage = () => {
  const { readBooks } = useContext(BookContexts);
  const data = readBooks.map((book, index) => {
    return {
      name: book.bookName,
      uv: book.totalPages,
      pv: index + 1,
      amt: index + 1,
    };
  });

  return (
    <div>
      <div className="container mx-auto py-10">
        <h1 className="text-3xl font-bold  rounded-2xl text-center py-2">
          The Book Recharts !
        </h1>
      </div>
      <div className="flex flex-col  py-10 items-center ">
        {readBooks.length > 0 ? (
          <BarChart
            style={{
              width: "100%",
              maxWidth: "700px",
              maxHeight: "70vh",
              aspectRatio: 1.618,
            }}
            responsive
            data={data}
            margin={{
              top: 20,
              right: 0,
              left: 0,
              bottom: 5,
            }}
          >
            <CartesianGrid />
            <Tooltip cursor={{ fillOpacity: 0.5 }} />
            <XAxis dataKey="name" />
            <YAxis width="auto" />
            <Bar dataKey="uv" shape={TriangleBar} activeBar>
              <LabelList content={CustomColorLabel} position="top" />
            </Bar>
            {/* <RechartsDevtools /> */}
          </BarChart>
        ) : (
          <p className="text-4xl font-normal text-amber-60">No Read Book TO Display</p>
        )}
      </div>
    </div>
  );
};

export default RechartPage;
