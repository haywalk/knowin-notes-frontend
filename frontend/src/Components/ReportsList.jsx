import React, {useState} from "react"
// Components
import historyData from "../db/history-list.json"
// Data
import Report from "./Report";
import { Link } from "react-router-dom";

export default function ReportsList() {
    const [reports, setReports] = useState(historyData);
    console.log(reports);
    return (
        <>
            {reports.map((item) => (

                    <Link key={item.id} to={`/report/${item.id}`}>
                    <div className='card'>
                    <Report key={item.id} 
                                id={item.id}
                                date={item.date} 
                                time={item.time} 
                                type={item.type} 
                                accuracy={item.accuracy} 
                                chronometer={item.chronometer} 
                                numNotes={item.numNotes} 
                                numMistakes={item.numMistakes}
                    />
                    </div>
                    </Link>
            ))}
        </>
    )
}
