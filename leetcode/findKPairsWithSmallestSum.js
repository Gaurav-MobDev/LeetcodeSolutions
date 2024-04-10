class MinHeap {
  constructor() {
    this.heap = [];
  }

  size() {
    return this.heap.length;
  }

  isEmpty() {
    return this.heap.length === 0;
  }

  push(val) {
    this.heap.push(val);
    this.heapifyUp(this.heap.length - 1);
  }

  pop() {
    if (this.isEmpty()) return null;
    if (this.size() === 1) return this.heap.pop();

    const top = this.heap[0];
    this.heap[0] = this.heap.pop();
    this.heapifyDown(0);
    return top;
  }

  heapifyUp(idx) {
    let currentIdx = idx;
    let parentIdx = Math.floor((currentIdx - 1) / 2);

    while (
      currentIdx > 0 &&
      this.heap[currentIdx][0] + this.heap[currentIdx][1] <
        this.heap[parentIdx][0] + this.heap[parentIdx][1]
    ) {
      [this.heap[currentIdx], this.heap[parentIdx]] = [
        this.heap[parentIdx],
        this.heap[currentIdx],
      ];
      currentIdx = parentIdx;
      parentIdx = Math.floor((currentIdx - 1) / 2);
    }
  }

  heapifyDown(idx) {
    let currentIdx = idx;
    let leftChildIdx = currentIdx * 2 + 1;

    while (leftChildIdx < this.size()) {
      let rightChildIdx =
        currentIdx * 2 + 2 < this.size() ? currentIdx * 2 + 2 : -1;
      let swapIdx;

      if (
        rightChildIdx !== -1 &&
        this.heap[rightChildIdx][0] + this.heap[rightChildIdx][1] <
          this.heap[leftChildIdx][0] + this.heap[leftChildIdx][1]
      ) {
        swapIdx = rightChildIdx;
      } else {
        swapIdx = leftChildIdx;
      }

      if (
        this.heap[swapIdx][0] + this.heap[swapIdx][1] <
        this.heap[currentIdx][0] + this.heap[currentIdx][1]
      ) {
        [this.heap[currentIdx], this.heap[swapIdx]] = [
          this.heap[swapIdx],
          this.heap[currentIdx],
        ];
        currentIdx = swapIdx;
        leftChildIdx = currentIdx * 2 + 1;
      } else {
        break;
      }
    }
  }
}

function kSmallestPairs(nums1, nums2, k) {
  const minHeap = new Minp();
  const result = [];

  for (let num1 of nums1) {
    for (let num2 of nums2) {
      minHeap.push([num1, num2]);
      console.log(JSON.stringify(minHeap));
    
    }
  }
  while (result.length < k) {
      result.push(minHeap.pop());
  }

  return result;
}

// Example usage:
const nums1 = [1,2,4,5,6]
const nums2 = [3,5,7,9]
const k = 20;
console.log(JSON.stringify(kSmallestPairs(nums1, nums2, k))); // Output: [[1, 2], [1, 4], [1, 6]]
