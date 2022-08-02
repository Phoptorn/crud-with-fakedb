
const users = [{username: 'name1', firstname: 'firstname1'}, { username: 'name2', firstname: 'firstname2'}];

function GetData() {
  const buttonClick = () => {
    console.log(JSON.stringify(users));
    document.getElementById('users').innerHTML = JSON.stringify(users);

  }

  return (
    <div className="GetData">
      <h2>GetData</h2>
      <button onClick={buttonClick}>Get</button>
      <a id="users"></a>
    </div>
  );
}


 export default GetData;
