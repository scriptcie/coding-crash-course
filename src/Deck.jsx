import React from 'react';
import { Deck, Heading, Text, Markdown, Slide } from 'spectacle';
import Code from './Code';
import Template from './Template';
import raw from 'raw.macro';
import DemoSlides from './Slides/DemoSlides';
import Bingo from './Bingo';
const markdownSlides = raw('./Slides/slides.md');
const juliaSlides = raw('./Slides/Julia/intro.md');

const ratio = 1.1;
const theme = {
  space: ['0.5rem', '1rem', '4rem 2rem'],
  fontSizes: {
    h1: '4rem',
    h2: '3rem',
    h3: '2rem',
    text: '1.5rem',
    monospace: '1.0rem',
  },
  size: {
    width: 1366 * ratio,
    height: 768 * ratio,
    maxCodePaneHeight: 500,
  },
};

const AppDeck = () => {
  return (
    <Deck theme={theme} template={Template} transitionEffect="none" padding="3">
      <Slide>
        <Bingo />
      </Slide>
      <Markdown containsSlides>
        {`
# Coding Crash Coarse

### An intro to Python and coding exercises

## By the \`S[ck]rip(t|t?c)ie\`

---

# Goal of this talk

1. Introduce a programming language you can use to solve problems from the Crash
   & Compile
2. Explain basic syntax and variables and data types comonly found in
   programming languages
3. Introduce tools to help you write code

---

## Topics of Crash & Compile problems

- Mathematics of drinking games (Mexen, juffen etc.)
- Number theory
- Combinatorics
- Integration
- Probability theory
- Logic
- Encryption & Data integrity
- Decoding images
- Regular expressions
- Dynamic programming

---

## Solving Crash & Compile problems

- String manipulation
- Array / List manipulation
- Control flow
- Math functions
- Random numbers
- Recursion
- Reading file
- Using packages / libraries

### Common pitfalls

- Integer overflow
- Machine Precision
- Some problems may be solvable by hand!

---

# Why Python

- Open source
- Simple syntax
- Dynamic language, no need for a compiler
- Good open source alternative to Matlab
- Active development of data science tools

---

## Variables and data types in Python

In the following slides we will introduce the basic concepts of Python.

You can play with these examples yourself by going to the jupyter notebook found here,

- [Reference code](https://hub.gke.mybinder.org/user/scriptcie-coding-crash-course-lp5xo3rb/notebooks/notebooks/Refrences.ipynb)
- [Exercises](https://mybinder.org/v2/gh/scriptcie/coding-crash-course/master?filepath=notebooks%2FExercises.ipynb)


Or if that doesn't work download the notebooks and run them locally

- [Reference code](https://github.com/scriptcie/coding-crash-course/blob/master/notebooks/Refrences.ipynb)
- [Exercises](https://github.com/scriptcie/coding-crash-course/blob/master/notebooks/Exercises.ipynb)

---

## Variables and data types in Python

### Integers

\`\`\`python
negative_integer = -3
a_nice_positive_integer = 33

x = a_nice_positive_integer - negative_integer # => 36

# Taking powers can be done with **
six = x**0.5 # => 6

from math import sqrt
six = sqrt(x) # => 6

# Modulo arithmetic
four = 16 % 12 # => 4

# Integer division using //
x = 5 // 3 # => 1
\`\`\`

---

## Variables and data types in Python

### Floats (representation of real numbers)

\`\`\`python
x = -2.0
golden_ratio = 1.6180

from math import pi

# Division
y = golden_ratio / pi
\`\`\`

---

## Variables and data types in Python

### Booleans

\`\`\`python
sjaars_is_reel = False
julia_is_better_than_python = True
python_is_better_than_julia = not True

sjaars_is_reel and julia_is_better_than_python # => False
sjaars_is_reel or julia_is_better_than_python # => True

28 < 33 # True

# Comparing two numbers using ==
33 == 28 # False

# Asigning a number to another number gives an error
33 = 28 # => SyntaxError: cannot assign to literal

# Variables can be assigned, so be careful when comparing two values
a = 33
b = 28
a = b
a == b # => True
\`\`\`

---

## Variables and data types in Python

### Strings

\`\`\`python
jack_of_hearts = "JH"
nine_of_hearts = "9H"
ten_of_hearts = "9H"
ten_of_spades = "10S"

# Getting a character from a string (counting starts from 0)
jack = jack_of_hearts[0] #=> "J"
hearts = jack_of_hearts[1] # => "H"

# Check if two "cards" are of the same suit
same_suit = jack_of_hearts[1] == ten_of_hearts[1] # => True

# Get the length of a string
len(jack_of_hearts) # => 2

# Concatenate two strings
hand = jack_of_hearts + " " + nine_of_hearts + " " + ten_of_hearts + " " + ten_of_spades

# Or use string interpolation
hand2 = f"{jack_of_hearts} {nine_of_hearts} {ten_of_hearts} {ten_of_spades}"
\`\`\`

---

### Lists

\`\`\`python
cards = ["JH", "9H", "8H", "7H"]
cards[0] # => "JH"
cards[1] # => "9H"
cards[2] # => "8H"
cards[3] # => "7H"
cards[-1] # => "7H"
cards[-2] # => "8H"

# Get a list from a list
cards[0:2] # => ["JH", "9H"]
cards[:2] # => ["JH", "9H"]
cards[2:] # => ["8H", "7H"]
cards[::-1] # => ["7H", "8H", "9H", "JH"]

cards.index("8H") # => 2
"JH" in cards # => True
"JS" in cards # => False
\`\`\`

---

### Mutating lists

\`\`\`python
# Adding and removing items from a list
cards.append("AH")
cards # => ["JH", "9H", "8H", "7H", "AH"]
last_card_added = cards.pop() # => "AH"
cards # => ["JH", "9H", "8H", "7H"]
cards.remove("8H")
cards # => ["JH", "9H", "7H"]
cards.insert(2, "8H")
cards # => ["JH", "9H", "8H", "7H"]
cards[3] = "10H"
cards # => ["JH", "9H", "8H", "10H"]
\`\`\`

---

### Strings look like lists

\`\`\`python
cards = "JH 9H 8H 7H"
cards[0:2] # => "JH"

cards.split(" ") # => ["JH", "9H", "8H", "7H"]
" ".join(["JH", "9H", "8H", "7H"]) # => "JH 9H 8H 7H"
cards.replace("H", "S") # => "JS 9S 8S 7S"
\`\`\`

---

### Sets

Sets are like lists, but without duplicates and order,

\`\`\`python
# x is a list
x = [0, 1, 2, 0, 0, 1, 2, 2]

# y is a set
y = {0, 1, 2, 0, 0, 1, 2, 2} # => {0, 1, 2}
\`\`\`

---

### Dictionaries

\`\`\`python
player_hands = {
    "player_1": ["9H"],
    "player_2": ["JH"],
    "player_3": ["KH"],
    "player_4": ["7H"],
}

player_hands["player_1"] # => ["9H]

# Assign a value to a key from the dictionary
player_hands["player_1"] = ["9H", "8H"]
\`\`\`

---

### Importing libraries

\`\`\`python
from math import pi

# Now pi is accessible
x = pi**2

# Import a library
import math

r = 1.0
theta = 33.0
x = math.cos(theta) * r
y = math.sin(theta) * r

# Or import all
from math import *
x2 = cos(theta) * r
y2 = sin(theta) * r
\`\`\`

---

# Example (for loops and functions)

Compute the sum given by $\sum_{i = 0}^n i$.

### Using for loops

\`\`\`python
def sum_0_to_n(n):
    result = 0
    for i in range(0, n + 1):
        result += i

    return result
\`\`\`

---

# Example (using the sum function)

Compute the sum given by $\sum_{i = 0}^n i$.

\`\`\`python
def sum_0_to_n(n):
    sum(range(0, n + 1))
\`\`\`

---

# Example (using math)

Compute the sum given by $\sum_{i = 0}^n i$.

\`\`\`python
def sum_0_to_n(n):
    return (n * (n + 1)) / 2
\`\`\`

---

# Learning resources

- Hackerrank
- Exercism
- Codeacademy
- Pluralsight

---

# Programming essentials

- Get familiar with using a text editor
- Learn to use GIT
- Get familiar with a command line interface
- Consider switching to Linux

---

# Seting up Python

- Install a text editor
  - VSCode
  - Sublime Text
  - Emacs
  - VIM
- Install python
- Install jupyter notebooks

Replace python with Julia

---

## Exercises

The best way to start learn programming is to start writing, or changing, code.

### Klaverjas

We will consider a couple of exercise related to the game of Klaverjas.
These exercises will be treated in the context of a Crash & Compile competition.

For now it is only imporant to know how counting points works.

---

## Exercises

The best way to start learn programming is to start writing, or changing, code.

### Klaverjas

We will consider a couple of exercise related to the game of Klaverjas.
These exercises will be treated in the context of a Crash & Compile competition.

For now it is only imporant to know how counting points works.

### Points of a card

- **Non trump**:

  A: 11 , 10: 10 , K: 4 , Q: 3 , J: 2 , 9: 0 , 8: 0 , 7: 0

- **Trump**:

  J: 20, 9: 14, A: 11 , 10: 10 , K: 4 , Q: 3 , 8: 0 , 7: 0

---

## Exercise 1

### Counting the points earned by a trick

Consider the trick (Dutch: "slag") represented by,
\`\`\`txt
AH 7H 10H 9H
\`\`\`

The total points earned from winning this trick when playing SANS (meaning there are no trump cards) is \`11 + 0 + 10 + 0 = 21\`.

---

## Exercise 1

### Counting the points earned by a trick

Consider the trick (Dutch: "slag") represented by,
\`\`\`txt
AH 7H 10H 9H
\`\`\`

The total points earned from winning this trick when playing SANS (meaning there are no trump cards) is \`11 + 0 + 10 + 0 = 21\`.

### Exercise

Write a function that computes the points from any trick when playing SANS.

---

## Exercise 1

### Counting the points earned by a trick

Consider the trick (Dutch: "slag", also known as "Hitje") represented by,
\`\`\`txt
AH 7H 10H 9H
\`\`\`

The total points earned from winning this trick when playing SANS is \`11 + 0 +
10 + 0 = 21\`.

### Points of a trick
Consider the example trick "AH 7H 10H 9H".

1. Split the trick into separate cards
2. Determine rank and suit of a card
3. Determine the points of a card
4. Sum points of each card

---

### Points of a trick
Consider the example trick "AH 7H 10H 9H".

1. Split the trick into separate cards
2. Determine rank and suit of a card
3. Determine the points of a card
4. Sum points of each card

We will want to compute the points from this trick by determining the points of
each card separately.

\`\`\`python
trick =  "AH 7H 10H 9H"
cards = trick.split(" ") # => ["AH", "7H", "10H", "9H"]
\`\`\`

---

### Points of a trick
Consider the example trick "AH 7H 10H 9H".

1. Split the trick into separate cards
2. Determine rank and suit of a card
3. Determine the points of a card
4. Sum points of each card

We will want to compute the points from this trick by determining the points of
each card separately.

\`\`\`python
trick =  "AH 7H 10H 9H"
cards = trick.split(" ") # => ["AH", "7H", "10H", "9H"]
\`\`\`

Next get the rank and suit of each card,
 \`\`\`python
card = "10H";
rank = card[0:-1] # => "10"
suit = card[-1] # => "H"
\`\`\`

---

### Points of a trick
Consider the example trick "AH 7H 10H 9H".

1. Split the trick into separate cards
2. Determine rank and suit of a card
3. Determine the points of a card
4. Sum points of each card

We will want to compute the points from this trick by determining the points of
each card separately.

\`\`\`python
trick =  "AH 7H 10H 9H"
cards = trick.split(" ") # => ["AH", "7H", "10H", "9H"]
\`\`\`

Next get the rank and suit of each card,
 \`\`\`python
card = "10H";
rank = card[0:-1] # => "10"
suit = card[-1]
\`\`\`

Use a dictionairy to get the poitns
 \`\`\`python
rankToPoints = {"A": 11, "10": 10, "K": 4, "Q": 3, "J": 2, "9": 0, "8": 0, "7": 0}
points = rankToPoints[rank]
\`\`\`

---

### Points of a trick

\`\`\`python
trick =  "AH 7H 10H 9H"
cards = trick.split(" ") # => ["AH", "7H", "10H", "9H"]
\`\`\`

Next get the rank and suit of each card,
 \`\`\`python
card = "10H";
rank = card[0:-1] # => "10"
suit = card[-1]
\`\`\`

Use a dictionairy to get the poitns
 \`\`\`python
rankToPoints = {"A": 11, "10": 10, "K": 4, "Q": 3, "J": 2, "9": 0, "8": 0, "7": 0}
points = rankToPoints[rank]
\`\`\`

---

### Points of a trick

\`\`\`python
trick =  "AH 7H 10H 9H"
cards = trick.split(" ") # => ["AH", "7H", "10H", "9H"]
\`\`\`

Next get the rank and suit of each card,
 \`\`\`python
card = "10H";
rank = card[0:-1] # => "10"
suit = card[-1]
\`\`\`

Use a dictionairy to get the poitns
 \`\`\`python
rankToPoints = {"A": 11, "10": 10, "K": 4, "Q": 3, "J": 2, "9": 0, "8": 0, "7": 0}
points = rankToPoints[rank]
\`\`\`

#### Define a function

\`\`\`python
def pointsOfCard(card, isTrump = False):
    rank = card[0:-1] # => "10"
    suit = card[-1]
    rankToPoints = {"A": 11, "10": 10, "K": 4, "Q": 3, "J": 2, "9": 0, "8": 0, "7": 0}
    points = rankToPoints[rank]
    return points
\`\`\`

---

### Points of a trick

\`\`\`python
def pointsOfCard(card, isTrump = False):
    rank = card[0:-1] # => "10"
    suit = card[-1]
    rankToPoints = {"A": 11, "10": 10, "K": 4, "Q": 3, "J": 2, "9": 0, "8": 0, "7": 0}
    points = rankToPoints[rank]
    return points

trick =  "AH 7H 10H 9H" # => "AH 7H 10H 9H"
cards = trick.split(" ") # => ["AH", "7H", "10H", "9H"]

total = 0
for card in cards
    total += pointsOfCard(card)
\`\`\`

---

### Points of a trick (define \`pointsOfTrick\` function)

\`\`\`python
def pointsOfCard(card, isTrump = False):
    rank = card[0:-1]
    suit = card[-1]
    rankToPoints = {"A": 11, "10": 10, "K": 4, "Q": 3, "J": 2, "9": 0, "8": 0, "7": 0}
    points = rankToPoints[rank]
    return points

def pointsOfTrick(trick, trump = None):
    cards = trick.split(" ")
    total = 0
    for card in cards:
        total += pointsOfCard(card)
    return total

trick =  "AH 7H 10H 9H" # => "AH 7H 10H 9H"
pointsOfTrick(trick) # => 21
\`\`\`

---

### Points of a trick (using list comprehensions)

\`\`\`python
def pointsOfCard(card, isTrump = False):
    rank = card[0:-1]
    suit = card[-1]
    rankToPoints = {"A": 11, "10": 10, "K": 4, "Q": 3, "J": 2, "9": 0, "8": 0, "7": 0}
    points = rankToPoints[rank]
    return points

def pointsOfTrick(trick, trump = None):
    cards = trick.split(" ")
    return sum([pointsOfCard(card) for card in cards])

trick =  "AH 7H 10H 9H" # => "AH 7H 10H 9H"
pointsOfTrick(trick) # => 21
\`\`\`

---

## Exercise 2

### Counting points earned by a trick with trump

Repeat the previous example but include trump.

### Points of a card

A card is trump when its suit is the same as trump (either Hearts ("H"), Spades ("S"), Clubs ("C"), Dimaonds ("D"))

- **Non trump**:

  A: 11 , 10: 10 , K: 4 , Q: 3 , J: 2 , 9: 0 , 8: 0 , 7: 0

- **Trump**:

  J: 20, 9: 14, A: 11 , 10: 10 , K: 4 , Q: 3 , 8: 0 , 7: 0


---

### Counting points earned by a trick with trump

- **Non trump**:

  A: 11 , 10: 10 , K: 4 , Q: 3 , J: 2 , 9: 0 , 8: 0 , 7: 0

- **Trump**:

  J: 20, 9: 14, A: 11 , 10: 10 , K: 4 , Q: 3 , 8: 0 , 7: 0

\`\`\`python
def pointsOfCard(card, isTrump = False):
    rank = card[0:-1]
    suit = card[-1]
    rankToPoints = {"A": 11, "10": 10, "K": 4, "Q": 3, "J": 2, "9": 0, "8": 0, "7": 0}
    points = rankToPoints[rank]
    return points

def pointsOfTrick(trick, trump = None):
    cards = trick.split(" ")
    return sum([pointsOfCard(card) for card in cards])

trick =  "AH 7H 10H 9H" # => "AH 7H 10H 9H"
trump = "H"
pointsOfTrick(trick) # => 35
\`\`\`

---

## Exercise 3

### Counting points earned by a trick with honor

Extend the previous example, but now include the option to earn honor.

- **Three in a row**: 20 points
- **Four in a row**: 50 points
- **Four of the same face**: 100 points
- **Stuk** (trick contains the King and Queen of trump): 20 points

\`\`\`python
trick =  "AH KH QH JH"
trump = "H"
pointsOfTrick(trick) # => 11 + 4 + 3 + 20 + 70
\`\`\`

---

## Exercise 4

### Determine the winner of a trick

Write a function that determines the winner of a trick.
As an example take \`["7H", "10H", "9C", "JC"]\` with Clubs ("C") being trump.

Your function should return 3 (the index of "JC")


### Tip:

Write a function to determine the winning card, then use \`trick.index(card)\` to get the winner.

---

## Exercise 5

### Determine the points earned by a team

Given the following hand played by Pieter and versus Mees and Joris:
\`\`\`txt
132H
AC 7C 8C QC
KH 7H JH AH
10H QH 9H 9D
7D 8H AD JD
AS QS 7S 10S
10C KC 9S JC
9C JS 8D QD
8S KS KD 10D
\`\`\`

where each row represents a trick, the card on each row was played by Pieter, Mees, Jelle and Joris respectively , compute the points earned by Pieter and Jelle.

Did Pieter and Jelle go wet?

Reuse the functions you wrote in the previous exercises!

---

## Exercise 6

Determine the odds of receiving a sorted hand when a pack of klaverjas cards has been dealt.

---

## Exercise 7

When playing SANS, determine the odds that someone will "verzaak" when playing random cards

---

## Exercise 8

Determine if a player has "Verzaakt"
`}
      </Markdown>
    </Deck>
  );
};

export default AppDeck;
