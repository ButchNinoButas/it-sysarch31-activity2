import "./index.css"
function Header(){

    return(
        <header>
             <div className="header-content">
        <h1 className="FNAME">Butch</h1>
        <nav>
          <ul>
            <li><a href="#">Home</a></li>
            <li><a href="#">About</a></li>
            <li><a href="#">Service</a></li>
            <li><a href="#">Contact</a></li>
          </ul>
        </nav>
      </div>
      <hr />
        </header>
    );

}

export default Header