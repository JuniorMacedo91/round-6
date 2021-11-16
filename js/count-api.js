const visitAmount = document.querySelector('#visitAmount')

async function countVisits(){
    const url = await fetch('https://api.countapi.xyz/update/roundsix/visit/?amount=1')
    const resp = await url.json()
    visitAmount.innerHTML = resp.value
}

countVisits()

