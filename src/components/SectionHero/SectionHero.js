import React from 'react';
import PropTypes from 'prop-types';
import { FormattedMessage } from 'react-intl';
import classNames from 'classnames';
import { stringify } from '../../util/urlHelpers';
import { IconSearch, Button } from '../../components';

import css from './SectionHero.css';

const SectionHero = props => {
  const { rootClassName, className, history, location } = props;

  const handleMobileSearchClick = () => {
    const params = { mobilesearch: 'open' };
    const path = `${location.pathname}?${stringify(params)}`;
    history.push(path);
  };


  const classes = classNames(rootClassName || css.root, className);

  return (
    <div className={classes}>
      <h1 className={css.heroMainTitle}>
        <FormattedMessage id="SectionHero.title" />
      </h1>      
      <Button className={css.mobileSearchButton} onClick={handleMobileSearchClick}>
        <IconSearch rootClassName={css.searchIcon} />
        <FormattedMessage id="SectionHero.mobileSearchButtonText" />
      </Button>
     
    </div>
  );
};

SectionHero.defaultProps = { rootClassName: null, className: null };

const { string, shape, func } = PropTypes;

SectionHero.propTypes = {
  rootClassName: string,
  className: string,

  history: shape({
    push: func.isRequired,
  }).isRequired,
  location: shape({
    search: string.isRequired,
  }).isRequired,
};

export default SectionHero;
