const quizData = [{
    question: "What is the time complexity of accessing an element in an array by index?",
    a: "O(1)",
    b: "O(n)",
    c: "O(log n)",
    d: "O(n^2)",
    correct: "a"
},
{
    question: "Which data structure is used for implementing recursion?",
    a: "Queue",
    b: "Stack",
    c: "Heap",
    d: "Graph",
    correct: "b"
},
{
    question: "Which sorting algorithm has the best average time complexity?",
    a: "Bubble Sort",
    b: "Quick Sort",
    c: "Merge Sort",
    d: "Selection Sort",
    correct: "c"
},
{
    question: "What is a binary search tree (BST)?",
    a: "A tree where every node has at most two children",
    b: "A tree where the left child is smaller and the right child is larger than the parent",
    c: "A complete tree with all levels filled",
    d: "A tree with no cycles",
    correct: "b"
},
{
    question: "What is the time complexity of inserting an element into a balanced binary search tree?",
    a: "O(n)",
    b: "O(log n)",
    c: "O(n^2)",
    d: "O(1)",
    correct: "b"
},
{
    question: "Which of the following data structures does not allow duplicate elements?",
    a: "Array",
    b: "Set",
    c: "Linked List",
    d: "Queue",
    correct: "b"
},
{
    question: "Which data structure works in the FIFO (First In, First Out) manner?",
    a: "Stack",
    b: "Queue",
    c: "Heap",
    d: "Tree",
    correct: "b"
},
{
    question: "Which of the following is an example of a divide and conquer algorithm?",
    a: "Merge Sort",
    b: "Insertion Sort",
    c: "Bubble Sort",
    d: "Linear Search",
    correct: "a"
},
{
    question: "What is the worst-case time complexity of quicksort?",
    a: "O(n)",
    b: "O(n log n)",
    c: "O(n^2)",
    d: "O(log n)",
    correct: "c"
},
{
    question: "Which graph traversal algorithm uses a queue data structure?",
    a: "Depth First Search (DFS)",
    b: "Breadth First Search (BFS)",
    c: "Dijkstra’s Algorithm",
    d: "Prim’s Algorithm",
    correct: "b"
},
{
    question: "What is the height of a balanced binary tree with n nodes?",
    a: "O(log n)",
    b: "O(n)",
    c: "O(1)",
    d: "O(n^2)",
    correct: "a"
},
{
    question: "Which of the following is an advantage of using a linked list over an array?",
    a: "Faster access time",
    b: "Dynamic size",
    c: "Consumes less memory",
    d: "Easier to implement",
    correct: "b"
},
{
    question: "In which data structure are elements removed in reverse order of their insertion?",
    a: "Stack",
    b: "Queue",
    c: "Graph",
    d: "Linked List",
    correct: "a"
},
{
    question: "What is a heap in data structures?",
    a: "A type of tree with parent nodes smaller than child nodes",
    b: "A complete binary tree where nodes are ordered",
    c: "A linear data structure with priority",
    d: "A graph where edges have weights",
    correct: "b"
},
{
    question: "Which of the following algorithms is used to find the shortest path in a graph?",
    a: "Depth First Search",
    b: "Breadth First Search",
    c: "Dijkstra’s Algorithm",
    d: "Merge Sort",
    correct: "c"
},
{
    question: "Which data structure is typically used to implement a priority queue?",
    a: "Stack",
    b: "Heap",
    c: "Graph",
    d: "Queue",
    correct: "b"
},
{
    question: "What is the time complexity of searching for an element in a hash table?",
    a: "O(1)",
    b: "O(log n)",
    c: "O(n)",
    d: "O(n log n)",
    correct: "a"
},
{
    question: "Which traversal algorithm visits the left subtree, root, and then the right subtree?",
    a: "In-order traversal",
    b: "Pre-order traversal",
    c: "Post-order traversal",
    d: "Level-order traversal",
    correct: "a"
},
{
    question: "Which of the following data structures is used in breadth-first search (BFS)?",
    a: "Stack",
    b: "Queue",
    c: "Heap",
    d: "Graph",
    correct: "b"
},
{
    question: "Which sorting algorithm is best for nearly sorted arrays?",
    a: "Insertion Sort",
    b: "Quick Sort",
    c: "Merge Sort",
    d: "Bubble Sort",
    correct: "a"
}
];
let index = 0;
let correct = 0,
incorrect = 0,
total = quizData.length;
let questionBox = document.getElementById("questionBox");
let allInputs = document.querySelectorAll("input[type='radio']")
const loadQuestion = () => {
if (total === index) {
    return quizEnd()
}
reset()
const data = quizData[index]
questionBox.innerHTML = `${index + 1}) ${data.question}`
allInputs[0].nextElementSibling.innerText = data.a
allInputs[1].nextElementSibling.innerText = data.b
allInputs[2].nextElementSibling.innerText = data.c
allInputs[3].nextElementSibling.innerText = data.d
// allInputs[4].nextElementSibling.innerText = data.e
}

document.querySelector("#submit").addEventListener(
"click",
function() {
    const data = quizData[index]
    const ans = getAnswer()
    if (ans === data.correct) {
        correct++;
    } else {
        incorrect++;
    }
    index++;
    loadQuestion()
}
)

const getAnswer = () => {
let ans;
allInputs.forEach(
    (inputEl) => {
        if (inputEl.checked) {
            ans = inputEl.value;
        }
    }
)
return ans;
}

const reset = () => {
allInputs.forEach(
    (inputEl) => {
        inputEl.checked = false;
    }
)
}

const quizEnd = () => {
document.getElementsByClassName("container")[0].innerHTML = `
    <div class="col">
        <h3 class="w-100"> Hii, you've scored ${correct} / ${total} </h3>
    </div>
`
}
loadQuestion(index);