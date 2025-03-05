// Lesson Plan Filtering System

document.addEventListener('DOMContentLoaded', function() {
  const subjectFilter = document.getElementById('subject-filter');
  const gradeFilter = document.getElementById('grade-filter');
  const aiLevelFilter = document.getElementById('ai-level-filter');
  const searchInput = document.getElementById('search');
  const lessonCards = document.querySelectorAll('.lesson-card');
  const noResults = document.querySelector('.no-results');
  
  // Skip if we're not on the lesson plans page
  if (!subjectFilter || !gradeFilter || !aiLevelFilter || !searchInput) {
    return;
  }
  
  function filterLessons() {
    const subjectValue = subjectFilter.value;
    const gradeValue = gradeFilter.value;
    const aiLevelValue = aiLevelFilter.value;
    const searchValue = searchInput.value.toLowerCase();
    
    let visibleCount = 0;
    
    lessonCards.forEach(card => {
      const subject = card.dataset.subject;
      const grade = card.dataset.grade;
      const aiLevel = card.dataset.aiLevel;
      const text = card.textContent.toLowerCase();
      
      const matchesSubject = subjectValue === 'all' || subject === subjectValue;
      const matchesGrade = gradeValue === 'all' || grade.includes(gradeValue);
      const matchesAiLevel = aiLevelValue === 'all' || aiLevel === aiLevelValue;
      const matchesSearch = searchValue === '' || text.includes(searchValue);
      
      if (matchesSubject && matchesGrade && matchesAiLevel && matchesSearch) {
        card.style.display = 'block';
        visibleCount++;
      } else {
        card.style.display = 'none';
      }
    });
    
    if (noResults) {
      noResults.style.display = visibleCount === 0 ? 'block' : 'none';
    }
  }
  
  // Add event listeners
  subjectFilter.addEventListener('change', filterLessons);
  gradeFilter.addEventListener('change', filterLessons);
  aiLevelFilter.addEventListener('change', filterLessons);
  searchInput.addEventListener('input', filterLessons);
});