# Coding Crash Coarse

## By the `S[ck]rip(t|t?c)ie`

---

# Goal of this talk

1. Introduce a programming language you can use to solve problems from the Crash
   & Compile
2. Explain basic syntax and data structures comonly found in programming
   languages 
3. Introduce tools to help you write code

---

# What we will cover

- Syntax
- Tooling (Text editor)

## What we won't cover

- Memory management
- Datastructures
- Performance optimizations and profiling
- Debugging

---

# Why Julia

Julia is a general purpose language focused on scientific domains

- Fully open source, mostly developed by a group from MIT
- Easy to setup on both Unix systems and Windows
- Convenient syntax for Math
- Fast!

---

# Setting up Julia on your system

- Download the julia binary at their [downloads page](https://julialang.org/downloads/)
- Check the [platform specific instructions](https://julialang.org/downloads/platform/)

## (Recommended) Tooling

Use **Juno** or **VScode** as your text editor

- **Juno**: install [juno](https://junolab.org/) to edit Julia files
- **VScode**: install the [julia
  extension](https://marketplace.visualstudio.com/items?itemName=julialang.language-julia)
  for vscode

---

# Run Julia code

Use either Julia's REPL (Read Eval Print Loop) or a Jupyter notebook

## Including files

```julia
include("filename.jl")
```

---

# Syntax

https://cheatsheets.quantecon.org/

---

# Arithmetic

---

# Math functions

---

# Control flow

---

# String manipulation

---

# Array manipulation

---

# Functions

---

# Random numbers

---

# File input and output

---

# (Advanced) Testing

---

# (Advanded) Packages

---

# Exercises

The best way to start learn programming is to start writing, or changing, code.

## Klaverjas

We will consider a couple of exercise related to the game of Klaverjas.
These exercises will be treated in the context of a Crash & Compile competition.

For now it is only importend to know how counting points works.

## Think before writing code!

Try to separate the problem into multiple smaller problems

---

# Example 1 

## Computing the points earned by a trick

Consider the trick (Dutch: "slag", also known as "Hitje") represented by,
```txt
AH 7H 10H 9H
```

The total points earned from winning this trick when playing SANS is `11 + 0 +
10 + 0 = 21`. 

## Exercise
Write a function that computes the points from any trick when playing SANS.

Goal: compute the total number of points of winning all tricks listed in [this
file](./sans_tricks.txt), where each line represents 1 trick. 

---

# Example 1
## Computing the points earned by a trick

Consider the trick (Dutch: "slag", also known as "Hitje") represented by,
```txt
AH 7H 10H 9H
```

The total points earned from winning this trick when playing SANS is `11 + 0 +
10 + 0 = 21`. 

## Step 1
Consider the example trick "AH 7H 10H 9H".

1. Split the trick into separate cards
2. Determine rank and suit of a card
3. Determine the points of a card
4. Sum points of each card

We will want to compute the points from this trick by determining the points of
each card separately.

```julia
julia> trick =  "AH 7H 10H 9H"
"AH 7H 10H 9H"

julia> cards = split(trick, " ")
4-element Array{SubString{String},1}:
 "AH"
 "7H"
 "10H"
 "9H"
 ```
 
 Next get the rank and suit of each card,
 ```julia
julia> card = "10H";

julia> rank = card[1:end-1]
"10"

julia> suit = card[end]
'H': ASCII/Unicode U+0048 (category Lu: Letter, uppercase)
 ```


---

# Learning resources

- https://julialang.org/learning/
- https://stanford.edu/class/ee103/
- https://julia.quantecon.org/
- https://cheatsheets.quantecon.org/


---

# Programming essentials

- Learn to use GIT
- Get familiar with a command line interface
- BABO (Blanks Around Binary Operators, `a+1` vs `a + 1`
