// import "./components/User.css";


const user = [{username: 'name1', firstname: 'firstname1'}, { username: 'name2', firstname: 'firstname2'}];

function GetOne() {
  const buttonClick = () => {
    console.log(JSON.stringify(user));
    document.getElementById('one').innerHTML = JSON.stringify(user[0]);
  }

  return (
    <div className="GetOne">
      <h2>GetOne</h2>
      <button onClick={buttonClick}>Get-One</button>
      <a id="one"></a>
    </div>
  );
}


 export default GetOne;
