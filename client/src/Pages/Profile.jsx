import React, { useEffect, useState } from "react";
import Navbar from '../Components/Navbar';
import UserInfo from "../Components/UserInfo";
import WeightProgressChart from "../Components/WeightProgressChart";
import { getCurrentUserGoals } from "../services/apiClientService";

function Profile () {

  const [ info, setInfo ] = useState({});

  useEffect(() => {
    async function getCurrentInfo () {
      try {
        const result = await getCurrentUserGoals();
        setInfo(result.data);
        console.log(result.data)
      } catch (error) {
        console.log(error);
      }
    }

    getCurrentInfo();
  }, [])

  return (
    <>
    <Navbar />
    <UserInfo info={info} setInfo={setInfo} />
    <WeightProgressChart />
    </>
  )
}

export default Profile;