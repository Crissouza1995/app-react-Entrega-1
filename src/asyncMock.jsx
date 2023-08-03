const products = [
  {
    id: "1",
    name: "Nicaragua Single Origin",
    price: 2000,
    category: "coffebeans",
    img: "https://djftrby1k8irl.cloudfront.net/s3fs-public/2022-03%2FNicaragua-Single-425x425.png?auto=format,compress&q=70&crop=focalpoint&ar=1:1.0&w=180&fit=crop",
    stock: 250,
    description:
      "Mildly roasted coffee with sweet notes of melon, the freshness of lemon and nuts.",
  },

  {
    id: "2",
    name: "Guatemala Casi Cielo",
    price: 2700,
    category: "coffe beans",
    img: "https://djftrby1k8irl.cloudfront.net/s3fs-public/2022-03%2FCasi-Cielo-425x425.png?auto=format,compress&q=70&crop=focalpoint&ar=1:1.0&w=180&fit=crop",
    stock: 122,
    description:
      "This origin coffee is a celebration of all the magic of the fertile valleys of Antigua in Guatemala. Roasted and medium-bodied, it has an alluring lemon-like shine and hints of smooth chocolate.",
  },

  {
    id: "3",
    name: "Café Colombia",
    price: 2600,
    category: "coffe beans",
    img: "https://djftrby1k8irl.cloudfront.net/s3fs-public/2022-03%2FColombia-425x425.png?auto=format,compress&q=70&crop=focalpoint&ar=1:1.0&w=180&fit=crop",
    stock: 256,
    description:
      "Origin coffee, its roast and body is medium with subtle flavors of nuts and fresh herbs. Accompany your coffee with a complement of chocolate or caramel.",
  },

  {
    id: "4",
    name: "Café Pike Place",
    price: 3400,
    category: "coffe beans",
    img: "https://djftrby1k8irl.cloudfront.net/s3fs-public/2022-03%2FPike-Place-425x425.png?auto=format,compress&q=70&crop=focalpoint&ar=1:1.0&w=180&fit=crop",
    stock: 132,
    description:
      "This cafe commemorates our first store in Seattle´s Pike Place Market. A coffee that is our identity: a smooth and balanced blend of Latin American beans with subtly intense flavors of cocoa and roasted nuts. Enjoy it with a Chocolate Croissant or with a Choco Chips Muffin. Content: 250 gr",
  },

  {
    id: "5",
    name: "Café Sumatra",
    price: 2200,
    category: "coffe beans",
    img: "https://djftrby1k8irl.cloudfront.net/s3fs-public/2022-03%2FSumatra-425x425.png?auto=format,compress&q=70&crop=focalpoint&ar=1:1.0&w=180&fit=crop",
    stock: 20,
    description:
      "Origin coffee with dark roast, full and consistent body. Its predominant flavor is earthy and herbal. Accompany your coffee with a complement of cinnamon, oatmeal or cheese",
  },
  {
    id: "6",
    name: "Café Espresso Roast",
    price: 3100,
    category: "coffe beans",
    img: "https://djftrby1k8irl.cloudfront.net/s3fs-public/2022-03%2FPike-Place-425x425.png?auto=format,compress&q=70&crop=focalpoint&ar=1:1.0&w=180&fit=crop",
    stock: 50,
    description:
      "Blend of Latin American beans with a dark roast. It is the heart of all our drinks that you can have at home. Its flavor is intense, sweet and caramelized, ideal to accompany it with a complement of chocolate, walnuts, caramel or spices.",
  },

  {
    id: "10",
    name: "CAFETERA EXPRESS OSTER BVSTEM6603B",
    price: 14000,
    category: "coffe maker",
    img: "https://medias.musimundo.com/medias/00321649-141902-141902-01-141902-01.jpg-size515?context=bWFzdGVyfGltYWdlc3w3MzI2MHxpbWFnZS9qcGVnfGg5MS9oMDcvMTAzODAxMDA3OTY0NDYvMDAzMjE2NDktMTQxOTAyLTE0MTkwMl8wMS0xNDE5MDJfMDEuanBnX3NpemU1MTV8NjBlYTYxM2UyOGZmNDIxMjUyNGJkZmZjMmNlYTQ1MmFiYTZkY2ZmYzNmMWY0NzgyNjlhM2Y4NGRjNTBiYjNhMA",
    stock: 10,
    description:
      "Cafetera Express. Presion 15 bars para una mejor extraccion de cafe y crema. Capacidad de tanque de agua 1,5 Lts. Capacidad de tanque de leche 300 Ml. Espumador de leche. Bandeja ajustable a diferentes tamanos de tazas. Portailtro para capsulas. Portfiltro para cafe molido. Filtro para cafe molido simple y doble. Deposito de leche extraible y de facil almacenamiento. Cuchara medidora con apisonador de cafe. Esta cafetera automatica se maximiza aun mas permitiendo disfrutar variedades de bebidas desde espresso, cappuccinos, lattes y hasta capsulas de Dolce Gusto todo al toque de un boton..",
  },

  {
    id: "11",
    name: "Cafetera Expresso Philips Lattego",
    price: 369900,
    category: "coffe maker",
    img: "https://tccommercear.vtexassets.com/arquivos/ids/157200-1200-auto?v=638231281777570000&width=1200&height=auto&aspect=true",
    stock: 5,
    description:
      "Cafetera Express. Presion 15 bars para una mejor extraccion de cafe y crema. Capacidad de tanque de agua 1,5 Lts. Capacidad de tanque de leche 300 Ml. Espumador de leche. Bandeja ajustable a diferentes tamanos de tazas. Portailtro para capsulas. Portfiltro para cafe molido. Filtro para cafe molido simple y doble. Deposito de leche extraible y de facil almacenamiento. Cuchara medidora con apisonador de cafe. Esta cafetera automatica se maximiza aun mas permitiendo disfrutar variedades de bebidas desde espresso, cappuccinos, lattes y hasta capsulas de Dolce Gusto todo al toque de un boton..",
  },

  {
    id: "12",
    name: "Cafetera Gadnic CME07 automática para cafe molido 220V 1350W",
    price: 126900,
    category: "coffe maker",
    img: "https://images.bidcom.com.ar/resize?src=https://www.bidcom.com.ar/publicacionesML/productos/CAFEXP06/1000x1000-CAFEXP06.jpg&w=1000&q=100",
    stock: 25,
    description:
      "Bomba de alta presión de 20 baresTanque de agua transparente desmontable de 1.8L Control volumétrico: preestablecido 1 taza y 2 tazas Con válvula de seguridad: puede liberar la presión automáticamente",
  },

  {
    id: "13",
    name: "CAFETERA ESPRESSO FLAIR CLASSIC BLACK",
    price: 147000,
    category: "coffe maker",
    img: "https://www.modobarista.com/product_images/e/484/flair_classic__98707_zoom.png",
    stock: 30,
    description:
      "The original. The classic.The Flair Classic is the original manual espresso maker that turned the craft coffee industry upside down in 2016.The fully manual lever espresso press is capable of brewing between 6 and 9 bar of pressure, exactly what it takes to make coffee-quality espresso from anywhere.",
  },

  {
    id: "14",
    name: "Cafetera Peabody Smartchef PE-CE5003R automática roja expreso 220VNuevo  | +1000 vendidosCafetera Peabody Smartchef PE-CE5003R automática roja expreso 220V",
    price: 82500,
    category: "coffe maker",
    img: "https://http2.mlstatic.com/D_NQ_NP_697994-MLA44803737803_022021-O.webp",
    stock: 10,
    description:
      "The original. The classic.The Flair Classic is the original manual espresso maker that turned the craft coffee industry upside down in 2016.The fully manual lever espresso press is capable of brewing between 6 and 9 bar of pressure, exactly what it takes to make coffee-quality espresso from anywhere.",
  },

  {
    id: "15",
    name: "Máquina de café espresso manual De Longhi Stilosa, máquina para hacer café con leche y capuchino, bomba de presión de 15 bar y varilla de vapor con espumador de leche, negra y inoxidable, EC260BK",
    price: 65000,
    category: "coffe maker",
    img: "https://m.media-amazon.com/images/I/81c3ItE+jyL._AC_SL1500_.jpg",
    stock: 56,
    description:
      "Ahora puedes incorporar deliciosas bebidas de espresso a tu rutina diaria. Presentamos Stilosa de De Longhi. Creada para aquellos que se embarcan en su viaje por el espresso, esta máquina de diseño elegante le permite elaborar fácilmente auténticos expressos, lattes y capuccinos en la comodidad de su hogar. La bomba de 15 bar crea la presión óptima para extraer un espresso simple o doble de acuerdo con los estándares de preparación de espresso.",
  },

  {
    id: "20",
    name: "Cup Bormioli Rocco",
    price: 4000,
    category: "coffe cup",
    img: "https://m.media-amazon.com/images/I/6120UvdxMYL._AC_UL320_.jpg",
    stock: 156,
    description:
      "the tradition of the Bormioli Rocco Glass Company coincides with the very history of glass: the first glassworks was established in Parma in 1825. Bormioli Rocco uses the finest natural resources to create superior glass and plastic products for homes and businesses around the world. From the finest sand imported from European countries to organic glazes for the colors in the glass, all are brought together in products influenced by exhaustive design research. ",
  },

  {
    id: "21",
    name: "Double Walled Thermo Espresso Glasses, Set of 2, Regular, Clear, 60 milliliters",
    price: 4500,
    category: "coffe cup",
    img: "https://m.media-amazon.com/images/I/51URG1OCrXL._AC_UL320_.jpg",
    stock: 200,
    description:
      "Longhi double walled espresso glasses provide elegant comfort while enjoying any beverage. The sleek lines of the glass provide a comfortable hold for any hot or cold beverage. Glasses are made of borosilicate glass and are dishwasher safe for easy clean up. ",
  },

  {
    id: "22",
    name: "Longhi Fancy Collection Double Walled Thermo Espresso, Cappuccino and Latte Macchiato Glasses, (Set of 6), Clear",
    price: 3200,
    category: "coffe cup",
    img: "https://m.media-amazon.com/images/I/41n0RzEiZ4L._AC_SX569_.jpg",
    stock: 440,
    description:
      "Longhi double walled espresso glasses provide elegant comfort while enjoying any beverage. The sleek lines of the glass provide a comfortable hold for any hot or cold beverage. Glasses are made of borosilicate glass and are dishwasher safe for easy clean up. ",
  },

  {
    id: "23",
    name: "Royal Doulton Coffee Studio Espresso Set of 4 Cup & Saucers, 4 Count (Pack of 1), Mixed, 3.7Fl oz",
    price: 8200,
    category: "coffe cup",
    img: "https://m.media-amazon.com/images/I/51qomNxxPyL._AC_SX569_.jpg",
    stock: 110,
    description:
      "Whether you prefer a classic cappuccino, an energising shot of espresso or the rich taste of a slow brew coffee, this collection has been designed to meet your home brewing needs in contemporary styling just perfect for modern homes..",
  },

  {
    id: "24",
    name: "Zwilling JA Henckels Sorrento Espresso Glass, Glass, 2-Piece,2.7 fluid ounce",
    price: 8200,
    category: "coffe cup",
    img: "https://m.media-amazon.com/images/I/51IBUjSa-jL._AC_SX569_.jpg",
    stock: 650,
    description:
      "Known for the sharpest, most comfortable knives and strong German stainless steel, ZWILLING is more than a cutlery company, it’s a whole kitchen solution. ZWILLING extends its expertise to glassware, cookware, electrics, and cutting-edge storage offerings",
  },

  {
    id: "25",
    name: "Lenox Blue Bay 4-Piece Espresso Cup & Saucer Set, 2.45 LB",
    price: 4300,
    category: "coffe cup",
    img: "https://m.media-amazon.com/images/I/71JaoPg2KPL._AC_SX569_.jpg",
    stock: 550,
    description:
      "Organic shapes, artisanal designs, and golden accents merge flawlessly on our unexpected, earthy-meets-elegant collection made for daily life. Featuring textile patterns of dots, leaves, stripes, and ikat motifs, it’s great for those who love to mix and match",
  },
];

export const getProducts = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(products);
    }, 1000);
  });
};



