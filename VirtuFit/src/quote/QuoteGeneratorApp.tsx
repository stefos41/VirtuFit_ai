"use client";

import React, { useState, useEffect } from "react";

const quotes = [
  {
    quote:
      "The greatest glory in living lies not in never falling, but in rising every time we fall.",
    author: "Nelson Mandela",
  },
  {
    quote:
      "The way to get started is to quit talking and begin doing.",
    author: "Walt Disney",
  },
  {
    quote:
      "Your time is limited, so don't waste it living someone else's life. Don't be trapped by dogma – which is living with the results of other people's thinking.",
    author: "Steve Jobs",
  },
  {
    quote:
      "If life were predictable it would cease to be life, and be without flavor.",
    author: "Eleanor Roosevelt",
  },
  {
    quote:
      "If you look at what you have in life, you'll always have more. If you look at what you don't have in life, you'll never have enough.",
    author: "Oprah Winfrey",
  },
  {
    quote:
      "If you set your goals ridiculously high and it's a failure, you will fail above everyone else's success.",
    author: "James Cameron",
  },
  {
    quote:
      "Life is what happens when you're busy making other plans.",
    author: "John Lennon",
  },
  {
    quote:
      "The only impossible journey is the one you never begin.",
    author: "Tony Robbins",
  },
  {
    quote: "You miss 100% of the shots you don't take.",
    author: "Wayne Gretzky",
  },
  {
    quote:
      "The most difficult thing is the decision to act, the rest is merely tenacity.",
    author: "Amelia Earhart",
  },
  {
    quote:
      "Strive not to be a success, but rather to be of value.",
    author: "Albert Einstein",
  },
  {
    quote:
      "The future belongs to those who believe in the beauty of their dreams.",
    author: "Eleanor Roosevelt",
  },
  {
    quote:
      "It is during our darkest moments that we must focus to see the light.",
    author: "Aristotle",
  },
  {
    quote:
      "Do not go where the path may lead, go instead where there is no path and leave a trail.",
    author: "Ralph Waldo Emerson",
  },
  {
    quote: "The purpose of our lives is to be happy.",
    author: "Dalai Lama",
  },
  {
    quote: "Get busy living or get busy dying.",
    author: "Stephen King",
  },
  {
    quote:
      "Many of life's failures are people who did not realize how close they were to success when they gave up.",
    author: "Thomas A. Edison",
  },
  {
    quote:
      "If you want to live a happy life, tie it to a goal, not to people or things.",
    author: "Albert Einstein",
  },
  {
    quote:
      "Never let the fear of striking out keep you from playing the game.",
    author: "Babe Ruth",
  },
  {
    quote:
      "Money and success don’t change people; they merely amplify what is already there.",
    author: "Will Smith",
  },
  {
    quote:
      "Not how long, but how well you have lived is the main thing.",
    author: "Seneca",
  },
  {
    quote: "The unexamined life is not worth living.",
    author: "Socrates",
  },
  {
    quote: "Turn your wounds into wisdom.",
    author: "Oprah Winfrey",
  },
  {
    quote:
      "The whole secret of a successful life is to find out what is one’s destiny to do, and then do it.",
    author: "Henry Ford",
  },
  {
    quote:
      "In order to write about life first you must live it.",
    author: "Ernest Hemingway",
  },
  {
    quote:
      "The big lesson in life, baby, is never be scared of anyone or anything.",
    author: "Frank Sinatra",
  },
  {
    quote:
      "Life is not a problem to be solved, but a reality to be experienced.",
    author: "Soren Kierkegaard",
  },
  {
    quote:
      "The way I see it, if you want the rainbow, you gotta put up with the rain.",
    author: "Dolly Parton",
  },
  {
    quote:
      "Everything negative – pressure, challenges – is all an opportunity for me to rise.",
    author: "Kobe Bryant",
  },
  {
    quote:
      "You never really learn much from hearing yourself speak.",
    author: "George Clooney",
  },
  {
    quote:
      "Life imposes things on you that you can’t control, but you still have the choice of how you’re going to live through this.",
    author: "Celine Dion",
  },
  {
    quote:
      "Life is never easy. There is work to be done and obligations to be met – obligations to truth, to justice, and to liberty.",
    author: "John F. Kennedy",
  },
  {
    quote:
      "Life is like riding a bicycle. To keep your balance, you must keep moving.",
    author: "Albert Einstein",
  },
  {
    quote:
      "Life is really simple, but we insist on making it complicated.",
    author: "Confucius",
  },
  {
    quote:
      "My mama always said, life is like a box of chocolates. You never know what you're gonna get.",
    author: "Forrest Gump",
  },
  {
    quote:
      "Watch your thoughts; they become words. Watch your words; they become actions. Watch your actions; they become habits. Watch your habits; they become character. Watch your character; it becomes your destiny.",
    author: "Lao-Tzu",
  },
  {
    quote:
      "When we strive to become better than we are, everything around us becomes better too.",
    author: "Paulo Coelho",
  },
  {
    quote:
      "The only thing necessary for the triumph of evil is for good men to do nothing.",
    author: "Edmund Burke",
  },
  {
    quote:
      "I have not failed. I've just found 10,000 ways that won't work.",
    author: "Thomas A. Edison",
  },
  {
    quote:
      "It is not the strongest of the species that survive, nor the most intelligent, but the one most responsive to change.",
    author: "Charles Darwin",
  },
  {
    quote:
      "The best way to predict the future is to create it.",
    author: "Peter Drucker",
  },
  {
    quote: "Believe you can and you're halfway there.",
    author: "Theodore Roosevelt",
  },
  {
    quote:
      "A person who never made a mistake never tried anything new.",
    author: "Albert Einstein",
  },
  {
    quote: "I would rather die of passion than of boredom.",
    author: "Vincent van Gogh",
  },
  {
    quote:
      "It does not matter how slowly you go as long as you do not stop.",
    author: "Confucius",
  },
  {
    quote:
      "The mind is everything. What you think you become.",
    author: "Buddha",
  },
  {
    quote:
      "To be yourself in a world that is constantly trying to make you something else is the greatest accomplishment.",
    author: "Ralph Waldo Emerson",
  },
  {
    quote:
      "Success is not final, failure is not fatal: it is the courage to continue that counts.",
    author: "Winston S. Churchill",
  },
  {
    quote:
      "Hardships often prepare ordinary people for an extraordinary destiny.",
    author: "C.S. Lewis",
  },
  {
    quote:
      "The only way to do great work is to love what you do.",
    author: "Steve Jobs",
  },
  {
    quote:
      "I can't change the direction of the wind, but I can adjust my sails to always reach my destination.",
    author: "Jimmy Dean",
  },
  {
    quote:
      "Nothing is impossible, the word itself says 'I'm possible'!",
    author: "Audrey Hepburn",
  },
  {
    quote:
      "The question isn't who is going to let me; it's who is going to stop me.",
    author: "Ayn Rand",
  },
  {
    quote: "If you're going through hell, keep going.",
    author: "Winston S. Churchill",
  },
  {
    quote:
      "We must be willing to let go of the life we planned so as to have the life that is waiting for us.",
    author: "Joseph Campbell",
  },
  {
    quote: "The best revenge is massive success.",
    author: "Frank Sinatra",
  },
  {
    quote:
      "What lies behind us and what lies before us are tiny matters compared to what lies within us.",
    author: "Ralph Waldo Emerson",
  },
  {
    quote:
      "The journey of a thousand miles begins with a single step.",
    author: "Lao Tzu",
  },
  {
    quote: "That which does not kill us makes us stronger.",
    author: "Friedrich Nietzsche",
  },
  {
    quote: "Eighty percent of success is showing up.",
    author: "Woody Allen",
  },
  {
    quote:
      "Go confidently in the direction of your dreams. Live the life you have imagined.",
    author: "Henry David Thoreau",
  },
  {
    quote:
      "You must be the change you wish to see in the world.",
    author: "Mahatma Gandhi",
  },
  {
    quote:
      "What's money? A man is a success if he gets up in the morning and goes to bed at night and in between does what he wants to do.",
    author: "Bob Dylan",
  },
  {
    quote:
      "I have learned over the years that when one's mind is made up, this diminishes fear.",
    author: "Rosa Parks",
  },
  {
    quote: "If you want to be happy, be.",
    author: "Leo Tolstoy",
  },
  {
    quote:
      "When you reach the end of your rope, tie a knot in it and hang on.",
    author: "Franklin D. Roosevelt",
  },
  {
    quote: "Whoever is happy will make others happy too.",
    author: "Anne Frank",
  },
  {
    quote:
      "Do not pray for an easy life, pray for the strength to endure a difficult one.",
    author: "Bruce Lee",
  },
];

