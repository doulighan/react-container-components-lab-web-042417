import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';

import MovieReviews from '../src/components/MovieReviews';
import testReviews from './test-reviews';

const Noop = (props) => { return <p>Noop</p> };

describe('<MovieReviews />', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = !MovieReviews.prototype ?
      shallow(<Noop />) : shallow(<MovieReviews reviews={testReviews} />);
  });


  it('should have defaultProp "reviews"', () => {
    const defaultProps = MovieReviews.defaultProps;
    expect(defaultProps, 'defaultProps is not defined.').to.exist;
    expect(defaultProps).to.have.key('reviews');
  });

  it('should have a top-level component with class "review-list"', () => {
    expect(wrapper.hasClass('review-list')).to.be.true;
  });


});
