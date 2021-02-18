import './css/main.scss'

const state = {
  stagingList: [''],
  teamsCount: 0
}

const stagingComponent = (stagingList = []) => {
  if (stagingList.length === 0 && stagingList === undefined) {
    console.log('no members')
  }
  const staging = document.getElementById('staging-list')
  const member = document.createElement('li')
  member.classList = 'list-group-item'
  member.innerText = `${stagingList[0]}`
  staging.appendChild(member)
}

// button handles members to list
document.getElementById('btnAdd').addEventListener('click', (event) => {
  const { value } = document.getElementById('inputMembers')
  state.stagingList.unshift(value)
  stagingComponent(state.stagingList)
})

// TODO button doesn't work
// const addButton = () => {
//   console.log('working')
// }

window.onload = function () {
  stagingComponent()
}
