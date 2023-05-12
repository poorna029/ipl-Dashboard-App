import {Component} from 'react'
import MatchCard from '../MatchCard'
import Loader from 'react-loader-spinner'
import './index.css'
import LatestMatch from '../LatestMatch'

class TeamMatches extends Component {
  state = {isLoading: true, apiLatestMDetails: {}, apiRecentMatches: []}

  componentDidMount() {
    this.fetchData()
  }

  fetchData = async () => {
    const {match} = this.props
    const {params} = match
    const {id} = params
    const res = await fetch(`https://apis.ccbp.in/ipl/${id}`)
    const data = await res.json()
    const m = {
      latestMatchDetails: data.latest_match_details,
      recentMatches: data.recent_matches,
      team_banner_url: data.team_banner_url,
    }

    const recentMatchesArray = data.recent_matches.map(p => ({
      competingTeam: p.competing_team,
      competingTeamLogo: p.competing_team_logo,
      date: p.date,
      firstInnings: p.first_innings,
      id: p.id,
      manOfTheMatch: p.match_of_the_match,
      matchStatus: p.match_status,
      result: p.result,
      secondInnings: p.second_innings,
      umpires: p.umpires,
      venue: p.venue,
    }))

    const latestMatchDetails1 = {
      competingTeam: m.latestMatchDetails.competing_team,
      competingTeamLogo: m.latestMatchDetails.competing_team_logo,
      date: m.latestMatchDetails.data,
      firstInnings: m.latestMatchDetails.first_innings,
      id: m.latestMatchDetails.id,
      manOfTheMatch: m.latestMatchDetails.man_of_the_match,
      matchStatus: m.latestMatchDetails.matchStatus,
      result: m.latestMatchDetails.result,
      secondInnings: m.latestMatchDetails.second_innings,
      umpires: m.latestMatchDetails.umpires,
      venue: m.latestMatchDetails.venue,
    }
    this.setState({
      isLoading: false,
      apiLatestMDetails: latestMatchDetails1,
      apiRecentMatches: recentMatchesArray,
      team_banner_url: m.team_banner_url,
    })
  }

  render() {
    const {
      isLoading,
      apiLatestMDetails,
      apiRecentMatches,
      team_banner_url,
    } = this.state

    if (apiLatestMDetails === undefined || apiLatestMDetails === null) {
      return ''
    }
    if (isLoading) {
      return (
        <div data-testid="loader">
          <Loader type="TailSpin" width={50} height={50} />
        </div>
      )
    }
    return (
      <div className="team-match">
        {/* first image  */}
        {/* second LatestMatch Component */}
        {/* third MatchCard */}
        <img src={team_banner_url} alt="team banner" className="banner" />
        <LatestMatch data={apiLatestMDetails} key={apiLatestMDetails.id} />
        <ul
          data-testid={isLoading ? 'loader' : ''}
          className="match-card-container"
        >
          {apiRecentMatches.map(p => (
            <MatchCard key={p.id} data={p} />
          ))}
        </ul>
      </div>
    )
  }
}

export default TeamMatches
