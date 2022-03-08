class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }
  thehead() {
    return this.head.value;
  }
  prepend(value) {
    if (this.length === 0) {
      return this.append(value);
    }
    let node = new Node(value);
    this.length += 1;
    node.next = this.head;
    this.head = node;
  }
  append(value) {
    let node = new Node(value);
    if (this.length === 0) {
      this.head = node;
      this.tail = node;
      this.tail.next = null;
      this.length = 1;
      return;
    }
    this.length += 1;
    //set current tail to point at next node
    this.tail.next = node;
    //set new tail
    this.tail = this.tail.next;
    this.tail.next = null;
  }
  remove() {
    if (this.length === 0) {
      throw new Error("List is empty");
    }
    let val = this.head.value;
    this.head = this.head.next;
    this.length -= 1;
    return val;
  }
  size() {
    return this.length;
  }
  print() {
    let arr = [];
    let dummy = this.head;
    while (dummy) {
      arr.push(dummy.value);
      dummy = dummy.next;
    }
    return arr;
  }
}

let test = new LinkedList();

test.append(1);
test.append(2);
test.append(3);
test.append(4);
test.append(5);
console.log(test.remove());
test.prepend(1);
console.log(test.thehead(), "head");
console.log(test.tail, "the tail");
console.log(test.size(), "size");
console.log(test.print());
