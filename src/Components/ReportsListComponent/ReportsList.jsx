import React, {useState, useEffect} from "react"
import { Link } from "react-router-dom"; // Import for navigation
import { getHistory } from "../../rest"; // Import to get history from backend
import { ReportCard } from '../component_import.js'; // Import the report card


function ReportsList() {
    /* State of Reports List */
    const [loading, setLoading] = useState(true); // Loading boolean (initially true)
    const [reports, setReports] = useState([]); // Array of reports

    useEffect(() => {
        // Fetch the data from backend
        async function fetchData() {
            // If loading, don't do anything
            if(!loading) return;

            // Get the history
            const history = await getHistory();

            setReports(history); // Set array of reports to the history given
            setLoading(false); // Set loading to false
        }
        fetchData();
    }, []);

    // Display "Loading..." while loading the history
    if (loading) {
        return <><h1>Loading...</h1></>;
    }

    // Display the list of reports
    return (
        <>
            {/* Display reports in reversed chronological order */}
            {reports.slice(0).reverse().map((item) => (
                <>
                    {/* Link to this card with appropriate id */}
                    <Link key={item.id} to={`/report/${item.id}`}>
                        {/* Report Card with info */}
                        <ReportCard key={item.id} 
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
                </>
            ))}
        </>
    )
}

export default ReportsList;