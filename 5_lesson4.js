// https://www.youtube.com/watch?v=RV0QeTyHZxo&list=PLgUwDviBIf0pcIDCZnxhv0LkHf5KzG9zp&index=4
//count distinct substrings (including empty substring)

/*to do it via Tries, TC and SC -
TC: O(n^2), where n is length of input word.
Because in this program, we insert in a O(n) loop, and inserting into a trie takes O(n) time

SC: Difficult to predict SC of a trie, because (see lesson 1 theory notes. DO NOT MENTION O(n*m), ASYMP. EQUAL 
TO O(n) GENERALIZATION FOR THIS QUESTION).


/* LOGIC: 
1. whenever you insert anything into the trie, assume it didn't exist previously. 
   therefore, upon Trie insertion, add to final object
2. create substrings of word.slice(0, len), word.slice(1, len), word.slice(2, len)... and apply
   the logic written in 1 for them
*/


//--------------------------------------------------

const getKey = (node, ch) => node.children[ ch.charCodeAt(0) - 97 ];
const setKey = (node, ch) => {
    node.children[ ch.charCodeAt(0) - 97 ] = new Node();
}
const ans = {};

class Node {
    constructor() {
        this.children = new Array(26).fill(null);
    }
}

class Trie {
    constructor() {
        this.root = new Node();
    }
    
    insert(word) {
        let node = this.root;
        let substr = '';
        for(let i in word) {
            let ch = word[i];
            if(!getKey(node, ch)) {
                setKey(node, ch);
                substr += ch;
                ans[substr] = 1; //value can be anything, apne ko to Object.keys se matlab
            }
            node = getKey(node, ch);
        }
    }
}

let trie = new Trie();
let word = 'abab';

for(let i in word) {
    let currentWord = word.slice(+i);
    trie.insert(currentWord);
}
console.log(Object.keys(ans).length + 1); //+1 because we also have to consider the empty substring
