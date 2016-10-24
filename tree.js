var Node = function(val){
  this._val = val;
  this._left = null;
  this._right = null;
}

var Bst = function(){

  var root = null;

  this.add = function(val){

    if(root === null){
      root = new Node(val);
      return;
    }

    var nodeTraverse = root;
    while (nodeTraverse !== null){

      if(val === nodeTraverse._val){
        return;
      }
      else if(val < nodeTraverse._val){
        if(nodeTraverse._left === null){
          nodeTraverse._left = new Node(val);
          return;
        }
        nodeTraverse = nodeTraverse._left;
      }
      else{
        if(nodeTraverse._right === null){
          nodeTraverse._right = new Node(val);
          return;
        }
        nodeTraverse = nodeTraverse._right;
      }

    }

  }

  this.print = function(){

    var strata = [];
    var printLevel = function(node, level){
      if(node === null){
        return;
      }
      else{
        if(typeof strata[level] === 'undefined'){
          strata[level] = [];          
        }
        strata[level].push(node._val);
        printLevel(node._left, level + 1);
        printLevel(node._right, level + 1);
      }
    }

    printLevel(root, 0);
    console.log(strata)
  }

}

  
var binaryTree = new Bst();

binaryTree.add(2);
binaryTree.add(1);
binaryTree.add(3);
binaryTree.add(3);

binaryTree.add(5);
binaryTree.print();

