// Set this assignment to true if you do want to use it.
module.exports.ACTIVATE_BOT = true;

module.exports.botScripts = [
 
{
  label: 'Valley Girl Math Star, seriously',
  prompt: 'say hi to #{name}',
  handler: function (params) {
    return 'Like welcome to Valley Girl Math Star demo, ' + params.name + '!';
  },
  isReply: false,
  isCaseSensitive: false,
  isListening: true,
},

{  label: 'celsius to farenheit',
  prompt: 'Enter celsius, rad conversion to farenheit #{amount as number}',
  handler: function (params) {
    const temperature = Math.round( (params.amount * 9/5 ) + 32);    
    return 'So very ' + temperature + '!';
  },
  isListening: true,
},

{
  label: 'number squared',
  prompt: 'Like enter number to be squared #{amount as number}',
  handler: function (params) {
    const squaredNum = (params.amount * params.amount) ;
    return (
      'AWESOME ' + squaredNum + '!'            
    );
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
    label: 'circle calc',
    prompt: 'Enter a radius to see the area of a circle #{amount as number}',
    handler: function (params) {
      const area = Math.PI * (params.amount * params.amount) ;
      return (
        'Excellent, Area = ' +
        Math.ceil(area)
                
      );
    },
    isReply: false,
    isCaseSensitive: false,
    isListening: true,
  },
  {
    label: 'square root',
    prompt: 'As if, enter num and will give square root #{amount as number}',
    handler: function (params) {
      const sqRoot = Math.sqrt(params.amount) ;
      return (
        'Rad ! it is ' +  sqRoot               
      );
    },
    isReply: false,
    isCaseSensitive: false,
    isListening: true,
  },

  {
    label: 'cosine calc',
    prompt: 'enter num of an angle to find the cosine #{amount as number}',
    handler: function (params) {
      const cosineNum = Math.cos(params.amount) ;
      return (
        'Whatever! answer is ' + cosineNum + '!'             
      );
    },
    isReply: false,
    isCaseSensitive: false,
    isListening: true,
  },
  {
    label: 'Valley Girl math star review',
    prompt: 'Like was this math demo rad N or Y #{yesno}',
    handler: function (params) {
      if (params.yesno === 'Y') {
      return 'TOTALLY RAD DUDE RETURN ANYTIME FOR MORE RAD MATH! '; 
      }
      else{
      return 'WHATEVER DUDE, AS IF!';  
      }
    },
      isReply: false,
      isCaseSensitive: false,
      isListening: true,
 },

];



