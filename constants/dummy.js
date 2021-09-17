export const availableRewards = [
    {
        id: 1,
        title: '15 buys - 21.50% off',
        eligible: true,
    },
    {
        id: 2,
        title: '34 buys - any CosmeKIt or Concealer',
        eligible: false,
    },
    {
        id: 3,
        title: '40 buys - any 2x CosmeKIt',
        eligible: true,
    },
    {
        id: 4,
        title: '50000 buys - lifetime Supply of CosmeKIt',
        eligible: false,
    },
];

export const locations = [
    {
        id: 1,
        title: 'Yaba Onipan',
        address: '356 Yaba Avenue Grove street, Lagos',
        operation_hours: 'Sunday - Thursday: 10AM - 11PM \nFriday - Saturday: 10AM - Midnight',
        bookmarked: true,
    },
    {
        id: 2,
        title: 'Gwagwalada',
        address: '101 govt. office, FCT',
        operation_hours: 'Sunday - Thursday: 10AM - 11PM \nFriday - Saturday: 10AM - Midnight',
        bookmarked: false,
    },
    {
        id: 3,
        title: 'Akoka',
        address: '454, Unilag way, Lagos',
        operation_hours: 'Sunday - Thursday: 10AM - 11PM \nFriday - Saturday: 10AM - Midnight',
        bookmarked: false,
    },
    {
        id: 4,
        title: 'Tanke',
        address: '10 Asa Dam, succoth Garden, Ilorin',
        operation_hours: 'Sunday - Thursday: 10AM - 11PM \nFriday - Saturday: 10AM - Midnight',
        bookmarked: true,
    },
];

export const menuList = [
    {
        id: 1,
        name: 'Brown Sugar Fresh Milk Tea',
        description: 'lorem ipsum dolor sit amet',
        price: '$4.50-$5.50',
        thumbnail: require('../assets/images/brush.png'),
        category: 'Brush',
    },
    {
        id: 2,
        name: 'Matcha Milk Tea',
        description: 'lorem ipsum dolor sit amet',
        price: '$4.50-$5.50',
        thumbnail: require('../assets/images/brush.png'),
        category: 'Lipstick',
    },
    {
        id: 3,
        name: 'Strawberry Milk Tea',
        description: 'lorem ipsum dolor sit amet',
        price: '$4.50-$5.50',
        thumbnail: require('../assets/images/brush.png'),
        category: 'Brush',
    },
    {
        id: 4,
        name: 'Ice Lemon Tea',
        description: 'lorem ipsum dolor sit amet',
        price: '$4.50-$5.50',
        thumbnail: require('../assets/images/paints.png'),
        category: 'Paint',
    },
    {
        id: 5,
        name: 'Berry Smoothie',
        description: 'lorem ipsum dolor sit amet',
        price: '$4.50-$5.50',
        thumbnail: require('../assets/images/lipGloss.png'),
        category: 'LipGloss',
    },
    {
        id: 6,
        name: 'Immune Booster',
        description: 'lorem ipsum dolor sit amet',
        price: '$4.50-$5.50',
        thumbnail: require('../assets/images/lipGloss.png'),
        category: 'LipGloss',
    },
    {
        id: 7,
        name: 'Very Berry',
        description: 'lorem ipsum dolor sit amet',
        price: '$4.50-$5.50',
        thumbnail: require('../assets/images/lipGloss.png'),
        category: 'LipGloss',
    },
    {
        id: 8,
        name: 'Watermelon Lychee Crush',
        description: 'lorem ipsum dolor sit amet',
        price: '$4.50-$5.50',
        thumbnail: require('../assets/images/lipGloss.png'),
        category: 'LipGloss',
    },
    {
        id: 9,
        name: 'Americano',
        description: 'lorem ipsum dolor sit amet',
        price: '$4.50-$5.50',
        thumbnail: require('../assets/images/elixir.png'),
        category: 'Elixir',
    },
    {
        id: 10,
        name: 'Cappuccino',
        description: 'lorem ipsum dolor sit amet',
        price: '$4.50-$5.50',
        thumbnail: require('../assets/images/elixir.png'),
        category: 'Elixir',
    },
    {
        id: 11,
        name: 'Mocha',
        description: 'lorem ipsum dolor sit amet',
        price: '$4.50-$5.50',
        thumbnail: require('../assets/images/elixir.png'),
        category: 'Elixir',
    },
    {
        id: 12,
        name: 'Espresso',
        description: 'lorem ipsum dolor sit amet',
        price: '$4.50-$5.50',
        thumbnail: require('../assets/images/elixir.png'),
        category: 'Elixir',
    },
    {
        id: 13,
        name: 'Long Black',
        description: 'lorem ipsum dolor sit amet',
        price: '$4.50-$5.50',
        thumbnail: require('../assets/images/elixir.png'),
        category: 'Elixir',
    },
    {
        id: 14,
        name: 'Hash Brown',
        description: 'lorem ipsum dolor sit amet',
        price: '$4.50-$5.50',
        thumbnail: require('../assets/images/eyeLiner.png'),
        category: 'Lipstick',
    },
    {
        id: 15,
        name: 'French Fries',
        description: 'lorem ipsum dolor sit amet',
        price: '$4.50-$5.50',
        thumbnail: require('../assets/images/eyeLiner.png'),
        category: 'Lipstick',
    },
];

export const milkList = [
    {
        id: 1,
        name: 'CosmeKIt mini',
        image: require('../assets/icons/cosmetic.png'),
    },
    {
        id: 2,
        name: 'CosmeKIt midi',
        image: require('../assets/icons/cosmetic2.png'),
    },
    {
        id: 3,
        name: 'CosmeKIt maxi',
        image: require('../assets/icons/cosmetic3.png'),
    },
];

const promos = [
    {
        id: 1,
        name: 'Lipstick Sensation',
        description: 'The best cosmetic products Available',
        calories: '379 - 570',
        image: require('../assets/images/makeUpBg.png'),
    },
    {
        id: 2,
        name: 'Mascara & Bronzer',
        description: 'The best Mascara and Bronzer Available',
        calories: '400 - 570',
        image: require('../assets/images/makeUpBg.png'),
    },
    {
        id: 3,
        name: 'Neutral Eyeshadow',
        description: 'The best Eyeshadow and Bronzer Available',
        calories: '449 - 570',
        image: require('../assets/images/makeUpBg.png'),
    },

];

const dummyData = {
    availableRewards,
    locations,
    menuList,
    milkList,
    promos,
};

export default dummyData;
