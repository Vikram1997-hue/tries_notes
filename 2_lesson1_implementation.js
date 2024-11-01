// https://www.youtube.com/watch?v=dBGUmUQhjaM&list=PLgUwDviBIf0pcIDCZnxhv0LkHf5KzG9zp 19:32 onwards
// also https://javascripttoday.com/blog/trie-data-structure/

const getKey = (node, ch) => node.children[ ch.charCodeAt(0) - 97 ];

const putKey = (node, ch) => {
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

    insert(word) { //returns void

        let iterator = this.root;
        for(let i in word) {
            let ch = word[i];
            if (!getKey(iterator, ch)) 
                //then we don't have the full word in question, and need to start inserting it.
                //so let's create a new Trie at this location.
                putKey(iterator, ch);
            
            //else, move to the next character in the trie (i.e., move to the next reference trie)
            iterator = getKey(iterator, ch)
        }
        //you're now at the end of the word, so you must mark its endOfWord as true
        iterator.endOfWord = true;
    }

    search(word) { //returns boolean
        let iterator = this.root;
        for(let i in word) {
            let ch = word[i];
            if (!getKey(iterator, ch))
                return false;

            iterator = getKey(iterator, ch) //this will make us traverse
        }
        return iterator.endOfWord;
    }

    startsWith(prefix) { //returns boolean
        //NOTE: even if whole word === prefix, answer is still true
        let iterator = this.root;
        for(let i in prefix) {
            let ch = prefix[i];
            if (!getKey(iterator, ch))
                return false;

            iterator = getKey(iterator, ch)
        }
        return true;
    }
}

let trie = new Trie();
trie.insert("hehe")
// console.log(trie, "and", trie.root.children[7].children[4].children[7].children[4])
console.log(trie.search("hehe"))
console.log(trie.search("heha"))
console.log(trie.startsWith("hehe"))
console.log(trie.startsWith("heh"))

//try once with a trie: https://leetcode.com/problems/longest-common-prefix/


//----------------------------------
/*JS FIDDLE - https://jsfiddle.net/4rxh0bmy/2/

//write helper functions for code abstration and readability/reusability, and to make your life easier
const getKey = (node, ch) => node.children[ ch.charCodeAt(0) - 97 ];
const putKey = (node, ch) => {
    node.children[ ch.charCodeAt(0) - 97 ] = new Node();
}


class Node {
    constructor() {
        this.children = new Array(26).fill(null);
        this.endOfWord = false;
				//the exact structure of a single trie node changes from application to application.
        //However, we usually will always have some kind of reference trie, which here is this.children
    }
}


class Trie {
    constructor() {
        this.root = new Node();
    }

    insert(word) { //returns void

        let iterator = this.root;
        for(let i in word) {
            let ch = word[i];
            if (!getKey(iterator, ch)) 
                //then we don't have the full word in question, and we need to start inserting it. so let's create a new reference trie at this location.
                putKey(iterator, ch);
            
            //else, move to the next character in the trie (i.e., move to the next reference trie)
            iterator = getKey(iterator, ch)
        }
        //you're now at the end of the word, so you must mark its endOfWord as true
        iterator.endOfWord = true;
    }

    search(word) { //returns boolean
        let iterator = this.root;
        for(let i in word) {
            let ch = word[i];
            if (!getKey(iterator, ch))
                return false;

            iterator = getKey(iterator, ch); //this will make us traverse
        }
        return iterator.endOfWord;
    }

    startsWith(prefix) { //returns boolean
        //NOTE: even if whole word === prefix, answer is still true
        let iterator = this.root;
        for(let i in prefix) {
            let ch = prefix[i];
            if (!getKey(iterator, ch))
                return false;

            iterator = getKey(iterator, ch)
        }
        return true;
    }
}

let trie = new Trie();
trie.insert("hehe");
console.log(trie.search("hehe"));
console.log(trie.search("heha"));
console.log(trie.startsWith("hehe"));
console.log(trie.startsWith("heh"));

*/
