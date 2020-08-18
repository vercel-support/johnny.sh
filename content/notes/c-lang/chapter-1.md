# Chapter 1

> A Tutorial Introduction

## Super Basics

This chapter is a basic introduction to types, while loops, statements, comments, arithmetic, etc.

And types!

| type     | Description              |
| -------- | ------------------------ |
| `char`   | Character, a single byte |
| `int`   | Character, a single byte |
| `short`  | short integer            |
| `long`   | long integer             |
| `double` | long integer             |

There are a lot more types than this in the C language, but these are the basics.

Regarding `long` vs. `int` -- `long` integers are at least 32 bits. Although on some machines, `int` and `long` are the same size, on others an `int` is 16 bits, with a maximum value of 32767, and it would take relatively little input to overflow an int counter.

## `printf`

The C language's `console.log`. The difference from `console.log` is that `printf` is type-aware, we need to let it know the type of the things we want to print. For instance, `%d` specifies an integer argument, so the statement:

```C
  printf("%d\t%d\n", fahr, celsius);
```
causes the values of the two integers fahr and celsius to be printed, with a tab (\t) between them.

| type | Description                                                          |
| ---- | -------------------------------------------------------------------- |
| %d   | print as decimal integer                                             |
| %6d  | print as decimal integer, at least 6 characters wide                 |
| %f   | print as floating point                                              |
| %6f  | print as floating point, at least 6 characters wide                  |
| %.2f | print as floating point, 2 characters after decimal point            |
| %6.2 | f print as floating point, at least 6 wide and 2 after decimal point |

## Symbolic Constants

The C language has a feature I liked from Ruby -- constants! We do this in JavaScriptLand artificially all the time, but it's a real feature of OG languages.

A `#define` line defines a symbolic name or symbolic constant to be a particular string of characters:

```C
  #define name replacement list
```

Symbolic constants are symbolic constants, not variables -- so, they do not appear in/need variable declarations. They are written in ALL_CAPS like we do in JavaScriptLand, so that we can easily identify them as symbolic constants.

Also, you don't need a semicolon at the end of a `#define` line.


## Character Input and Output

Unix Philosophy is very into text streams. It's like, super important to them. Seeing as, the model of text input/output supported by the C standard library is very simple.

A text stream, as defined by the authors, is a sequence of characters divided into lines. Each line consists of zero or more characters followed by a newline character (\n). It is the responsibility of the library to make each input or output stream confirm this model; the C programmer using the library need not worry about how lines are represented outside the program.

Of the functions provided by the standard lib for reading + writing text streams, `getchar` and `putchar` are the simplest.

That is, after:
```C
  c = getchar();
```
the variable c contains the next character of input. When we're talking about "input", usually we mean from a file or from a keyboard input.

On the contrary, the function `putchar` prints a character each time it is called:

```
  putchar(c);
```
prints the contents of the integer variable c as a character, usually on the screen. Calls to `putchar` and `printf` may be interleaved; the output will appear in the order in which the calls are made.

`EOF` is a special✨ statement for end of file.


## Arrays

The way they introduce arrays in the book is quite interesting -- they introduce it in the context of strings being represented as arrays of integers.

In other words, `char`s are just small integers, so char variables and constants are identical to `int`s in arithmetic expressions. 

The most common type of array in C is the array of characters. 

## Functions

The book introduces functions as: `a convenient way to encapsulate some computation, which can then be used without worrying about its implementation. `

Well put.

Here's an example of one:

```C
#include <stdio.h>

/* power: raise base to n-th power; n >= 0 */ 
int power(int base, int n) {
  int i, p;
  p = 1;
  for (i = 1; i <= n; ++i)
    p = p * base; 
  return p;
}

/* run/test the power func */

main() {
  int i;
  for (i = 0; i < 10; ++i)
    printf("%d %d %d\n", i, power(2,i), power(-3,i));
  return 0; 
}

```

Oh yeah, btw -- the `main` thing you see in every C file is a magical must-have function. The compiler knows to run that, you don't need to call it.


Also, worth noting: arguments are passed **by value** in c language, not by reference. Precisely because of this, if we want to mutate a value, we need to pass a pointer to the function.


Furthermore about functions: all of the rules/syntax regarding scope, external and internal variables, closures, etc. is the same as JavaScriptLand.

Lastly, here's a program, let's walk through it.

```C
#include <stdio.h>

// maximum input line size 
#define MAXLINE 1000 

// maximum length seen thus far
int max; 

/*  
  array of characters representing the current input line,
  defined as an array of length 1000, the MAXLINE length above
*/
char line[MAXLINE]; 

/* 
lastly, this variable will be used to stor the longest line we find in our string/file/text stream
*/
char longest[MAXLINE];

/* getline: specialized version */ 
int getline(void) {
  int c, i;
  extern char line[];
  for (i = 0; i < MAXLINE - 1 && (c=getchar)) != EOF && c != '\n'; ++i) {
      line[i] = c; if (c == '\n') {
      line[i] = c;
      ++i; }
      line[i] = '\0';
      return i; 
  }
}
/* copy: specialized version */ 
void copy(void) {
  int i;
  extern char line[], longest[];
  i = 0;
  while ((longest[i] = line[i]) != '\0') {
    ++i; 
    }
}

main() {
  int len;
  extern int max;
  extern char longest[];
  max = 0;
  while ((len = getline()) > 0) {
      if (len > max) { 
        max = len;
        copy();
      }
    }
   }

  if(max>0) {
    // there was a line
     printf("%s", longest);
  }
  return 0; 
}
```

This program prints the longest line in the text stream input it receives. Simple ok.

## Scope and External Variables

This works pretty much the same as javascript, except for external variables. External variables that will need to live on outside of their current scope need to be declared with `extern` keyword. We don't really need to do use this much, though. Generally, we place definitions of all external variables at the beginning of the source file, and then omit all extern declarations.

Also: usually instead of declaring a bunch of external variables, we instead collect them in a header file. That's what those c header files are for, the ones that use the `.h` extension, and then we import them using an `#include` statement. The functions of the standard library, for example, are declared in headers like `<stdio.h>`. 


Take note: the keywowrds "definition" and "declaration" are used  carefully when we refer to external variables in this section."Definition" refers to the place where the variable is created or assigned storage; "declaration" refers to places where the nature of the variable is stated but no storage is allocated.