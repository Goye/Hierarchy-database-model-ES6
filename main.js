"use strict";
/*TODO 
Search(val, node)
Insert(val,node)
Print(node)
*/

var Node = class {
    constructor(val) {
        this.val = val;
        this.right = null;
        this.left = null;
    }
}

//Initial Object
let root = new Node(8);
root.left = new Node(6);
root.left.left = new Node(3);
root.left.right = new Node(7);
root.right = new Node(12);
root.right.left = new Node(10);
root.right.right = new Node(13);

//Search function
function search(val, node) {
    if (node == null)
        return false;
    else if (val === node.val)   
        return true;
    else if (val < node.val)
        return search(val, node.left);
    else if (val > node.val)
        return search(val, node.right); 
}
let itExists = search(8, root);
//console.log(itExists);
//Insert function
function insert(val, node) {
    let itExists = search(val, node);
    let firstVal = root.val;
    if (itExists || val < 1)
        return false;
    else 
        //Math logic 
        if (val < firstVal) {
            
        } else {
            
        }
} 

