
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
        try {
            const node = new Node(data);
            let previous; 
            let current = this.head; 
            let count = 0;
    
            while(count < index) {
                previous = current;
                count++; 
                if(!current?.next) {
                    throw new Error("Invalid index to insert data...!!");    
                }
                current = current.next; 
            }
            if(!previous?.next) {
                throw new Error("Invalid index to insert data...!!");    
            }
            node.next = current; 
            previous.next = node;
            this.size++;
            return index;
        }catch(e) {
            console.log(e.message);
            return null;
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

    // TODO:: searchByValue()  // Only for singular value like [Number, String]

    searchByIndex(index, type = null) {
      let count = 0;
      let current = this.head;
      let foundData = null;
      while(current) {
        if (count === index) {
            if(type && type === "node") {
                foundData = current;
            } else {
                foundData = current.data;
            }
          break;
        }
        count++;
        current = current.next
      }
      if(!foundData) {
        return null;
      }
      return foundData;
    }

    remove(index) {
        try {
            let current = this.head;
            let previous;
            let count = 0;
            if(index === 0) {
              this.head = current.next;
            } else {
                while (count < index) {
                    count++;
                    previous = current;
                    if(!current?.next) {
                        throw new Error("Invalid index to remove data...!!");
                    }
                    current = current.next;
                }
                if(!previous?.next) {
                    throw new Error("Invalid index to remove data...!!");
                }
                previous.next = current.next
                this.size--;
            }
            return index;
        }catch(e) {
            console.log(e.message)
            return null;
        }
    }
}


const singleLinkedList = new SingleLinkedList();


singleLinkedList.insertAtLast(50);
singleLinkedList.push(30);
singleLinkedList.push(20);
singleLinkedList.push(10);
singleLinkedList.insertAtIndex(40, 1);
// singleLinkedList.remove(3);

singleLinkedList.print();
console.log("SearchByIndex Result ===> ", singleLinkedList.searchByIndex(2, "node"));


// console.log("Linked List ===> ", JSON.stringify(singleLinkedList));