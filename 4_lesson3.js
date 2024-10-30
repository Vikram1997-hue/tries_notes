//longest word with all prefixes
// https://www.youtube.com/watch?v=AWnBa91lThI&list=PLgUwDviBIf0pcIDCZnxhv0LkHf5KzG9zp&index=3

//first insert all words, then search each word and check if it is longest 
//TC: O(2 * n * m), where m = avg. no. of letters per word
//   = (asymptotically) O(n)
//SC: O(m*n), asymptotically equal to O(n) [READ INTERVIEW NOTES ON SC IN LESSON 1 THEORY]

const getKey = (node, ch) => node.children[ ch.charCodeAt(0) - 97 ];
const setKey = (node, ch) => {
    node.children[ ch.charCodeAt(0) - 97 ] = new Node();
}

class Node {
    constructor() {
        this.children = new Array(26).fill(null);
        this.endOfWord = false;
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
        node.endOfWord = true;
    }

    checkAllPrefixes(word) {
        let node = this.root;
        for(let i in word) {
            let ch = word[i];
            const nextNode = getKey(node, ch);
            if (!nextNode || !nextNode.endOfWord)
                return false;

            node = nextNode;
        }
        return true;
    }   
}

// let arr = ['n', 'ninja', 'ni', 'nin', 'ninj', 'ninga'];
let arr = ['ab', 'bc'];
let trie = new Trie();
for(let word of arr)
    trie.insert(word);

let ans = '';
for(let word of arr) {
    let hasAllPrefixes = trie.checkAllPrefixes(word);
    if (hasAllPrefixes) {
        if (ans.length < word.length) 
            ans = word;
        if (ans.length === word.length && word < ans) //lexi logic
            ans = word;
    }
}

console.log(ans.length ? ans : 'None')
