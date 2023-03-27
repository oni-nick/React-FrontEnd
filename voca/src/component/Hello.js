import World from './World'
const Hello = function () {
    return (
        <>
        <h1 style={{
            color: "red",
            borderRight : "120px solid #ff0",
            borderLeft : "120px solid #ff0",
            marginBottom: "50px",
            marginTop: "50px",
            opacity : 1,
        }}>Hello!</h1>
        <World/>
        </>
    );
}

export default Hello;

// export default function Hello(){

// }

// const Hello = () => {
//     <p>Hello</p>
// }

// export default Hello;