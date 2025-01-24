``` mermaid
flowchart TD
    Start([Start Game]) --> Generate[Generate Random Number]
    Generate --> Guess[Ask user to guess a number]
    Guess --> Validate{Is input valid?}
    Validate -- No --> Invalid[Display error and ask again] --> Guess
    Validate -- Yes --> Compare{Is guess correct?}
    Compare -- Too Low --> Low[Display 'Too Low'] --> Guess
    Compare -- Too High --> High[Display 'Too High'] --> Guess
    Compare -- Correct --> EndGame[Congratulate user and end game]
## Guessing Game Flowchart
This flowchart describes the steps involved in the random guessing game where:
- The game starts by generating a random number.
- The user is asked to input their guess.
- The program checks whether the input is valid and provides feedback: too high, too low, or correct.
- If the guess is correct, the game ends with a congratulatory message.
- If not, the process repeats until the user guesses correctly.


