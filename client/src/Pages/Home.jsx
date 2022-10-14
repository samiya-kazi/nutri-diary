import React from "react";
import DiaryEntry from "../Components/DiaryEntry";
import Navbar from "../Components/Navbar";

function Home () {
  const date = new Date().toISOString();
  return (
    <>
    <Navbar />
    <DiaryEntry date={date} />
    </>
  )
}

export default Home;