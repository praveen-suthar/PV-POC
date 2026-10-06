import React from 'react';
import renderer from 'react-test-renderer';

import { Sidebar } from '../../../src/components/molecules/Sidebar';
import { SidebarLink } from '../../../src/components/molecules/SidebarLink';
import { SidebarLinks } from '../../../src/components/molecules/SidebarLinks';

describe('Render test', () => {
  test('Sidebar', () => {
    const component = renderer.create(
      <Sidebar>
        <SidebarLink label='Link a' href='/a'/>
        <SidebarLink label='Link b' href='/b'/>
        <SidebarLinks label='Link set c'>
          <SidebarLink label='Link c_a' href='/c_a'/>
          <SidebarLink label='Link c_b' href='/c_b'/>
        </SidebarLinks>
        <SidebarLink label='Link d' href='/d'/>
      </Sidebar>
    );
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
