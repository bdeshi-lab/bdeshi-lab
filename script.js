// List of research topics that we will dynamically load onto the page
const topics = [
    'Artificial Intelligence in Healthcare',
    'Data Science for Social Good',
    'Quantum Computing and Cryptography',
    'Sustainable Energy Solutions',
    'Blockchain Technology in Financial Systems'
];

// Function to add topics to the page
function loadResearchTopics() {
    const topicList = document.getElementById('topic-list');

    topics.forEach(topic => {
        // Create a new list item for each topic
        const li = document.createElement('li');
        li.textContent = topic;
        topicList.appendChild(li);
    });
}

// Call the function to load the topics when the page is ready
loadResearchTopics();
