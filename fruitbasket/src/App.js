import './App.css';
import logo from './logo.png';

const Header = () => {
  return (
		<div class="container-fluid">
	<div class="row">
		<div class="col-md-12 centered">
			<img src={logo} height="100" width ="100"/>
		</div>
	</div>
	<div class="row">
		<div class="col-md-12 centered">
			<h1> FRUITBASKET </h1>
		</div>
	</div>
</div>
  )
}

function App() {
  return (
    <div className="App">
      <Header />
    </div>
  );
}

export default App;