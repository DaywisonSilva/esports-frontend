import Card from './Card.vue'
import { shallowMount } from '@vue/test-utils'
import { props } from '@mocks/Card.mock'

describe('<Card/>', () => {
  it('should render correctly', () => {
    const wrapper = shallowMount(Card, {
      props
    })

    expect(wrapper.exists()).toBe(true)
  })
})
