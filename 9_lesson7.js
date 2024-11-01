//https://www.youtube.com/watch?v=Q8LhG9Pi5KM&list=PLgUwDviBIf0pcIDCZnxhv0LkHf5KzG9zp&index=7

/*
You are given an array arr containing n non-negative integers. You are also given a 2D array queries, consisting of m queries,
where the ith query is an array of 2 non-negative integers i.e. each query looks like [x,a].

The answer to any query is the maximum bitwise XOR value of x with any integer less than or equal to a in arr.

Return an array consisting of m integers, where the ith integer is the answer of the ith query.
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

    findMaximumXorValues(word) {
        let node = this.root;
        let str = '';
        for(let i in word) {
            let ch = word[i];
            let desiredChar = +!(+ch);
            if (getKey(node, desiredChar)) {
                str += 1;
                node = getKey(node, desiredChar);
            } else {
                str += 0;
                node = getKey(node, ch);
            }
        }
        return str;
    }
}
//15:48

let trie = new Trie();
let arr = [0,1,2,3,4], queries = [[1,3], [5,6]];
// let arr = [1], queries = [[1,0]];

//STEP 1: sort both arrays
arr.sort((a,b) => a - b);
for(let index in queries) {
    queries[index].push(+index);
}
//now, sort queries on the basis of index. this is required cuz we need the original order preserved somewhere, as the answer 
//array must be populated w.r.t. original order of queries.
queries.sort((a,b) => a[1] - b[1]);


//STEP 2:
//Now, we basically need to maximize r XOR s, where r is given and s is the biggest value in arr we can use.
//If our trie only contains all values of arr that are <= s, then we now only have to do a simple "maximize XOR using tries" 
//question. (watch the video once tho. Striver explains it better)
let arrPtr = 0;
let finalAns = [];
for(let i in queries) {
    while(arr[arrPtr] <= queries[i][1] && arrPtr < arr.length) {
        trie.insert(arr[arrPtr].toString(2).padStart(32, '0'));
        arrPtr++;
    }
    if (!arrPtr) {
        finalAns.push(-1);
        continue;
    }
    let ans = trie.findMaximumXorValues(queries[i][0].toString(2).padStart(32, '0'));
    ans = parseInt(ans, 2);
    finalAns.push(ans);
}

console.log(finalAns.length ? finalAns : [-1]);


/*
Complexity Analysis -

SC = O(32 * n), where n is length of arr (since we only insert elements of arr) + you also  
    + O(m), where m is length of queries array. cuz you technically add 1 element (originalPos) to each subarray in queries, 
            so O( 1 * m ) = O(m)
   = O(n) + O(m)

TC = 2 sorts         + n insertions   + m traversals (findMaximumXorValues)
   = O(2*n log n)    +  O(32 * n)     +       O(32*m)
   = [asymp.] O(n log n) + O(n) + O(m)
   = [asymp.] O(n log n) + O(m)
     
*/
