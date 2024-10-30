// //https://www.youtube.com/watch?v=K5pcpkEMCN0&list=PLgUwDviBIf0pcIDCZnxhv0LkHf5KzG9zp&index=2
// //ends with, count prefix
// const getKey = (node, ch) => node.children[ ch.charCodeAt(0) - 97 ];

// const putKey = (node, ch) => {
//     node.children[ ch.charCodeAt(0) - 97 ] = new Node();
// }

// class Node {
//     constructor() {
//         this.children = new Array(26).fill(null);
//         this.endsWith = 0;
//         this.prefixCount = 0;
//     }
// }

// class Trie {
//     constructor() {
//         this.root = new Node();
//     }

//     insert(word) {
//         let node = this.root;
//         for(let i in word) {
//             let ch = word[i];
//             if (!getKey(node, ch))
//                 putKey(node, ch);

//             node.prefixCount++;
//             node = getKey(node, ch);
//         }
//         node.endsWith++;
//     }

//     countWordsEqualTo(word) {
//         let node = this.root;
//         for(let i in word) {
//             let ch = word[i];
//             if (!getKey(node, ch))
//                 return false;

//             node = getKey(node, ch);
//         }
//         return node.endsWith;
//     }

//     countWordsStartingWith(word) {
//         let node = this.root;
//         for(let i in word) {
//             let ch = word[i];
//             if(!getKey(node, ch))
//                 return 0;

//             node = getKey(node, ch);
//         }
//         return node.prefixCount;
//     }

//     erase(word) {
//         let node = this.root;
//         for(let i in word) {
//             let ch = word[i];
//             if (!getKey(node, ch))
//                 return;

//             node.prefixCount--;
//             node = getKey(node, ch);
//         }
//         node.endsWith--;
//     }
// }

// let trie = new Trie();
// trie.insert('samsung')
// trie.insert('samsung')
// trie.insert('vivo')
// trie.erase('vivo')
// console.log(trie.countWordsEqualTo('samsung'))
// console.log(trie.countWordsStartingWith('vi'))

const getKey = (node, ch) => node.children[ ch.charCodeAt(0) - 97 ];
const setKey = (node, ch) => {
    node.children[ ch.charCodeAt(0) - 97 ] = new Node();
}

class Node {
    constructor() {
        this.children = new Array(26).fill(null);
        this.endsWith = 0;
        this.prefixCount = 0;
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
            if(!getKey(node, ch))
                setKey(node, ch);

            node.prefixCount++;
            node = getKey(node, ch);
        }
        node.endsWith++;
    }

//word
//world
//words
//wi

    countWordsEqualTo(word) {
        let node = this.root;
        for(let i in word) {
            let ch = word[i];
            if(!getKey(node, ch))
                return 0;

            node = getKey(node, ch);
        }
        return node.endsWith;
    }

    countWordsStartingWith(word) {
        let node = this.root;
        for(let i in word) {
            let ch = word[i];
            if(!getKey(node, ch))
                return 0;

            node = getKey(node, ch);
        }
        return node.prefixCount;
    }

    erase(word) {
        let node = this.root;
        for(let i in word) {
            let ch = word[i];
            if(!getKey(node, ch))
                return;

            node.prefixCount--;
            node = getKey(node, ch);
        }
        node.endsWith--;
    }
}

let trie = new Trie();
trie.insert("apple")
trie.insert("apps")
trie.insert("apxl")
console.log(trie.countWordsEqualTo('apple'))
console.log(trie.countWordsStartingWith('app'))
console.log(trie.countWordsStartingWith('ap'))
trie.erase('apxl')


// trie.erase("vivo")
// console.log(trie.countWordsEqualTo("samsung"))
// console.log(trie.countWordsStartingWith("vi"))
