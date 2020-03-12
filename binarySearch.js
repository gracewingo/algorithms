function setUp() {
	const tree = new Tree();
	tree.addValue(5);
    tree.addValue(3);
    tree.addValue(9);
    console.log(tree);
}

function Tree() {
	this.root = null;
}

Tree.prototype.addValue = function(n) {
	const node = new Node(n);
	// if the root is empty, set it equal to node 
	if (this.root === null) {
		this.root = node;
	} else {
        // If this.root is full, add a node to the tree 
		this.root.addNode(node);
	}
};

Node.prototype.addNode = function(n) {
	if (n.value < this.value) {
		if (this.left == null) {
			this.left = n;
		} else {
			this.left.addNode(n);
		}
	} else if (n.value > this.value) {
		if (this.right == null) {
			this.right = n;
		} else {
			this.right.addNode(n);
		}
    } 
    // else, if n is equal to the left or right, do nothing 
};

function Node(val) {
	this.value = val;
	this.left = null;
	this.right = null;
}

setUp();
