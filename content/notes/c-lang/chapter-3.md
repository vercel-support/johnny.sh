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
