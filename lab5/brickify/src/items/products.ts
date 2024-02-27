import { Category } from './categories';

export interface Product {
  id: number;
  name: string;
  price: number;
  image: string;
  rating: {
    rate: number;
    count: number;
  };
  category: Category;
  description: string;
  likes: number;
}

export const products = [
  {
    id: 1,
    name: 'Подушка-LEGO Орхидея 10311, деталей 608 шт',
    price: 90,
    image:
      'https://resources.cdn-kaspi.kz/img/m/p/hbe/h9e/84799947472926.jpg?format=gallery-medium',
    rating: { rate: 5, count: 9 },
    category: { name: 'LEGO: Flora' },
    description:
      'Тип: блочный, количество деталей: 608, пол ребенка: универсальный, цвет: мультиколор, основной материал: пластик',
    likes: 54,
  },
  {
    id: 2,
    name: 'LEGO Букет роз Icons 10328, деталей 822 шт',
    price: 110,
    image:
      'https://resources.cdn-kaspi.kz/img/m/p/h89/h1e/84844954189854.jpg?format=gallery-medium',
    rating: { rate: 4.8, count: 62 },
    category: { name: 'LEGO: Flora' },
    description:
      'Тип: блочный, количество деталей: 822, пол ребенка: девочка, цвет: мультиколор, основной материал: пластик ',
    likes: 12,
  },
  {
    id: 3,
    name: 'LEGO Розы Iconic 40460, деталей 120 шт',
    price: 20,
    image:
      'https://resources.cdn-kaspi.kz/img/m/p/hdf/h18/84844811354142.jpg?format=gallery-medium',
    rating: { rate: 5, count: 1069 },
    category: { name: 'LEGO: Flora' },
    description:
      'Тип: блочный, количество деталей: 120, пол ребенка: девочка, цвет: мультиколор, основной материал: пластик',
    likes: 13,
  },
  {
    id: 4,
    name: 'LEGO Ferrari 812 Competizione 76914, деталей 261 шт',
    price: 35,
    image:
      'https://resources.cdn-kaspi.kz/img/m/p/hb7/haa/84800729710622.jpg?format=gallery-medium',
    rating: { rate: 4.9, count: 9 },
    category: { name: 'LEGO: Speed Champions' },
    description:
      'Тип: блочный, количество деталей: 261, пол ребенка: мальчик, цвет: мультиколор, основной материал: пластик',
    likes: 7,
  },
  {
    id: 5,
    name: 'LEGO Pagani Utopia 76915, деталей 249 шт',
    price: 30,
    image:
      'https://resources.cdn-kaspi.kz/img/m/p/hb3/hcb/84800733839390.jpg?format=gallery-medium',
    rating: { rate: 5, count: 15 },
    category: { name: 'LEGO: Speed Champions' },
    description:
      'Тип: блочный, количество деталей: 249, серия LEGO: Speed Champions, пол ребенка: мальчик, цвет: серый, основной материал: пластик',
    likes: 5,
  },
  {
    id: 6,
    name: 'LEGO Маленькие растения Icons 10329, деталей 256 шт',
    price: 70,
    image:
      'https://resources.cdn-kaspi.kz/img/m/p/h74/h77/84845014712350.jpg?format=gallery-medium',
    rating: { rate: 5, count: 1 },
    category: { name: 'LEGO: Flora' },
    description:
      'Тип: блочный, количество деталей: 256, пол ребенка: универсальный, цвет: мультиколор, основной материал: пластик',
    likes: 22,
  },
  {
    id: 7,
    name: 'LEGO Замок Хогвартс 71043, деталей 6020 шт',
    price: 820,
    image:
      'https://resources.cdn-kaspi.kz/img/m/p/h51/h26/84756501757982.jpg?format=gallery-medium',
    rating: { rate: 5, count: 6 },
    category: { name: 'LEGO: Architecture' },
    description:
      'Тип: блочный, количество деталей: 6020, мини-фигурок: 4, пол ребенка: универсальный, цвет: мультиколор, основной материал: пластик',
    likes: 63,
  },
  {
    id: 8,
    name: 'LEGO Цветущая вишня Iconic 40725, деталей 438 шт',
    price: 20,
    image:
      'https://resources.cdn-kaspi.kz/img/m/p/hb7/h6a/84844782452766.jpg?format=gallery-medium',
    rating: { rate: 5, count: 2 },
    category: { name: 'LEGO: Flora' },
    description:
      'Тип: блочный, количество деталей: 438, пол ребенка: девочка, цвет: мультиколор, основной материал: пластик',
    likes: 44,
  },
  {
    id: 9,
    name: 'LEGO Ferrari Daytona SP3 42143, деталей 3778 шт',
    price: 710,
    image:
      'https://resources.cdn-kaspi.kz/img/m/p/hf1/h0d/68773041111070.jpg?format=gallery-medium',
    rating: { rate: 5, count: 2 },
    category: { name: 'LEGO: Speed Champions' },
    description:
      'Тип: блочный, количество деталей: 3778, пол ребенка: универсальный, цвет: мультиколор, основной материал: полимер',
    likes: 14,
  },
  {
    id: 10,
    name: 'LEGO Porsche 911 10295, деталей 1458 шт',
    price: 350,
    image:
      'https://resources.cdn-kaspi.kz/img/m/p/h81/hf8/84787942785054.jpg?format=gallery-medium',
    rating: { rate: 5, count: 1 },
    category: { name: 'LEGO: Speed Champions' },
    description:
      'Тип: блочный, количество деталей: 1458, пол ребенка: универсальный, цвет: мультиколор, основной материал: пластик',
    likes: 13,
  },
  {
    id: 11,
    name: 'LEGO Koenigsegg Jesko 76900, деталей 280 шт',
    price: 35,
    image:
      'https://resources.cdn-kaspi.kz/img/m/p/h12/h69/84787943997470.jpg?format=gallery-medium',
    rating: { rate: 4.9, count: 15 },
    category: { name: 'LEGO: Speed Champions' },
    description:
      'Тип: блочный, количество деталей: 280, пол ребенка: универсальный, цвет: мультиколор, основной материал: пластик',
    likes: 20,
  },
  {
    id: 12,
    name: 'LEGO Нью-Йорк 21028, деталей 598 шт',
    price: 90,
    image:
      'https://resources.cdn-kaspi.kz/img/m/p/h28/h94/84756500054046.jpg?format=gallery-medium',
    rating: { rate: 4.8, count: 9 },
    category: { name: 'LEGO: Architecture' },
    description:
      'Тип: блочный, количество деталей: 958, серия LEGO: Architecture, пол ребенка: универсальный, цвет: мультиколор, основной материал: пластик',
    likes: 59,
  },
  {
    id: 13,
    name: 'LEGO Пирамида Хеопса 21058, деталей 1476 шт',
    price: 180,
    image:
      'https://resources.cdn-kaspi.kz/img/m/p/h78/h01/84799947603998.jpg?format=gallery-medium',
    rating: { rate: 5, count: 1 },
    category: { name: 'LEGO: Architecture' },
    description:
      'Тип: блочный, количество деталей: 1476, пол ребенка: универсальный, цвет: мультиколор, основной материал: пластик',
    likes: 32,
  },
  {
    id: 14,
    name: 'LEGO Тадж-Махал 21056, деталей 2022 шт',
    price: 350,
    image:
      'https://resources.cdn-kaspi.kz/img/m/p/hfb/h57/84787949535262.jpg?format=gallery-medium',
    rating: { rate: 5, count: 9 },
    category: { name: 'LEGO: Architecture' },
    description:
      'Тип: блочный, количество деталей: 2022, серия LEGO: Architecture, пол ребенка: универсальный, цвет: мультиколор, основной материал: пластик',
    likes: 18,
  },
  {
    id: 15,
    name: 'LEGO Architecture 21046 Эмпайр-стейт-билдинг',
    price: 250,
    image:
      'https://resources.cdn-kaspi.kz/img/m/p/hb5/hb9/63777833287710.jpg?format=gallery-medium',
    rating: { rate: 5, count: 1 },
    category: { name: 'LEGO: Architecture' },
    description:
      'Тип: блочный, количество деталей: 1767, серия LEGO: Architecture, пол ребенка: универсальный, цвет: мультиколор, основной материал: пластик',
    likes: 27,
  },
  {
    id: 16,
    name: 'LEGO Сокол Тысячелетия 75192, деталей 7541 шт',
    price: 1300,
    image:
      'https://resources.cdn-kaspi.kz/img/m/p/h99/h91/84814665449502.jpg?format=gallery-medium',
    rating: { rate: 5, count: 6 },
    category: { name: 'LEGO: Star Wars' },
    description:
      'Тип: блочный, количество деталей: 7541, мини-фигурок: 8, пол ребенка: универсальный, цвет: мультиколор, основной материал: пластик',
    likes: 51,
  },
  {
    id: 17,
    name: 'LEGO Star Wars Шаттл Кайло Рена 75256',
    price: 499,
    image:
      'https://resources.cdn-kaspi.kz/img/m/p/h42/h66/63825680793630.jpg?format=gallery-medium',
    rating: { rate: 5, count: 2 },
    category: { name: 'LEGO: Star Wars' },
    description:
      'Тип: блочный, количество деталей: 1005, мини-фигурок: 6, пол ребенка: универсальный, цвет: мультиколор, основной материал: пластик',
    likes: 9,
  },
  {
    id: 18,
    name: 'LEGO Лендспидер 75341, деталей 1883 шт',
    price: 899,
    image:
      'https://resources.cdn-kaspi.kz/img/m/p/hc5/h5a/84339656917022.jpg?format=gallery-medium',
    rating: { rate: 0, count: 0 },
    category: { name: 'LEGO: Star Wars' },
    description:
      'Тип: блочный, количество деталей: 1883, мини-фигурок: 2, пол ребенка: универсальный, цвет: мультиколор, основной материал: пластик',
    likes: 22,
  },
  {
    id: 19,
    name: 'LEGO Star Wars 75108 Клон-коммандер Коди',
    price: 110,
    image:
      'https://resources.cdn-kaspi.kz/img/m/p/h7e/hdf/63758287142942.jpg?format=gallery-medium',
    rating: { rate: 0, count: 0 },
    category: { name: 'LEGO: Star Wars' },
    description:
      'Тип: блочный, количество деталей: 82, пол ребенка: универсальный, цвет: мультиколор, основной материал: пластик',
    likes: 11,
  },
  {
    id: 20,
    name: 'LEGO Star Wars 75271 Спидер Люка Скайуокера',
    price: 70,
    image:
      'https://resources.cdn-kaspi.kz/img/m/p/h66/hab/63782658736158.jpg?format=gallery-medium',
    rating: { rate: 0, count: 0 },
    category: { name: 'LEGO: Star Wars' },
    description:
      'Тип: блочный, количество деталей: 236, мини-фигурок: 3, пол ребенка: универсальный, цвет: мультиколор, основной материал: пластик',
    likes: 16,
  },
];

