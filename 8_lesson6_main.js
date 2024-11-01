// https://www.youtube.com/watch?v=EIhAwfHubE8&list=PLgUwDviBIf0pcIDCZnxhv0LkHf5KzG9zp&index=6

//You are given 2 arrays with only non-negative integers in them. Find maximum possible value of A XOR B, 
//where A is an element from array #1 and B is an element from array #2

/* Complexity Analysis - 
let arr1 have length n, arr2 have length m.
Each word has lengt of 32 obviously


TC = Inserting n no.'s of length 32 each +  traversing m times
   =   O(32 * n)                         +     O(m*32)
   = O(n) + O(m) [asymp.]

SC = O(32*n) //remember, we are only storing n numbers, not n+m
   = O(n) [asymp.]
BUT THEN AGAIN, SC CANNOT BE ACCURATELY PREDICTED (see lesson 1 theory notes)

*/


const getKey = (node, ch) => node.children[ ch ];
const setKey = (node, ch) => {
    node.children[ ch ] = new Node();
}

class Node {
    constructor() {
        this.children = new Array(2).fill(null);
    }
}

class Trie {
    constructor() {
        this.root = new Node();
    }

    insert(word) {
        let node = this.root;
        for(let i in word) {
            let ch = word[i];
            if (!getKey(node, ch)) 
                setKey(node, ch);
            
            node = getKey(node, ch);
        }
    }

    getMaximumXorValue(word) {
        let node = this.root;
        let xorValue = '';
        //remember, focus is on finding maximum value of x XOR y, not the y for our x s.t. x XOR y is maximal. 
        for(let i in word) {
            let ch = word[i];
            let desiredChar = +!(+ch);
            if (getKey(node, desiredChar)) {
                xorValue += '1'; //since this is the desired scenario, result of XOR for this bit would be 1
                node = getKey(node, desiredChar);
            } else {
                xorValue += '0'; //since this is not the desired scenario, result of XOR for this bit would be 0
                node = getKey(node, ch);
            }
        }
        return xorValue;
    }

    
}

let trie = new Trie();
// let arr1 = [6,8], arr2 = [7,8,2];
let arr1 = [1,2], arr2 = [1,1,1];
for(let num of arr1) {
    let binaryNum = num.toString(2).padStart(32, '0');
    trie.insert(binaryNum);
}
let ans = -1;

for(let num of arr2) {
    let obtainedAns = trie.getMaximumXorValue(num.toString(2).padStart(32, '0'));
    let currentMax = parseInt(obtainedAns, 2);
    if (ans < currentMax) {
        ans = currentMax;
    }
}
console.log(ans)

