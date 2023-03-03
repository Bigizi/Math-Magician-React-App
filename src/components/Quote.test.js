import renderer from 'react-test-renderer';
import Quote from './Quote';

describe('Test Quote component', () => {
  it('Test component should render properly', () => {
    const tree = renderer.create(<Quote />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
