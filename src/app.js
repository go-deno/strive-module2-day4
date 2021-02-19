import './css/main.scss'

// <!--
//     WELCOME TO THE STRIVE TEAM GENERATOR!

//     The app is pretty straight forward, use Bootstrap to add the following features:
//     - The user can add a list of names
//     - The user can set the number of teams
//     - Every time the user clicks on the "assign" button, a random name is placed in a team and removed from the list
//     - Each team should be inside a "column"
//     - [EXTRA] Create a button to remove an user from a team, putting him back in the main list
//     - [EXTRA] Create a button to reset the state of the app
// -->

const state = {
  stagingList: [],
  teams: [],
  teamsCount: 0
}

const stagingComponent = (stagingList = []) => {
  const staging = document.getElementById('staging-list')
  const member = document.createElement('li')
  member.classList = 'list-group-item'
  member.innerText = `${stagingList[0]}`
  staging.appendChild(member)
}

const addTeamComponent = () => {
  const teams = document.getElementById('teams')
  const teamColumn = document.createElement('div')
  const teamTitle = document.createElement('h5')
  teamTitle.innerText = `Team ${state.teamsCount}`
  const clone = teamColumn.cloneNode(true)
  clone.setAttribute('id', `Team ${state.teamsCount}`)
  clone.classList = 'col-2 team-column'
  teams.appendChild(teamTitle)
  teams.appendChild(clone)
}

const removeTeamComponent = () => {
  const select = document.getElementById('Teams')
  select.removeChild(select.lastChild)
}

// ADD MEMBER
document.getElementById('addMember').addEventListener('click', (event) => {
  const { value } = document.getElementById('inputMembers')
  state.stagingList.unshift(value)
  stagingComponent(state.stagingList)
})

// ADD TEAM BUTTON
document.getElementById('addTeam').addEventListener('click', (event) => {
  state.teams = []
  state.teamsCount += 1
  console.log('TeamsCountState: ' + state.teamsCount)
  console.table(`TeamsState: ${state.teams}`)
  generateTeamsArrays()
  addTeamComponent()
})

// TODO REMOVE NOT WORKING
// REMOVE TEAM BUTTON
document.getElementById('removeTeam').addEventListener('click', () => {
  console.log('Remove Team Clicked')
  removeTeamComponent()
})

window.onload = function () {}

const generateTeamsArrays = () => {
  for (let i = 0; i < state.teamsCount; i++) {
    state.teams = [Array(), ...state.teams]
    console.log(state.teams)
  }
}
