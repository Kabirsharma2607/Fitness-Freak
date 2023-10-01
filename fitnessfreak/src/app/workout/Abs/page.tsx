"use client";
import React from "react";
import "./Abs.css";
import { ClassNames } from "@emotion/react";
const page = () => {
  const [workout, setWorkout] = React.useState<any>(null);

  const getworkout = async () => {
    let data: any = {
      type: "Abs",
      imageUrl:
        "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YWJzJTIwd29ya291dHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60",
      durationInMin: 90,
      exercises: [
        {
          exercise: "Standing Abs Rotation",
          videoUrl: "https://gymvisual.com/img/p/9/3/5/6/9356.gif",
          sets: 3,
          reps: 15,
          description:
            "Lorem ipsum dolor, sit amet consectetur adipisicing elit.",
        },
        {
          exercise: "Twisting Crunch",
          videoUrl: "https://gymvisual.com/img/p/2/0/9/5/9/20959.gif",
          sets: 5,
          reps: 10,
          description:
            "Lorem ipsum, dolor sit amet consectetur adipisicing elit. ",
        },
        {
          exercise: "Standing Side Crunch",
          videoUrl:
            "https://gymvisual.com/19401-catalog_default/standing-side-crunch.jpg",
          sets: 5,
          reps: 15,
          description:
            "Lorem ipsum, dolor sit amet consectetur adipisicing elit.",
        },
      ],
    };
    setWorkout(data);
  };
  React.useEffect(() => {
    getworkout();
  }, []);
  return (
    <div className="workout">
      <h1 className="mainhead1"> {workout?.type} Day</h1>
      <div className="workout__exercises">
        {workout?.exercises.map((item: any, index: number) => {
          return (
            <div
              className={
                index % 2 === 0
                  ? "workout_left"
                  : "workout_left workout_left--reverse"
              }
            >
              <h3>{index + 1}</h3>
              <div className="workout_image">
                <img src={item.videoUrl} alt="" />
              </div>
              <div className="workout_content">
                <h2>{item.exercise}</h2>
                <span>
                  {item.sets} sets X {item.reps} reps
                </span>
                <p>{item.description}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default page;
