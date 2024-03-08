import Header from "./Header.jsx"
import Footer from "./Footer.jsx"
import Student from "./Student.jsx";
function App() {
  return(
    <div className="app-container">
      <Header />
      <div className="content">
        <Student/>
      </div>
      <Footer />
    </div>
  );

  
}

export default App
