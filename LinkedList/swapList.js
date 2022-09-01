class Node {
    constructor(val) {
        this.val = val;
        this.next = null;
    }
}

let head;

const push = (data) => {
    let newNode = new Node(data);
    newNode.next = head;
    head = newNode;
}

const print = () => {
    let current = head;
    while (current != null) {
        console.log(current.val);
        current = current.next;
    }
}

//Swap Function

const swap = (x, y) => {
    if (x === y) return;
    let prevX = null;
    let currX = head;
    while (currX != null && currX.val != x) {
        prevX = currX;
        currX = currX.next;
    }

    let prevY = null;
    let currY = head;
    while (currY != null && currY.val != y) {
        prevY = currY;
        currY = currY.next;
    }

    if (currX === null || currY === null) return;

    if (prevX != null)
        prevX.next = currY;
    else
        head = currY;

    if (prevY != null)
        prevY.next = currX;
    else
        head = currX;

    let current = currX.next;
    currX.next = currY.next;
    currY.next = current;
}

push(4);
push(3);
push(2);
push(1);
swap(4, 2);
print();