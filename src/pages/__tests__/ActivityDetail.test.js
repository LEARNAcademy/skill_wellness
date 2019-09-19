import React from 'react'
import ActivityDetail from '../ActivityDetail'
import renderer from 'react-test-renderer'

test('renders correctly', ()=>{
  const activity = {
    image: 'http://image.com',
    platform: {
      name: 'Treehouse',
      avatar: "http://imageurl.com"
    },
    skillLevel:{
      description: 'Beginner Level',
      avatar: "http://imageurl.com"
    },
    outcome: {
      description: 'Your own gratification',
      avatar: "http://imageurl.com"
    },
    cost:{
      description: "$25.99",
      avatar: "http://imageurl.com"
    },
    title: 'Title of Activity',
    subtitle: 'Subtitle text that makes you want to enroll, and be awesome',
    status: "Available",
    howToEnroll: "Lorem Ipsum dolor blah bhal bhal but is longer than atually gets rendered",
    description: "Lorem Ipsum dolor blah bhal bhal but is longer than atually gets rendered",
  }
  const rendered = renderer.create(<ActivityDetail activity={activity} />).toJSON()
  expect(rendered).toMatchSnapshot()
})
