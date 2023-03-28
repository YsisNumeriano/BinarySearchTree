class Node {
	constructor(data) {
		this.data = data;
		this.left = null;
		this.right = null;
	}
}
class BinarySearchTree {
	constructor() {
		this.root = null;
	}
	insert(data) {
		//Cria um novo nó com um dado de valor, se a árvore estiver vazia adiciona este nó a uma árvore e torna-o uma raiz, caso contrário chama insert
		var newNode = new Node(data);
		if (this.root === null)
			this.root = newNode;
		else
			this.insertNode(this.root, newNode);
	}
	insertNode(node, newNode) {
		//Compara os dados fornecidos com os dados do nó atual e move para a esquerda ou direita de acordo e retorna até encontrar um nó correto com um valor nulo onde um novo nó pode ser adicionado.
		if (newNode.data < node.data) {
			if (node.left === null)
				node.left = newNode;
			else
				this.insertNode(node.left, newNode);
		} else {
			if (node.right === null)
				node.right = newNode;
			else
				this.insertNode(node.right, newNode);
		}
	}
	remove(data) {
		//São métodos auxiliares que chamam removeNode passando o nó raiz e dados fornecidos e atualiza a raiz da árvore com o valor retornado pela função
		this.root = this.removeNode(this.root, data);
	}
	removeNode(node, key) {
		//Ele procura um nó com um dado dado e, em seguida, executa certas etapas para excluí-lo.
		if (node === null)
			return null;


		else if (key < node.data) {
			node.left = this.removeNode(node.left, key);
			return node;
		}

		else if (key > node.data) {
			node.right = this.removeNode(node.right, key);
			return node;
		}
		else {
			if (node.left === null && node.right === null) {
				node = null;
				return node;
			}
			if (node.left === null) {
				node = node.right;
				return node;
			}

			else if (node.right === null) {
				node = node.left;
				return node;
			}
			var aux = this.findMinNode(node.right);
			node.data = aux.data;

			node.right = this.removeNode(node.right, aux.data);
			return node;
		}

	}
	inorder(node) {
		//realiza travessia inorder de uma árvore a partir de um determinado nó 
		if (node !== null) {
			this.inorder(node.left);
			console.log(node.data);
			this.inorder(node.right);
		}
	}
	preorder(node) {
		//executa a passagem de pré-ordem de uma árvore a partir de um determinado nó.
		if (node !== null) {
			console.log(node.data);
			this.preorder(node.left);
			this.preorder(node.right);
		}
	}
	postorder(node) {
		//Executa a travessia pós-ordem de uma árvore a partir de um determinado nó . 
		if (node !== null) {
			this.postorder(node.left);
			this.postorder(node.right);
			console.log(node.data);
		}
	}
	isBalanced() {
		return (this.findMinHeight() >= this.findMaxHeight() - 1)
	  }
	  findMinHeight(node = this.root) {
		  if (node == null) {
			  return -1;
		  };
		  let left = this.findMinHeight(node.left);
		  let right = this.findMinHeight(node.right);
		  if (left < right) {
			  return left + 1;
		  } else {
			  return right + 1;
		  };
	  }
	  findMaxHeight(node = this.root) {
		  if (node == null) {
			  return -1;
		  };
		  let left = this.findMaxHeight(node.left);
		  let right = this.findMaxHeight(node.right);
		  if (left > right) {
			  return left + 1;
		  } else {
			  return right + 1;
		  };
	  }

}	
var bst = new BinarySearchTree();
bst.insert(9);
bst.insert(4);
bst.insert(17);
bst.insert(3);
bst.insert(6);
bst.insert(22);
bst.insert(5);
bst.insert(7);
bst.insert(20);

console.log(bst.findMinHeight());
console.log(bst.findMaxHeight());
console.log(bst.isBalanced());
bst.insert(10);
console.log(bst.findMinHeight());
console.log(bst.findMaxHeight());
console.log(bst.isBalanced());
console.log('inorder: ' + bst.inorder());
console.log('preorder: ' + bst.preorder());
console.log('postorder: ' + bst.postorder());
