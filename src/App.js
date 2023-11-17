import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header id="header_container">
				<div className="container">
					<div className="row">
						<div className="col3 col-sm-6 col-md-6 d-block">
							<div className="logo_sec">
								<h2>DUMMY WEBSITE</h2>
							</div>
						</div>
						<div className="col9 col-sm-12 col-md-12 d-none">
							<div className="nav">
								<nav className="nav_sec">
									<ul className="head_flex">
										<li><a href="#banner_container">Home</a></li>
										<li><a href="#about_container">About</a></li>
										<li><a href="#service_container">Service</a></li>
										<li><a href="#portfolio_container">Portfolio</a></li>
										<li><a href="#team_card">Team</a></li>
										<li><a href="#contact_container">Contact</a></li>
									</ul>
								</nav>
							</div>
						</div>
					</div>
				</div>
			</header>

    </div>
  );
}

export default App;
