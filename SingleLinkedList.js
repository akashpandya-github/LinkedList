
// Reference Link: https://medium.com/swlh/beginners-guide-to-the-linked-list-data-structure-in-nodejs-dcf8d2f655e2

const Node = require('./Node');

class SingleLinkedList {
    constructor() {
        this.head = null;
        this.size = 0;
    }

    push(data) {
        this.head = new Node(data, this.head);
        this.size++;
    }

    insertAtLast(data) {
        let last = new Node(data);
        let current = this.head; 
    
        if(current?.next) {
            while (current?.next) {
                current = current.next; 
            }
            current.next = last;
            this.size++;
        } else {
            this.push(data);
        }  
    }

    insertAtIndex(data, index) {

        const node = new Node(data);
        let previous; 
        let current = this.head; 
        let count = 0;

        while(count < index) {
            previous = current;
            count++; 
            current = current.next; 
        }
        if(previous?.next) {
            node.next = current; 
            previous.next = node;
            this.size++;
        } else {
            console.log("Index Not Exists...!!");
        }
    }

    print() {
        let current = this.head;
        let i = 0;
        while(current) {
            console.log(`Current Node ==> [ Index -> ${i}] `, current.data);
            current = current.next; 
            i++;
        }
    }

    // TODO:: Search()

    // TODO:: Remove()
}


const singleLinkedList = new SingleLinkedList();


singleLinkedList.insertAtLast(50);
singleLinkedList.push(30);
singleLinkedList.push(20);
singleLinkedList.push(10);
singleLinkedList.insertAtIndex(40, 1);
singleLinkedList.print()

console.log("Linked List ===> ", JSON.stringify(singleLinkedList));