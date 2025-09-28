---
id: variables
title: C# Variables (Int, String)
sidebar_label: C# Variables (Int, String)
---

## C# Variables

Welcome to C Sharp for Kids! 🎮✨

In this tutorial, we'll learn about **variables** in C Sharp, which are the building blocks for storing information in your programs. We explore four main types of variables:
- **Integer (int)**: for whole numbers like 1, 5, 200, -20
- **String**: for text and sentences like "Hello", "Marko", "I am 26 Years Old"
- **Bool**: for true/false values liek true, false
- **Float**: for floating-point numbers like 3.1415, 2.87

#### What You Will Learn

- How to create and initialize variables
- How to update variable values with simple math
- How to manipulate text with String variables
- How to see your code in action in Unity

### Int Variables

Imagine you're playing a game and want to keep track of your score. You can create an `int` variable:

```csharp
int score = 36;
```

To increase the score by 10 you will add the code
```csharp
score = score + 10; // score is now 46
```
You can then display this score in the game using Unity's functions, converting the integer to a string with ToString():
```csharp
// Example: updating robot name with score
World.Robot.ChangeName(score.ToString());
```

so finally your whole code will look like this:
```csharp
int score = 36; // create new variable in the memory with initial value 36 as integer type
score = score + 10; // add 10 to current value of the score, so score is now 46

// Update robot name in the Unity Screen
World.Robot.ChangeName(score.ToString());
```


### String Variables

You can also create a string variable to store and change the robot's name:
```csharp
string name = "Robot Name";

// Adding more text to the name:
name = name + " Is Rookie!";

// And updating the robot's name in the game:
World.Robot.ChangeName(name);
```

## Practice time!

### Challenge #1
:::tip 🚀 Coding Practice
In C# **create variable called `playerName`** and **assign your name** to it. 
Then print it to over the Robot head `World.Robot.ChangeName` function.

**Changes the robot's name to your name** and see the results in Unity!
:::

<details>
<summary>💡 **Solution** (Click to expand)</summary>

Here's the complete solution for the exercise:

```csharp
// Step 1: Create a string variable with your name
string playerName = "Alice";

// Step 2: Change the robot's name to your player name
World.Robot.ChangeName(playerName);

// Optional: You can also combine it in one line
// World.Robot.ChangeName("Alice");

// For console output (if you want to see it in the console too):
Console.WriteLine("Player name is: " + playerName);
```

**What this code does:**
1. **Line 2:** Creates a string variable called `playerName` and stores your name in it
2. **Line 5:** Uses the Unity function to change the robot's name to whatever is stored in `playerName`
3. **Line 11:** Prints the player name to the console (optional)

**Try different variations:**
- Use different names
- Try combining first and last name: `string playerName = "Alice Johnson";`
- Add some fun text: `string playerName = "Super " + "Alice";`

</details>


## Need a Visual Walkthrough?

Watch the tutorial on YouTube:  

<iframe width="560" height="315" src="https://www.youtube.com/embed/mH5b4tjdgi0"
title="YouTube video player" frameborder="0" allowfullscreen>
</iframe>

---


**Happy Coding!**  
Feel free to reach out if you have any questions or need help getting started.
