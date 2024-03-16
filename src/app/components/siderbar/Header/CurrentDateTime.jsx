"use client";

import React, { useState, useEffect } from "react";

const CurrentDateTime = () => {
  const [currentDateTime, setCurrentDateTime] = useState(new Date());

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentDateTime(new Date());
    }, 60000); // Update every minute

    return () => clearInterval(intervalId);
  }, []);

  const formatDate = (date) => {
    const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    const months = [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ];

    const day = days[date.getDay()];
    const month = months[date.getMonth()];
    const dayOfMonth = date.getDate();
    const year = date.getFullYear();
    const hours = date.getHours() % 12 || 12;
    const minutes = date.getMinutes();
    const amPm = date.getHours() >= 12 ? "PM" : "AM";

    const formattedDate = `${day}, ${
      dayOfMonth < 10 ? "0" + dayOfMonth : dayOfMonth
    }-${
      date.getMonth() + 1 < 10
        ? "0" + (date.getMonth() + 1)
        : date.getMonth() + 1
    }-${year} | ${hours}:${minutes < 10 ? "0" + minutes : minutes} ${amPm}`;
    return formattedDate;
  };

  return (
    <div>
      <h4 className="text-white" suppressHydrationWarning={true}>
        {formatDate(currentDateTime)}
      </h4>
    </div>
  );
};

export default CurrentDateTime;
