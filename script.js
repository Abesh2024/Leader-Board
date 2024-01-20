var PlayersList = []

function addPlayer (event){

    event.preventDefault()
    const firstName = document.getElementById('first-name').value
    const lastName = document.getElementById('last-name').value
    const country = document.getElementById('country').value
    const score = document.getElementById('score').value

    const playerData = { name: firstName + " " + lastName, 
        country: country,
        score: Number(score)
    }

    PlayersList.push(playerData)
    
    refreshList();
}

function refreshList () {

    // const playerList = document.getElementById('player-list')
    PlayersList.sort( (player1, player2) => parseInt(player2.score) - parseInt(player1.score) )

    const playerList = document.getElementById('player-list')

    playerList.innerHTML = ''

    // let parent = document.getElementById("added-carts");

    PlayersList.forEach((e, index)=>{
        // const player = PlayersList[index];

        // const liEl = document.createElement('li')
        // const nameContent = document.createElement('span')
        // const countryContent = document.createElement('span')
        // const curentScore = document.createElement('span')



        // const container = document.createElement('div')
        // container.classList.add("box"); 
        // container.innerHTML = `
        // <p class="country">${e.name}</p>
        // <p class ="country">${e.country}</p>
        // <p class="score">${e.score}</p>
        // `
        // parent.append(container);

        const liEl = document.createElement('div')
        // const nameContent = document.createElement('span')
        // const countryContent = document.createElement('span')
        // const curentScore = document.createElement('span')
        
        // const increaseScore = document.createElement('button')
        // const decreaseScore = document.createElement('button')
        // var dltLi = document.createElement('button');

        liEl.innerHTML = `
        <p class="country">${e.name}</p>
         <p class ="country">${e.country}</p>
         <p class="score edit">${e.score}</p>
         <button onclick="increaseScoreHandler(${index})" class="edit">+5</button>
         <button onclick="decreaseScoreHandler(${index})" class="edit">-5</button>
         <button onclick="deleteHandeler(${index})" class="edit"><i class="fa-solid fa-trash-can"></i></button>
        `

        liEl.classList.add("inLine")


        // increaseScore.innerText = 'Increase'
        // decreaseScore.innerText = 'Decrease'
        // dltLi.innerText = 'Dlt'

        // increaseScore.setAttribute('onclick', `increaseScoreHandler(${index})`)
        // decreaseScore.setAttribute('onclick', `decreaseScoreHandler(${index})`)
        // dltLi.setAttribute('onclick', `deleteHandeler(${index})`)

        
        // curentScore.innerText = e.score
        // countryContent.innerText = e.country
        // nameContent.innerText = e.name

        // liEl.append(nameContent, countryContent, curentScore, increaseScore, decreaseScore, dltLi)
        playerList.append(liEl)
        // playerList.append(parent)

    })
}

function increaseScoreHandler(index) {
    PlayersList[index].score += 5
    refreshList()
}

function decreaseScoreHandler (index) {
    if(PlayersList[index].score - 5 <= 0){
        PlayersList[index].score = 0
    } else {
    PlayersList[index].score -= 5
    }

    refreshList()
}

function deleteHandeler(index) {
    var newPlayerList = PlayersList.filter((player, idx)=>{
        return idx != index 
    })
    PlayersList = [...newPlayerList];
    refreshList()
}