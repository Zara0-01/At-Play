import type { Schema, Attribute } from '@strapi/strapi';

export interface HomeHome extends Schema.Component {
  collectionName: 'components_home_homes';
  info: {
    displayName: 'Home';
  };
  attributes: {
    Ts: Attribute.Text;
    test: Attribute.Email;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'home.home': HomeHome;
    }
  }
}
