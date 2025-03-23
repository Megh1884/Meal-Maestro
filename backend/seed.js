const mongoose = require('mongoose');
const Recipe = require('./models/Recipe');
require('dotenv').config();

const sampleRecipes = [
  {
    title: 'Butter Chicken',
    description: 'A rich and creamy curry made with tender chicken pieces in a tomato-based sauce.',
    cuisine: 'Indian',
    region: 'North Indian',
    image: 'https://source.unsplash.com/random/400x300/?butter-chicken',
    ingredients: [
      '500g chicken, cut into pieces',
      '1 cup yogurt',
      '2 tbsp ginger-garlic paste',
      '1 tsp turmeric powder',
      '1 tsp red chili powder',
      '2 tbsp butter',
      '1 onion, finely chopped',
      '2 tomatoes, pureed',
      '1 cup cream',
      'Salt to taste',
      'Fresh coriander for garnish'
    ],
    instructions: [
      'Marinate chicken in yogurt, ginger-garlic paste, turmeric, and chili powder for 30 minutes.',
      'Heat butter in a pan and sauté onions until golden brown.',
      'Add tomato puree and cook until oil separates.',
      'Add marinated chicken and cook until done.',
      'Add cream and simmer for 5 minutes.',
      'Garnish with fresh coriander and serve hot.'
    ],
    prepTime: '30 minutes',
    cookTime: '40 minutes',
    servings: 4,
    difficulty: 'Medium'
  },
  {
    title: 'Sushi Roll',
    description: 'Fresh fish and rice wrapped in seaweed, a Japanese delicacy.',
    cuisine: 'World',
    region: 'Japanese',
    image: 'https://source.unsplash.com/random/400x300/?sushi',
    ingredients: [
      '2 cups sushi rice',
      '2 cups water',
      '2 tbsp rice vinegar',
      '1 tbsp sugar',
      '1 tsp salt',
      'Nori sheets',
      'Fresh fish (tuna, salmon)',
      'Cucumber, julienned',
      'Avocado, sliced',
      'Soy sauce for serving'
    ],
    instructions: [
      'Cook sushi rice with water until done.',
      'Mix rice vinegar, sugar, and salt, then fold into cooked rice.',
      'Place nori sheet on bamboo mat.',
      'Spread rice evenly on nori, leaving top edge bare.',
      'Place fish, cucumber, and avocado in center.',
      'Roll tightly using bamboo mat.',
      'Slice into pieces and serve with soy sauce.'
    ],
    prepTime: '45 minutes',
    cookTime: '20 minutes',
    servings: 4,
    difficulty: 'Hard'
  },
  {
    title: 'Dosa',
    description: 'A thin, crispy crepe made from fermented rice and lentil batter.',
    cuisine: 'Indian',
    region: 'South Indian',
    image: 'https://source.unsplash.com/random/400x300/?dosa',
    ingredients: [
      '2 cups rice',
      '1 cup urad dal',
      '1 tsp fenugreek seeds',
      'Salt to taste',
      'Oil for cooking',
      'Potato filling (optional)',
      'Onions, chopped',
      'Mustard seeds',
      'Curry leaves'
    ],
    instructions: [
      'Soak rice and urad dal separately for 6 hours.',
      'Grind to make a smooth batter.',
      'Ferment the batter overnight.',
      'Add salt and mix well.',
      'Heat a flat pan and spread batter in circular motion.',
      'Drizzle oil around edges.',
      'Cook until crispy and golden.'
    ],
    prepTime: '6 hours',
    cookTime: '20 minutes',
    servings: 4,
    difficulty: 'Medium'
  }
];

const seedDatabase = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost:27017/meal-maestro', {
      useNewUrlParser: true,
      useUnifiedTopology: true
    });

    // Clear existing data
    await Recipe.deleteMany({});

    // Insert sample recipes
    await Recipe.insertMany(sampleRecipes);

    console.log('Database seeded successfully');
    process.exit(0);
  } catch (error) {
    console.error('Error seeding database:', error);
    process.exit(1);
  }
};

seedDatabase(); 