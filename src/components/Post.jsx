export default function Post(props) {
    return (
        <>
            <h3>{props.username}</h3>
            <p>{props.postcontent}</p>
            <p>{props.timestamp}</p>
        </>
    )
}