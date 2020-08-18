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