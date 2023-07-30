import React from 'react'
import BarChart from './components/BarChart'
import { UserData } from './Data'
import { useState } from 'react'
import GetData from './components/GetData';
import ScatterChart from './components/ScatterChart';


export default function ChartApi() {
    const [userData, setUserData] = useState({
        labels: UserData.map((data) => data.year),
        datasets: [
            {
                label: "Sales for the movies in different years",
                data: UserData.map((data) => data.sales),
                backgroundColor: [
                    "rgba(75,192,192,1)",
                    "#ecf0f1",
                    "#50AF95",
                    "#f3ba2f",
                    "#2a71d0",
                ],
                borderColor: "black",
                borderWidth: 4,
            },
        ],
    });
    

    return (
        <div className='flex pt-7 ' >
            <BarChart chartData={userData} />
           {/* <ScatterChart chartData={userData}/>*/}
            <div className='pt-7 mx-4'>
                <GetData/>
            </div>
        </div>
    )
}
