# Generate Test Ids

## Installation

`npm i -D generate-test-ids`

## Why

When using the fantastic `@testing-library` libraries I found myself becoming concerned that as a project grew so did two risks:

- Duplication risk: the same test id was used for multiple elements. This could result in false positives or the wrong element being selected
- Sync risk: a test id string could be different to the string on the element without any warning

To remove these unnecessary risks I started creating test id objects like this:

```javascript
// testids.js
const testids = {
  incBtn: 'incBtn',
  count: 'count',
}
// counter.test.js
test('counter should inc and dec', () => {
  const { getByTestId } = render(<Counter />)
  expect(getByTestId(testids.count).innerText).toBe('0')
  user.click(getByTestId(testids.incBtn))
  expect(getByTestId(testids.count).innerText).toBe('1')
})
// counter.jsx
const Counter = () => {
  const [getCount, setCount] = useState(0)
  return (
    <Fragment>
      <p>
        Count: <span data-testid={testids.count}>{getCount}</span>
      </p>
      <button data-testid={testids.incBtn}>+</button>
    </Fragment>
  )
}
```

This deals with the sync risk outlined above, but there is no guarantee that the values are unique (duplication risk). Additionally, it is a bit of a pain having to write the test id twice which makes me less likely to do it!

## Use

- Create a file in your project to hold the testids object

```javascript
import { generateTestIds } from 'generate-test-ids'

const ids = ['incBtn', 'count']
export const testids = generateTestIds(ids)
// Output => {incBtn: 'incBtn', count: 'count'}

const ids = ['incBtn', 'count', 'incBtn']
export const testids = generateTestIds(ids)
// Output => Error Duplicate test id
```

## Types

Typescript definitions are included

## Size

The package is 350 bytes once packaged. Although this package is not designed to be used in production.
