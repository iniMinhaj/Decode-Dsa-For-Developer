class Node {
	constructor(data) {
		this.data = data;
		this.next = null;
	}
}

class StackLinkedList {
	constructor(maxSize = 10) {
		this.top = null;
		this.maxSize = maxSize;
		this.size = 0;
	}

	push(data) {
		if (this.size >= this.maxSize) {
			throw new Error('Stack Overflow');
		}

		const newNode = new Node(data);
		newNode.next = this.top;
		this.top = newNode;
		this.size++;
	}

	pop() {
		if (this.size === 0) {
			throw new Error('Stack Underflow.');
		}

		const data = this.top.data;
		this.top = this.top.next;
		this.size--;
		return data;
	}

	peek() {
		return this.top ? this.top.data : null;
	}

	toString() {
		let current = this.top;
		let result = '';
		while (current) {
			result += `${current.data} `;
			current = current.next;
		}
		return result.trim();
	}
}
