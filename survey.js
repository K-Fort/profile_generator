const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question("What is your name? Nicknames are also acceptable! ", (answer1) => {
  console.log(`Thank you for your valuable feedback: ${answer1}`);

  rl.question("What's an activity you like doing? ", (answer2) => {
    console.log(`Wow! ${answer2} is quite the thrill!`);

    rl.question("What do you listen to while doing that? ", (answer3) => {
      console.log(`I can see why ${answer3} would pair well with it!`);

      rl.question("If you had to choose one thing to take on a remote island, what would it be? ", (answer4) => {
        console.log(`I don't think you'd even notice where you are with ${answer4} to accompany you!`);

        rl.question("What is your favorite animal? ", (answer5) => {
          console.log(`${answer5} is an all-time favorite among animal connoisseurs!`);
          
          rl.close();
        });
      });
    });
  });
});




/* Instead of asking the user about what they think of Node.js, we can ask them  the following questions, in order:

What's your name? Nicknames are also acceptable :)
What's an activity you like doing?
What do you listen to while doing that?
Which meal is your favourite (eg: dinner, brunch, etc.)
What's your favourite thing to eat for that meal?
Which sport is your absolute favourite?
What is your superpower? In a few words, tell us what you are amazing at!
That said, feel free to change the narrative if you have better, more interesting questions to ask them.

Once all questions are answered, our survey app should output a fully formed paragraph for their online profile, similar to the one shown previously. It should then exit. The user would have to rerun the app to go through the process of generating another profile.  */