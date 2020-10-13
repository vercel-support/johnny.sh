# Chapter 3

> Control Flow


Not much to say here. It's pretty much the same as JavaScript.

Notably, the authors delve right into a binary search implementation as a demonstration of control flow in C.

## Binary Search

We want to determine if value `x` occurs in array `v`. It assumes the elements in `v` are already sorted and ascending. The function returns the position (a number between 0 and n-1) if `x` occurs in `v`, and -1 if not.


```C
/* binsearch: find x in v[0] <= v[1] <= ... <= v[n-1] */ 
int binsearch(int x, int v[], int n)
{
  int low, high, mid;

  low = 0;
  high = n - 1;
  while (low <= high) {
    mid = (low+high)/2; 
    if (x < v[mid]) {
      high = mid + 1;
    }  else if (x > v[mid]) {
      low = mid + 1;
    } else {
      /* found match */
      return mid;
    }
}
 /* no match */ 
  return -1;
}
```

## Goto

The C programming language has a feature called `goto`, which is like a javascript label. The authors don't seem to like or recommend this language feature much, saying that, "any code involving a `goto` can be written without it". The contest that this feature is harder to read/maintain as it breaks the vertical flow of the code?

Anyways, it can be useful, in a case like this with nested for-loops.

```C
for (i = 0; i < n; i++) {
  for (j = 0; j < m; j++) {
    if (a[i] == b[j]) goto found;
  }
}
found: 
  /* got one: a[i] == b[j] */


for ( ... ) {
  for ( ... ) {
    if (disaster) goto error;
  }
}

error: 
  /* clean up the mess */

```