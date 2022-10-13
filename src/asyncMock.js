const products = [
    {
        id: "1",
        nombre: 'Air Force 1',
        precio: '2.190',
        //img: 'https://res.cloudinary.com/dazcznbsh/image/upload/w_1000,ar_16:9,c_fill,g_auto,e_sharpen/v1665614283/Reactjs/ricke_xwwgfo.webp',
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
    }
]

export const getProducts = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products)
        }, 2000)
    })
}
