export interface Product {
  id: number;
  name: string;
  price: number;
  description: string;
  category: number;
  like: number;
  image: string;
  link: string;
  rating: string;
}

export const products = [
  {
    id: 1,
    category: 1,
    like: 5,
    name: 'Samsung RB33A32N0SA refrigerator silver',
    price: 252900,
    description:
      'Samsung RB33A32N0SA/WT refrigerator with bottom freezer with Space Max technology. A large door pocket allows you to store high packages of products in the door. In this pocket you can put large packages of milk and juice or two rows of bottles or cans of drinks. As a result, you have more space on the shelves to place products for a big party!',
    link: 'https://kaspi.kz/shop/p/samsung-rb33a32n0sa-serebristyi-101198416/?c=750000000#!/item',
    image:
      'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h89/hae/51370653515806/samsung-rb33a32n0sa-serebristyj-101198416-1-Container.jpg',
    rating:
      'https://static.vecteezy.com/system/resources/previews/004/256/658/original/five-star-customer-product-ratings-review-flat-icons-for-apps-and-websites-illustration-of-five-golden-yellow-stars-in-a-row-isolated-in-a-white-background-concepts-for-ratings-customers-review-free-vector.jpg',
  },
  {
    id: 2,
    category: 1,
    like: 4,
    name: 'Washing machine LG F2J3NS0W white',
    price: 190976,
    description:
      'The depth of the LG F2J3NS0W washing machine is only 44 cm, so it will fit even in a small bathroom. The drum holds 6 kg of dry laundry, which is quite enough for a family of three or four people. This model is equipped with a direct-drive inverter motor, it has a longer service life than usual, since there are no brushes and a belt in its design. A WIDE SELECTION. There are programs for cotton, mixed fabrics and wool, so even thin knitwear will not stretch and will not be covered with puffs.',
    link: 'https://kaspi.kz/shop/p/lg-f2j3ns0w-belyi-3601511/?c=750000000#!/item',
    image:
      'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h5c/h98/31820622921758/lg-f2j3ns0w-white-3601511-1-Container.jpg',
    rating:
      'https://static.vecteezy.com/system/resources/previews/004/256/658/original/five-star-customer-product-ratings-review-flat-icons-for-apps-and-websites-illustration-of-five-golden-yellow-stars-in-a-row-isolated-in-a-white-background-concepts-for-ratings-customers-review-free-vector.jpg',
  },
  {
    id: 3,
    category: 1,
    like: 6,
    name: 'ARNICA Hydra Rain Plus Vacuum cleaner red',
    price: 99970,
    description:
      'The Arnica Hydra Rain Plus cleaning vacuum cleaner with the function of dry and wet cleaning perfectly destroys dust. Perfect for people suffering from allergies. This is a cleaning vacuum cleaner that will perfectly wash any floor covering, carpets, upholstered furniture, as well as the interior of the car. The design and position of the wheels allows you to rotate the vacuum cleaner 360°. No internal filters and inconvenient tank shapes and components that are difficult to clean after each cleaning. Collecting liquid up to 10 liters allows cleaning large areas.',
    image:
      'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h2f/hda/68829486022686/arnica-hydra-rain-plus-krasnyi-3700837-1.jpg',
    link: 'https://kaspi.kz/shop/p/arnica-hydra-rain-plus-krasnyi-3700837/?c=750000000#!/item',
    rating:
      'https://static.vecteezy.com/system/resources/previews/004/256/658/original/five-star-customer-product-ratings-review-flat-icons-for-apps-and-websites-illustration-of-five-golden-yellow-stars-in-a-row-isolated-in-a-white-background-concepts-for-ratings-customers-review-free-vector.jpg',
  },
  {
    id: 4,
    category: 1,
    like: 10,
    name: 'Vitek VT-1201 2010 brown iron',
    price: 13954,
    image:
      'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/ha0/h2e/31573980184606/vitek-vt-1201-2010-belyj-koricnevyj-3800447-1-Container.jpg',
    description:
      'Ironing delicate and dense fabrics is not a problem for you with the VT-1201 iron. Thanks to the high-quality non-stick coating of the iron, it glides perfectly over any fabric, smoothing even the strongest folds. For steaming, you can use simple tap water. After all, the self-cleaning function and the descaling protection system will allow you to avoid damage to the device due to poor-quality water throughout the entire service life. Depending on the fabric being processed, you can easily adjust the steam supply power to 50 grams per minute. With this iron, you will quickly iron the washed curtains using the vertical steaming function!',
    link: 'https://kaspi.kz/shop/p/vitek-vt-1201-2010-korichnevyi-3800447/?c=750000000#!/item',
    rating:
      'https://static.vecteezy.com/system/resources/previews/004/256/658/original/five-star-customer-product-ratings-review-flat-icons-for-apps-and-websites-illustration-of-five-golden-yellow-stars-in-a-row-isolated-in-a-white-background-concepts-for-ratings-customers-review-free-vector.jpg',
  },
  {
    id: 5,
    category: 1,
    like: 6,
    name: 'Bosch TAT7S25 toaster silver',
    price: 45990,
    description:
      'control type: mechanical, number of toasts: 2, crumb tray: Yes, housing material: metal, color: silver',
    link: 'https://kaspi.kz/shop/p/bosch-tat7s25-serebristyi-11000200/?c=750000000#!/item',
    rating:
      'https://static.vecteezy.com/system/resources/previews/004/256/658/original/five-star-customer-product-ratings-review-flat-icons-for-apps-and-websites-illustration-of-five-golden-yellow-stars-in-a-row-isolated-in-a-white-background-concepts-for-ratings-customers-review-free-vector.jpg',
    image:
      'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/he7/hae/31612424716318/bosch-tat-7s25-serebristyi-11000200-1.jpg',
  },
  {
    id: 6,
    category: 2,
    like: 15,
    name: 'Apple iPhone 14 128Gb Blue Smartphone',
    price: 420619,
    description:
      "iPhone 14 has the same superspeedy chip that's in iPhone 13 Pro. A15 Bionic, with a 5‑core GPU, powers all the latest features and makes graphically intense games and AR apps feel ultrafluid. An updated internal design delivers better thermal efficiency, so you can stay in the action longer.",
    link: 'https://kaspi.kz/shop/p/apple-iphone-14-128gb-goluboi-106363150/?c=750000000&utm_source=google&utm_medium=cpc&utm_campaign=shop_google_search_kaspi_brand_desktop&gclid=CjwKCAiAxvGfBhB-EiwAMPakqhMMHJi5RD8JbMGmPAtXLDzHJWO1gKu3ELRLt6IIsnK5NqypIlS4hxoC1aAQAvD_BwE#!/item',
    rating:
      'https://t4.ftcdn.net/jpg/02/74/86/43/360_F_274864312_uNlm9yCpdViwKzHkCp0sOBrmJFN0pKAa.jpg',
    image:
      'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h10/hd8/63073057407006/apple-iphone-14-128gb-goluboj-106363150-2.jpg',
  },
  {
    id: 7,
    category: 2,
    like: 22,
    name: 'Apple iPhone 13 128Gb Pink Smartphone',
    price: 373599,
    description:
      "Apple has developed a completely new camera layout and deployed the lenses at 45 degrees. Thanks to this, the best system of two cameras with an enlarged matrix of a wide-angle camera fit inside the case. In addition, space was freed up for an optical image stabilization system with a matrix shift, and the speed of the matrix on an ultra-wide-angle camera increased. The new ultra-wide-angle camera sees more detail in the dark areas of the image. The ultra-wide angle camera also provides a large field of view, even when you are very close to the subject. So you don't have to step back to get everything you need into the frame.",
    link: 'https://kaspi.kz/shop/p/apple-iphone-13-128gb-rozovyi-102298145/?c=750000000&utm_source=google&utm_medium=cpc&utm_campaign=shop_google_search_kaspi_brand_desktop&gclid=CjwKCAiAxvGfBhB-EiwAMPakqhMMHJi5RD8JbMGmPAtXLDzHJWO1gKu3ELRLt6IIsnK5NqypIlS4hxoC1aAQAvD_BwE#!/item',
    rating:
      'https://static.vecteezy.com/system/resources/previews/004/256/658/original/five-star-customer-product-ratings-review-flat-icons-for-apps-and-websites-illustration-of-five-golden-yellow-stars-in-a-row-isolated-in-a-white-background-concepts-for-ratings-customers-review-free-vector.jpg',
    image:
      'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/he0/h12/46392661344286/apple-iphone-13-128gb-rozovyj-102298145-3-Container.jpg',
  },
  {
    id: 8,
    category: 2,
    like: 4,
    name: 'Apple iPhone 14 Pro Max 256Gb Purple Smartphone',
    price: 689888,
    description:
      'Phone 14 Pro Max models look like the iPhone 13 Pro models with flat edges, stainless steel enclosure, a textured matte glass back, IP68 water resistance, and a Ceramic Shield-protected display, but the camera bumps are larger to accommodate new lenses, and the display has also changed',
    link: 'https://kaspi.kz/shop/p/apple-iphone-14-pro-max-256gb-fioletovyi-106363342/?c=750000000&utm_source=google&utm_medium=cpc&utm_campaign=shop_google_search_kaspi_brand_desktop&gclid=CjwKCAiAxvGfBhB-EiwAMPakqhMMHJi5RD8JbMGmPAtXLDzHJWO1gKu3ELRLt6IIsnK5NqypIlS4hxoC1aAQAvD_BwE#!/item0',
    rating:
      'https://static.vecteezy.com/system/resources/previews/004/256/658/original/five-star-customer-product-ratings-review-flat-icons-for-apps-and-websites-illustration-of-five-golden-yellow-stars-in-a-row-isolated-in-a-white-background-concepts-for-ratings-customers-review-free-vector.jpg',
    image:
      'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/had/h95/62948781293598/apple-iphone-14-pro-max-128gb-fioletovyj-106363342-2.jpg',
  },
  {
    id: 9,
    category: 2,
    like: 14,
    name: 'Apple iPhone 13 128Gb Smartphone Blue',
    price: 369500,
    description:
      'Apple iPhone 13 received a 6.1—inch Super Retina XDR display, which is characterized by an incredibly high pixel density - photos, videos and text look strikingly clear. And thanks to the reduced area of the True Depth camera, there is now more space for the image on the display. Apple has developed a completely new camera layout and deployed the lenses at 45 degrees. Thanks to this, the best system of two cameras with an enlarged matrix of a wide-angle camera fit inside the case. In addition, space was freed up for an optical image stabilization system with a matrix shift, and the speed of the matrix on an ultra-wide-angle camera increased. The new ultra-wide-angle camera sees more detail in the dark areas of the image. ',
    link: 'https://kaspi.kz/shop/p/apple-iphone-13-128gb-sinii-102298364/?c=750000000&utm_source=google&utm_medium=cpc&utm_campaign=shop_google_search_kaspi_brand_desktop&gclid=CjwKCAiAxvGfBhB-EiwAMPakqhMMHJi5RD8JbMGmPAtXLDzHJWO1gKu3ELRLt6IIsnK5NqypIlS4hxoC1aAQAvD_BwE#!/item',
    rating:
      'https://static.vecteezy.com/system/resources/previews/004/256/658/original/five-star-customer-product-ratings-review-flat-icons-for-apps-and-websites-illustration-of-five-golden-yellow-stars-in-a-row-isolated-in-a-white-background-concepts-for-ratings-customers-review-free-vector.jpg',
    image:
      'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h44/hfd/46392662130718/apple-iphone-13-128gb-sinij-102298364-3-Container.jpg',
  },
  {
    id: 10,
    category: 2,
    like: 23,
    name: 'Apple iPhone 11 128Gb Slim Box Smartphone White',
    price: 299600,
    description:
      'The functional and stylish Apple iPhone 11 smartphone in a metal case is capable of providing not only everyday communication and entertainment, but also productive work. The image on the screen of a smartphone with a diagonal of 6.1 inches has amazing detail and color reproduction. Oleophobic coating eliminates heavy contamination of the screen. The iPhone 11 has a powerful 6-core A13 Bionic processor that performs any tasks quickly and smoothly. In addition, it works as energy efficient as possible, allowing you to save battery power. ',
    link: 'https://kaspi.kz/shop/p/apple-iphone-11-128gb-slim-box-belyi-100692385/?c=750000000&utm_source=google&utm_medium=cpc&utm_campaign=shop_google_search_kaspi_brand_desktop&gclid=CjwKCAiAxvGfBhB-EiwAMPakqhMMHJi5RD8JbMGmPAtXLDzHJWO1gKu3ELRLt6IIsnK5NqypIlS4hxoC1aAQAvD_BwE#!/item',
    rating:
      'https://static.vecteezy.com/system/resources/previews/004/256/658/original/five-star-customer-product-ratings-review-flat-icons-for-apps-and-websites-illustration-of-five-golden-yellow-stars-in-a-row-isolated-in-a-white-background-concepts-for-ratings-customers-review-free-vector.jpg',
    image:
      'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h3a/hb4/33208264228894/apple-iphone-11-128gb-slim-box-belyj-100692385-1-Container.jpg',
  },
  {
    id: 11,
    category: 3,
    like: 1,
    name: 'Cantlor Backpack 960 Black',
    price: 3699,
    description:
      'The Cantlor bags brand is the largest manufacturer of suitcases, travel bags and briefcases for business people. The company was founded in 1972. The company opened in the UK, and since that time has been a world leader in the production of leather products. In a few years, the Kantor Company will celebrate fifty years since its foundation',
    link: 'https://kaspi.kz/shop/p/cantlor-rjukzak-960-chernyi-104189303/?c=750000000#!/item',
    rating:
      'https://t4.ftcdn.net/jpg/02/74/86/43/360_F_274864312_uNlm9yCpdViwKzHkCp0sOBrmJFN0pKAa.jpg',
    image:
      'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h79/h79/49484870352926/cantlor-rukzak-960-cernyj-104189303-1.jpg',
  },
  {
    id: 12,
    category: 3,
    like: 2,
    name: 'CASIO MTP-1374L-1AVDF Watch Black',
    price: 24500,
    description:
      'The Japanese giant Casio is one of the leaders of the global consumer electronics market. All watches have meticulous quality control and are provided with a company warranty. Today, CASIO wristwatches are presented in a wide range with clearly marked model ranges, which makes it easier for the buyer to choose the right watch.',
    link: 'https://kaspi.kz/shop/p/casio-mtp-1374l-1avdf-chernyi-21400996/?c=750000000#!/item',
    rating:
      'https://t4.ftcdn.net/jpg/02/74/86/43/360_F_274864312_uNlm9yCpdViwKzHkCp0sOBrmJFN0pKAa.jpg',
    image:
      'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/hec/hab/31593619030046/casio-mtp-1374l-1avdf-black-21400996-1-Container.jpg',
  },
  {
    id: 13,
    category: 3,
    like: 20,
    name: 'Sunglasses Alberto Casino Ecstasy Black Shadow Black',
    price: 2590,
    description:
      'Alberto Casino glasses are a charismatic accessory that sets the trend, effectively emphasizes individuality and the desire to follow fashion traditions.',
    link: 'https://kaspi.kz/shop/p/alberto-casiano-ecstasy-black-shadow-chernyi-27200624/?c=750000000#!/item',
    rating:
      'https://t4.ftcdn.net/jpg/02/74/86/43/360_F_274864312_uNlm9yCpdViwKzHkCp0sOBrmJFN0pKAa.jpg',
    image:
      'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h67/h0c/68785732288542/alberto-casiano-ecstasy-black-shadow-chernyi-27200624-1.jpg',
  },
  {
    id: 14,
    category: 3,
    like: 7,
    name: 'Westpolo Cardholder WP5550 Black',
    price: 10790,
    description:
      'Compact and roomy cardholder for bank cards and business cards is made of high-quality materials in a minimalistic and concise design. This accessory has an automatic type of operation, you will not need to take out the cards with your fingers, just press the button and the cards themselves slide out to meet your interlocutor or partner. This accessory is very convenient to use and does not take up much space, besides it is much more functional than other similar cardholders.',
    link: 'https://kaspi.kz/shop/p/westpolo-kartholder-wp5550-chernyi-102218598/?c=750000000#!/item',
    rating:
      'https://static.vecteezy.com/system/resources/previews/004/256/658/original/five-star-customer-product-ratings-review-flat-icons-for-apps-and-websites-illustration-of-five-golden-yellow-stars-in-a-row-isolated-in-a-white-background-concepts-for-ratings-customers-review-free-vector.jpg',
    image:
      'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/hc4/h43/46931839647774/westpolo-wp5550-cernyj-102218598-1-Container.jpg',
  },
  {
    id: 15,
    category: 3,
    like: 21,
    name: 'Miracle umbrella-cane Katana black',
    price: 7103,
    description:
      'The uniqueness of the umbrella - when folded resembles a Katana - the famous Japanese sword. The umbrella cane looks stylish, but at the same time remains a practical and indispensable accessory. The reinforced umbrella frame consists of a complex of springs and spokes links, made of flexible and elastic carbon fiber. Springs protect the umbrella from breakdowns when turning out - Anti-Wind system.',
    link: 'https://kaspi.kz/shop/p/miracle-zont-trost-katana-chernyi-102427599/?c=750000000#!/item',
    rating:
      'https://static.vecteezy.com/system/resources/previews/004/256/658/original/five-star-customer-product-ratings-review-flat-icons-for-apps-and-websites-illustration-of-five-golden-yellow-stars-in-a-row-isolated-in-a-white-background-concepts-for-ratings-customers-review-free-vector.jpg',
    image:
      'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h69/hde/46109939466270/miracle-katana-cernyj-102427599-1-Container.jpg',
  },
  {
    id: 16,
    category: 4,
    like: 21,
    name: 'Alyona IMPERIAL cabinet, 120.2 x 46.6 x 190.5 cm, white, brown',
    price: 69000,
    description:
      'An elegant wardrobe for Alains clothes will be a good addition to the bedroom interior. Its stylish design immediately attracts attention, gives the room a special charm. The product helps to keep things in order and store them neatly. The model is made of high-quality chipboard. Swing doors are equipped with reliable hinges. The product is equipped with a longitudinal rod for placing clothes on hangers and five shelves for storing things folded.',
    link: 'https://kaspi.kz/shop/p/imperial-aljona-120-2x46-6x190-5-sm-belyi-korichnevyi-104713427/?c=750000000#!/item',
    rating:
      'https://static.vecteezy.com/system/resources/previews/004/256/658/original/five-star-customer-product-ratings-review-flat-icons-for-apps-and-websites-illustration-of-five-golden-yellow-stars-in-a-row-isolated-in-a-white-background-concepts-for-ratings-customers-review-free-vector.jpg',
    image:
      'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/heb/h8d/50469324914718/skaf-imperial-alena-00031211-120-2x46-6x190-5-sm-ldsp-belyj-koricnevyj-104713427-1.jpg',
  },
  {
    id: 17,
    category: 4,
    like: 33,
    name: 'MSQ 01 sofa, upholstery textile, 90x80x280 cm, gray, beige',
    price: 95998,
    description:
      'transformation mechanism: eurocook, upholstery: textile, height, cm: 90, width, cm: 80, depth, cm: 280, color: gray, beige, country: Kazakhstan',
    link: 'https://kaspi.kz/shop/p/msq-01-divan-obivka-tekstil-90x80x280-sm-seryi-bezhevyi-104375933/?c=750000000#!/item',
    rating:
      'https://static.vecteezy.com/system/resources/previews/004/256/658/original/five-star-customer-product-ratings-review-flat-icons-for-apps-and-websites-illustration-of-five-golden-yellow-stars-in-a-row-isolated-in-a-white-background-concepts-for-ratings-customers-review-free-vector.jpg',
    image:
      'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/hcb/h1e/49848894586910/msq-divan-uglovoj-01-divan-obivka-tekstil-90x80x280-sm-seryj-bezevyj-104375933-1.jpg',
  },
  {
    id: 18,
    category: 4,
    like: 13,
    name: 'TV cabinet floor MLK Skyline, chipboard, MDF, 210x46x45 cm, gray, brown',
    price: 69000,
    description:
      'Product material MDF/Chipboard conforming to all quality standards. The direct combined TV cabinet has two doors (two blind ones) and one drawer using the mechanism of full extension and smooth closing, the bottom of the drawer is made of HDPE in the color of the case. Mounted on plastic adjustable supports.',
    link: 'https://kaspi.kz/shop/p/tv-tumba-napol-naja-mlk-skailain-ldsp-mdf-210x46x45-sm-seryi-korichnevyi-100754155/?c=750000000#!/item',
    rating:
      'https://static.vecteezy.com/system/resources/previews/004/256/658/original/five-star-customer-product-ratings-review-flat-icons-for-apps-and-websites-illustration-of-five-golden-yellow-stars-in-a-row-isolated-in-a-white-background-concepts-for-ratings-customers-review-free-vector.jpg',
    image:
      'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/hf3/hdb/33212874391582/mlk-skajlajn-dub-sanoma-grafit-100754155-1-Container.jpg',
  },
  {
    id: 19,
    category: 4,
    like: 67,
    name: 'KresloComfort Bag Chair Soccer Ball White-Black',
    price: 2506,
    description:
      'This chair is presented in a diameter of 100 cm, which is suitable for both children and adults. The coloring matches the photo. The material of the cover is leatherette, so in case of contamination, it is enough just to wipe the chair with a damp cloth. As a filler, we use expanded polystyrene - this is a foamed foam pellet. Also, the ball chair cover is equipped with grommets for air removal - which prevents the fabric from tearing during the operation of the chair. Each chair has a pocket for filling, with double protection from children. Chair bags are delivered in a plastic bag.',
    link: 'https://kaspi.kz/shop/p/kreslocomfort-futbol-nyi-mjach-belyi-chernyi-100082155/?c=750000000#!/item',
    rating:
      'https://static.vecteezy.com/system/resources/previews/004/256/658/original/five-star-customer-product-ratings-review-flat-icons-for-apps-and-websites-illustration-of-five-golden-yellow-stars-in-a-row-isolated-in-a-white-background-concepts-for-ratings-customers-review-free-vector.jpg',
    image:
      'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/ha6/hfc/32435584827422/kreslocomfort-futbolnyj-mac-belyj-cernyj-100082155-1-Container.jpg',
  },
  {
    id: 20,
    category: 4,
    like: 30,
    name: 'IKEA desk Mikke 20373923 73cm x 50cm x 75cm',
    price: 2635,
    description:
      'Thanks to a special hole, the wires are always at hand, but not in sight. The legs can be installed on the right or on the left, depending on preferences or free space.',
    link: 'https://kaspi.kz/shop/p/ikea-mikke-20373923-73-smx50-smx75-sm-100122379/?c=750000000#!/item',
    rating:
      'https://static.vecteezy.com/system/resources/previews/004/256/658/original/five-star-customer-product-ratings-review-flat-icons-for-apps-and-websites-illustration-of-five-golden-yellow-stars-in-a-row-isolated-in-a-white-background-concepts-for-ratings-customers-review-free-vector.jpg',
    image:
      'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h4a/hc2/31978861920286/ikea-mikke-203-739-23-belyj-100122379-1-Container.jpg',
  },
];

/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/
