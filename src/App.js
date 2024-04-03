import "./styles/styles.scss";

function App() {
  return (
    <div className="App">
     <div className="topbar">
      <span>TRA HELPLINE SEARCH ENGINE:</span>
      <div className="searchbar">
        <input type="search" name="search" id="search" placeholder="Use: KRA, Phone No., File No"/>
      </div>
     </div>
     <div className="displayunit">
      <h1>Client Details</h1>
     </div>
    </div>
  );
}

export default App;
