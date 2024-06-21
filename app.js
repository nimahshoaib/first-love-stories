document.addEventListener('DOMContentLoaded', () => {
    const storyForm = document.getElementById('storyForm');
    const storiesDiv = document.getElementById('stories');
    const searchInput = document.getElementById('search');
  
    // Load stories on page load
    loadStories();
  
    if (storyForm) {
      storyForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const title = document.getElementById('title').value;
        const content = document.getElementById('content').value;
  
        const story = { title, content };
        saveStory(story);
        displayStory(story);
        storyForm.reset();
      });
    }
  
    if (searchInput) {
      searchInput.addEventListener('input', () => {
        const query = searchInput.value.toLowerCase();
        filterStories(query);
      });
    }
  
    function saveStory(story) {
      let stories = JSON.parse(localStorage.getItem('stories')) || [];
      stories.push(story);
      localStorage.setItem('stories', JSON.stringify(stories));
    }
  
    function loadStories() {
      storiesDiv.innerHTML = ''; // Clear existing stories
      let stories = JSON.parse(localStorage.getItem('stories')) || [];
      stories.forEach(story => displayStory(story));
    }
  
    function displayStory(story) {
      const storyDiv = document.createElement('div');
      storyDiv.className = 'story';
      storyDiv.innerHTML = `
        <h2>${story.title}</h2>
        <p>${story.content}</p>
      `;
      storiesDiv.appendChild(storyDiv);
    }
  
    function filterStories(query) {
      const stories = document.querySelectorAll('.story');
      stories.forEach(story => {
        const title = story.querySelector('h2').textContent.toLowerCase();
        const content = story.querySelector('p').textContent.toLowerCase();
        if (title.includes(query) || content.includes(query)) {
          story.style.display = '';
        } else {
          story.style.display = 'none';
        }
      });
    }
  });
  