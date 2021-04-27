const SHOP_DATA = [
  {
    id: 1,
    title: 'Snowboards',
    routeName: 'snowboards',
    items: [
      {
        id: 1,
        name: 'Lib Technologies Travis Rice Orca Snowboard',
        imageUrl: 'https://summitsports.scene7.com/is/image/SummitSports/615890_615890_1?$600$',
        price: 454
      },
      {
        id: 2,
        name: 'Yes. Optimistic Snowboard',
        imageUrl: 'https://content.backcountry.com/images/items/900/YES/YES0046/ONECOL.jpg',
        price: 669
      },
      {
        id: 3,
        name: 'Gnu Finest Snowboard',
        imageUrl: 'https://content.backcountry.com/images/items/900/GNU/GNUL11F/ONECOL.jpg',
        price: 349
      },
      {
        id: 4,
        name: 'Lib Tech Cold Brew Snowboard',
        imageUrl: 'https://summitsports.scene7.com/is/image/SummitSports/615879_615879_1?$600$',
        price: 383
      },
      {
        id: 5,
        name: 'K2 Manifest Team Snowboard',
        imageUrl: 'https://summitsports.scene7.com/is/image/SummitSports/603736_603736_1?$600$',
        price: 479
      },
      {
        id: 6,
        name: 'Palm Tree Cap',
        imageUrl: 'https://i.ibb.co/rKBDvJX/palm-tree-cap.png',
        price: 14
      },
      {
        id: 7,
        name: 'Red Beanie',
        imageUrl: 'https://i.ibb.co/bLB646Z/red-beanie.png',
        price: 18
      },
      {
        id: 8,
        name: 'Wolf Cap',
        imageUrl: 'https://i.ibb.co/1f2nWMM/wolf-cap.png',
        price: 14
      },
      {
        id: 9,
        name: 'Blue Snapback',
        imageUrl: 'https://i.ibb.co/X2VJP2W/blue-snapback.png',
        price: 16
      }
    ]
  },
  {
    id: 2,
    title: 'Bindings',
    routeName: 'bindings',
    items: [
      {
        id: 10,
        name: 'Burton Grom Kids Snowboard Bindings',
        imageUrl: 'https://summitsports.scene7.com/is/image/SummitSports/538019_538019_1.jpg?$600$',
        price: 89.95
      },
      {
        id: 11,
        name: 'Burton Step On Re:Flex Snowboard Bindings',
        imageUrl: 'https://summitsports.scene7.com/is/image/SummitSports/613607_613604_1?$600$',
        price: 269.95
      },
      {
        id: 12,
        name: 'Flow NX2-CX Hybrid Snowboard Bindings',
        imageUrl: 'https://summitsports.scene7.com/is/image/SummitSports/613837_613837_1?$600$',
        price: 319.95
      },
      {
        id: 13,
        name: 'Burton Lexa X EST Womens Snowboard Bindings',
        imageUrl: 'https://summitsports.scene7.com/is/image/SummitSports/613464_613464_1?$600$',
        price: 239.96
      },
      {
        id: 14,
        name: 'Nike Red High Tops',
        imageUrl: 'https://i.ibb.co/QcvzydB/nikes-red.png',
        price: 160
      },
      {
        id: 15,
        name: 'Nike Brown High Tops',
        imageUrl: 'https://i.ibb.co/fMTV342/nike-brown.png',
        price: 160
      },
      {
        id: 16,
        name: 'Air Jordan Limited',
        imageUrl: 'https://i.ibb.co/w4k6Ws9/nike-funky.png',
        price: 190
      },
      {
        id: 17,
        name: 'Timberlands',
        imageUrl: 'https://i.ibb.co/Mhh6wBg/timberlands.png',
        price: 200
      }
    ]
  },
  {
    id: 3,
    title: 'Boots',
    routeName: 'boots',
    items: [
      {
        id: 18,
        name: 'Burton Moto Boa Snowboard Boots',
        imageUrl: 'https://summitsports.scene7.com/is/image/SummitSports/538085_613371_1?$600$',
        price: 183
      },
      {
        id: 19,
        name: 'Burton Invader Boot Snowboard Boots 2020',
        imageUrl: 'https://summitsports.scene7.com/is/image/SummitSports/538026_538026_1.jpg?$600$',
        price: 127
      },
      {
        id: 20,
        name: 'Burton Photon Wide Step On Snowboard Boots',
        imageUrl: 'https://summitsports.scene7.com/is/image/SummitSports/613577_613577_1?$600$',
        price: 409
      },
      {
        id: 21,
        name: 'Vans Encore Pro Womens Snowboard Boots',
        imageUrl: 'https://summitsports.scene7.com/is/image/SummitSports/610596_610596_1?$600$',
        price: 279
      },
      {
        id: 22,
        name: 'Tan Trench',
        imageUrl: 'https://i.ibb.co/M6hHc3F/brown-trench.png',
        price: 185
      }
    ]
  },
  {
    id: 4,
    title: 'Womens',
    routeName: 'womens',
    items: [
      {
        id: 23,
        name: '5th Element Stealth W Womens Gloves 2020',
        imageUrl: 'https://summitsports.scene7.com/is/image/SummitSports/441304_441304_1?$600$',
        price: 49.99
      },
      {
        id: 24,
        name: 'Burton Oak Pullover Womens Hoodie',
        imageUrl: 'https://summitsports.scene7.com/is/image/SummitSports/616643_616646_1?$600$',
        price: 59
      },
      {
        id: 25,
        name: 'Columbia Last Tracks Womens Insulated Ski Jacket 2021',
        imageUrl: 'https://summitsports.scene7.com/is/image/SummitSports/604463_604472_1?$600$',
        price: 117
      },
      {
        id: 26,
        name: 'Orage Shred Womens Soft Shell Jacket 2020',
        imageUrl: 'https://summitsports.scene7.com/is/image/SummitSports/903877_903877_1?$600$',
        price: 89
      },
      {
        id: 27,
        name: 'Striped Sweater',
        imageUrl: 'https://i.ibb.co/KmSkMbH/striped-sweater.png',
        price: 45
      },
      {
        id: 28,
        name: 'Yellow Track Suit',
        imageUrl: 'https://i.ibb.co/v1cvwNf/yellow-track-suit.png',
        price: 135
      },
      {
        id: 29,
        name: 'White Blouse',
        imageUrl: 'https://i.ibb.co/qBcrsJg/white-vest.png',
        price: 20
      }
    ]
  },
  {
    id: 5,
    title: 'Mens',
    routeName: 'mens',
    items: [
      {
        id: 30,
        name: 'Volcom Roan Bib Overall Mens Snowboard Pants',
        imageUrl: 'https://summitsports.scene7.com/is/image/SummitSports/545367_577828_1?$600$',
        price: 125
      },
      {
        id: 31,
        name: 'Burton GORE-TEX Radial Mens Insulated Snowboard Jacket',
        imageUrl: 'https://summitsports.scene7.com/is/image/SummitSports/576485_576485_1?$600$',
        price: 289
      },
      {
        id: 32,
        name: '5th Element Stealth M Gloves 2020',
        imageUrl: 'https://summitsports.scene7.com/is/image/SummitSports/441300_441300_1?$600$',
        price: 49.99
      },
      {
        id: 33,
        name: 'ONeill Hammer Insulated Mens Snowboard Pants',
        imageUrl: 'https://summitsports.scene7.com/is/image/SummitSports/621025_621025_1?$600$',
        price: 78
      },
      {
        id: 34,
        name: 'Jean Long Sleeve',
        imageUrl: 'https://i.ibb.co/VpW4x5t/roll-up-jean-shirt.png',
        price: 40
      },
      {
        id: 35,
        name: 'Burgundy T-shirt',
        imageUrl: 'https://i.ibb.co/mh3VM1f/polka-dot-shirt.png',
        price: 25
      }
    ]
  }
];

export default SHOP_DATA;
