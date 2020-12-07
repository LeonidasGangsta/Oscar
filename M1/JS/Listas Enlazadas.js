//Linked List

class Node {
    constructor (data, next) {
        this.data = data;
        this.next = next;
    }
}

class List {
    constructor () {
        this.head = null
        this.size = 0
    }

    add (data) {
        const newNode = new Node (data, null);
        if (!this.head) {
            this.head = newNode;
        } else {
            current = this.head;
            while (current.next) {
                current = current.next;
            }
            current.next = newNode;
        }
        this.size++;
    }
}