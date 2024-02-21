export interface Product {
  id: number;
  name: string;
  price: number; 
  image: string;
  rating: {
    rate: number;
    count: number;
  };
  description: string;
}

export const products = [
  {
    id: 1,
    name: 'Подушка-LEGO Орхидея 10311, деталей 608 шт',
    price: 90,
    image: 'https://resources.cdn-kaspi.kz/img/m/p/hbe/h9e/84799947472926.jpg?format=gallery-medium', 
    rating: { rate: 5, count: 9 },
    description: 'Тип: блочный, количество деталей: 608, серия LEGO: Icons, пол ребенка: универсальный, цвет: мультиколор, основной материал: пластик'
  },
  {
    id: 2,
    name: 'LEGO Букет роз Icons 10328, деталей 822 шт',
    price: 110,
    image : 'https://resources.cdn-kaspi.kz/img/m/p/h89/h1e/84844954189854.jpg?format=gallery-medium',
    rating: { rate: 4.8, count: 62 },
    description: 'Тип: блочный, количество деталей: 822, пол ребенка: девочка, цвет: мультиколор, основной материал: пластик '
  },
  {
    id: 3,
    name: 'LEGO Розы Iconic 40460, деталей 120 шт',
    price: 20,
    image : 'https://resources.cdn-kaspi.kz/img/m/p/hdf/h18/84844811354142.jpg?format=gallery-medium',
    rating: { rate: 5, count: 1069 },
    description: 'Тип: блочный, количество деталей: 120, пол ребенка: девочка, цвет: мультиколор, основной материал: пластик'
  },
  {
     id: 4,
    name: 'LEGO Ferrari 812 Competizione 76914, деталей 261 шт',
    price: 35,
    image : 'https://resources.cdn-kaspi.kz/img/m/p/hb7/haa/84800729710622.jpg?format=gallery-medium',
    rating: { rate: 4.9, count: 9 },
    description: 'Тип: блочный, количество деталей: 261, серия LEGO: Speed Champions, пол ребенка: мальчик, цвет: мультиколор, основной материал: пластик'
  },
  {
    id: 5,
    name : 'LEGO Pagani Utopia 76915, деталей 249 шт',
    price: 30,
    image : 'https://resources.cdn-kaspi.kz/img/m/p/hb3/hcb/84800733839390.jpg?format=gallery-medium',
    rating: { rate: 5, count: 15 },
    description : 'Тип: блочный, количество деталей: 249, серия LEGO: Speed Champions, пол ребенка: мальчик, цвет: серый, основной материал: пластик'
  },
  {
    id: 6,
    name: 'LEGO Маленькие растения Icons 10329, деталей 256 шт',
    price: 70,
    image : 'https://resources.cdn-kaspi.kz/img/m/p/h74/h77/84845014712350.jpg?format=gallery-medium',
    rating: { rate: 5, count: 1 },
    description: 'Тип: блочный, количество деталей: 256, пол ребенка: универсальный, цвет: мультиколор, основной материал: пластик'
  },
  {
    id: 7,
    name: 'LEGO Замок Хогвартс 71043, деталей 6020 шт',
    price: 820,
   image : 'https://resources.cdn-kaspi.kz/img/m/p/h51/h26/84756501757982.jpg?format=gallery-medium',
    rating: { rate: 5, count: 6 },
    description: 'Тип: блочный, количество деталей: 6020, мини-фигурок: 4, серия LEGO: Harry Potter, пол ребенка: универсальный, цвет: мультиколор, основной материал: пластик'
  },
  {
    id: 8,
    name: 'LEGO Цветущая вишня Iconic 40725, деталей 438 шт',
    price: 20,
    image : 'https://resources.cdn-kaspi.kz/img/m/p/hb7/h6a/84844782452766.jpg?format=gallery-medium',
    rating: { rate: 5, count: 2 },
    description: 'Тип: блочный, количество деталей: 438, пол ребенка: девочка, цвет: мультиколор, основной материал: пластик'
  },
  {
    id: 9,
    name: 'LEGO Technic Ferrari Daytona SP3 42143, деталей 3778 шт',
    price: 710,
    image : 'https://resources.cdn-kaspi.kz/img/m/p/hf1/h0d/68773041111070.jpg?format=gallery-medium',
    rating: { rate: 5, count: 2 },
    description: 'Тип: блочный, количество деталей: 3778, серия LEGO: Technic, пол ребенка: универсальный, цвет: мультиколор, основной материал: полимер'
  },
  {
    id: 10,
    name: 'LEGO Porsche 911 10295, деталей 1458 шт',
    price: 350,
    image : 'https://resources.cdn-kaspi.kz/img/m/p/h81/hf8/84787942785054.jpg?format=gallery-medium',
    rating: { rate: 5, count: 1 },
    description: 'Тип: блочный, количество деталей: 1458, серия LEGO: Icons, пол ребенка: универсальный, цвет: мультиколор, основной материал: пластик'
  }
  
];


/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/