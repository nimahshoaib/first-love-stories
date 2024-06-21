document.addEventListener('DOMContentLoaded', () => {
    const storyForm = document.getElementById('storyForm');
  
    if (storyForm) {
      storyForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const title = document.getElementById('title').value;
        const content = document.getElementById('content').value;
  
        const story = { title, content };
        saveStory(story);
        storyForm.reset();
        window.location.href = 'index.html'; // Redirect to homepage after submission
      });
    }
  
    function saveStory(story) {
      let stories = JSON.parse(localStorage.getItem('stories')) || [];
      stories.push(story);
      localStorage.setItem('stories', JSON.stringify(stories));
    }
  });
  