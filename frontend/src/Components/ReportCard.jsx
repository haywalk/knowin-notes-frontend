import { Link } from "react-router-dom"
import Report from "./Report"
import { useParams } from "react-router-dom"

function ReportCard(props) {
    return (
            <div className='card'>
                <Report key={props.id} id={props.id} date={props.date} time={props.time} type={props.type} accuracy={props.accuracy} chronometer={props.chronometer} numNotes={props.numNotes} numMistakes={props.numMistakes}/>
            </div>
    )
}

export default ReportCard