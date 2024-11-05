function Report(props) {
    return (
        <>
            <p>{props.date} {props.time}</p>
            <p>{props.type} based practice</p>
            <p>Accuracy: {props.accuracy}</p>
            <p>Time: {props.chronometer}</p>
            <p>Total Notes: {props.numNotes}</p>
            <p>Mistakes: {props.numMistakes}</p>
        </>
    )
}

export default Report