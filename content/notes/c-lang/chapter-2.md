# Chapter 2

> Types, Operators and Expressions


## More about variables + constants

* Snake case is c style `okay_deal_with_it`
* Don't begin variable names with underscore - library routines often use such names. 
* We tend to use short names for local variables, especially loop indices, and longer names for external variables.


## Data Types and Sizes

Recall from chapter 1 that there are types `int`, `short`, and `long` for representing integers. There are really only a few rules stipulated about these types:
* `short` will always be 16 bits
* `long` will always be 32 bits
* `int` is either 16 or 32 bits depending on the machine and the compiler
* The size of `int` and `short` is *at least* 16 bits
* `short` can't be longer than `int`, which can't be longer than `long`.

Also, integers can be `signed` or `unsigned`. `unsigned` numbers are always positive or zero, and obey the laws of arithmetic modulo 2n, where n is the number of bits in the type.
* `unsigned char` will have a value between 0 and 255
* `signed char` will have a value between -127 and 128
* Whether plain chars are signed or unsigned is machine-dependent, but printable characters are always positive.
  
Floats can also take added qualifiers: `long double` is an extended-precision floating point number. `float`, `double` and `long double` could represent one, two or three distinct sizes.

## Constants
* Integer constant - like 1234, or  `long` constant written with a terminal `l` (ell) or `L` - like 123456789L
* Float constants are similar and should be trailed with an `f` or `l` or `L` for `long double`
* A character constant is an integer, written as one character within single quotes, such as `'0'` has the value 48, which is unrelated to the numeric value 0.

Certain characters can be represented in character and string constants by escape sequences like \n (newline); these sequences look like two characters, but represent only one. The complete set of escape sequences is:
*`\a` alert (bell) character
*`\b` backspace
*`\f` formfeed \n newline
*`\r` carriage return \t horizontal tab \v vertical tab
*`\\`backslash
*`\?`question mark
*`\'`single quote
*`\"`double quote
*`\ooo` octal number
*`\xhh` hexadecimal number

Lastly, there is one other kind of constant: the enumeration constant. `enum`. An enumeration is a list of constant integer values, like:
```c
enum boolean { NO, YES };
```

The first name in an enum has the value `0`, the second one `1`, and so on, unless explicit values are specified. If no value is specified, the enum will pick up from the previous specified value in the enum, like:

```c
enum months { JAN = 1, FEB, MAR, APR, MAY, JUN, JUL, AUG, SEP, OCT, NOV, DEC };
/* FEB = 2, MAR = 3, etc. */
```

Names must be distinct in different enums, but they can share the same values.

Unrelated: the `const` declaration can be used to notate that a variable does not change, different from a constant as shown above.
For example:

```c
const double e = 2.71828182845905; 
const char msg[] = "warning: ";
```

## Type Conversions

The C languge has type conversion, in a way it's similar to JavaScript's type coercion. Instead of "coercion" like in JS, in C we convert strings or other things into integers, via their character's numerical value.

```c
/* lower: convert c to lower case; ASCII only */ int lower(int c)
{
if (c >= 'A' && c <= 'Z') return c + 'a' - 'A';
       else
           return c;
}
```

Note: we don't need to actually lower/upper case characters like this, and we don't need to use these kinds of operations to check types. We can just use `<ctype.h>` functions for stuff like this.

You can also convert values into different types by using arithmetic operators, e.g., running `"a" * 2`

## Increment and Decrement Operators

I actually didn't know this before, but I did wonder about it sometimes. There is a difference between `++n` and `n++`. The expression `++n` increments n *before* its value is used, while `n++` increments n *after* its value has been used.

AKA, If n is 5, then
```c
x = n++;
```
sets x to 5, but

```c
x = n++;
```
sets x to 6. In both cases, n becomes 6. 

## Bitwise Operators

No plan to use these for now but:  C provides six operators for bit manipulation, that can  be applied to integer-based values, that is: `char`, `short`, `int`, and `long`


* `&` - bitwise AND
* `|` - bitwise inclusive OR 
* `^` - bitwise exclusive OR
* `<<` - left shift
* `>>` - right shift
* `~` - one's complement (unary)



## Precedence and Order of Evaluation

Basically: everything you think in terms of operator precedences, makes sense. Unary operators take precedence over binary operators, though.

Also, left-to-right precedence is equal, aka, `*` and `/` or `+` that happen to the same variable on the same line, don't necessarily guarantee left-to-right execution. You should use temporary variables in that case. I think this line sums it up quite well, and goes beyond the scope of precedence and parsing:

```
The moral is that writing code that depends on order of evaluation is a bad programming practice in any language. Naturally, it is necessary to know what things to avoid, but if you don't know how they are done on various machines, you won't be tempted to take advantage of a particular implementation.
```

Our code should be declarative, and not depend on some observed-but-originally-unexpected behavior of the machine or parser or runtime. It's the same in JS land -- don't take advantage of weird behaviors of the language, they might not be dependable cross-platform, and they also make for hard-to-read code.


