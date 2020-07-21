import React from 'react'
import { storiesOf } from '@storybook/react'

import SizedConfetti from './SizedConfetti'

import particle1 from './img/particle1.png'
import particle2 from './img/particle2.png'
import particle3 from './img/particle3.png'
import particle4 from './img/particle4.png'
import particle5 from './img/particle5.png'
import particle6 from './img/particle6.png'
import particle7 from './img/particle7.png'
import particle8 from './img/particle8.png'

const ImagesConfetti = () => {
  const images = [
    particle1,
    particle2,
    particle3,
    particle4,
    particle5,
    particle6,
    particle7,
    particle8,
  ]

  const elements = images.map((image) => {
    const element = new Image(20, 20)

    element.src = image

    return element
  })

  return (
    <SizedConfetti
      images={elements}
    />
  )
}

storiesOf('Props|Demos', module)
  .add('Images', () => (
    <ImagesConfetti />
  ))
