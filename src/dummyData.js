import WomanAvatar from "./images/placeholder-woman.png";
import ManAvatar from "./images/placeholder-man.png";
import UserImage from "./images/user-image.jpg";

import SmartTv from "./images/smart-tv.png";
import SmartTv2 from "./images/smart-tv-2.png";
import SmartTv3 from "./images/smart-tv-3.png";
import SmartTv4 from "./images/smart-tv-4.png";
import SmartTv5 from "./images/smart-tv-5.png";

const txt =
  "Lorem ipsum dolor sit amet consectetur adipisicing elit." +
  "dolor sit amet consectetur, adipisicing elit.";

  const tlt =
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. " +
      "Libero repudiandae suscipit, sequi ex ipsam earum quia voluptas aliquid quaerat" +
      " commodi totam expedita exercitationem perferendis quae beatae tempora laborum at laboriosam?";

      const descr =
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum" +
      "omnis dolor numquam voluptatum illum animi, labore dolorem hic," +
      "ullam esse libero delectus quas, ipsum in atque sapiente" +
      "consequuntur reiciendis similique. Lorem ipsum dolor sit, amet," +
      "consectetur adipisicing elit. Ad soluta, aspernatur eos quod" +
      "voluptatem doloribus voluptates doloremque, reprehenderit" +
      "asperiores, quia, autem nisi libero quis? Enim quae eligendi autem" +
      "quaerat. Lorem ipsum dolor sit amet, consectetur adipisicing elit." +
      "Architecto atque eum eaque temporibus non impedit officiis" +
      "quisquam fugit sequi consectetur iure, facilis, mollitia magnam" +
      "animi. Reprehenderit necessitatibus nisi corrupti odio! Lorem" +
      "ipsum dolor sit amet consectetur, adipisicing, elit. Facilis" +
      "eligendi accusantium fugit quas quo consectetur, nihil, nam enim" +
      "esse ea tenetur iste, minus voluptatibus odit earum corporis," +
      "nostrum voluptate sunt. Lorem ipsum dolor sit amet consectetur" +
      "adipisicing elit. Nesciunt quod distinctio recusandae quam," +
      "dolore, consequatur laborum facilis beatae deleniti porro" +
      "doloribus neque, iusto veritatis obcaecati quos vel, inventore" +
      "eaque sapiente! Lorem ipsum dolor, sit amet consectetur" +
      "adipisicing elit. Dolor at distinctio pariatur, quos dolorum quo" +
      "nisi! Ratione, odit doloribus laudantium ipsa. Ipsum nostrum, amet" +
      "et qui sint architecto doloribus ad. Lorem ipsum dolor sit amet" +
      "consectetur adipisicing elit. Ab magni debitis quis eos aspernatur" +
      "excepturi, modi repellendus at nobis. Deserunt officiis expedita" +
      "voluptatibus, incidunt dolores neque qui dicta saepe" +
      "necessitatibus. Lorem ipsum dolor, sit amet consectetur" +
      "adipisicing elit. Dolor at distinctio pariatur, quos dolorum quo" +
      "nisi! Ratione, odit doloribus laudantium ipsa. Ipsum nostrum, amet" +
      "et qui sint architecto doloribus ad. Lorem ipsum dolor sit amet" +
      "consectetur adipisicing elit. Ab magni debitis quis eos aspernatur" +
      "excepturi, modi repellendus at nobis. Deserunt officiis expedita" +
      "voluptatibus, incidunt dolores neque qui dicta saepe" +
      "necessitatibus.";  

