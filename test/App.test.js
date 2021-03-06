import React from 'react'
import Enzyme, { shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import App from '../src/App'

describe('App Component', () => {

  beforeAll(() => {
      Enzyme.configure({ adapter: new Adapter() })
  })

  it('renders correctly', () => {
      const component = shallow(<App />)
      expect(component).toMatchSnapshot()
  })
})
