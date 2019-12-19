var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/logouttest', function(req, res, next) {
  res.send('You are logged out');
});

router.get('/', function(req, res, next) {
  res.send('Incorrect cridentals');
});

router.post('/', function(req, res, next) {
  res.send("not Logged!");
});

router.get('/get', function(req, res, next) {
  res.send('Incorrect cridentals');
});
router.post('/quiz', function(req, res, next){
  
  console.log(req.body);
});

router.get('/story', function(req, res, next) {
  let story=[{
    title: "Counting Wisely",
    preview:"Akbar once put a question to his court that left everyone puzzled...",
    content: "Akbar once put a question to his court that left everyone puzzled. As they all tried to figure out the answer, Birbal walked in and asked what the matter was. They repeated the question to him. ‘How many crows are there in the city?’ Birbal immediately smiled, went up to Akbar, and announced that the answer to his questions was twenty-one thousand, five hundred and twenty-three. When asked how he knew the answer, Birbal replied, ‘Ask your men to count the number of crows. If there are more, then the crows’ relatives from outside the city are visiting them. If there are fewer, then the crows are visiting their relatives outside the city.’ Pleased with the answer, Akbar presented Birbal with a ruby and pearl chain.",
    questions: [
      {
        question: "What is the name of the protagonist ?",
        options: [
          "Akbar",
          "Zakaria",
          "Birbal"
        ],
        answer: "Akbar"
      }
    ]
  }]
  res.json({ story });
});

router.get('/stories', function(req, res ,next){
  
  let stories = [{
    title: "Counting Wisely",
    preview:"Akbar once put a question to his court that left everyone puzzled...",
    content: "Akbar once put a question to his court that left everyone puzzled. As they all tried to figure out the answer, Birbal walked in and asked what the matter was. They repeated the question to him. ‘How many crows are there in the city?’ Birbal immediately smiled, went up to Akbar, and announced that the answer to his questions was twenty-one thousand, five hundred and twenty-three. When asked how he knew the answer, Birbal replied, ‘Ask your men to count the number of crows. If there are more, then the crows’ relatives from outside the city are visiting them. If there are fewer, then the crows are visiting their relatives outside the city.’ Pleased with the answer, Akbar presented Birbal with a ruby and pearl chain.",
    questions: [
      {
        question: "What is the name of the protagonist ?",
        options: [
          "Akbar",
          "Mehdi",
          "Birbal"
        ],
        answer: "Akbar"
      }
    ]
  },
  {
    title: "The Golden Egg",
    preview:"Once upon a time, a farmer had a goose that laid a golden egg every day...",
    content: "Once upon a time, a farmer had a goose that laid a golden egg every day. The egg provided enough money for the farmer and his wife for their day-to-day needs. The farmer and his wife were happy for a long time. But one day, the farmer got an idea and thought, “Why should I take just one egg a day? Why can’t I take all of them at once and make a lot of money?”",
    questions: [
      {
        question: "What is the name of the Fox ?",
        options: [
          "Hamid",
          "Mehdi",
          "Zak"
        ],
        answer: "Zak"
      }
    ]
  },
  {
    title: "The Miser And His Gold",
    preview:"An old miser lived in a house with a garden...",
    content: "An old miser lived in a house with a garden. The miser hid his gold coins in a pit under some stones in the garden. Every day, before going to bed, the miser went to the stones where he hid the gold and counted the coins. He continued this routine every day, but not once did he spend the gold he saved.",
    questions: [
      {
        question: "What is the name of the Fox ?",
        options: [
          "Hamid",
          "Mehdi",
          "Zak"
        ],
        answer: "Zak"
      }
    ]
  }];
  res.json({ stories });
  /*
  {
    stories: [{
    title: "Fox Story",
    content: "bla bla bla",
    questions: [
      {
        question: "What is the name of the Fox ?",
        options: [
          "Hamid",
          "Mehdi",
          "Zak"
        ],
        answer: "Zak"
      }
    ]
  }]
}
  
  
  */
});

module.exports = router;
