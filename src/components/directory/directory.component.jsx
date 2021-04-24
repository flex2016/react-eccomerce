import React from 'react';

import MenuItem from '../menu-item/menu-item.component';

import './directory.styles.scss';

class Directory extends React.Component {
  constructor() {
    super();

    this.state = {
      sections: [
        {
          title: 'Snowboards',
          imageUrl: 'https://images.unsplash.com/photo-1498146831523-fbe41acdc5ad?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=700&q=80',
          id: 1,
          linkUrl: 'snowboards'
        },
        {
          title: 'Bindings',
          imageUrl: 'https://i1.adis.ws/i/ride/ride_2021_a-6_hakuba-2.79?w=1792&fmt=webp&bg=white&protocol=https&dpi=96',
          id: 2,
          linkUrl: 'bindings'
        },
        {
          title: 'Boots',
          imageUrl: 'https://i1.adis.ws/i/ride/ride_2021_insano_tiger-camo-09?w=1792&fmt=webp&bg=white&protocol=https&dpi=96',
          id: 3,
          linkUrl: 'boots'
        },
        {
          title: 'womens',
          imageUrl: 'https://images.unsplash.com/photo-1521702501873-1bf333e33724?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
          size: 'large',
          id: 4,
          linkUrl: 'womens'
        },
        {
          title: 'mens',
          imageUrl: 'https://images.unsplash.com/photo-1610650290670-2b8ebe2fa73b?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=635&q=80',
          size: 'large',
          id: 5,
          linkUrl: 'mens'
        }
      ]
    };
  }

  render() {
    return (
      <div className='directory-menu'>
        {this.state.sections.map(({ id, ...otherSectionProps }) => (
          <MenuItem key={id} {...otherSectionProps} />
        ))}
      </div>
    );
  }
}

export default Directory;
