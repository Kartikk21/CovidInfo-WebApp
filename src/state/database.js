import Mock from "./mock";

const fever = require("../assets/placeholders/fever.png");
const cough = require("../assets/placeholders/cough.png");
const sore = require("../assets/placeholders/sore-throat.png");
const diarrhea = require("../assets/placeholders/diarrhea.png");
const breathing = require("../assets/placeholders/difficulty-breathing.png");
const taste = require("../assets/placeholders/loss-of-sense-of-taste.png");

const database = {

  facts: [
    {
      text:
        "In India around 99% people are cured from covid-19.",
      title: "Believe in your your self.",
    },
    {
      text:
        "After 15 days of outbreaking cases the number of new pateint in major cities of Madhya Pradesh is less as compared to the patient recovered.",
      title:
        "Positive news from Madhya Pradesh.",
    },
    {
      text:
        "In a research it is found that those people who drink water around 5-6 litre daily has less affect due to corona.",
      title:
        "Drink water as much as possible.",
    },
    {
      text:
        "Vitamin C play major role in our digestive system. It is best to eat vegatables with vitamin C. ",
      title:
        "Vitamin C",
    },
    {
      text:
        "Milk contain zinc as a nutrient. Covid attack more on people who has deficiency of Zinc. To maintain zinc level in the body take a cup of hot Milk in every hour.",
      title: "Milk and Zinc",
    },
  ],

  posts: [
    {

      image: 'data:image/png;base64,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',
      title: "Wash your hand properly",

    },
    {
      image: 'https://www.businessinsider.in/thumb/msid-82232151,width-1200,height-900/masks-double-mask.jpg',
      title: "Use Double Mask",
    },
    {
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTd-kzxzN7Q6BQL1E79boqw7hJWKhoX8eii3A&usqp=CAU',
      title: "Maintain Social Distancing",
    },
  ],

  process: [
    {
      text:
        "If you are facing fever frequently than you should take care about it.",
      title:
        "Fever",
    },
    {
      text:
        "Cough is a major symptom in covid 19 ",
      title: "Cough",
    },
    {
      text:
        "Due to covid Sore throat is a symtom which you should not ignore.",
      title: "Sore Throat",
    },
    {
      text:
        "Some patient of covid 19 also show the symptoms of diahrrea.",
      title: "Diarrhea",
    },
    {
      text:
        "Due to covid you may also lose control over taste.",
      title: "Loss of Taste",
    },
    {
      text:
        "If you are facing this symptom than you should have to take preliminary steps to cure covid-19.",
      title: "Difficulty in Breathing",
    },
  ],

};

Mock.onGet("/api/data").reply((config) => {
  const response = database;
  return [200, response];
});
