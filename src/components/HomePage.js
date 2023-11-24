import React from 'react';
import './homepage.css'
import { Link } from 'react-router-dom';


const HomePage = ({ darkMode }) => {
  return (
    <div className={`homepage-container ${darkMode ? 'dark-mode' : ''}`}>

      <div className='main'>
        <div className='row'>
          <div className='col-md-6'>
            <h1 className="display-4">Welcome to bidding for good</h1>
            <p className="lead">
            most trusted online auction platform, where you can sell all sorts of items with ease. With our popular e-auction house, several clients have been benefited as we strive for their one hundred percent satisfaction. Be it bidding or auctioning, our solutions will leave no stone unturned in serving you the best.
            </p>
          </div>
         
        </div>
      </div>
      <hr className="my-4" />
      <div className='key-feat'>
        <h1 className="display-4"></h1>
        <div className='row'>
          <div className='col-md-6'>
          <div className='col-md-6'>
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRDQJfLjm7eBgcsZAfyjoWizaMdpI_PgCZKqw&usqp=CAU" height="400vh" width="600vh"></img>
          </div>
          <center><Link to="/bidding" className="btn btn-primary add-bids-button">
              Add Bids
            </Link></center>
          </div>
          <div className='col-md-6'>
          <div className='col-md-6'>
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRr1-_1aVFHcHndl9aGMfOSlNESL7W1J1TF0A&usqp=CAU" height="400vh" width="600vh"></img>
          </div>
            <center><Link to="/product" className="btn btn-primary">
              Explore Products
            </Link></center>
          </div>
        </div>
      </div>
    </div>

  );
};

export default HomePage;
