import './App.css';
import logo from './logo.png';
import TinderCard from 'react-tinder-card'
import Nav from 'react-bootstrap/Nav';
import Container from 'react-bootstrap/Container';

const db = [
	{
	  name: 'asdf asdfasfd',
	  url: 'https://avataaars.io/?avatarStyle=Circle&topType=LongHairStraight&accessoriesType=Blank&hairColor=BrownDark&facialHairType=Blank&clotheType=BlazerShirt&eyeType=Default&eyebrowType=Default&mouthType=Default&skinColor=Light'
	},
	{
	  name: 'asdf asdfa',
	  url: 'https://avataaars.io/?avatarStyle=Circle&topType=WinterHat4&accessoriesType=Sunglasses&hatColor=Red&hairColor=BrownDark&facialHairType=Blank&clotheType=Hoodie&clotheColor=Gray01&eyeType=Default&eyebrowType=RaisedExcited&mouthType=Eating&skinColor=Light'
	},
	{
	  name: 'zxc wmr d',
	  url: 'https://avataaars.io/?avatarStyle=Circle&topType=WinterHat1&accessoriesType=Round&hatColor=Blue03&facialHairType=Blank&clotheType=Hoodie&clotheColor=Gray01&eyeType=Default&eyebrowType=RaisedExcited&mouthType=Eating&skinColor=Light'
	},
	{
	  name: 'asdfk asdj',
	  url: 'https://avataaars.io/?avatarStyle=Circle&topType=WinterHat1&accessoriesType=Round&hatColor=Pink&facialHairType=Blank&clotheType=Hoodie&clotheColor=Gray01&eyeType=Side&eyebrowType=UnibrowNatural&mouthType=Tongue&skinColor=Light'
	},
	{
	  name: 'asdjf djsj sj',
	  url: 'https://avataaars.io/?avatarStyle=Circle&topType=LongHairFroBand&accessoriesType=Round&hatColor=Pink&hairColor=BrownDark&facialHairType=Blank&clotheType=Hoodie&clotheColor=Gray01&eyeType=Side&eyebrowType=UnibrowNatural&mouthType=Tongue&skinColor=Light'
	}
  ]

const Header = () => {
  return (
	<div>
		<Container fluid>
			<Container>
				<img src={logo} height="100" width ="100"/>
			</Container>

			<Container>
				<h1> FRUITBASKET </h1>
			</Container>
		</Container>

		<Nav justify variant="tabs" defaultActiveKey="/home">
			<Nav.Item>
    			<Nav.Link href="link-0">Discover</Nav.Link>
			</Nav.Item>

			<Nav.Item>
    			<Nav.Link eventKey="link-1">Likes</Nav.Link>
  			</Nav.Item>

  			<Nav.Item>
    			<Nav.Link eventKey="link-2">Messages</Nav.Link>
  			</Nav.Item>

  			<Nav.Item>
    			<Nav.Link eventKey="Link-3">Profile</Nav.Link>
  			</Nav.Item>
		</Nav>
	</div>
  )
}



function CardSystem () {
	const characters = db
	return(
		<div class = "col-md-12 centered">
			{characters.map((character) =>
			<TinderCard>
					<div style={{ backgroundImage: 'url(' + character.url + ')' }} class = "cards">
              		<h3>{character.name}</h3>
				</div>
			</TinderCard>
			)}
		</div>
	)
}

function App() {
  return (
    <div className="App">
      <Header />
	  <CardSystem />
    </div>
  );
}

export default App;