// export const products = [
//   {
//     id: 1,
//     name: 'Подушка-LEGO Орхидея 10311, деталей 608 шт',
//     price: 90,
//     image: [
//       'https://resources.cdn-kaspi.kz/img/m/p/hbe/h9e/84799947472926.jpg?format=gallery-medium',
//       'https://kaspi.kz/shop/p/lego-orhideja-10311-detalei-608-sht-108749534/?c=750000000',
//     ],
//     rating: { rate: 5, count: 9 },
//     description:
//       'Тип: блочный, количество деталей: 608, серия LEGO: Icons, пол ребенка: универсальный, цвет: мультиколор, основной материал: пластик',
//   },
//   {
//     id: 2,
//     name: 'LEGO Букет роз Icons 10328, деталей 822 шт',
//     price: 110,
//     image: [
//       'https://resources.cdn-kaspi.kz/img/m/p/h89/h1e/84844954189854.jpg?format=gallery-medium',
//       'https://kaspi.kz/shop/p/lego-buket-roz-icons-10328-detalei-822-sht-115790585/?c=750000000',
//     ],
//     rating: { rate: 4.8, count: 62 },
//     description:
//       'Тип: блочный, количество деталей: 822, пол ребенка: девочка, цвет: мультиколор, основной материал: пластик ',
//   },
//   {
//     id: 3,
//     name: 'LEGO Розы Iconic 40460, деталей 120 шт',
//     price: 20,
//     image: [
//       'https://resources.cdn-kaspi.kz/img/m/p/hdf/h18/84844811354142.jpg?format=gallery-medium',
//       'https://kaspi.kz/shop/p/lego-rozy-iconic-40460-detalei-120-sht-115790625/?c=750000000',
//     ],
//     rating: { rate: 5, count: 1069 },
//     description:
//       'Тип: блочный, количество деталей: 120, пол ребенка: девочка, цвет: мультиколор, основной материал: пластик',
//   },
//   {
//     id: 4,
//     name: 'LEGO Ferrari 812 Competizione 76914, деталей 261 шт',
//     price: 35,
//     image: [
//       'https://resources.cdn-kaspi.kz/img/m/p/hb7/haa/84800729710622.jpg?format=gallery-medium',
//       'https://kaspi.kz/shop/p/lego-ferrari-812-competizione-76914-detalei-261-sht-108979550/?c=750000000',
//     ],
//     rating: { rate: 4.9, count: 9 },
//     description:
//       'Тип: блочный, количество деталей: 261, серия LEGO: Speed Champions, пол ребенка: мальчик, цвет: мультиколор, основной материал: пластик',
//   },
//   {
//     id: 5,
//     name: 'LEGO Pagani Utopia 76915, деталей 249 шт',
//     price: 30,
//     image: [
//       'https://resources.cdn-kaspi.kz/img/m/p/hb3/hcb/84800733839390.jpg?format=gallery-medium',
//       'https://kaspi.kz/shop/p/lego-pagani-utopia-76915-detalei-249-sht-108979551/?c=750000000',
//     ],
//     rating: { rate: 5, count: 15 },
//     description:
//       'Тип: блочный, количество деталей: 249, серия LEGO: Speed Champions, пол ребенка: мальчик, цвет: серый, основной материал: пластик',
//   },
//   {
//     id: 6,
//     name: 'LEGO Маленькие растения Icons 10329, деталей 256 шт',
//     price: 70,
//     image: [
//       'https://resources.cdn-kaspi.kz/img/m/p/h74/h77/84845014712350.jpg?format=gallery-medium',
//       'https://kaspi.kz/shop/p/lego-malen-kie-rastenija-icons-10329-detalei-256-sht-115790687/?c=750000000',
//     ],
//     rating: { rate: 5, count: 1 },
//     description:
//       'Тип: блочный, количество деталей: 256, пол ребенка: универсальный, цвет: мультиколор, основной материал: пластик',
//   },
//   {
//     id: 7,
//     name: 'LEGO Замок Хогвартс 71043, деталей 6020 шт',
//     price: 820,
//     image: [
//       'https://resources.cdn-kaspi.kz/img/m/p/h51/h26/84756501757982.jpg?format=gallery-medium',
//       'https://kaspi.kz/shop/p/lego-zamok-hogvarts-71043-detalei-6020-sht-7203823/?c=750000000',
//     ],
//     rating: { rate: 5, count: 6 },
//     description:
//       'Тип: блочный, количество деталей: 6020, мини-фигурок: 4, серия LEGO: Harry Potter, пол ребенка: универсальный, цвет: мультиколор, основной материал: пластик',
//   },
//   {
//     id: 8,
//     name: 'LEGO Цветущая вишня Iconic 40725, деталей 438 шт',
//     price: 20,
//     image: [
//       'https://resources.cdn-kaspi.kz/img/m/p/hb7/h6a/84844782452766.jpg?format=gallery-medium',
//       'https://kaspi.kz/shop/p/lego-tsvetuschaja-vishnja-iconic-40725-detalei-438-sht-115790579/?c=750000000',
//     ],
//     rating: { rate: 5, count: 2 },
//     description:
//       'Тип: блочный, количество деталей: 438, пол ребенка: девочка, цвет: мультиколор, основной материал: пластик',
//   },
//   {
//     id: 9,
//     name: 'LEGO Technic Ferrari Daytona SP3 42143, деталей 3778 шт',
//     price: 710,
//     image: [
//       'https://resources.cdn-kaspi.kz/img/m/p/hf1/h0d/68773041111070.jpg?format=gallery-medium',
//       'https://kaspi.kz/shop/p/lego-technic-ferrari-daytona-sp3-42143-detalei-3778-sht-108805383/?c=750000000',
//     ],
//     rating: { rate: 5, count: 2 },
//     description:
//       'Тип: блочный, количество деталей: 3778, серия LEGO: Technic, пол ребенка: универсальный, цвет: мультиколор, основной материал: полимер',
//   },
//   {
//     id: 10,
//     name: 'LEGO Porsche 911 10295, деталей 1458 шт',
//     price: 350,
//     image: [
//       'https://resources.cdn-kaspi.kz/img/m/p/h81/hf8/84787942785054.jpg?format=gallery-medium',
//       'https://kaspi.kz/shop/p/lego-porsche-911-10295-detalei-1458-sht-102204772/?c=750000000',
//     ],
//     rating: { rate: 5, count: 1 },
//     description:
//       'Тип: блочный, количество деталей: 1458, серия LEGO: Icons, пол ребенка: универсальный, цвет: мультиколор, основной материал: пластик',
//   },
// ];

