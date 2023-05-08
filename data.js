const itemlist = [
  {
    id: 1,
    categoryMenuDataid: 1,
    name: "Veg Pizza",
    image: "https://www.dominos.co.in/files/items/Farmhouse.jpg",
    description:
      "tomato sauce, mozzarella cheese, and various vegetables such as mushrooms, onions, and bell peppers.",
    price: " 149"
  },
  {
    id: 2,
    categoryMenuDataid: 1,
    name: "Pepperoni Pizza ",
    image:
      "https://img.freepik.com/premium-photo/fresh-tasty-pizza-with-pepperoni-isolated-white_136401-2336.jpg",
    description: "tomato sauce, mozzarella cheese, and spicy pepperoni.",
    price: " 299"
  },
  {
    id: 3,
    categoryMenuDataid: 1,
    name: "BBQ Chicken Pizza",
    image:
      "https://bakingmischief.com/wp-content/uploads/2022/03/bbq-chicken-pizza-image-square.jpg",
    description: "BBQ sauce, mozzarella cheese, chicken, and red onions.",
    price: " 350"
  },
  {
    id: 4,
    categoryMenuDataid: 1,
    name: "Margherita",
    image:
      "https://cookieandkate.com/images/2021/07/classic-margherita-pizza.jpg",
    description: " tomato sauce, mozzarella cheese, and fresh basil.",
    price: " 200"
  },
  {
    id: 5,
    categoryMenuDataid: 2,
    name: "Hyderabadi biryani",
    image:
      "https://www.licious.in/blog/wp-content/uploads/2022/06/kolkata-biryani-750x750.jpg",
    description:
      " spicy and aromatic rice dish with tender meat, saffron, and fried onions.",
    price: " 320"
  },
  {
    id: 6,
    categoryMenuDataid: 2,
    name: "Kolkata biryani",
    image:
      "https://static.wixstatic.com/media/91e241_4245a3ed89e5407db820cfde8c4c4a09~mv2.jpg/v1/fill/w_560,h_372,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/Ustaadi-Hyderabadi-Mutton-Biryani.jpg",
    description:
      "light and fragrant rice dish with juicy meat, potatoes, and a hint of sweetness.",
    price: " 300"
  },
  {
    id: 7,
    categoryMenuDataid: 2,
    name: "Lucknowi biryani",
    image:
      "https://www.foodfusion.com/wp-content/uploads/2021/02/Lucknowi-biryani-Recipe-by-Food-fusion-1.jpg",
    description:
      "slow-cooked with fragrant spices and layered with caramelized onions and marinated meat",
    price: " 400"
  },

  {
    id: 8,
    categoryMenuDataid: 3,
    name: "Sindhi biryani",
    image: "https://i.ytimg.com/vi/wzFuiIZgO5U/maxresdefault.jpg",
    description:
      " a fusion of Indian and Pakistani flavors with tender meat, potatoes, and a spicy tomato-based sauce.",
    price: " 500"
  },
  {
    id: 9,
    categoryMenuDataid: 3,
    name: "Cake ",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQlRYFakaU7Ez7fy_SNOvNVpbIS7EUDBPjTlMDdNp_3Usc3TTmSfj9KjfwfYkNjzTIxXhSqEGhq2E8&usqp=CAU&ec=48665699",
    description:
      "sweet baked treat typically made with flour, sugar, eggs, and butter.",
    price: " 600"
  },
  {
    id: 10,
    categoryMenuDataid: 3,
    name: "Ice cream ",
    image:
      "https://www.carveyourcraving.com/wp-content/uploads/2021/06/chocolate-icecream-in-an-icecream-maker.jpg",
    description:
      "frozen sweetened dessert made with cream or milk and various flavorings.",
    price: " 100"
  },
  {
    id: 11,
    categoryMenuDataid: 3,
    name: "Brownies ",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/6/68/Chocolatebrownie.JPG/640px-Chocolatebrownie.JPG",
    description:
      "dense, chocolatey square baked treat made with flour, sugar, eggs, and chocolate.",
    price: " 300"
  },
  {
    id: 12,
    categoryMenuData: 3,
    name: "Cheesecake ",
    image:
      "https://static.onecms.io/wp-content/uploads/sites/43/2022/10/31/17410_Best-No-Bake-Cheesecake_4x3_CD_55616-1.jpg",
    description:
      "rich, creamy dessert made with a graham cracker or cookie crust and a cream cheese filling.",
    price: " 700"
  },

  {
    id: 13,
    categoryMenuDataid: 4,
    name: "Spaghetti",
    image:
      "https://www.allrecipes.com/thmb/ASRzxoRrPoMLQEpczFvU7osJNF4=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/21353-italian-spaghetti-sauce-with-meatballs-2x1-141-cedbb650b4264576ab923c91215ce7fc.jpg",
    description: "long, thin, cylindrical pasta.",
    price: " 195"
  },
  {
    id: 14,
    categoryMenuDataid: 4,
    name: "Egg noodles",
    image:
      "https://thewoksoflife.com/wp-content/uploads/2020/04/homemade-chinese-egg-noodles-19-e1609271249794.jpg",
    description: " thin, flat noodles made with egg and wheat flour.",
    price: " 220"
  },
  {
    id: 15,
    categoryMenuDataid: 4,
    name: "Ramen",
    image:
      "https://dishingouthealth.com/wp-content/uploads/2022/01/SpicyMisoRamen_Square-500x500.jpg",
    description: "thin, curly, wheat-based noodles often served in a soup.",
    price: " 300"
  },
  {
    id: 16,
    categoryMenuDataid: 4,
    name: "Penne",
    image:
      "https://www.archanaskitchen.com/images/archanaskitchen/0-Archanas-Kitchen-Recipes/2018/Penne_Pasta_Recipe_In_Alfredo_Sauce_With_Roasted_Mushrooms-1.jpg",
    description: " tube-shaped pasta with angled ends cut diagonally.",
    price: " 225"
  },
  {
    id: 17,
    categoryMenuDataid: 5,
    name: "Masala Dosa",
    image:
      "https://www.cookwithmanali.com/wp-content/uploads/2020/05/Masala-Dosa.jpg",
    description:
      " a stuffed dosa with a filling of spiced potatoes, onions, and sometimes peas.",
    price: " 190"
  },
  {
    id: 18,
    categoryMenuDataid: 5,
    name: "Cheese Dosa",
    image:
      "https://www.indianhealthyrecipes.com/wp-content/uploads/2022/03/cheese-dosa.jpg",
    description: " a dosa filled with melted cheese.",
    price: " 120"
  },
  {
    id: 19,
    categoryMenuDataid: 6,
    name: "North Indian Thali ",
    image: "https://i.ytimg.com/vi/C2ninA-S5yo/hqdefault.jpg",
    description:
      "features a variety of vegetarian and non-vegetarian dishes from the North Indian cuisine.",
    price: " 380"
  },
  {
    id: 20,
    categoryMenuDataid: 6,
    name: "Bengali Thali ",
    image:
      "https://imgmedia.lbb.in/media/2020/11/3a3f7aad-ccee-49d6-95c3-21f607af39bc.jpg",
    description:
      " includes a selection of dishes from the Bengali cuisine, such as fish curry, rice, and vegetable dishes",
    price: " 332"
  }
];
export default itemlist;
