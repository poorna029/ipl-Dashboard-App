import './index.css'

const MatchCard = props => {
  console.log('poorna', props)
  const {data} = props
  if (data === undefined) {
    return null
  }
  const {result, matchStatus, competingTeam, competingTeamLogo} = data
  //   console.log('date', date)
  //   let date
  //   if (data !== undefined) {
  //     date = ''
  //   }

  return (
    <li className="match-card">
      {/* 1.image,2.team Name,3.status ,4.result */}
      <img
        src={competingTeamLogo}
        alt={competingTeam}
        className="competing-team-logo"
      />
      <p>{competingTeam}</p>
      <p>{result}</p>
      <p className={matchStatus === 'Won' ? 'green' : 'red'}>{matchStatus}</p>
    </li>
  )
}

export default MatchCard
