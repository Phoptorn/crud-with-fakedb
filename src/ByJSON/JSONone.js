import person from "./person.json";

// const uJSON = person;

function JSONone() {
  const buttonClick = () => {
    // console.log(typeof uJSON);
    console.log(person["person"][0]);
    document.getElementById('one').innerHTML = JSON.stringify(person["person"][0]);
  };


  return (
    <div className="JOne">
      <h2>JSONOne</h2>
      <button onClick={buttonClick}>JSONone</button> <br />
      <a id='one'></a>
    </div>
  );
}


 export default JSONone;
