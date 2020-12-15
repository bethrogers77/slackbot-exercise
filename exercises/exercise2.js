// Set this assignment to true if you do want to use it.
module.exports.ACTIVATE_BOT = true;

module.exports.botScripts = [
  // Write an interaction where one user says "I'm tired", the bot says "Wake up!"
  //
  // mychatbot> I'm tired
  // mychatbot responds "Wake up!"

  {
    label: 'tired',
    prompt: 'I am tired',
    handler: function () {
      return 'WaKe up!';
    },
    isReply: false,
    isCaseSensitive: false,
    isListening: true,
  },

  // Write an interaction where one user asks the bot
  // "What's the area of a circle with radius X?" where X is any number
  // The chatbot will respond to the user with the answer.
  //
  // mychatbot> mychatbot What's the area of a circle with radius 5?
  // mychatbot responds to user "The area is 78.5398...."
  {
    label: 'An Example Script with Typed Variables',
    prompt: 'What is the area of a circle with a radius #{amount as number}',
    handler: function (params) {
      const area = Math.PI * (params.amount * params.amount);
      return 'Area = ' + Math.ceil(area);
    },
    isReply: false,
    isCaseSensitive: false,
    isListening: true,
  },

  // Write an interaction where one user asks the bot
  // "Tell me a story with NAME1 and NAME2" where NAME1 and NAME2 is any string
  // The chatbot will respond with the answer.
  //
  // mychatbot> mychatbot Tell me a story with Jack and Jill
  // mychatbot responds to user "Jack and Jill went up the hill to fetch a pail of water."
  {
    label: 'Tell story',
    prompt: 'Tell me a story with #{name1} and #{name2}',
    handler: function (params) {
      return (
        params.name1 +
        ' and ' +
        params.name2 +
        ' went up the hill to fetch a pail of water.'
      );
    },

    isReply: false,
    isCaseSensitive: false,
    isListening: true,
  },
];
