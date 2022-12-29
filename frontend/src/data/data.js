const menu = [
    {
      id: 1,
      title: 'Tatuapé',
      category: 'Zona Leste',
      img:
        'https://ocdn.eu/pulscms-transforms/1/N2Ek9kpTURBXy82ZjFhYTI3NzBjNDhkNDczYTRiMTg2NWE0ZDNmNmFlNy5qcGeSlQLNAxQAwsOVAgDNAvjCw4GhMAU',
      desc: `Moin-Moin and Akara are both meals made from pureed beans and spicy ingredients, full of proteins, light and refreshing.`,
    },
    {
      id: 2,
      title: 'Osasco',
      category: 'Zona Oeste',
      img:
        'https://upload.wikimedia.org/wikipedia/commons/thumb/6/6e/Eba_and_Efo_riro_%28Vegetable_Soup%29_with_Fish.jpg/220px-Eba_and_Efo_riro_%28Vegetable_Soup%29_with_Fish.jpg',
      desc: `Ẹ̀bà is a staple food mainly eaten in the West African subregion, particularly in Nigeria and some parts of Ghana. It came from Nigeria originally`,
    },
    {
      id: 3,
      title: 'Carapicuiba',
      category: 'Zona Oeste',
      img:
        'https://upload.wikimedia.org/wikipedia/commons/thumb/6/6e/Eba_and_Efo_riro_%28Vegetable_Soup%29_with_Fish.jpg/220px-Eba_and_Efo_riro_%28Vegetable_Soup%29_with_Fish.jpg',
      desc: `Ẹ̀bà is a staple food mainly eaten in the West African subregion, particularly in Nigeria and some parts of Ghana. It came from Nigeria originally`,
    },
    {
      id: 4,
      title: 'Barueri',
      category: 'Zona Oeste',
      img:
        'https://upload.wikimedia.org/wikipedia/commons/thumb/6/6e/Eba_and_Efo_riro_%28Vegetable_Soup%29_with_Fish.jpg/220px-Eba_and_Efo_riro_%28Vegetable_Soup%29_with_Fish.jpg',
      desc: `Ẹ̀bà is a staple food mainly eaten in the West African subregion, particularly in Nigeria and some parts of Ghana. It came from Nigeria originally`,
    },
    {
      id: 5,
      title: 'Freguesia do Ó',
      category: 'Zona Norte',
      img:
        'https://upload.wikimedia.org/wikipedia/commons/thumb/6/6e/Eba_and_Efo_riro_%28Vegetable_Soup%29_with_Fish.jpg/220px-Eba_and_Efo_riro_%28Vegetable_Soup%29_with_Fish.jpg',
      desc: `Ẹ̀bà is a staple food mainly eaten in the West African subregion, particularly in Nigeria and some parts of Ghana. It came from Nigeria originally`,
    },
    {
      id: 6,
      title: 'Itaim Bibi',
      category: 'Zona Sul',
      img:
        'https://upload.wikimedia.org/wikipedia/commons/thumb/6/6e/Eba_and_Efo_riro_%28Vegetable_Soup%29_with_Fish.jpg/220px-Eba_and_Efo_riro_%28Vegetable_Soup%29_with_Fish.jpg',
      desc: `Ẹ̀bà is a staple food mainly eaten in the West African subregion, particularly in Nigeria and some parts of Ghana. It came from Nigeria originally`,
    },
    {
      id: 7,
      title: 'Santo Amaro',
      category: 'Zona Sul',
      img:
        'https://upload.wikimedia.org/wikipedia/commons/thumb/6/6e/Eba_and_Efo_riro_%28Vegetable_Soup%29_with_Fish.jpg/220px-Eba_and_Efo_riro_%28Vegetable_Soup%29_with_Fish.jpg',
      desc: `Ẹ̀bà is a staple food mainly eaten in the West African subregion, particularly in Nigeria and some parts of Ghana. It came from Nigeria originally`,
    },
    {
      id: 8,
      title: 'Vila Olimpia',
      category: 'Zona Sul',
      img:
        'https://upload.wikimedia.org/wikipedia/commons/thumb/6/6e/Eba_and_Efo_riro_%28Vegetable_Soup%29_with_Fish.jpg/220px-Eba_and_Efo_riro_%28Vegetable_Soup%29_with_Fish.jpg',
      desc: `Ẹ̀bà is a staple food mainly eaten in the West African subregion, particularly in Nigeria and some parts of Ghana. It came from Nigeria originally`,
    },
    {
      id: 9,
      title: 'Alphaville',
      category: 'Zona Oeste',
      img:
        'https://upload.wikimedia.org/wikipedia/commons/thumb/6/6e/Eba_and_Efo_riro_%28Vegetable_Soup%29_with_Fish.jpg/220px-Eba_and_Efo_riro_%28Vegetable_Soup%29_with_Fish.jpg',
      desc: `Ẹ̀bà is a staple food mainly eaten in the West African subregion, particularly in Nigeria and some parts of Ghana. It came from Nigeria originally`,
    },
    {
      id: 10,
      title: 'Santana',
      category: 'Zona Norte',
      img:
        'https://upload.wikimedia.org/wikipedia/commons/thumb/6/6e/Eba_and_Efo_riro_%28Vegetable_Soup%29_with_Fish.jpg/220px-Eba_and_Efo_riro_%28Vegetable_Soup%29_with_Fish.jpg',
      desc: `Ẹ̀bà is a staple food mainly eaten in the West African subregion, particularly in Nigeria and some parts of Ghana. It came from Nigeria originally`,
    },
    {
      id: 11,
      title: 'Itapevi',
      category: 'Zona Oeste',
      img:
        'https://upload.wikimedia.org/wikipedia/commons/thumb/6/6e/Eba_and_Efo_riro_%28Vegetable_Soup%29_with_Fish.jpg/220px-Eba_and_Efo_riro_%28Vegetable_Soup%29_with_Fish.jpg',
      desc: `Ẹ̀bà is a staple food mainly eaten in the West African subregion, particularly in Nigeria and some parts of Ghana. It came from Nigeria originally`,
    },
    {
      id: 12,
      title: 'Vila Mariana',
      category: 'Zona Sul',
      img:
        'https://upload.wikimedia.org/wikipedia/commons/thumb/6/6e/Eba_and_Efo_riro_%28Vegetable_Soup%29_with_Fish.jpg/220px-Eba_and_Efo_riro_%28Vegetable_Soup%29_with_Fish.jpg',
      desc: `Ẹ̀bà is a staple food mainly eaten in the West African subregion, particularly in Nigeria and some parts of Ghana. It came from Nigeria originally`,
    },
    {
      id: 13,
      title: 'Penha',
      category: 'Zona Leste',
      img:
        'https://upload.wikimedia.org/wikipedia/commons/thumb/6/6e/Eba_and_Efo_riro_%28Vegetable_Soup%29_with_Fish.jpg/220px-Eba_and_Efo_riro_%28Vegetable_Soup%29_with_Fish.jpg',
      desc: `Ẹ̀bà is a staple food mainly eaten in the West African subregion, particularly in Nigeria and some parts of Ghana. It came from Nigeria originally`,
    },
    {
      id: 14,
      title: 'Mooca',
      category: 'Zona Leste',
      img:
        'https://upload.wikimedia.org/wikipedia/commons/thumb/6/6e/Eba_and_Efo_riro_%28Vegetable_Soup%29_with_Fish.jpg/220px-Eba_and_Efo_riro_%28Vegetable_Soup%29_with_Fish.jpg',
      desc: `Ẹ̀bà is a staple food mainly eaten in the West African subregion, particularly in Nigeria and some parts of Ghana. It came from Nigeria originally`,
    },
    {
      id: 15,
      title: 'Lapa',
      category: 'Zona Oeste',
      img:
        'https://upload.wikimedia.org/wikipedia/commons/thumb/6/6e/Eba_and_Efo_riro_%28Vegetable_Soup%29_with_Fish.jpg/220px-Eba_and_Efo_riro_%28Vegetable_Soup%29_with_Fish.jpg',
      desc: `Ẹ̀bà is a staple food mainly eaten in the West African subregion, particularly in Nigeria and some parts of Ghana. It came from Nigeria originally`,
    },
    {
      id: 16,
      title: 'Interlagos',
      category: 'Zona Sul',
      img:
        'https://upload.wikimedia.org/wikipedia/commons/thumb/6/6e/Eba_and_Efo_riro_%28Vegetable_Soup%29_with_Fish.jpg/220px-Eba_and_Efo_riro_%28Vegetable_Soup%29_with_Fish.jpg',
      desc: `Ẹ̀bà is a staple food mainly eaten in the West African subregion, particularly in Nigeria and some parts of Ghana. It came from Nigeria originally`,
    },
    {
      id: 17,
      title: 'Jabaquara',
      category: 'Zona Sul',
      img:
        'https://upload.wikimedia.org/wikipedia/commons/thumb/6/6e/Eba_and_Efo_riro_%28Vegetable_Soup%29_with_Fish.jpg/220px-Eba_and_Efo_riro_%28Vegetable_Soup%29_with_Fish.jpg',
      desc: `Ẹ̀bà is a staple food mainly eaten in the West African subregion, particularly in Nigeria and some parts of Ghana. It came from Nigeria originally`,
    },
    {
      id: 18,
      title: 'Vila Pirituba',
      category: 'Zona Norte',
      img:
        'https://upload.wikimedia.org/wikipedia/commons/thumb/6/6e/Eba_and_Efo_riro_%28Vegetable_Soup%29_with_Fish.jpg/220px-Eba_and_Efo_riro_%28Vegetable_Soup%29_with_Fish.jpg',
      desc: `Ẹ̀bà is a staple food mainly eaten in the West African subregion, particularly in Nigeria and some parts of Ghana. It came from Nigeria originally`,
    },
    {
      id: 19,
      title: 'Vila Medeiros',
      category: 'Zona Norte',
      img:
        'https://upload.wikimedia.org/wikipedia/commons/thumb/6/6e/Eba_and_Efo_riro_%28Vegetable_Soup%29_with_Fish.jpg/220px-Eba_and_Efo_riro_%28Vegetable_Soup%29_with_Fish.jpg',
      desc: `Ẹ̀bà is a staple food mainly eaten in the West African subregion, particularly in Nigeria and some parts of Ghana. It came from Nigeria originally`,
    },
    {
      id: 20,
      title: 'Itaquera',
      category: 'Zona Leste',
      img:
        'https://upload.wikimedia.org/wikipedia/commons/thumb/6/6e/Eba_and_Efo_riro_%28Vegetable_Soup%29_with_Fish.jpg/220px-Eba_and_Efo_riro_%28Vegetable_Soup%29_with_Fish.jpg',
      desc: `Ẹ̀bà is a staple food mainly eaten in the West African subregion, particularly in Nigeria and some parts of Ghana. It came from Nigeria originally`,
    }
  ]
  export default menu