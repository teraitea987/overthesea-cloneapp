import logo from './logo.svg';
import './App.css';
import './fonts/mattone/Mattone/Mattone-Regular.otf';
function App() {
  return (
    <div className="App">
		<div className="parent">
			<nav className="navbar">
				<h1>overthesea</h1>
				<div className="navbar__right">
					<div className="btn-burger"></div>	
					<div className="btn-burger"></div>	
					<div className="btn-burger"></div>
				</div>
			</nav>
			<div className="sidebar">
				<p>30Feelings</p>
			</div>
			<main className="main"> </main>
			<div className="right-navbar">
				<img className="img_right_navbar" src="./images/right.png"></img>
			</div>
			<div className="right-footer">
				<span className="boutoum"></span>
				<p>&copy; 2016 - 2021 Overthesea</p>			
			</div>
			<div className="left-footer">
				<a href="#">Instagram</a>				
				<a href="#">Facebook</a>				
				<a href="#">Youtube</a>				
				<a href="#">Pinterest</a>				
			</div>
			
			<div class="div7"> 
				<p>preorder now<span className="arrow_right"></span></p>
				<img src="./images/trait-site-ben.svg"></img>
			</div>
		</div>
    </div>
  );
}

export default App;
