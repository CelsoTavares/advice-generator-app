

async function ativar() {
  let response = await fetch('https://api.adviceslip.com/advice')
  let peguei = await response.json()
  let id = peguei.slip.id
  let conselho = peguei.slip.advice

  document.querySelector('#advice').innerHTML = `ADVICE #${id}`
  document.querySelector('#app').innerHTML = `“${conselho}”`
}
