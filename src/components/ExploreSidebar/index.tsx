import Heading from 'components/Heading'
import Checkbox from 'components/Checkbox'
import RadioInput from 'components/RadioInput'
import Button from 'components/Button'
import * as S from './styles'

export type ItemProps = {
  title: string
  name: string
  type: string
  fields: Field[]
}

type Field = {
  label: string
  name: string
}

export type ExploreSidebarProps = {
  items: ItemProps[]
}

const ExploreSidebar = ({ items }: ExploreSidebarProps) => {
  return (
    <S.Wrapper>
      {items.map((item) => (
        <div key={item.title}>
          <Heading $lineBottom $lineColor="secondary" size="small" color="white">
            {item.title}
          </Heading>

          {item.type === 'checkbox' &&
            item.fields.map((field) => (
              <Checkbox
                key={field.name}
                name={field.name}
                label={field.label}
                labelFor={field.name}
              />
            ))}

          {item.type === 'radio' &&
            item.fields.map((field) => (
              <RadioInput
                key={field.name}
                id={field.name}
                name={item.name}
                value={field.name}
                label={field.label}
                labelFor={field.name}
              />
            ))}
        </div>
      ))}

      <Button $fullwidth size="medium">
        Filter
      </Button>
    </S.Wrapper>
  )
}

export default ExploreSidebar
