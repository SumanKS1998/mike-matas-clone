import Images from "../assets";

interface Project {
  name: string;
  description: string;
  image: string;
  year: number;
  subtopic: string;
}

const projects: Project[] = [
  {
    name: "iBanana",
    description:
      "Peel into the future with the iBanana. This revolutionary fruit combines advanced technology and potassium-rich goodness in a single handheld device. It's the perfect blend of nutrition and innovation!",
    image: Images.Air,
    year: 2016,
    subtopic: "Fruit Technology",
  },
  {
    name: "iPineapple",
    description:
      "Tropical delight meets cutting-edge technology with the iPineapple. Experience the juicy sweetness and the convenience of a digital assistant, all in one tropical package. Pineapple just got smarter!",
    image: Images.IphoneLWhite,
    year: 2017,
    subtopic: "Smart Fruits",
  },
  {
    name: "iCarrot",
    description:
      "Get a taste of the future with the iCarrot. This intelligent vegetable not only improves your vision but also provides real-time weather updates and gardening tips. It's the crunchiest innovation you'll ever experience!",
    image: Images.IphoneMWhite,
    year: 2018,
    subtopic: "Vegetable Tech",
  },
  {
    name: "iPotato",
    description:
      "Say hello to the iPotato, the world's smartest spud. This remarkable tuber not only makes delicious fries but also keeps track of your daily activities and provides motivational messages. It's a true couch potato companion!",
    image: Images.Dial,
    year: 2019,
    subtopic: "Smart Potatoes",
  },
  {
    name: "iBroccoli",
    description:
      "Meet your new best friend, the iBroccoli. Packed with vitamins and a delightful personality, this intelligent veggie guides you through healthy recipes, reminds you to exercise, and even tells jokes. Get ready for a green revolution!",
    image: Images.Ipad,
    year: 2020,
    subtopic: "Smart Vegetables",
  },
  {
    name: "iTomato",
    description:
      "Experience the juicy revolution with the iTomato. This technologically advanced fruit not only adds flavor to your meals but also streams your favorite shows, makes video calls, and never misses a beat. It's the ripest innovation you'll ever taste!",
    image: Images.IphoneMBlack,
    year: 2021,
    subtopic: "Smart Tomatoes",
  },
  {
    name: "iCucumber",
    description:
      "Prepare to be refreshed with the iCucumber. This smart vegetable not only hydrates but also tracks your water intake, provides beauty tips, and even offers cucumber-themed meditation sessions. It's a refreshing slice of innovation!",
    image: Images.IMacL,
    year: 2022,
    subtopic: "Cucumber Tech",
  },
  {
    name: "iLettuce",
    description:
      "Get ready for a leafy revolution with the iLettuce. This intelligent salad staple not only keeps you healthy but also gives daily affirmations, suggests personalized salad recipes, and tracks your vitamin intake. It's a crisp innovation you can't resist!",
    image: Images.IMacM,
    year: 2023,
    subtopic: "Smart Salads",
  },
];

export { projects };
