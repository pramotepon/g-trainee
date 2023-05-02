import React, { useState } from "react";
import ActivityCard from "../../components/ActivityCard";

import DashboardLayout from "./../../layouts/dashboardLayout/DashboardLayout";
import "../../assets/css/DashboardScreen.css";

const DashboardScreen = () => {
  let mockActivities = [
    {
      title: "วิ่งแบบพี่ตูน",
      description: "เหนื่อยยยยย ไม่อยากวิ้งแบบพี่ตูนแล้วอยากวิ่งแบบเจนนี่",
      createdDate: "12/4/2023 12:32",
      img: "https://i0.wp.com/post.healthline.com/wp-content/uploads/2020/01/Runner-training-on-running-track-1296x728-header-1296x728.jpg?w=1155&h=1528",
    },
    {
      title: "ว่ายน้ำกับโตโน่ ",
      description: "เหนื่อยยยยย ไม่อยากวิ้งแบบพี่ตูนแล้วอยากวิ่งแบบเจนนี่",
      createdDate: "12/4/2023 12:32",
      img: "https://d1s9j44aio5gjs.cloudfront.net/2016/07/The_Benefits_of_Swimming.jpg",
    },
    {
      title: "ปั่นเพื่อพ่อ",
      description: "เหนื่อยยยยย ไม่อยากวิ้งแบบพี่ตูนแล้วอยากวิ่งแบบเจนนี่",
      createdDate: "12/4/2023 12:32",
      img: "https://www.khaosodenglish.com/wp-content/uploads/2018/11/14498299351449830078l.jpg",
    },
  ];
  const [activity, setActivity] = useState(mockActivities);

  let newActivity;
  let cardActivity;

  const newActivityCard = (
    <button className="first-card">
      <div>
        <h2>Start Your Frist Activity</h2>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="50"
          height="50"
          fill="currentColor"
          className="bi bi-plus-circle"
          viewBox="0 0 16 16"
        >
          <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
          <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z" />
        </svg>
      </div>
    </button>
  );

  if (!activity) {
    cardActivity = "";
    newActivity = newActivityCard;
  } else {
    newActivity = (
      <button type="button" className="btn btn-success">
        New Activity
      </button>
    );
    cardActivity = (
      <div>
        {activity.map((x) => {
          return <ActivityCard activity={x} />;
        })}
      </div>
    );
  }
  return (
    <DashboardLayout>
      <div className="section-right">
        <div className="text-end">{newActivity}</div>
        <div>{cardActivity}</div>
      </div>
    </DashboardLayout>
  );
};

export default DashboardScreen;
