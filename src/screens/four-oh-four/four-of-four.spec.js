import React from 'react'
import ReactDOM from 'react-dom'
import FourOhFour from './'

it('renders without crashing', () => {
  const div = document.createElement('div')
  ReactDOM.render(<FourOhFour />, div)
})
