import React from 'react';
import { withRouter } from 'react-router-dom';
import SelectMultipleFilter from './SelectMultipleFilter';
import { stringify, parse } from '../../util/urlHelpers';

const URL_PARAM = 'pub_amenities';

const options = [
  {
    key: 'frame',
    label: 'Frame',
  },
  {
    key: 'fork',
    label: 'Fork',
  },
  {
    key: 'drivetrain',
    label: 'Drive Train',
  },
  {
    key: 'components',
    label: 'Components',
  },
  {
    key: 'accessories',
    label: 'Accessories',
  }
];

const handleSubmit = (urlParam, values, history) => {
  const queryParams = values ? `?${stringify({ [urlParam]: values.join(',') })}` : '';
  history.push(`${window.location.pathname}${queryParams}`);
};

const AmenitiesFilterComponent = withRouter(props => {
  const { history, location } = props;

  const params = parse(location.search);
  const amenities = params[URL_PARAM];
  const initialValues = !!amenities ? amenities.split(',') : [];

  return (
    <SelectMultipleFilter
      name="amenities"
      urlParam={URL_PARAM}
      label="Amenities"
      onSelect={(urlParam, values) => handleSubmit(urlParam, values, history)}
      options={options}
      initialValues={initialValues}
      contentPlacementOffset={-14}
    />
  );
});

export const AmenitiesFilter = {
  component: AmenitiesFilterComponent,
  props: {},
  group: 'misc',
};
