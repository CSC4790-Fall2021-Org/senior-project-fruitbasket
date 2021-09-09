import logo from './logo.svg';
import './App.css';

const Header = () => {
    return ( <
        div class = "container-fluid" >
        <
        div class = "row" >
        <
        div class = "col-md-12 centered" >
        <
        img src = "https://cdn2.iconfinder.com/data/icons/food-vol-2-1/96/096-512.png"
        height = "100"
        width = "100" / >
        <
        /div> <
        /div> <
        div class = "row" >
        <
        div class = "col-md-12 centered" >
        <
        h1 > FRUITBASKET < /h1> <
        /div> <
        /div> <
        /div>
    )
}

function App() {
    return ( <
        div className = "App" >
        <
        Header / >
        <
        header className = "App-header" >
        <
        img src = { logo }
        className = "App-logo"
        alt = "logo" / >
        <
        p >
        Edit < code > src / App.js < /code> and save to reload. <
        /p> <
        a className = "App-link"
        href = "https://reactjs.org"
        target = "_blank"
        rel = "noopener noreferrer" >
        Learn React <
        /a> <
        /header> <
        /div>
    );
}

export default App;