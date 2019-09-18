import React from 'react'
import Status from '../Status'
import renderer from 'react-test-renderer'

test('renders correctly', ()=>{
  const rendered = renderer.create(<Status value='Available'/>).toJSON()
  expect(rendered).toMatchSnapshot()
})
