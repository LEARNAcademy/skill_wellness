import React from 'react'
import ActivityCard from '../ActivityCard'
import renderer from 'react-test-renderer'

test('renders correctly', ()=>{
  const activity = {
    image: 'http://image.com',
    title: 'Test Activity',
    subtitle: 'Test Subtitle',
    description: 'Test Description',
    status: "Available"
  }
  const rendered = renderer.create(<ActivityCard activity={activity} />).toJSON()
  expect(rendered).toMatchSnapshot()
})
