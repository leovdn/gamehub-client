import Heading from 'components/Heading'
import * as S from './styles'
import Checkbox from 'components/Checkbox'
import RadioInput from 'components/RadioInput'
import Button from 'components/Button'

const ExploreSidebar = () => {
  return (
    <S.Wrapper>
      <Heading $lineBottom $lineColor="secondary" size="small" color="white">
        Price
      </Heading>
      <Checkbox name="under-50" label="Under $50" labelFor="under-50" />
      <Checkbox name="under-100" label="Under $100" labelFor="under-100" />
      <Checkbox name="under-150" label="Under $150" labelFor="under-150" />
      <Checkbox name="free" label="Free" labelFor="free" />
      <Checkbox name="discounted" label="Discounted" labelFor="discounted" />

      <Heading $lineBottom $lineColor="secondary" size="small" color="white">
        Sort by
      </Heading>
      <RadioInput
        id="high-to-low"
        name="sort-by"
        label="Price: high to low"
        labelFor="high-to-low"
        labelColor="white"
      />

      <RadioInput
        id="low-to-high"
        name="sort-by"
        label="Price: low to high"
        labelFor="low-to-high"
        labelColor="white"
      />

      <Heading $lineBottom $lineColor="secondary" size="small" color="white">
        System
      </Heading>

      <Checkbox name="windows" label="Windows" labelFor="windows" />

      <Checkbox name="linux" label="Linux" labelFor="linux" />

      <Checkbox name="mac" label="Mac" labelFor="mac" />

      <Heading $lineBottom $lineColor="secondary" size="small" color="white">
        Genres
      </Heading>

      <Checkbox name="action" label="Action" labelFor="action" />
      <Checkbox name="adventure" label="Adventure" labelFor="adventure" />
      <Checkbox name="shooter" label="Shooter" labelFor="shooter" />
      <Checkbox name="rpg" label="RPG" labelFor="rpg" />
      <Checkbox name="strategy" label="Strategy" labelFor="strategy" />
      <Checkbox name="simulation" label="Simulation" labelFor="simulation" />
      <Checkbox name="sports" label="Sports" labelFor="sports" />

      <Button $fullwidth size="medium">
        Filter
      </Button>
    </S.Wrapper>
  )
}

export default ExploreSidebar