export const Entities = [
  {
    id: 1,
    name: "Pedidos",
    icon: "shopping_bag",
    currentWeekTotal: 5435,
    previousWeekTotal: 5310,
  },
  {
    id: 2,
    name: "Usuarios",
    icon: "person",
    currentWeekTotal: 180,
    previousWeekTotal: 171,
  },
  {
    id: 3,
    name: "Inventario",
    icon: "inventory",
    currentWeekTotal: 210,
    previousWeekTotal: 259,
  },
  {
    id: 4,
    name: "Comentarios",
    icon: "comment",
    currentWeekTotal: 420,
    previousWeekTotal: 387,
  },
  {
    id: 5,
    name: "Expresos",
    icon: "local_shipping",
    currentWeekTotal: 5751,
    previousWeekTotal: 5698,
  },
];

export const Notifications = [
  { id: "noti001", text: "1 " + txt },
  { id: "noti002", text: "2 " + txt },
  { id: "noti003", text: "3 " + txt },
  { id: "noti004", text: "4 " + txt },
  { id: "noti005", text: "5 " + txt },
  { id: "noti006", text: "6 " + txt },
];

export const ClientsToTalk = [
  {
    id: "USR-025789",
    image: UserImage,
    name: "Natalie Portman",
    status: "connect",
    unReadMessage: 2,
  },
  {
    id: "USR-025147",
    image: ManAvatar,
    name: "Will Smith",
    status: "suspend",
    unReadMessage: 3,
  },
  {
    id: "USR-025100",
    image: WomanAvatar,
    name: "Scarlet Johanson",
    status: "offline",
    unReadMessage: 1,
  },
  {
    id: "USR-025371",
    image: ManAvatar,
    name: "Morgan Freeman",
    status: "connect",
    unReadMessage: 0,
  },
  {
    id: "USR-025570",
    image: ManAvatar,
    name: "Denzel Washinton",
    status: "connect",
    unReadMessage: 0,
  },
];

export const Clients = [
  {
    id: "USR-025456",
    name: "Sarah Doe",
    email: "sarahdoe@gmail.com",
    image: WomanAvatar,
    gender: "female",
    status: "connected",
    type: "normal",
    phone: "809-111-0000",
    birthday: "1997-05-02",
    password: "mypassword",
    streetNumber: 8,
    streetName: "Francisco Henriquez y Carvajal",
    hood: "Brisas del Este",
    city: "Santo Domingo Este",
  },
  {
    id: "USR-025941",
    name: "John Doe",
    email: "johndoe@gmail.com",
    image: ManAvatar,
    gender: "male",
    status: "offline",
    type: "express",
    phone: "809-222-0000",
    birthday: "1996-08-12",
    password: "mypassword",
    streetNumber: 8,
    streetName: "Francisco Henriquez y Carvajal",
    hood: "Brisas del Este",
    city: "Santo Domingo Este",
  },
  {
    id: "USR-025965",
    name: "Maria Perez",
    email: "mariaperez@gmail.com",
    image: WomanAvatar,
    gender: "female",
    status: "suspended",
    type: "normal",
    phone: "809-222-0000",
    birthday: "1995-01-20",
    password: "mypassword",
    streetNumber: 8,
    streetName: "Francisco Henriquez y Carvajal",
    hood: "Brisas del Este",
    city: "Santo Domingo Este",
  },
  {
    id: "USR-025408",
    name: "Mike Doe",
    email: "mikedoe@gmail.com",
    image: ManAvatar,
    gender: "male",
    status: "retired",
    type: "normal",
    phone: "809-222-0000",
    birthday: "1995-12-10",
    password: "mypassword",
    streetNumber: 8,
    streetName: "Francisco Henriquez y Carvajal",
    hood: "Brisas del Este",
    city: "Santo Domingo Este",
  },
];

export const Comments = [
  {
    id: "CMT-025984",
    postedDate: "2021-05-10",
    client: "USR-025789",
    item: "ART-025122",
    status: "visible",
    text: tlt,
  },
  {
    id: "CMT-025498",
    postedDate: "2021-05-16",
    client: "USR-025903",
    item: "ART-025741",
    status: "unvisible",
    text: tlt,
  },
  {
    id: "CMT-025332",
    postedDate: "2021-05-19",
    client: "USR-025402",
    item: "ART-025714",
    status: "visible",
    text: tlt,
  },
];

