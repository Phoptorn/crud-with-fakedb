import person from './person.json';

const uJSON = person

function GetData() {
  const buttonClick = () => {
    console.log(JSON.stringify(uJSON));
    document.getElementById('users').innerHTML = JSON.stringify(uJSON);
  }


  return (
    <div className="GetJSON">
      <h2>GetJSON</h2>
      <button onClick={buttonClick}>Get</button><br />
      <a id="users"></a>
    </div>
  );
}

 export default GetData;
