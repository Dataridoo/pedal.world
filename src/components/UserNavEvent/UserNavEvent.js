import React from 'react';
import PropTypes from 'prop-types';
import { FormattedMessage } from 'react-intl';
import classNames from 'classnames';
import { ACCOUNT_SETTINGS_PAGES } from '../../routeConfiguration';
import { LinkTabNavHorizontal } from '../../components';

import css from './UserNav.css';

const UserNavEvent = props => {
  const { className, rootClassName, selectedPageName } = props;
  const classes = classNames(rootClassName || css.root, className);

  const tabs = [
    {
      text: <FormattedMessage id="ManageListingsPage.yourListings" />,
      selected: selectedPageName === 'ManageEventListingsPage',
      linkProps: {
        name: 'ManageListingsPage',
      },
    },
    {
      text: <FormattedMessage id="ManageListingsPage.profileSettings" />,
      selected: selectedPageName === 'ProfileSettingsPage',
      disabled: false,
      linkProps: {
        name: 'ProfileSettingsPage',
      },
    },
    {
      text: <FormattedMessage id="ManageListingsPage.accountSettings" />,
      selected: ACCOUNT_SETTINGS_PAGES.includes(selectedPageName),
      disabled: false,
      linkProps: {
        name: 'ContactDetailsPage',
      },
    },
  ];

  return (
    <LinkTabNavHorizontal className={classes} tabRootClassName={css.tab} tabs={tabs} skin="dark" />
  );
};

UserNavEvent.defaultProps = {
  className: null,
  rootClassName: null,
};

const { string } = PropTypes;

UserNavEvent.propTypes = {
  className: string,
  rootClassName: string,
  selectedPageName: string.isRequired,
};

export default UserNavEvent;
