import React from 'react';

import {
  Notification20,
  AppSwitcher20,
  UserAvatar20,
} from '@carbon/icons-react';

import {
  Header,
  HeaderName,
  HeaderNavigation,
  HeaderMenuItem,
  HeaderGlobalAction,
  HeaderGlobalBar,
  SkipToContent,
} from 'carbon-components-react';

import { Link } from 'react-router-dom';

const TutorialHeader = () => {
  return (
    <>
      <Header aria-label="Carbon Tutorial">
        <SkipToContent />
        <HeaderName
          prefix="IBM"
          element={Link}
          // @ts-ignore
          to="/">
          Carbon Tutorial
        </HeaderName>
        <HeaderNavigation aria-label="Carbon Tutorial">
          <HeaderMenuItem
            element={Link}
            // @ts-ignore
            to="/repos">
            Repositories
          </HeaderMenuItem>
        </HeaderNavigation>

        <HeaderGlobalBar>
          <HeaderGlobalAction>
            <Notification20
              aria-label="Notification"
              style={{ color: 'red' }}
            />
          </HeaderGlobalAction>

          <HeaderGlobalAction>
            <UserAvatar20 aria-label="UserAvatar" style={{ color: 'red' }} />
          </HeaderGlobalAction>

          <HeaderGlobalAction>
            <AppSwitcher20 aria-label="AppSwitcher" style={{ color: 'red' }} />
          </HeaderGlobalAction>
        </HeaderGlobalBar>
      </Header>
    </>
  );
};

export default TutorialHeader;
