import React, { useEffect, useState } from 'react'
import { getUserCurrentInfo, getUserLogs } from '../Services/apiClientService';

function Dashboard() {

  const [currentInfo, setCurrentInfo] = useState([]);
  const [logs, setLogs] = useState([]);

  async function getUserInfo () {
    try {
      const res = await getUserCurrentInfo();
      setCurrentInfo(res.data);
      const res2 = await getUserLogs();
      setLogs(res2.data);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    getUserInfo();
  }, [])

  return (
    <div>Dashboard</div>
  )
}

export default Dashboard