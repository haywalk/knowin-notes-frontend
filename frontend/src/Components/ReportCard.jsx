import Report from "./Report"
function ReportCard(props) {
    return (
        <div className='card'>
            <Report date={props.date} time={props.time} type={props.type} accuracy={props.accuracy} chronometer={props.chronometer} numNotes={props.numNotes} numMistakes={props.numMistakes}/>
        </div>
    )
}

export default ReportCard