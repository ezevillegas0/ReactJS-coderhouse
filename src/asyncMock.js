const products = [
/*     {
        id: '1',
        name: 'Air Force 1',
        price: '2.190',
        img: "/images/airforce1blancas.jpg",
        description:'Air Force 1 blancas, unicamente talles para hombre.',
        category : 'Nike',
        stock: 10,
    },
    {
        id: '2',
        name: 'Jordan 1 Retro High OG Chicago',
        price: '1.450',
        img: '/images/jordan1chicago.jpg',
        description:'Jordan 1 Chicago, talles para hombre y mujer.',
        category : 'Jordan',
        stock: 10,
    },
    {
        id: '3',
        name: 'Adidas Ozweego',
        price: '2.190',
        img: '/images/ozweego.webp',
        description:'Adidas Ozweego, unicamente talles para mujer',
        category : 'Adidas',
        stock: 10,
    }, */
    {
        id: '4',
        name: 'Air Force 1',
        price: '2.190',
        img: "/images/airforce1blancas.jpg",
        description:'Air Force 1 blancas, unicamente talles para hombre.',
        category : 'Nike',
        stock: 10,
    },
    {
        id: '5',
        name: 'Jordan 1 Retro High OG Chicago',
        price: '1.450',
        img: '/images/jordan1chicago.jpg',
        img: "/images/airjordan5anthracite.webp",
        description:'Jordan 1 Chicago, talles para hombre y mujer.',
        category : 'Jordan',
        stock: 10,
    },
/*     {
        id: '6',
        name: 'Adidas Yeezy 700 V3 Arzareth',
        price: '3.000',
        img: '/images/yeezy700arza.webp',
        description:'Adidas Yeezy 700 V3 Arzareth, unicamente talles para hombres.',
        category : 'Adidas',
        stock: 10,
    } */
    
]

export const getProducts = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products)
        }, 2000)
    })
}

export const getProductById = (id) => {
    return new Promise (resolve => {
        setTimeout(() => {
            resolve(products.find(prod => {
                return prod.id === id
            }))
        }, 500)
    })
}

export const getProductsByCategory = (categoryId) => {
    return new Promise (resolve => {
        setTimeout(() => {
            resolve(products.filter(prod => prod.category === categoryId))
        }, 500)
    })
}