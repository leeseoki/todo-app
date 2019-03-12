import React from 'react'
import Enzyme, { shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import TodoItem from '../src/components/TodoItem'

var item = {id: 1, title: "code", done: true}

describe('TodoItem Component', () => {

  beforeAll(() => {
      Enzyme.configure({ adapter: new Adapter() })
  })

  it('renders correctly', () => {
      const component = shallow(<TodoItem item={item} />)
      expect(component).toMatchSnapshot()
  })
})
