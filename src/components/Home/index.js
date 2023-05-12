import {Component} from 'react'
import TeamCard from '../TeamCard'
import Loader from 'react-loader-spinner'
import './index.css'

class Home extends Component {
  state = {isLoading: true, teamsDataArray: []}

  componentDidMount() {
    this.fetchTeamsData()
  }

  fetchTeamsData = async () => {
    const res = await fetch('https://apis.ccbp.in/ipl')
    const data = await res.json()
    const modifiedData = data.teams.map(p => ({
      id: p.id,
      name: p.name,
      teamImageUrl: p.team_image_url,
    }))
    this.setState({isLoading: false, teamsDataArray: modifiedData})
  }

  render() {
    const {isLoading, teamsDataArray} = this.state

    if (isLoading) {
      return (
        <div className="bg1" data-testid="loader">
          <Loader type="Oval" height={50} width={50} />
        </div>
      )
    }

    return (
      <div className="bg">
        <div className="first-sub-container">
          <img
            src="https://assets.ccbp.in/frontend/react-js/ipl-logo-img.png"
            alt="ipl logo"
            className="Logo"
          />
          <h1 className="main-heading">IPL Dashboard</h1>
        </div>

        {/* for all teams */}
        <ul data-testid="loader" className="cards">
          {teamsDataArray.map(p => (
            <TeamCard item={p} key={p.id} />
          ))}
        </ul>
      </div>
    )
  }
}

export default Home
