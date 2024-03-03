import {Component} from 'react'
import './index.css'

const capitalsList = 
  [
    {
      "id": "NEW_DELHI",
      "capitalDisplayText": "New Delhi",
      "country": "India"
    },
    {
      "id": "BEIJING",
      "capitalDisplayText": "Beijing",
      "country": "China"
    },
    {
      "id": "MOSCOW",
      "capitalDisplayText": "Moscow",
      "country": "Russia"
    },
    {
      "id": "WASHINGTON_DC",
      "capitalDisplayText": "Washington, D.C.",
      "country": "United States"
    },
    {
      "id": "LONDON",
      "capitalDisplayText": "London",
      "country": "United Kingdom"
    },
    {
      "id": "TOKYO",
      "capitalDisplayText": "Tokyo",
      "country": "Japan"
    },
    {
      "id": "PARIS",
      "capitalDisplayText": "Paris",
      "country": "France"
    },
    {
      "id": "BERLIN",
      "capitalDisplayText": "Berlin",
      "country": "Germany"
    },
    {
      "id": "CANBERRA",
      "capitalDisplayText": "Canberra",
      "country": "Australia"
    },
    {
      "id": "OTTAWA",
      "capitalDisplayText": "Ottawa",
      "country": "Canada"
    },
    {
      "id": "BRASILIA",
      "capitalDisplayText": "Brasília",
      "country": "Brazil"
    },
    {
      "id": "ROME",
      "capitalDisplayText": "Rome",
      "country": "Italy"
    },
    {
      "id": "MEXICO_CITY",
      "capitalDisplayText": "Mexico City",
      "country": "Mexico"
    },
    {
      "id": "MADRID",
      "capitalDisplayText": "Madrid",
      "country": "Spain"
    },
    {
      "id": "AMSTERDAM",
      "capitalDisplayText": "Amsterdam",
      "country": "Netherlands"
    },
    {
      "id": "DUBLIN",
      "capitalDisplayText": "Dublin",
      "country": "Ireland"
    },
    {
      "id": "STOCKHOLM",
      "capitalDisplayText": "Stockholm",
      "country": "Sweden"
    },
    {
      "id": "CAPE_TOWN",
      "capitalDisplayText": "Cape Town",
      "country": "South Africa"
    },
    {
      "id": "ANKARA",
      "capitalDisplayText": "Ankara",
      "country": "Turkey"
    },
    {
      "id": "ATHENS",
      "capitalDisplayText": "Athens",
      "country": "Greece"
    }
  ]

class Capitals extends Component{

  state = {
    capitals: capitalsList[0].id
  }

  onChangeCapital = (event) =>{
    this.setState({
      capitals: event.target.value
    })
  }

  getCountry = () =>{
    const {capitals} = this.state;
    const capitalIndex = capitalsList.find((capital) => capital.id === capitals);

    return capitalIndex.country;
    
  }

  render(){
    const {capitals} = this.state
    const country = this.getCountry(capitals)
    
    return(
      <div className='main-container'>
        <div className='capital-container'>
          <h3 className='heading'>Countries And Capitals</h3>
          <div className='select-container'>
            <select className='selector' onChange={this.onChangeCapital}>
              {capitalsList.map((each)=> 
                <option key={each.id} value={each.id}>{each.capitalDisplayText}</option>
              )}
            </select>
            <p>is capital of which country ?</p>
          </div>
          <p className='country'> {country} </p>
          
        </div>
      </div>
    )
  }
}

export default Capitals;