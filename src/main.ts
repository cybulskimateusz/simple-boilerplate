import './style.css'
import * as UTILS from './utils'

const initialButton = document.querySelector<HTMLButtonElement>('#initialButton')!

initialButton.addEventListener('click', () => {
  const bounds = document.querySelector<HTMLDivElement>('#app')!.getBoundingClientRect()
  const { width, height } = bounds

  const desiredPositionX = UTILS.getRandomInt(0, width)
  const desiredPositionY = UTILS.getRandomInt(0, height)

  initialButton.style.marginLeft = `${desiredPositionX}px`
  initialButton.style.marginTop = `${desiredPositionY}px`
})