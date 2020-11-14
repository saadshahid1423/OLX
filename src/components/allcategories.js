import { render } from '@testing-library/react';
import React from 'react'
import '../App.css';

class Categories extends React.Component{
    render() {
      return (
        <div style={{marginLeft: "20px",width: "947px",marginTop: "-20px"}} className="input-group">
          <select style={{borderTop: "white",borderLeft: "white", borderRight: "white"}} className="custom-select"  id="inputGroupSelect04" aria-label="Example select with button addon">
          <option value="" disabled hidden selected>ALL CATEGORIES</option>
          <option aria-label="None" value="" />
          <option style={{fontWeight: "bold"}} value={5}>Mobile</option>
          <option  value={10}>Tablets</option>
          <option  value={20}>Accessories</option>
          <option  value={30}>Mobile Phones</option>

          <option aria-label="None" value="" />
          <option style={{fontWeight: "bold"}} value={15}>Vehicles</option>
          <option  value={25}>Cars</option>
          <option  value={35}>Cars on Installments</option>
          <option  value={40}>Cars Accessories</option>
          <option  value={45}>Spare Parts</option>
          <option  value={50}>Buses, Vans & Trucks</option>
          <option  value={55}>Rickshaw & Chingchi</option>
          <option  value={60}>Boats</option>
          <option  value={65}>Tractors & Trailers</option>

          <option aria-label="None" value="" />
          <option style={{fontWeight: "bold"}} value={70}>Property for Sale</option>
          <option  value={75}>Land & Plots</option>
          <option  value={80}>Houses</option>
          <option  value={85}>Shops - Offices - Commercial Space</option>
          <option  value={90}>Portions & Floors</option>

          <option aria-label="None" value="" />
          <option style={{fontWeight: "bold"}} value={95}>Property for Rent</option>
          <option  value={100}>Houses</option>
          <option  value={105}>Apartments & Flats</option>
          <option  value={110}>Portions & Floors</option>
          <option  value={115}>Shops - Offices - Commercial Space</option>
          <option  value={120}>Roommates & Paying Guests</option>
          <option  value={125}>Vacation Rentals - Guest Houses</option>
          <option  value={130}>Land & Plots</option>

          <option aria-label="None" value="" />
          <option style={{fontWeight: "bold"}} value={135}>Electronics & Home Appliances</option>
          <option  value={140}>Computers & Accessories</option>
          <option  value={145}>TV - Video - Audio</option>
          <option  value={150}>Cameras & Accessories</option>
          <option  value={155}>Games & Entertainment</option>
          <option  value={160}>Other Home Appliances</option>
          <option  value={165}>Generators, UPS & Power Solutions</option>
          <option  value={170}>Kitchen Appliances</option>
          <option  value={175}>AC & Coolers</option>
          <option  value={180}>Fridges & Freezers</option>
          <option  value={185}>Washing Machines & Dryers</option>

          <option aria-label="None" value="" />
          <option style={{fontWeight: "bold"}} value={190}>Bikes</option>
          <option   value={195}>Motorcycles</option>
          <option  value={200}>Spare Parts</option>
          <option  value={205}>Bicycles</option>
          <option  value={210}>ATV & Quads</option>
          <option  value={215}>Scooters</option>

          <option aria-label="None" value="" />
          <option style={{fontWeight: "bold"}} value={220}>Business, Industrial & Agriculture</option>
          <option  value={225}>Business for Sale</option>
          <option  value={230}>Food & Restaurants</option>
          <option  value={235}>Trade & Industrial</option>
          <option  value={240}>Construction & Heavy Machinery</option>
          <option  value={245}>Agriculture</option>
          <option  value={250}>Other Business & Industry</option>
          <option  value={255}>Medical & Pharma</option>

          <option aria-label="None" value="" />
          <option style={{fontWeight: "bold"}} value={260}>Services</option>
          <option  value={265}>Education & Classes</option>
          <option  value={270}>Travel & Visa</option>
          <option  value={275}>Car Rental</option>
          <option  value={280}>Drivers & Taxi</option>
          <option  value={285}>Web Development</option>
          <option  value={290}>Other Services</option>
          <option  value={295}>Electronics & Computer Repair</option>
          <option  value={300}>Event Services</option>
          <option  value={305}>Health & Beauty</option>
          <option  value={310}>Maids & Domestic Help</option>
          <option  value={315}>Movers & Packers</option>
          <option  value={320}>Home & Office Repair</option>
          <option  value={325}>Catering & Restaurant</option>
          <option  value={330}>Farm & Fresh Food</option>

          <option aria-label="None" value="" />
          <option style={{fontWeight: "bold"}} value={335}>Jobs</option>
          <option  value={340}>Online</option>
          <option  value={345}>Marketing</option>
          <option  value={350}>Advertising & PR</option>
          <option  value={355}>Education</option>
          <option  value={360}>Customer Service</option>
          <option  value={365}>Sales</option>
          <option  value={370}>IT & Networking</option>
          <option  value={375}>Hotels & Tourism</option>
          <option  value={380}>Clerical & Administration</option>
          <option  value={385}>Human Resources</option>
          <option  value={390}>Accounting & Finance</option>
          <option  value={395}>Manufacturing</option>
          <option  value={400}>Medical</option>
          <option  value={405}>Domestic Staff  </option>
          <option  value={410}>Part - Time</option>
          <option  value={415}>Other Jobs</option>

          <option aria-label="None" value="" />
          <option style={{fontWeight: "bold"}} value={420}>Animals</option>
          <option  value={425}>Fish & Aquariums</option>
          <option  value={430}>Birds</option>
          <option  value={435}>Hens & Aseel</option>
          <option  value={440}>Cats</option>
          <option  value={445}>Dogs</option>
          <option  value={450}>Livestock</option>
          <option  value={455}>Horses</option>
          <option  value={460}>Pet Food & Accessories</option>
          <option  value={465}>Other Animals</option>
          
          <option aria-label="None" value="" />
          <option style={{fontWeight: "bold"}} value={470}>Furniture & Home Decor</option>
          <option  value={475}>Sofa & Chairs</option>
          <option  value={480}>Beds & Wardrobes</option>
          <option  value={485}>Home Decoration</option>
          <option  value={490}>Tables & Dining</option>
          <option  value={495}>Garden & Outdoor</option>
          <option  value={500}>Painting & Mirrors</option>
          <option  value={505}>Rugs & Carpets</option>
          <option  value={510}>Curtains & Blinds</option>
          <option  value={515}>Office Furniture</option>
          <option  value={520}>Other Household Items</option>

          <option aria-label="None" value="" />
          <option style={{fontWeight: "bold"}} value={525}>Fashion & Beauty</option>
          <option  value={530}>Accessories</option>
          <option  value={535}>Clothes</option>
          <option  value={540}>Footwear</option>
          <option  value={545}>Jewellery</option>
          <option  value={550}>Make Up</option>
          <option  value={555}>Skin & Hair</option>
          <option  value={560}>Watches</option>
          <option  value={565}>Wedding</option>
          <option  value={570}>Lawn & Pret</option>
          <option  value={575}>Couture</option>
          <option  value={580}>Other Fashion</option>

          <option aria-label="None" value="" />
          <option style={{fontWeight: "bold"}} value={585}>Books, Sports & Hobbies</option>
          <option  value={590}>Books & Magazines</option>
          <option  value={595}>Musical Instruments</option>
          <option  value={600}>Sports Equipment</option>
          <option  value={605}>Gym & Fitness</option>
          <option  value={610}>Other Hobbies</option>

          <option aria-label="None" value="" />
          <option style={{fontWeight: "bold"}} value={615}>Kids</option>
          <option  value={620}>Kids Furniture</option>
          <option  value={625}>Toys</option>
          <option  value={630}>Prams & Walkers</option>
          <option  value={635}>Swings & Slides</option>
          <option  value={640}>Kids Bikes</option>
          <option  value={645}>Kids Accessories</option>
          </select>
          <p className="linkToProduct">Mobile Phones</p>
          <p className="linkToproduct">Cars</p>
          <p className="linkToproduct">Motorcycles</p>
          <p className="linkToproduct">Houses</p>
          <p className="linkToproduct">TV-Video-Audio</p>
          <p className="linkToproduct">Tablets</p>
          <p className="linkToproduct">Land & Plots</p>
        </div>
      )
    }
};
export default Categories;