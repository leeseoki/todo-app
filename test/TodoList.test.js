import React from 'react'
import Enzyme, { shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import TodoList from '../src/components/TodoList'
import todoData from '../src/todoData'

describe('TodoList Component', () => {

  beforeAll(() => {
      Enzyme.configure({ adapter: new Adapter() })
  })

  it('renders correctly', () => {
      const component = shallow(<TodoList items={todoData} />)
      expect(component).toMatchSnapshot()
  })
})

