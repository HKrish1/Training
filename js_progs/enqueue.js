class Queue {
    constructor() {
      this.stack1 = [];
      this.stack2 = [];
    }
  
    enqueue(element) {
      this.stack1.push(element);
      console.log(this.stack1);
    }
  
    dequeue() {
      if (!this.stack2.length) {
        while (this.stack1.length) {
          this.stack2.push(this.stack1.pop());
        }
      }
      return this.stack2.pop();
    }
  }
  
  const queue = new Queue();
  
  queue.enqueue(1);
  queue.enqueue(2);
  queue.enqueue(3);
  
  console.log(queue.dequeue());
  console.log(queue.dequeue()); 
  console.log(queue.dequeue());   