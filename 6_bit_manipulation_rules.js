/*

// https://www.youtube.com/watch?v=5iyuU4hQFrw&list=PLgUwDviBIf0pcIDCZnxhv0LkHf5KzG9zp&index=5

XOR -
even no. of 1's -> yields 0
odd no. of 1's -> yields 1 






SET -

Check if a bit is set or not -
Is 3rd bit of 9 set?

9 -> 0 0 0 0 ... 1 0 0 1 (total will be 32 bits)


9 >> 3 means remove 3 bits from RHS, and add 3 zero's @ LHS to ensure it's still a 32-bit number
so -> 0 0 0 0 0 0 0 ... 0 0 1 (= 1 in Decimal no. system)
whatever you have now, AND that with 1. If that is equal to 1, the bit in question was set.
1 AND 1 = 1.
Therefore, yes, the 3rd bit of 9 is set

[PS - >> means right shift]


So -
Is ith bit/index set means -
(num >> i) AND 1 == 1











TURN ON A BIT -
When shifting left (<<), the most-significant bit is lost, and a 0 is inserted on the RHS, ex:
0010 << 1  →  0100
0010 << 2  →  1000

turning on 2nd bit of 9 -
perform (1 << 2) OR 9

        0 0 0 0 ... 0 0 0 1 0 0 1
  OR    0 0 0 0 ... 0 0 0 0 1 0 0
  ----------------------------------
        0 0 0 0 ... 0 0 0 1 1 0 1

now, the 2nd bit (do zero-based counting from the right) would be a guaranteed 1.


turn on means - 
(1 << i) OR num

 */