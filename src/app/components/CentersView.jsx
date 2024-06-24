"use client";

import { useState } from "react";
import BowlingCenterCard from "./BowlingCenterCard";
import MapChart from "./MapChart";

export default function CentersView({ centerData }) {
  const [viewMode, setViewMode] = useState("grid");

  return (
    <div>
      {/* Toggle buttons for view mode */}
      <div className="flex flex-row gap-5 justify-center my-5 text-lg">
        <button
          onClick={() => setViewMode("grid")}
          className={`px-2 py-1 ${viewMode === "grid" ? "border border-dashed text-clutchBlue-300 border-clutchBlue-300" : "border-transparent border"}`}
        >
          Grid View
        </button>
        <button
          onClick={() => setViewMode("list")}
          className={`hidden md:flex px-2 py-1 ${viewMode === "list" ? "border border-dashed text-clutchBlue-300 border-clutchBlue-300" : "border-transparent border"}`}
        >
          List View
        </button>
        <button
          onClick={() => setViewMode("map")}
          className={`px-2 py-1 ${viewMode === "map" ? "border border-dashed text-clutchBlue-300 border-clutchBlue-300" : "border-transparent border"}`}
        >
          Map View
        </button>
      </div>

      {/* Conditionally render the grid, list, or map view */}
      {viewMode === "map" ? (
        <div className="flex justify-center w-full xl:max-w-screen-md mx-auto">
          <MapChart bowlingCenterData={centerData} />
        </div>
      ) : (
        <div
          className={`${viewMode === "grid" ? "grid gap-5 2xl:gap-10 grid-cols-1 md:grid-cols-2 xl:grid-cols-3" : "flex flex-col w-full"}`}
        >
          {centerData.map((center, index) => (
            <div
              key={index}
              className={`${viewMode === "list" ? "flex flex-col w-full" : ""}`}
            >
              <BowlingCenterCard center={center} viewMode={viewMode} />
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
