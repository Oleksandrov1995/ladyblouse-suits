

export const productsTypeData = [
  {
    id: 'soft',
    imageSrc: require('../Images/products/soft/softWhite.jpg'),
    type: 'Soft',
    price: 889,
    todayPrice: 620,
    discount: 30,
    aboutTitle:'Легкий та стильний костюм, чудово підходить для прогулянок та вечірок. Гумка на плечах м`яка, достатньо вільна аби не передавлювати. Блуза має рукава фонарики, що додає костюму візуальної невагомості. А прямий крій відповідає сучасним трендам і спрощує підбір розміру, оскільки добре виглядає на всіх типах фігури.',
    aboutText: (<div>
      <p>Переваги:</p>
      <p> - Легко підібрати розмір за рахунок фасону;</p>
      <p> - Легкі штани з гарною циркуляцією повітря;</p>
      <p> - Еластичні та зручні гумки для фіксації на широкому діапазоні параметрів;</p>
      <p> - Яскрава, нарядна та практична тканина;</p>
      <p> - Елементи легко комбінуються між собою та з іншим одягом.</p>
      <p>- Тканина: супер софт; </p>
    <p>- Прямий крій; </p>
    <p>- Made in Ukraine. </p>
    <p>Оплата: післяплатою при отриманні або повна оплата на реквізити!</p>
    <p>Доставка: Новою поштою та Укрпоштою до відділення або кур'єром до адреси!</p></div>),
    colors: [
      '#ffffff',
      '#000',
      '#add8e6',
    ],
    colorsImg: [
      {
        id: 'softWhite',
        img: require('../Images/products/soft/softWhite.jpg'),
        colorName: 'Білий',
      },
      {
        id: 'softBlack',
        img: require('../Images/products/soft/softBlack.jpg'),
        colorName: 'Чорний',
      },
      {
        id: 'softWhiteBlue',
        img: require('../Images/products/soft/softWhiteBlue.jpg'),
        colorName: 'Блакитний',
      },
      {
        id: 'softWhite1',
        img: require('../Images/products/soft/softWhite1.jpg'),
        colorName: 'Білий',
      },
      {
        id: 'softWhiteBlue1',
        img: require('../Images/products/soft/softWhiteBlue1.jpg'),
        colorName: 'Блакитний',
      },
      {
        id: 'softBlack1',
        img: require('../Images/products/soft/softBlack1.jpg'),
        colorName: 'Чорний',
      },
      {
        id: 'softWhiteBlue2',
        img: require('../Images/products/soft/softWhiteBlue2.JPG'),
        colorName: 'Блакитний',
      },
      {
        id: 'softBlack2',
        img: require('../Images/products/soft/softBlack2.jpg'),
        colorName: 'Чорний',
      },
        ],
    sizes:["S","M","L","XL"],
    sizeTable:(<div> <table className='productSize-table'>
    <thead>
      <tr>
        <th>Розмірна сітка</th>
        <th>Обхват грудей</th>
        <th>Обхват талії</th>
        <th>Обхват бедер</th>
         </tr>
    </thead>
    <tbody>
    <tr>
        <td>Розмір S</td>
        <td>80-90 см</td>
        <td>62-68 см</td>
        <td>86-96 см</td>
        
      </tr>
      <tr>
        <td>Розмір M</td>
        <td>92-100 см</td>
        <td>70-78 см</td>
        <td>98-107 см</td>
       
      </tr>
      <tr>
        <td>Розмір L</td>
        <td>102-110 см</td>
        <td>80-82 см</td>
        <td>109-115 см</td>
        </tr>
      <tr>
        <td>Розмір XL</td>
        <td>112-120 см</td>
        <td>86-92 см</td>
        <td>116-122 см</td>
      </tr>
         </tbody>
  </table>
 </div>),
  },
  {
    id: 'light',
    imageSrc: require('../Images/products/light/lightMalinovy.jpg'),
    type: 'Light',
    price: 1079,
    todayPrice: 749,
    discount: 30,
    aboutTitle:'Легкий та неймовірно стильний костюм для прогулянок, пляжів та вечірок. Сорочка має приспущену лінію плеча, довгий рукав та грудний карман з однієї сторони. Шорти на м`якій резинці, додатково мають регулювальний шнурок в поясі. Прямий крій костюму відповідає сучасним трендам і полегшує підбір розміру, оскільки добре виглядає на всіх типах фігури.',
    aboutText: (<div>
       <p>Переваги:</p>
      <p> - Легко підібрати розмір за рахунок фасону;</p>
      <p> - Легкі штани з гарною циркуляцією повітря;</p>
      <p> - Еластичні та зручні гумки для фіксації на широкому діапазоні параметрів;</p>
      <p> - Яскрава, нарядна та практична тканина;</p>
      <p> - Елементи легко комбінуються між собою та з іншим одягом.</p><p>- Тканина: американська креп-жатка; </p>
    <p>- Прямий крій; </p>
    <p>- Made in Ukraine. </p>
    <p>Оплата: післяплатою при отриманні або повна оплата на реквізити!</p>
    <p>Доставка: Новою поштою та Укрпоштою до відділення або кур'єром до адреси!</p></div>),
    colors: [
            '#DC143C','#add8e6','#00000','#008000','#F5F5DC',
    ],
    colorsImg: [
      {
        id: 'lightMalinovy',
        img: require('../Images/products/light/lightMalinovy.jpg'),
        colorName: 'Малиновий',
      },
      {
        id: 'lightWhiteBlue',
        img: require('../Images/products/light/lightWhiteBlue.jpg'),
        colorName: 'Блакитний',
      },
      {
        id: 'lightMalinovy1',
        img: require('../Images/products/light/lightMalinovy1.jpg'),
        colorName: 'Малиновий',
      },
      {
        id: 'lightWhiteBlue1',
        img: require('../Images/products/light/lightWhiteBlue1.jpg'),
        colorName: 'Блакитний',
      },
      {
        id: 'lightWhiteBlue2',
        img: require('../Images/products/light/lightWhiteBlue2.jpg'),
        colorName: 'Блакитний',
      },
      {
        id: 'lightWhite',
        img: require('../Images/products/light/lightWhite.jpg'),
        colorName: 'Білий',
      },
      {
        id: 'lightGreen',
        img: require('../Images/products/light/lightGreen.jpg'),
        colorName: 'Зелений',
      },
      {
        id: 'lightBezevy',
        img: require('../Images/products/light/lightBezevy.jpg'),
        colorName: 'Бежевий',
      },
      
      
        ],
    sizes:["42-46","48-52"],
    sizeTable:(<div> <table className='productSize-table'>
    <thead>
      <tr>
      <th>Розмірна сітка</th>
      <th>42-46</th>
      <th>48-52</th>
      </tr>
    </thead>
    <tbody>
    <tr>
        <td>Обхват грудей сорочки</td>
        <td>114 см</td>
        <td>124 см</td>
    </tr>
      <tr>
        <td>Довжина сорочки</td>
        <td>68 см</td>
        <td>70 см</td>
      </tr>
      <tr>
        <td>Довжина рукава</td>
        <td>73 см</td>
        <td>74 см</td>
        </tr>
      <tr>
        <td>Обхват талії</td>
        <td>60-79 см</td>
        <td>80-90 см</td>      
      </tr>
      <tr>
        <td>Обхват стегон</td>
        <td>85-100 см</td>
        <td>100-115 см</td>      
      </tr>
      <tr>
        <td>Довжина шортів</td>
        <td>38 см</td>
        <td>40 см</td>      
      </tr>
        </tbody>
  </table>
  </div>),
  },
 

  {
    id: 'light2',
    imageSrc: require('../Images/products/light2/light2WhiteBlue.jpg'),
    type: 'Light2',
    price: 1040,
    todayPrice: 728,
    discount: 30,
    aboutTitle:'Легкий та неймовірно стильний костюм для прогулянок, пляжів та вечірок. Сорочка має приспущену лінію плеча, короткий рукав для комфорту під час спеки. Шорти на м`якій резинці, додатково мають регулювальний шнурок в поясі. Прямий крій костюму відповідає сучасним трендам і полегшує підбір розміру, оскільки добре виглядає на всіх типах фігури.',
    aboutText: (<div>
       <p>Переваги:</p>
      <p> - Легко підібрати розмір за рахунок фасону;</p>
      <p> - Легкі штани з гарною циркуляцією повітря;</p>
      <p> - Еластичні та зручні гумки для фіксації на широкому діапазоні параметрів;</p>
      <p> - Яскрава, нарядна та практична тканина;</p>
      <p> - Елементи легко комбінуються між собою та з іншим одягом.</p><p>- Тканина: американська креп-жатка; </p>
    <p>- Прямий крій; </p>
    <p>- Made in Ukraine. </p>
    <p>Оплата: післяплатою при отриманні або повна оплата на реквізити!</p>
    <p>Доставка: Новою поштою та Укрпоштою до відділення або кур'єром до адреси!</p></div>),
    colors: [
            '#DC143C','#add8e6','#00000','#008000','#F5F5DC','#0000ff'
    ],
    colorsImg: [
     
      {
        id: 'light2WhiteBlue',
        img: require('../Images/products/light2/light2WhiteBlue.jpg'),
        colorName: 'Блакитний',
      },
      {
        id: 'light2Malinovy',
        img: require('../Images/products/light2/light2Malinovy.jpg'),
        colorName: 'Малиновий',
      },
      {
        id: 'light2WhiteBlue1',
        img: require('../Images/products/light2/light2WhiteBlue1.jpg'),
        colorName: 'Блакитний',
      },
      {
        id: 'light2Malinovy1',
        img: require('../Images/products/light2/light2Malinovy1.jpg'),
        colorName: 'Малиновий',
      },
      {
        id: 'light2WhiteBlue2',
        img: require('../Images/products/light2/light2WhiteBlue2.jpg'),
        colorName: 'Блакитний',
      },
      {
        id: 'light2White',
        img: require('../Images/products/light2/light2White.jpg'),
        colorName: 'Білий',
      },
      {
        id: 'light2Green',
        img: require('../Images/products/light2/light2Green.jpg'),
        colorName: 'Зелений',
      },
      {
        id: 'light2Bezevy',
        img: require('../Images/products/light2/light2Bezevy.jpg'),
        colorName: 'Бежевий',
      },
      {
        id: 'light2Blue',
        img: require('../Images/products/light2/light2Blue.jpg'),
        colorName: 'Синій',
      },
        ],
    sizes:["42-46","48-52"],
    sizeTable:(<div> <table className='productSize-table'>
    <thead>
      <tr>
      <th>Розмірна сітка</th>
      <th>42-46</th>
      <th>48-52</th>
      </tr>
    </thead>
    <tbody>
    <tr>
        <td>Обхват грудей сорочки</td>
        <td>114 см</td>
        <td>124 см</td>
    </tr>
      <tr>
        <td>Довжина сорочки</td>
        <td>68 см</td>
        <td>70 см</td>
      </tr>
      <tr>
        <td>Довжина рукава</td>
        <td>46 см</td>
        <td>47 см</td>
        </tr>
      <tr>
        <td>Обхват талії</td>
        <td>60-79 см</td>
        <td>80-90 см</td>      
      </tr>
      <tr>
        <td>Обхват стегон</td>
        <td>85-100 см</td>
        <td>100-115 см</td>      
      </tr>
      <tr>
        <td>Довжина шортів</td>
        <td>38 см</td>
        <td>40 см</td>      
      </tr>
        </tbody>
  </table>
  </div>),
  },

  {
    id: 'over',
    imageSrc: require('../Images/products/over/overWhiteAndBlack.jpg'),
    type: 'Over',
    price: 1089,
    todayPrice: 759,
    discount: 30,
   chooseColor: {
shirtColor:['Білий', 'Чорний', 'Блакитний'],
pantsColor:['Білий', 'Чорний', 'Блакитний']
   },
    aboutTitle:'Легкий та стильний костюм, чудово підходить для будь-яких заходів. Сорочка має приспущену лінію плеча та грудний карман з однієї сторони. Штани прямого крою, тримаються на талії за допомогою гумки. Гармонійно виглядають разом, а можна носити і по окремості. А оверсайз фасон костюму відповідає сучасним трендам і спрощує підбір розміру, оскільки добре виглядає на всіх типах фігури.',
    aboutText: (<div>
      <p>Переваги:</p>
      <p> - Легко підібрати розмір за рахунок фасону;</p>
      <p> - Легкі штани з гарною циркуляцією повітря;</p>
      <p> - Еластичні та зручні гумки для фіксації на широкому діапазоні параметрів;</p>
      <p> - Яскрава, нарядна та практична тканина;</p>
      <p> - Елементи легко комбінуються між собою та з іншим одягом.</p>
      <p>- Тканина: супер софт; </p>
    <p>- Прямий крій; </p>
    <p>- Made in Ukraine. </p>
    <p>Оплата: післяплатою при отриманні або повна оплата на реквізити!</p>
    <p>Доставка: Новою поштою та Укрпоштою до відділення або кур'єром до адреси!</p></div>),
    colors: [
      '#ffffff',
      '#000',
      '#add8e6',
    ],
    colorsImg: [
      {
        id: 'overWhiteAndBlack',
        img: require('../Images/products/over/overWhiteAndBlack.jpg'),
        colorName: 'Біло-Чорний',
      },
      {
        id: 'overBlack',
        img: require('../Images/products/over/overBlack.jpg'),
        colorName: 'Чорний',
      },
      {
        id: 'overWhiteBlueAndBlack',
        img: require('../Images/products/over/overWhiteBlueAndBlack.jpg'),
        colorName: 'Блакитно-Чорний',
      },
      {
        id: 'overWhiteBlue',
        img: require('../Images/products/over/overWhiteBlue.jpg'),
        colorName: 'Блакитний',
      },
      {
        id: 'overWhite',
        img: require('../Images/products/over/overWhite.jpg'),
        colorName: 'Білий',
      },
    
        ],
    sizes:["XS","S","M","L"],
    sizeTable:(<div> <table className='productSize-table'>
    <thead>
      <tr>
        <th>Заміри</th>
        <th>Розмір XS</th>
        <th>Розмір S</th>
        <th>Розмір M</th>
        <th>Розмір L</th> 
         </tr>
    </thead>
    <tbody>
    <tr>
    <td>Обхват грудей сорочки</td>
        <td>96 см</td>
        <td>98 см</td>
        <td>104 см</td>
        <td>114 см</td>
      </tr>
      <tr>
      <td>Довжина сорочки</td>
        <td>69 см</td>
        <td>69 см</td>
        <td>72 см</td>
        <td>75 см</td>
      </tr>
      <tr>
      <td>Довжина рукава</td>
        <td>58 см</td>
        <td>58.5 см</td>
        <td>60 см</td>
        <td>61 см</td>
        </tr>
      <tr>
      <td>Обхват талії</td>
        <td>55-61 см</td>
        <td>62-68 см</td>
        <td>69-78 см</td>
        <td>79-82 см</td>
      </tr>

      <tr>
      <td>Обхват стегон</td>
        <td>84-88 см</td>
        <td>89-97 см</td>
        <td>98-108 см</td>
        <td>109-115 см</td>
      </tr> 
       <tr>
      <td>Довжина штанів</td>
        <td>109 см</td>
        <td>110 см</td>
        <td>110 см</td>
        <td>111 см</td>
      </tr>
      
         </tbody>
  </table>
 </div>),
  },

  {
    id: 'elegant',
    imageSrc: require('../Images/products/elegant/elegantRedAndBlack.jpg'),
    type: 'Elegant',
    price: 959,
    todayPrice: 669,
    discount: 30,
   chooseColor: {
shirtColor:['Білий', 'Чорний', 'Електрик', 'Червоний'],
pantsColor:['Білий', 'Чорний', 'Блакитний']
   },
    aboutTitle:'Легкий та елегантний костюм, чудово підходить як для прогулянок так і для вечірок. Блуза фіксується на плечах завдяки м`якій гумці, як і штани - на талії. Костюм пошитий за прямим кроєм, що відповідає сучасній моді та спрощує підбір розміру, оскільки добре виглядає на всіх типах фігури.',
    aboutText: (<div>
      <p>Переваги:</p>
      <p> - Легко підібрати розмір за рахунок фасону;</p>
      <p> - Легкі штани з гарною циркуляцією повітря;</p>
      <p> - Еластичні та зручні гумки для фіксації на широкому діапазоні параметрів;</p>
      <p> - Яскрава, нарядна та практична тканина;</p>
      <p> - Елементи легко комбінуються між собою та з іншим одягом.</p>
      <p>- Тканина: супер софт; </p>
    <p>- Прямий крій; </p>
    <p>- Made in Ukraine. </p>
    <p>Оплата: післяплатою при отриманні або повна оплата на реквізити!</p>
    <p>Доставка: Новою поштою та Укрпоштою до відділення або кур'єром до адреси!</p></div>),
    colors: [
      '#ffffff',
      '#000',
      '#add8e6',
      '#FF0000',
      '#0000FF',
    ],
    colorsImg: [
      {
        id: 'elegantRedAndBlack',
        img: require('../Images/products/elegant/elegantRedAndBlack.jpg'),
        colorName: 'Червоно-Чорний',
      },
      {
        id: 'elegantWhite',
        img: require('../Images/products/elegant/elegantWhite.jpg'),
        colorName: 'Білий',
      },
      {
        id: 'elegantElectrickAndBlack',
        img: require('../Images/products/elegant/elegantElectrickAndBlack.jpg'),
        colorName: 'Електрик-Чорний',
      },
      {
        id: 'elegantWhiteAndWhiteBlue',
        img: require('../Images/products/elegant/elegantWhiteAndWhiteBlue.jpg'),
        colorName: 'Біло-Блакитний',
      },
      {
        id: 'overWhite',
        img: require('../Images/products/elegant/elegantBlack.jpg'),
        colorName: 'Чорний',
      },
    
        ],
    sizes:["XS","S","M","L",'XL'],
    sizeTable:(<div> <table className='productSize-table'>
    <thead>
      <tr>
        <th>Заміри</th>
        <th>Розмір XS</th>
        <th>Розмір S</th>
        <th>Розмір M</th>
        <th>Розмір L</th>
        <th>Розмір XL</th> 
         </tr>
    </thead>
    <tbody>
    <tr>
    <td>Обхват грудей сорочки</td>
        <td>74-84 см</td>
        <td>76-86 см</td>
        <td>78-94 см</td>
        <td>92-99 см</td>
        <td>98-104 см</td>
      </tr>
      <tr>
      <td>Довжина сорочки</td>
        <td>45 см</td>
        <td>45 см</td>
        <td>45 см</td>
        <td>46 см</td>
        <td>46 см</td>
      </tr>
      <tr>
      <td>Довжина рукава</td>
        <td>54 см</td>
        <td>54 см</td>
        <td>54 см</td>
        <td>55 см</td>
        <td>55 см</td>
        </tr>
      <tr>
      <td>Обхват талії</td>
        <td>55-61 см</td>
        <td>62-68 см</td>
        <td>69-78 см</td>
        <td>79-82 см</td>
        <td>83-90 см</td>
      </tr>

      <tr>
      <td>Обхват стегон</td>
        <td>84-88 см</td>
        <td>89-97 см</td>
        <td>98-108 см</td>
        <td>109-115 см</td>
        <td>116-122 см</td>
      </tr> 
       <tr>
      <td>Довжина штанів</td>
        <td>109 см</td>
        <td>110 см</td>
        <td>110 см</td>
        <td>111 см</td>
        <td>111 см</td>
      </tr>
      
         </tbody>
  </table>
 </div>),
  },

  {
    id: 'classic',
    imageSrc: require('../Images/products/classic/classicWhite.jpg'),
    type: 'Classic',
    price: 1129,
    todayPrice: 789,
    discount: 30,
   chooseColor: {
shirtColor:['Білий', 'Чорний', 'Синій', 'Блакитний'],
pantsColor:['Білий', 'Чорний', 'Блакитний']
   },
    aboutTitle:'Легкий та стильний костюм, чудово підходить для прогулянок та заходів. Ґудзики на сорочці приховані під планкою для надання акуратності та лаконічності до образу. А прямий крій штанів та сорочки відповідає сучасним трендам і спрощує підбір розміру, оскільки добре виглядає на всіх типах фігури.',
    aboutText: (<div>
      <p>Переваги:</p>
      <p> - Легко підібрати розмір за рахунок фасону;</p>
      <p> - Легкі штани з гарною циркуляцією повітря;</p>
      <p> - Еластичні та зручні гумки для фіксації на широкому діапазоні параметрів;</p>
      <p> - Яскрава, нарядна та практична тканина;</p>
      <p> - Елементи легко комбінуються між собою та з іншим одягом.</p>
      <p>- Тканина: супер софт; </p>
    <p>- Прямий крій; </p>
    <p>- Made in Ukraine. </p>
    <p>Оплата: післяплатою при отриманні або повна оплата на реквізити!</p>
    <p>Доставка: Новою поштою та Укрпоштою до відділення або кур'єром до адреси!</p></div>),
    colors: [
      '#ffffff',
      '#000',
      '#add8e6',
      '#0000FF',
    ],
    colorsImg: [
      {
        id: 'classicWhite',
        img: require('../Images/products/classic/classicWhite.jpg'),
        colorName: 'Білий',
      },
      {
        id: 'classicBlack',
        img: require('../Images/products/classic/classicBlack.jpg'),
        colorName: 'Чорний',
      },
      {
        id: 'classicWhiteBlue',
        img: require('../Images/products/classic/classicWhiteBlue.jpg'),
        colorName: 'Блакитний',
      },
      {
        id: 'classicBlueAndBlack',
        img: require('../Images/products/classic/classicBlueAndBlack.jpg'),
        colorName: 'Синьо-Чорний',
      },
      {
        id: 'classicBlackAndWhiteBlue',
        img: require('../Images/products/classic/classicBlackAndWhiteBlue.jpg'),
        colorName: 'Чорно-Блакитний',
      },
    
        ],
    sizes:["XS","S","M","L",'XL'],
    sizeTable:(<div> <table className='productSize-table'>
    <thead>
      <tr>
        <th>Заміри</th>
        <th>Розмір XS</th>
        <th>Розмір S</th>
        <th>Розмір M</th>
        <th>Розмір L</th>
        <th>Розмір XL</th> 
         </tr>
    </thead>
    <tbody>
    <tr>
    <td>Обхват грудей сорочки</td>
        <td>90 см</td>
        <td>94 см</td>
        <td>100 см</td>
        <td>110 см</td>
        <td>120 см</td>
      </tr>
      <tr>
      <td>Довжина сорочки</td>
        <td>65 см</td>
        <td>66.5 см</td>
        <td>68.5 см</td>
        <td>70 см</td>
        <td>72.5 см</td>
      </tr>
      <tr>
      <td>Довжина рукава</td>
        <td>57 см</td>
        <td>58.5 см</td>
        <td>60 см</td>
        <td>61.5 см</td>
        <td>63 см</td>
        </tr>
      <tr>
      <td>Обхват талії</td>
        <td>55-61 см</td>
        <td>62-68 см</td>
        <td>69-78 см</td>
        <td>79-82 см</td>
        <td>83-90 см</td>
      </tr>

      <tr>
      <td>Обхват стегон</td>
        <td>84-88 см</td>
        <td>89-97 см</td>
        <td>98-108 см</td>
        <td>109-115 см</td>
        <td>116-122 см</td>
      </tr> 
       <tr>
      <td>Довжина штанів</td>
        <td>109 см</td>
        <td>110 см</td>
        <td>110 см</td>
        <td>111 см</td>
        <td>111 см</td>
      </tr>
      
         </tbody>
  </table>
 </div>),
  },
];
