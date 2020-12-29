'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Products', [
      {
        productName: 'Sweetness Box',
        productDescription: 'Candy always tastes better when it comes from Disney 🥰 Send to your sweetest friend that you know would LOVE a parcel packed with sugary goodness',
        price: '$49.00',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        productName: 'Spider Bite Box',
        productDescription: 'Calling all web-slingers: it’s your friendly neighborhood Spider-Man! This parcel will be sure to get your Spidey Senses tingling 🕷',
        price: '$59.00',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        productName: 'Day Dreamer Box',
        productDescription: '‘Tis the season to curl up with some tea, your favorite journal, and a little Disney magic! This parcel is for anyone whose aesthetic is the cozy writer type ✍️ ☕️',
        price: '$45.00',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        productName: 'Pride Box',
        productDescription: 'Rainbows are always in season! Whether you are heading to Disney World or just running errands around town, let your pride shine with our most colorful parcel yet 🌈✨',
        price: '$75.00',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        productName: 'Wizarding Box',
        productDescription: '"Don’t let the muggles get you down.” If you can’t make it to Hogwarts this year, why not bring all the magic to you! We ship everywhere that mail can be received, including cupboards under the stairs 🔮🧙‍♀️',
        price: '$70.00',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        productName: 'Enchanted Rose Box',
        productDescription: 'This parcel features a tale as old as time, and makes the perfect gift for every beauty (or beast) in your kingdom 🥀',
        price: '$85.00',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        productName: 'The Force Box',
        productDescription: 'Greetings from a galaxy far, far away! This intergalactic parcel will be sure to give its recipient a New Hope✨ Bring balance to the force by sending to the chosen one in your life',
        price: '$70.00',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        productName: 'Holiday Box',
        productDescription: "Happy, merry, holly, jolly season's greetings! Spread holiday cheer all year around with this box FULL of holiday magic 🎁✨",
        price: '$80.00',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        productName: 'The Child Box',
        productDescription: 'You think one Baby Yoda is cute? Try four Baby Yoda on for size. including: a TOTE-ally adorable Baby Yoda tote, MUG-nificent Baby Yoda mug, SOCK-red Baby Yoda socks, and well- a Baby Yoda plush',
        price: '$70.00',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        productName: 'Marvelous Box',
        productDescription: 'Where have all the good men gone and where are all the gods, you ask? They joined the Avengers! If you’re holding out for a hero, the wait is over. This parcel is sure to save the day the next time you need a gift for the marvel lover in your life 🤛 🦸‍♂️',
        price: '$65.00',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        productName: 'Appetizer Box',
        productDescription: 'This box gives you just a TASTE of the magical kitchenware Disney has to offer. Hungry for more? Check out our Entree Box!',
        price: '$60.00',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        productName: 'Mugnificent Box',
        productDescription: 'It doesn’t matter if the cup is half empty or half full as long as it’s a Disney mug. This box comes with 3 mugs included in this picture! ✨☕️',
        price: '$60.00',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        productName: 'Stocking Stuffer Box',
        productDescription: 'Want To treat that special someone to a specially curated stocking? Look no further with this fabulous festive fantasy.',
        price: '$80.00',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        productName: 'Story Teller Box',
        productDescription: 'This box is the perfect gift for anyone who likes putting pen to paper (and sipping some Disney tea while they’re at it). We love these VHS cassette journals, and right now you can get them themed after Toy Story, Lilo and Stich, or The Emperor’s New Groove! ✍️📝',
        price: '$60.00',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        productName: 'Pixar Perfect Box',
        productDescription: 'Pixar all day everyday PLEASE! Building a Pixar-lovers box is the perfect holiday gift for the Disney fan in your life! Make it one-of-a-kind by highlighting their favorite Pixar film, or add a little bit of everything!',
        price: '$70.00',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        productName: 'Ornimental Box',
        productDescription: "It is never too early to start decorating for christmas! Deck the halls with the most magical ornaments on Earth! From Star Wars and Avengers, to Frozen and Disney classics, our tree is ready for the holiday season! Customize your box with three beautiful decorations! 🎄🎅🏽",
        price: '$70.00',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        productName: 'The Princess Box',
        productDescription: 'Who needs a prince when you can have a personally curated princess parcel delivered to your castle 🏰 ✨',
        price: '$65.00',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    
    
    ], {});
    
  },

  down: async (queryInterface, Sequelize) => {
      return queryInterface.bulkDelete('Products', null, {});
  }
};
