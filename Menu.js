import React, { useState, createContext } from "react";
import Layout from "../components/Layout";
import { useHistory } from "react-router-dom";
import Cartpage from "./Cartpage";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Header from "../components/Header";
import {
  Typography,
  Box,
  Grid,
  Button,
  Card,
  CardHeader,
  CardMedia,
  CardContent,
  CardActions,
  IconButton,
  CardActionArea
} from "@mui/material";
import { Provider, props } from "react-redux";
import Stack from "@mui/material/Stack";
//import addToCart from "../features/CartSlice";
import { useSelector, useDispatch } from "react-redux";
import { Route, Link, Routes, useNavigate } from "react-router-dom";

const Menu = () => {
  const navigate = useNavigate();
  const goBack = () => {
    navigate(-1);
  };

  const [showCategory, setShowCategory] = useState(true);
  const [showSubCategory, setShowSubCategory] = useState(false);
  const [showExplore, setShowExplore] = useState(false);
  const [showSubdata, setShowSubdata] = useState([]);
  const [cartItems, setCartItems] = useState([]);
  const [quantity, setQuantity] = useState(0);
  const [cartItemCount, setCartItemCount] = useState(0);

  const imageWidth = 70; // specify the width of the image here
  const imageHeight = 300; // specify the height of the image here

  const handleCategoryClick = () => {
    setShowCategory(!showCategory);
    setShowSubCategory(!setShowSubCategory);
    setShowExplore(!setShowExplore);
  };

  const categoryMenuData = [
    {
      id: 1,
      name: "Pizza",
      image:
        "https://imgmedia.lbb.in/media/2019/07/5d242ad8e93a896e5542da0d_1562651352251.jpg"
    },

    {
      id: 2,
      name: "Biriyani",
      image:
        "https://www.licious.in/blog/wp-content/uploads/2022/06/chicken-hyderabadi-biryani-01.jpg"
    },
    {
      id: 3,
      name: "Dessert",
      image:
        "https://images.immediate.co.uk/production/volatile/sites/30/2020/08/dessert-main-image-molten-cake-0fbd4f2.jpg"
    },

    {
      id: 4,
      name: "Noodles",
      image:
        "https://images.immediate.co.uk/production/volatile/sites/30/2020/12/Noodles-with-chilli-oil-eggs-6ec34e9.jpg"
    },
    {
      id: 5,
      name: "Dosa",
      image:
        "https://www.madhuseverydayindian.com/wp-content/uploads/2021/01/dosa-recipe-with-rice-flour-768x1024.jpg"
    },
    {
      id: 6,
      name: "Thali",
      image:
        "https://www.masalabox.com/wp-content/uploads/2022/03/e1dad5315972c8a9db86fb01d69c7ecb.jpg"
    }
  ];

  const subcategoryMenuData = [
    {
      id: 1,
      categoryMenuDataid: 1,
      name: "Veg Pizza",
      image: "https://www.dominos.co.in/files/items/Farmhouse.jpg",
      description:
        "tomato sauce, mozzarella cheese, and various vegetables such as mushrooms, onions, and bell peppers.",
      price: "149"
    },

    {
      id: 2,
      categoryMenuDataid: 1,
      name: "Pepperoni Pizza ",
      image:
        "https://img.freepik.com/premium-photo/fresh-tasty-pizza-with-pepperoni-isolated-white_136401-2336.jpg",
      description: "tomato sauce, mozzarella cheese, and spicy pepperoni.",
      price: "299"
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

  function handleAddToCart(item) {
    const updatedCartItems = [...cartItems, item];
    setCartItems(updatedCartItems);
    setQuantity(quantity + 1);
    setCartItemCount(updatedCartItems.length); // set the count of cart items
    localStorage.setItem("cartItems", JSON.stringify(updatedCartItems));
    toast.success("Item added to Cart successfully", { position: "top-center" });
  }
  console.log(cartItems);

  const handlegetsubcategory = (categoryId) => {
    const fData = subcategoryMenuData.filter((subcategory) => {
      return subcategory.categoryMenuDataid === categoryId;
    });
    setShowSubdata(fData);
    setShowCategory(false);
    setShowExplore(true);

    console.log(fData);
  };

  return (
    <Layout>
        <Header cartItemCount={cartItemCount} setCartItemCount={setCartItemCount} />
      <Typography variant="h3" fontWeight="bold" align="center">
        Take a Look at What We Offer!
      </Typography>
      <Typography variant="h4">Categories</Typography>

      <Box>
        <Stack
          spacing={5}
          direction="row"
          alignItems="center"
          justifyContent="center"
          marginTop="25px"
        ></Stack>
        {showCategory && (
          <div>
            <Grid
              container
              rowSpacing={1}
              columnSpacing={{ xs: 1, sm: 2, md: 3 }}
            >
              {categoryMenuData.map((item) => (
                <Card
                  key={item.id}
                  style={{ width: "450px", height: "450px", margin: "1.5rem" }}
                >
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="h2">
                      {item.name}
                    </Typography>
                    <CardActionArea>
                      <CardMedia
                        component="img"
                        image={item.image}
                        alt={item.name}
                        height={imageHeight}
                        width={imageWidth}
                      />

                      <Typography
                        variant="h6"
                        color="textPrimary"
                        component="p"
                        style={{ marginTop: "1rem" }}
                      >
                        {item.price}
                      </Typography>
                    </CardActionArea>
                  </CardContent>

                  <CardContent>
                    <Button
                      variant="contained"
                      color="primary"
                      //onClick={() => handleExploreClick(subcategoryMenuData)}
                      onClick={() => handlegetsubcategory(item.id)}
                      style={{ marginRight: "10px" }}
                    >
                      EXPLORE
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </Grid>
            <button onClick={goBack}> Go back</button>
          </div>
        )}

        <Box sx={{ flexGrow: 1, display: "flex", flexWrap: "wrap" }}>
          {showExplore && (
            <>
              <Typography
                variant="h5"
                align="center"
                underline="always"
                fontWeight="bold"
              >
                Sub Categories
              </Typography>

              {showSubdata.map((item) => (
                <Card
                  key={item.id}
                  style={{ width: "350px", height: "550px", margin: "1.5rem" }}
                >
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="h2">
                      {item.name}
                    </Typography>

                    <CardActionArea>
                      <CardMedia
                        component="img"
                        image={item.image}
                        alt={item.name}
                        height={imageHeight}
                        width={imageWidth}
                      />
                      <Typography
                        variant="body2"
                        color="textSecondary"
                        component="p"
                      >
                        {item.description}
                      </Typography>
                      <Typography
                        variant="h6"
                        color="textPrimary"
                        component="p"
                        style={{ marginTop: "1rem" }}
                      >
                        {item.price}
                      </Typography>
                    </CardActionArea>
                  </CardContent>

                  <CardContent>
                    <Button
                      variant="contained"
                      color="primary"
                      style={{ marginRight: "10px" }}
                      onClick={() => handleAddToCart(item)}
                    >
                      ADD TO CART
                    </Button>
                  </CardContent>
                </Card>
              ))}

              <ToastContainer />
            </>
          )}
        </Box>
      </Box>
      <Button onClick={handleCategoryClick} variant="contained">
        Go back to Menu
      </Button>
    </Layout>
  );
};

export default Menu;
