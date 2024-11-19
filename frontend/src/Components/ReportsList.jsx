import React, {useState, useEffect} from "react"
// Data
import Report from "./Report";
import { Link } from "react-router-dom";
import { getHistory } from "../rest";

export default function ReportsList() {

    const [loading, setLoading] = useState(true);
    const [reports, setReports] = useState([]);

    useEffect(() => {
        async function fetchData() {
            if(!loading) return;
            const history = await getHistory();
            setReports(history);
            setLoading(false);
        }
        fetchData();
    }, []);

    if (loading) {
        return <><h1>Loading...</h1></>;
    }

    return (
        <>
            {reports.map((item) => (
                    <Link key={item.id} to={`/report/${item.id}`}>
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
                    </Link>
            ))}
        </>
    )
}