/**
 * A component that displays a random motivational quote and its author.
 * It includes a button to generate a new quote.
 */
const getQuoteOfTheDay = (allQuotes) => {
  // Get the number of days since the Unix epoch (January 1, 1970)
  const daysSinceEpoch = Math.floor(Date.now() / 86400000); // 86,400,000 ms in a day

  // Use the day number to deterministically select an index.
  // The modulo operator (%) ensures the index wraps around and stays within the array bounds.
  const index = daysSinceEpoch % allQuotes.length;

  return allQuotes[index];
};

/**
 * A component that displays a motivational Quote of the Day.
 */
function QuoteOfTheDay() {
  const [dailyQuote, setDailyQuote] = useState({
    quote: "",
    author: "",
  });

  // Set the quote when the component first mounts.
  useEffect(() => {
    setDailyQuote(getQuoteOfTheDay(quotes));
  }, []); // Empty dependency array ensures this runs only once.

  return (
    <div className="bg-white/10 backdrop-blur-lg rounded-xl shadow-lg border border-white/20 p-6 md:p-8 max-w-2xl mx-auto">
      <div className="flex flex-col h-full text-center">
        {/* Labeled Box Title */}
        <h2 className="text-sm font-semibold uppercase text-white/70 tracking-wider mb-4">
          Quote of the Day
        </h2>

        {/* Quote content area */}
        <div className="flex-grow">
          {dailyQuote.quote && (
            <blockquote className="space-y-4">
              <p className="text-2xl md:text-3xl font-serif italic text-white leading-relaxed">
                &quot;{dailyQuote.quote}&quot;
              </p>
              <cite className="block text-right text-base font-sans not-italic text-white/80">
                — {dailyQuote.author}
              </cite>
            </blockquote>
          )}
        </div>
      </div>
    </div>
  );
}
export default QuoteOfTheDay;
