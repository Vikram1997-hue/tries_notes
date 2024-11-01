// https://www.youtube.com/watch?v=EIhAwfHubE8&list=PLgUwDviBIf0pcIDCZnxhv0LkHf5KzG9zp&index=6


//LET'S DO AN EASIER VERSION OF THIS PROBLEM FIRST - 
//given an array of numbers and a number x, find the maximum possible value of arr[i] XOR x

//this soln. is the Bible to doing XOR problems using Tries
/*
1. insert all no.'s (convert to binary first) into Trie
2. find the one no. for which num XOR x is maximum (traverse the trie) 
*/


/*
LOGIC FOR XOR MAXIMIZATION - 
1. you obviously want each (or upon failing that, as many as possible) of your bits to be exclusive, 
   so that XOR yields 1.
2. at any step, if there is a value that makes your XOR answer a 1, choose that. otherwise, choose the 
   other option (2 hi option honge, because any bit would either be 0 or 1)
*/

//SC: O(32 * n), asymp. equal to O(n)
//TC: O(n) + O(n) (once for insertion, once for traversal), asymp. equal to O(n) 

const getKey = (node, ch) => node.children[ ch ];
const setKey = (node, ch) => {
    node.children[ ch ] = new Node();
}

class Node {
    constructor() {
        this.children = new Array(2).fill(null); //cuz only 2 options - 0 or 1.
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

    maximizeXor(x) { //basically a traversal function, so O(n)
        let node = this.root;
        let ans = '';
        for(let i in x) {
            let ch = x[i];
            let desired = +(!+ch);
            if (getKey(node, desired)) {
                node = getKey(node, desired);
                ans += desired;
            } else {
                node = getKey(node, ch);
                ans += ch;
            }
        }
        return ans;
    }


}

let trie = new Trie();
let arr = [9,8,7,5,6], x = 8;
x = x.toString(2).padStart(32, '0'); //cuz 32 bit numbers
for(let num of arr) {
    trie.insert(num.toString(2).padStart(32, '0')); //cuz 32 bit numbers
}
let ans = trie.maximizeXor(x)
console.log(ans, parseInt(ans, 2));
