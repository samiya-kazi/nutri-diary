import React, { useState, useEffect } from "react";
import DiaryEntry from "../Components/DiaryEntry";
import Navbar from "../Components/Navbar";
import ProgressBar from "../Components/ProgressBar";
import { getCurrentUserGoals } from "../services/apiClientService";

function Home () {
  const date = new Date().toISOString();

  const [ totalCal, setTotalCal ] = useState(0);
  const [ calGoal, setCalGoal ] = useState(0);


  useEffect(() => {
    async function getCurrentCalGoal () {
      try {
        const result = await getCurrentUserGoals();
        setCalGoal(result.data.calGoal);
      } catch (error) {
        console.log(error);
      }
    }

    getCurrentCalGoal();
  }, [])

  return (
    <>
    <Navbar />
    <ProgressBar currCal={totalCal} calGoal={calGoal} />
    <DiaryEntry date={date} setTotalCal={setTotalCal} />
    </>
  )
}

export default Home;