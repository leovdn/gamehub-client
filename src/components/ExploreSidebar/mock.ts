export default [
  {
    title: 'Price',
    name: 'price',
    type: 'checkbox',
    fields: [
      { name: 'under-50', label: 'Under $50' },
      { name: 'under-100', label: 'Under $100' },
      { name: 'under-150', label: 'Under $150' },
      { name: 'free', label: 'Free' },
      { name: 'discounted', label: 'Discounted' }
    ]
  },
  {
    title: 'Sort by',
    name: 'sort-by',
    type: 'radio',
    fields: [
      { name: 'high-to-low', label: 'Price: high to low' },
      { name: 'low-to-high', label: 'Price: low to high' }
    ]
  },
  {
    title: 'System',
    name: 'system',
    type: 'checkbox',
    fields: [
      { name: 'windows', label: 'Windows' },
      { name: 'mac', label: 'Mac' },
      { name: 'linux', label: 'Linux' }
    ]
  },
  {
    title: 'Genres',
    name: 'genres',
    type: 'checkbox',
    fields: [
      { name: 'action', label: 'Action' },
      { name: 'adventure', label: 'Adventure' },
      { name: 'shooter', label: 'Shooter' },
      { name: 'rpg', label: 'RPG' },
      { name: 'strategy', label: 'Strategy' },
      { name: 'simulation', label: 'Simulation' }
    ]
  }
]
