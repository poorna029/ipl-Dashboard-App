import './index.css'

// const latestMatchDetails1 = {
//   competingTeam: m.latestMatchDetails.competing_team,
//   competingTeamLogo: m.latestMatchDetails.competing_team_logo,
//   date: m.latestMatchDetails.data,
//   firstInnings: m.latestMatchDetails.first_innings,
//   id: m.latestMatchDetails.id,
//   manOfTheMatch: m.latestMatchDetails.man_of_the_match,
//   matchStatus: m.latestMatchDetails.matchStatus,
//   result: m.latestMatchDetails.result,
//   secondInnings: m.latestMatchDetails.second_innings,
//   umpires: m.latestMatchDetails.umpires,
//   venue: m.latestMatchDetails.venue,
// }

const LatestMatch = props => {
  const data = props

  console.log('hi', data)
  if (data === undefined) {
    return null
  }

  const {
    competingTeam,
    competingTeamLogo,
    date,
    firstInnings,
    id,
    manOfTheMatch,
    result,
    secondInnings,
    umpires,
    venue,
  } = data.data
  console.log(
    competingTeam,
    competingTeamLogo,
    date,
    firstInnings,
    id,
    manOfTheMatch,
    result,
    secondInnings,
    umpires,
    venue,
  )

  return (
    <div className="lm-container">
      {/* container contains 3 div elements those are */}

      {/* first container required details are:  */}
      {/* 1.secondInnings,2.date,3.venue,4.result */}
      <div className="lm-first-container">
        <p>{competingTeam}</p>
        <p>{date}</p>
        <p>{venue}</p>
        <p>{result}</p>
      </div>

      {/* seconds Container required details are */}

      {/* 1.competing team logo  */}

      <div className="lm-second-container">
        <img
          src={competingTeamLogo}
          alt={`latest match ${competingTeam}`}
          className="team-logo"
        />
      </div>

      {/* third container required details are */}
      {/* 1.firstinnings,2.seconds Innings,3.man of the match,umpires: */}
      <div className="lm-third-container">
        <div>
          <p>First Innings</p>
          <p>{firstInnings}</p>
        </div>
        <div>
          <p>Second Innings</p>
          <p>{secondInnings}</p>
        </div>
        <div>
          <p>Man Of The Match</p>
          <p>{manOfTheMatch}</p>
        </div>
        <div>
          <p>Umpires</p>
          <p>{umpires}</p>
        </div>
      </div>
    </div>
  )
}
export default LatestMatch
