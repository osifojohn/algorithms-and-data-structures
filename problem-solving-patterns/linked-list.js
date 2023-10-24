// A data structure that contains a head, tail and length property
// Linked list consist of a nodes, and each node has a value and a pointer to another node or null
// Linked-list is just a bunch of nodes. It is ordered
// It is like a sky scrapper that has no elevator. while in an array, we have stairs, while each floor is connected to one another by set of steers

//1. Do not have indexes 2. Connected via node with a nest pointer
//3. Random access is not allowed

// Node
// Node is a piece of data - val
// Reference to next node - next

class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

class SinglyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  push(val) {
    let newNode = new Node(val);
    if (!this.head) {
      this.head = newNode;
      this.tail = this.head;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }

    this.length++;
    return this;
  }

  pop() {
    if (!this.head) return undefined;
    var current = this.head;
    var newTail = current;
    while (current.next) {
      newTail = current;
      current = current.next;
    }
    this.tail = newTail;
    this.tail.next = null;
    this.length--;
    if (this.length === 0) {
      this.head = null;
      this.tail = null;
    }
    return current;
  }

  shift() {
    if (!this.head) return undefined;
    var currentHead = this.head;
    this.head = currentHead.next;
    this.length--;

    if (this.length === 0) this.tail = null;

    return currentHead;
  }

  unshift(val) {
    var newNode = new Node(val);
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      newNode.next = this.head;
      this.head = newNode;
    }

    this.length++;
    return this;
  }

  get(index) {
    if (index < 0 || index >= this.length) null;
    var current = this.head;
    var counter = 0;

    while (index !== counter) {
      current = current.next;
      counter++;
    }

    return current;
  }

  set(index, val) {
    var foundNode = this.get(index);
    if (foundNode) {
      foundNode.val = val;
      return true;
    }
    return false;
  }

  insert(index, val) {
    if (index < 0 || index > this.length) return false;
    if (index === this.length) return !!this.push(val);
    if (index === 0) return !!this.unshift(val);

    var newNode = new Node(val);
    var prev = this.get(index - 1);
    var temp = prev.next;
    prev.next = newNode;
    newNode.next = temp;
    this.length++;
    return true;
  }

  remove(index) {
    if (index < 0 && index > this.length) return undefined;
    if (index === this.length - 1) return !!this.pop(index);
    if (index === 0) return !!this.shift(index);

    var previousNode = this.get(index - 1);
    var removedNode = previousNode.next;
    var tempNode = removedNode.next;
    previousNode.next = tempNode;
    this.length--;

    return removedNode;
  }

  remove(index) {
    if (index < 0 && index > this.length) return undefined;
    if (index === this.length - 1) return !!this.pop(index);
    if (index === 0) return !!this.shift(index);

    var previousNode = this.get(index - 1);
    var removedNode = previousNode.next;
    var tempNode = removedNode.next;
    previousNode.next = tempNode;
    this.length--;

    return removedNode;
  }

  reverse() {
    var node = this.head;
    this.head = this.tail;
    this.tail = node;
    var next;
    var prev = null;
    for (var i = 0; i < this.length; i++) {
      next = node.next;
      node.next = prev;
      prev = node;
      node = next;
    }
    return this;
  }
}

const list = new SinglyLinkedList();
list.push('HELLO');
