import { render, /* screen */ } from '@testing-library/react';
import AtestPage from './';
// import data from './AtestPage.data';

describe('<AtestPage />', () => {
    it('Renders an empty AtestPage', () => {
        render(<AtestPage />);
    });

    // it('Renders AtestPage with data', () => {
    //     const { container } = render(<AtestPage {...data} />);
    //     expect(container).toMatchSnapshot();
    // });
});
