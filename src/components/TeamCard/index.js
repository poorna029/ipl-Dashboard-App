import {Component} from 'react'
import {Link} from 'react-router-dom'
import './index.css'

class TeamCard extends Component {
  render() {
    const {item} = this.props
    const {teamImageUrl, name, id} = item
    return (
      <li>
        <Link to={`/team-matches/${id}`}>
          <button type="button" className="team-container button">
            <img src={teamImageUrl} alt={name} className="team-image" />
            <p className="name">{name}</p>
          </button>
        </Link>
      </li>
    )
  }
}

export default TeamCard
