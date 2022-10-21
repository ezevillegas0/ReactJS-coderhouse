const products = [
/*     {
        id: '1',
        nombre: 'Air Force 1',
        precio: '2.190',
        img: "/images/airforce1blancas.jpg",
        descripcion:'Air Force 1 blancas, unicamente talles para hombre.',
        category : 'Nike',
        stock: 10,
    },
    {
        id: '2',
        nombre: 'Jordan 1 Retro High OG Chicago',
        precio: '1.450',
        img: '/images/jordan1chicago.jpg',
        descripcion:'Jordan 1 Chicago, talles para hombre y mujer.',
        category : 'Jordan',
        stock: 10,
    },
    {
        id: '3',
        nombre: 'Adidas Ozweego',
        precio: '2.190',
        img: '/images/ozweego.webp',
        descripcion:'Adidas Ozweego, unicamente talles para mujer',
        category : 'Adidas',
        stock: 10,
    }, */
    {
        id: '4',
        nombre: 'Air Force 1',
        precio: '2.190',
        img: "/images/airforce1blancas.jpg",
        descripcion:'Air Force 1 blancas, unicamente talles para hombre.',
        category : 'Nike',
        stock: 10,
    },
    {
        id: '5',
        nombre: 'Jordan 1 Retro High OG Chicago',
        precio: '1.450',
        img: '/images/jordan1chicago.jpg',
        descripcion:'Jordan 1 Chicago, talles para hombre y mujer.',
        category : 'Jordan',
        stock: 10,
    },
/*     {
        id: '6',
        nombre: 'Adidas Yeezy 700 V3 Arzareth',
        precio: '3.000',
        img: '/images/yeezy700arza.webp',
        descripcion:'Adidas Yeezy 700 V3 Arzareth, unicamente talles para hombres.',
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