export const Brands = [
  "brand 1",
  "brand 2",
  "brand 3",
  "brand 4",
  "brand 5",
  "brand 6",
];

export const Departments = ["Tecnologia", "Ferreteria", "Ropa", "Calzado", "Hogar"];

export const Items = [
  {
    id: "ART-025369",
    image: [SmartTv, SmartTv2, SmartTv3, SmartTv4, SmartTv5],
    title: tlt,
    description: descr,
    status: "new",
    gender: "all",
    stock: 25,
    quality: 4.8,
    department: "Tecnologia",
    brand: "brand 2",
    subItems: [
      {
        size: '24"',
        color: "Black",
        capacity: "2GBs",
        stock: 19,
        purchasedPrice: 1200,
        sellPrice: 1850,
        offerPrice: 1700,
      },
      {
        size: '17"',
        color: "Gray",
        capacity: "2GBs",
        stock: 6,
        purchasedPrice: 950,
        sellPrice: 1450,
        offerPrice: 1350,
      },
    ],
  },
  {
    id: "ART-025147",
    image: [SmartTv, SmartTv2, SmartTv3, SmartTv4, SmartTv5],
    title: tlt,
    description: descr,
    status: "used",
    gender: "all",
    stock: 20,
    quality: 4.8,
    department: "Tecnologia",
    brand: "brand 4",
    subItems: [
      {
        size: '24"',
        color: "Black",
        capacity: "2GBs",
        stock: 15,
        purchasedPrice: 1200,
        sellPrice: 1850,
        offerPrice: 0,
      },
      {
        size: '17"',
        color: "Gray",
        capacity: "2GBs",
        stock: 5,
        purchasedPrice: 950,
        sellPrice: 1450,
        offerPrice: 0,
      }]
  }
];

export const Orders = [
  {
    id: "ORD-025456",
    shippingMethod: "regular",
    type: "normal",
    shippingCost: 100,
    total: 4270,
    descount: 150,
    status: "leaving",
    orderDate: "2021-05-01",
    shippingDate: "2021-05-02",

    client: {
      id: "USR-025479",
      name: "Sarah Doe",
      phone: "809-111-0000",
      email: "sarahdoe@gmail.com",
      streetNumber: "8",
      streetName: "Francisco Henriquez y Carvajal",
      hoodName: "Brisas del Este",
      cityName: "Santo Domingo Este",
      indications: tlt,
    },

    items: [
      {
        id: "ART-025481",
        image: SmartTv,
        amount: 2,
        price: 1250,
        brand: "Samsung",
        color: "black",
        size: '17"',
        capacity: "2GBs",
        condition: "Ninguna",
      },
      {
        id: "ART-025104",
        image: SmartTv,
        amount: 1,
        price: 1670,
        brand: "Samsung",
        color: "blue",
        size: '24"',
        capacity: "2GBs",
        condition: "En devolucion",
      },
    ],
  },
  {
    id: "ORD-025703",
    shippingMethod: "fast",
    type: "express",
    shippingCost: 150,
    total: 1400,
    descount: 150,
    status: "received",
    orderDate: "2021-05-01",
    shippingDate: "2021-05-02",

    client: {
      id: "USR-025149",
      name: "John Doe",
      phone: "809-111-0000",
      email: "johndoe@gmail.com",
      streetNumber: "8",
      streetName: "Francisco Henriquez y Carvajal",
      hoodName: "Brisas del Este",
      cityName: "Santo Domingo Este",
      indications: tlt,
    },

    items: [
      {
        id: "ART-025698",
        image: SmartTv,
        amount: 1,
        price: 1250,
        brand: "Samsung",
        color: "black",
        size: '17"',
        capacity: "2GBs",
        condition: "Ninguna",
      },
    ],
  },
];