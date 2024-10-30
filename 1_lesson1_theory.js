//https://www.youtube.com/playlist?list=PLgUwDviBIf0pcIDCZnxhv0LkHf5KzG9zp

/*
WHEN: 
Use when you need to perform one of the following operations -
1. insert(word) - to insert a string "word" in trie
2. search(word) - to check if string "word" is present in trie or not
3. startsWith(word) - to check if there is any string in the trie that has "word" as its prefix

Sample input -
A trie (also called digital tree or prefix tree) is a tree-like data structure that stores data in a way that enables efficient search and 
retrieval. The word “trie” comes from the word “retrieval,” which is a hint about its intended purpose. Tries are also known as prefix trees 
because they store data in a way that makes it easy to search for words or other sequences of characters that share a common prefix.

Tries are most often used to store strings (although you can store other types of data as well), with links between nodes defined not by the 
entire key, but by individual characters. In order to access a key (to recover its value, change it, or remove it), the trie is traversed 
depth-first, following the links between nodes, which represent each character in the key.


TC -
Operation	        Average case        	Worst case
Search	              O(n)	                  O(n)
Insert	              O(n)	                  O(n)
Delete	              O(n)	                  O(n)

SC - O(n)
(technically O(m*n) - assume that there are n words, and each one of 'em on average has m letters. Then, m*n will be the worst case
no. of nodes in the trie)

IN INTERVIEW, YOU SHOULD SAY -
For tries, it is very difficult to predict SC, because it depends on the input. Picture this - you have 26^3 words - 
a                                                                           b                                          ...                              z
aa                 ab                 ...az                     ba              bb               ...bz                                   za             zb              zz
aaa,aab...aaz    aba,abb...abz      aza,azb...azz              baa,bab...baz    bba,bbb...bbz     bza,bzb...bzz                     zaa,zab...zaz    zba,zbb...zbz    zza,zzb...zzz
Here, SC would be 26^3.

However, if you have 26^3 words again, but all of them are abc, your SC would be O(3).

That said, on average, we normally say that SC = O(n)
(technically O(m*n) - assume that there are n words, and each one of 'em on average has m letters. Then, m*n will be the worst case
no. of nodes in the trie)



Root is empty string. A leaf (terminal) node will always be a complete word.
https://en.wikipedia.org/wiki/File:Trie_example.svg


***Though tries can be keyed by character strings, they need not be.*** 
(i.e. tries can store other stuff besides strings as well)

Extra info - The same algorithms can be adapted for ordered lists of any underlying 
type, e.g. permutations of digits or shapes. In particular, a bitwise trie is keyed on the individual bits making up a piece of fixed-length 
binary data, such as an integer or memory address. The key lookup complexity of a trie remains proportional to the key size. Specialized trie 
implementations such as compressed tries are used to deal with the enormous space requirement of a trie in naive implementations.

*/

//General implementation -
class Trie {
    constructor() {
        this.arrayOfClassItself = []; //an array of size 26 of the class itself
        //each one of these elements points to a reference trie, which indicates the existence of the next characters from the current node.
        // this.arrayOfClassItself = new Array(26).fill(null);
        this.endOfWord = false;
    }
}

// https://www.youtube.com/watch?v=dBGUmUQhjaM&list=PLgUwDviBIf0pcIDCZnxhv0LkHf5KzG9zp: 4:02 onwards

