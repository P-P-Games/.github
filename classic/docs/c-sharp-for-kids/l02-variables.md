---
id: variables
title: L02 - Variables (Int, String)
sidebar_label: L02 - Variables (Int, String)
---

# Welcome to the C# for Kids Learning Hub!

This website is your starting point for learning how to program in C# using Unity. Whether you're new to coding or want to build cool games and robots, you'll find everything here to get started.

---

---
id: csharp-for-kids
title: C Sharp for Kids - Variables Tutorial
sidebar_position: 1
---

# C Sharp for Kids - Variables Tutorial

Welcome to C Sharp for Kids! 🎮✨

In this tutorial, we'll learn about **variables** in C Sharp, which are the building blocks for storing information in your programs. We explore four main types of variables:
- **Integer (int)**: for whole numbers
- **String**: for text and sentences
- **Bool**: for true/false values
- **Float**: for floating-point numbers

## What You Will Learn

- How to create and initialize variables
- How to update variable values with simple math
- How to manipulate text with String variables
- How to see your code in action in Unity

## Example: Tracking Game Score

Imagine you're playing a game and want to keep track of your score. You can create an `int` variable:

```csharp
int score = 36;
```

## To increase the score by 10:
```csharp
score = score + 10; // score is now 46
```
You can then display this score in the game using Unity's functions, converting the integer to a string with ToString():
```csharp
// Example: updating robot name with score
World.Robot.ChangeName(score.ToString());
```

## Example: Changing the Robot's Name

You can also create a string variable to store and change the robot's name:
```csharp
string name = "Robot Name";
```
## Adding more text to the name:
```csharp
name = name + " Is Rookie!";
```
And updating the robot's name in the game:
```csharp
World.Robot.ChangeName(name);
```

## Try It Yourself!

Now, challenge yourself to create a program that changes the robot's name to your name and see the results in Unity!


## Need a Visual Walkthrough?

Watch the tutorial on YouTube:  

<iframe width="560" height="315" src="https://www.youtube.com/embed/mH5b4tjdgi0"
title="YouTube video player" frameborder="0" allowfullscreen>
</iframe>

---


**Happy Coding!**  
Feel free to reach out if you have any questions or need help getting started.
