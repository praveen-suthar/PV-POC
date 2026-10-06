import React, {
  Dispatch, ReactElement, SetStateAction, useState,
} from 'react';

import { Anchor } from '../atoms/Unsafe/Anchor';

type TabImplProps = {
  setTabState: Dispatch<SetStateAction<{ activeTab: string, page: ReactElement }>>,
  isActive: boolean,
  label: string,
  page: ReactElement,
}

const TabImpl: React.FC<TabImplProps> = ({
  setTabState, isActive, label, page,
}) => {
  const onClick = () => setTabState({ activeTab: label, page });

  return (
    <li className={`molecules-tabs-tab ${isActive ? 'uk-active' : ''}`}>
      <Anchor href="#" className="uk-text-capitalize" onClick={onClick}>{label}</Anchor>
    </li>
  );
};

type CombinedProps = {
  classString?: string,
  tabs: {
    label: string,
    page: ReactElement,
  }[],
}

const Combined: React.FC<CombinedProps> = ({ classString, tabs }) => {
  const initialTab = tabs[0];

  const [tabState, setTabState] = useState({
    activeTab: initialTab.label,
    page: initialTab.page,
  });

  return (
    <div className={`${classString || ''}`}>
      <div className="uk-container">
        <div className="molecules-tabs-wrap">
          <ul className="molecules-tabs uk-margin-remove-vertical uk-child-width-expand uk-flex-nowrap" data-uk-tab>
            {
              tabs.map((tab) => (
                <TabImpl
                  key={tab.label}
                  setTabState={setTabState}
                  isActive={tab.label === tabState.activeTab}
                  label={tab.label}
                  page={tab.page}
                />
              ))
            }
          </ul>
        </div>
        { tabState.page }
      </div>
    </div>
  );
};

type TabProps = {
  label: string,
  children: ReactElement
}

const Tab: React.FC<TabProps> = () => <></>;

type TabsProps = {
  children: [ ReactElement<TabProps>, ...ReactElement<TabProps>[] ]
}

const Tabs: React.FC<TabsProps> = ({ children }) => (
  <Combined
    tabs={
      children.map((child) => ({
        label: child.props.label,
        page: child.props.children,
      }))
    }
  />
);

Combined.defaultProps = {
  classString: '',
};

export {
  Tab,
  Tabs,
};
