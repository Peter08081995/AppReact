import './App.css';


const user = {
  firstName: 'Peter',
  lastName: 'LLashag',
  yearsOld: 25,
  avatar: 'https://www.flaticon.es/premium-icon/icons/svg/1600/1600454.svg'
}

function getName(user) {
  return `${user.firstName} ${user.lastName} ${user.yearsOld}`;
}

function getImage(user) {
  const avatar = <img src={user.avatar} className="img-fluid mx-auto d-block"></img>
  return avatar;
}

function getGreeting(user) {
  if (user) {
    return <div>
      <h1 className="text-center">Hello {getName(user)}</h1><br></br>
    </div>
  } else {
    return <h1>Hello Stranger!!</h1>
  }
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h2>
          {getGreeting(user)}
        </h2>
        {getImage(user)}
      </header>
    </div>
  );
}

export default App;
