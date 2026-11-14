const CAREERS = {
  'Full Stack Developer': {
    requirements: ['HTML', 'CSS', 'JavaScript', 'React', 'Node.js', 'SQL'],
    weight: [12, 12, 22, 18, 18, 18],
    stages: [
      { level: 'BEGINNER', title: 'Get fluent with the web', weeks: 'Weeks 1–2', summary: 'Turn your foundations into interactive pages.', skills: ['JavaScript', 'HTML & CSS'], tasks: ['JavaScript fundamentals and DOM events', 'Build a responsive personal landing page', 'Practice 10 small coding challenges'] },
      { level: 'INTERMEDIATE', title: 'Build full-stack foundations', weeks: 'Weeks 3–5', summary: 'Connect a modern interface to real data.', skills: ['React', 'Node.js', 'APIs'], tasks: ['Create a React task tracker', 'Build a Node.js REST API', 'Connect an app to a SQL database'] },
      { level: 'ADVANCED', title: 'Ship a portfolio project', weeks: 'Weeks 6–8', summary: 'Bring the pieces together and show your work.', skills: ['Full-stack app', 'Git', 'Deployment'], tasks: ['Build and deploy a complete web app', 'Write project documentation', 'Polish your portfolio and practice interviews'] }
    ]
  },
  'Cybersecurity Engineer': {
    requirements: ['Networking', 'Linux', 'Python', 'Security fundamentals', 'SIEM', 'Incident response'],
    weight: [20, 18, 18, 18, 14, 12],
    stages: [
      { level: 'BEGINNER', title: 'Learn the security landscape', weeks: 'Weeks 1–2', summary: 'Build a confident foundation in systems and threats.', skills: ['Networking', 'Linux'], tasks: ['Learn TCP/IP and common network protocols', 'Set up a Linux practice environment', 'Study security principles and threat models'] },
      { level: 'INTERMEDIATE', title: 'Practice defensive security', weeks: 'Weeks 3–5', summary: 'Explore how teams detect and investigate threats.', skills: ['Python', 'SIEM', 'Security'], tasks: ['Write a Python log parser', 'Explore a SIEM alert investigation', 'Complete guided security lab exercises'] },
      { level: 'ADVANCED', title: 'Simulate and document', weeks: 'Weeks 6–8', summary: 'Apply your knowledge to realistic scenarios.', skills: ['Incident response', 'Threat analysis'], tasks: ['Write an incident response playbook', 'Investigate a simulated security event', 'Build a security portfolio case study'] }
    ]
  },
  'Data Analyst': {
    requirements: ['SQL', 'Python', 'Statistics', 'Data visualization', 'Spreadsheets', 'Communication'],
    weight: [24, 20, 16, 16, 12, 12],
    stages: [
      { level: 'BEGINNER', title: 'Strengthen data foundations', weeks: 'Weeks 1–2', summary: 'Turn your SQL and Python into analysis tools.', skills: ['SQL', 'Python'], tasks: ['Practice joins, aggregations, and window functions', 'Clean a public dataset with Python', 'Write a short data question and hypothesis'] },
      { level: 'INTERMEDIATE', title: 'Make data tell a story', weeks: 'Weeks 3–5', summary: 'Analyze, visualize, and explain what you find.', skills: ['Statistics', 'Visualization'], tasks: ['Review descriptive statistics and sampling', 'Build a clear dashboard from a dataset', 'Present three insights with supporting evidence'] },
      { level: 'ADVANCED', title: 'Deliver an analysis project', weeks: 'Weeks 6–8', summary: 'Take a business question from raw data to insight.', skills: ['Portfolio', 'Communication'], tasks: ['Choose a public dataset and business question', 'Complete an end-to-end analysis project', 'Publish a portfolio write-up and practice presenting'] }
    ]
  },
  'Software Developer': {
    requirements: ['Python', 'Data structures', 'Git', 'Testing', 'APIs', 'Problem solving'],
    weight: [18, 20, 14, 16, 16, 16],
    stages: [
      { level: 'BEGINNER', title: 'Sharpen programming basics', weeks: 'Weeks 1–2', summary: 'Build on Python with core computer science ideas.', skills: ['Python', 'Data structures'], tasks: ['Review functions, modules, and error handling', 'Practice arrays, maps, stacks, and queues', 'Solve 10 beginner programming challenges'] },
      { level: 'INTERMEDIATE', title: 'Build reliable software', weeks: 'Weeks 3–5', summary: 'Learn to test, collaborate, and connect systems.', skills: ['Git', 'Testing', 'APIs'], tasks: ['Use branches and pull requests in Git', 'Write unit tests for an existing project', 'Build a small API-driven Python application'] },
      { level: 'ADVANCED', title: 'Deliver production-minded work', weeks: 'Weeks 6–8', summary: 'Create a polished project and communicate your decisions.', skills: ['Architecture', 'Portfolio'], tasks: ['Design and build a complete application', 'Add tests, documentation, and error handling', 'Publish your project and prepare interview stories'] }
    ]
  }
};

const DEFAULT_PROFILE = {
  name: 'Arun',
  email: 'arun@skillpath.demo',
  college: 'Northstar Institute of Technology',
  department: 'Computer Science',
  studyYear: '2nd Year',
  education: 'Computer Science · 2nd Year',
  goal: 'Full Stack Developer',
  skills: ['Python', 'SQL', 'HTML'],
  programmingLanguages: ['Python'],
  certificates: ['Python Essentials', 'SQL Fundamentals'],
  projects: ['Personal portfolio', 'SQL data explorer'],
  interests: ['Web development', 'Building practical projects'],
  photo: ''
};

const INITIAL_LESSONS = [
  { title: 'Python: functions and clean code', module: 'Python essentials', duration: '18 min', completed: true },
  { title: 'SQL: joins that make sense', module: 'Working with data', duration: '22 min', completed: true },
  { title: 'HTML: semantic page structure', module: 'Web foundations', duration: '16 min', completed: true },
  { title: 'CSS: layout with Flexbox', module: 'Web foundations', duration: '20 min', completed: true },
  { title: 'JavaScript: values and variables', module: 'JavaScript, made practical', duration: '19 min', completed: false },
  { title: 'JavaScript: functions and scope', module: 'JavaScript, made practical', duration: '24 min', completed: false },
  { title: 'JavaScript: DOM events', module: 'JavaScript, made practical', duration: '21 min', completed: false },
  { title: 'Build an interactive web page', module: 'JavaScript, made practical', duration: '35 min', completed: false },
  { title: 'React: components and props', module: 'React fundamentals', duration: '25 min', completed: false },
  { title: 'React: state and events', module: 'React fundamentals', duration: '27 min', completed: false },
  { title: 'Node.js: your first server', module: 'Backend beginnings', duration: '30 min', completed: false },
  { title: 'Build a REST API', module: 'Backend beginnings', duration: '40 min', completed: false },
  { title: 'Connect a database', module: 'Backend beginnings', duration: '32 min', completed: false },
  { title: 'Ship your portfolio project', module: 'Launch week', duration: '45 min', completed: false }
];

const RESOURCES = [
  { title: 'JavaScript, made practical', type: 'course', format: 'GUIDED COURSE', duration: '2h 40m', level: 'Beginner friendly', description: 'Learn the building blocks of the web by making interactive things.', art: 'art-purple', mark: 'JS', icon: 'braces', url: 'https://developer.mozilla.org/en-US/docs/Learn/JavaScript' },
  { title: 'React foundations', type: 'course', format: 'LEARNING PATH', duration: '3h 15m', level: 'Beginner', description: 'Build reusable interfaces with components, props, and state.', art: 'art-teal', mark: 'React', icon: 'atom', url: 'https://react.dev/learn' },
  { title: 'Node.js in 100 seconds', type: 'tutorial', format: 'QUICK TUTORIAL', duration: '12 min', level: 'Beginner', description: 'Get the big picture of JavaScript on the server side.', art: 'art-rose', mark: 'Node', icon: 'server', url: 'https://nodejs.org/en/learn' },
  { title: 'SQL practice playground', type: 'practice', format: 'HANDS-ON LAB', duration: 'Self-paced', level: 'All levels', description: 'Practice writing queries with instant feedback and sample data.', art: 'art-blue', mark: 'SQL', icon: 'database', url: 'https://sqlbolt.com/' },
  { title: 'Build a responsive layout', type: 'practice', format: 'MINI PROJECT', duration: '45 min', level: 'Beginner', description: 'Use HTML and CSS to make a polished page that adapts to screens.', art: 'art-gold', mark: 'UI', icon: 'panels-top-left', url: 'https://developer.mozilla.org/en-US/docs/Learn/CSS/CSS_layout' },
  { title: 'Python for Everybody', type: 'course', format: 'OPEN COURSE', duration: 'Self-paced', level: 'Beginner', description: 'A practical route through Python, data, and useful programs.', art: 'art-green', mark: 'Py', icon: 'terminal', url: 'https://www.py4e.com/' }
];

const CAREER_SKILLS = {
  'Full Stack Developer': ['HTML', 'CSS', 'JavaScript', 'React', 'Node.js', 'SQL'],
  'Cybersecurity Engineer': ['Networking', 'Linux', 'Python', 'Security fundamentals', 'SIEM', 'Incident response'],
  'Data Analyst': ['SQL', 'Python', 'Statistics', 'Data visualization', 'Spreadsheets', 'Communication'],
  'Software Developer': ['Python', 'Data structures', 'Git', 'Testing', 'APIs', 'Problem solving']
};

function normalizeProfile(value) {
  const saved = value && typeof value === 'object' ? value : {};
  const normalized = { ...DEFAULT_PROFILE, ...saved };
  const legacyEducation = String(saved.education || '').split('·').map(part => part.trim());
  normalized.department = String(saved.department || legacyEducation[0] || DEFAULT_PROFILE.department);
  normalized.studyYear = String(saved.studyYear || DEFAULT_PROFILE.studyYear);
  normalized.education = `${normalized.department} · ${normalized.studyYear}`;
  for (const key of ['skills', 'programmingLanguages', 'certificates', 'projects', 'interests']) {
    normalized[key] = Array.isArray(saved[key]) ? saved[key].filter(Boolean).map(String) : [...DEFAULT_PROFILE[key]];
  }
  normalized.photo = typeof saved.photo === 'string' ? saved.photo : '';
  return normalized;
}

let profile = normalizeProfile(loadStorage('skillpath-profile', DEFAULT_PROFILE));
let lessons = loadStorage('skillpath-lessons', INITIAL_LESSONS);
let latestAnalysis = loadStorage('skillpath-analysis', null);
let activities = loadStorage('skillpath-activities', [
  { icon: 'check', text: 'Finished HTML page structure', time: 'Today, 9:42 am' },
  { icon: 'sparkles', text: 'AI skill analysis completed', time: 'Yesterday' },
  { icon: 'flame', text: 'Started a 7-day learning streak', time: '2 days ago' }
]);
let activeFilter = 'all';
let charts = {};
let toastTimer;
let profileDraftPhoto = '';

function loadStorage(key, fallback) {
  try {
    const stored = localStorage.getItem(key);
    return stored ? JSON.parse(stored) : structuredClone(fallback);
  } catch {
    return structuredClone(fallback);
  }
}

function saveStorage(key, value) {
  try { localStorage.setItem(key, JSON.stringify(value)); } catch { /* Storage may be disabled in private browsing. */ }
}

function normalize(value) {
  return String(value || '').trim().toLowerCase().replace(/\s+/g, ' ');
}

function getProfileSkills(studentProfile = profile) {
  return [...new Set([...(studentProfile.skills || []), ...(studentProfile.programmingLanguages || [])].map(skill => String(skill).trim()).filter(Boolean).filter((skill, index, list) => list.findIndex(item => normalize(item) === normalize(skill)) === index))];
}

function skillLevel(skill, studentProfile = profile) {
  const target = normalize(skill);
  const found = getProfileSkills(studentProfile).find(item => {
    const name = normalize(item);
    return name === target || (target === 'html' && name === 'basic html') || (target === 'html & css' && ['html', 'css', 'basic html'].includes(name)) || (target === 'html' && name === 'html & css') || (target === 'css' && name === 'html & css') || (target === 'javascript' && name === 'js');
  });
  if (!found) return 0;
  const name = normalize(found);
  if (name === 'python') return 82;
  if (name === 'sql') return 74;
  if (name === 'html & css' || name === 'basic html' || name === 'html' || name === 'css') return 38;
  return 52;
}

function careerScore(career = profile.goal, studentProfile = profile) {
  const requirements = CAREERS[career]?.requirements || CAREERS['Full Stack Developer'].requirements;
  return requirements.length ? Math.round(requirements.filter(skill => skillLevel(skill, studentProfile) > 0).length / requirements.length * 100) : 0;
}

function getMissingSkills(career = profile.goal, studentProfile = profile) {
  return (CAREERS[career]?.requirements || []).filter(skill => skillLevel(skill, studentProfile) === 0);
}

function updateProfileUI() {
  const firstName = profile.name.trim().split(/\s+/)[0] || 'Learner';
  document.getElementById('welcomeName').textContent = firstName;
  document.getElementById('sidebarName').textContent = profile.name;
  renderAvatar('sidebarAvatar', profile.photo, firstName[0].toUpperCase());
  renderAvatar('topAvatar', profile.photo, firstName[0].toUpperCase());
  renderAvatar('profileAvatar', profile.photo, firstName[0].toUpperCase());
  renderProfilePhotoPreview(profileDraftPhoto || profile.photo);
  document.getElementById('profileName').textContent = profile.name;
  document.getElementById('profileEducation').textContent = `${profile.department} · ${profile.studyYear}`;
  document.getElementById('profileGoal').textContent = profile.goal;
  document.getElementById('profileGoalBadge').textContent = `Future ${profile.goal}`;
  document.getElementById('profileEmail').textContent = profile.email || 'Add an email address';
  document.getElementById('profileCollege').textContent = profile.college || 'Add your college';
  document.getElementById('profileDepartmentYear').textContent = `${profile.department || 'Department not added'} · ${profile.studyYear || 'Year not added'}`;
  document.getElementById('roadmapGoal').textContent = profile.goal;
  document.getElementById('mentorGoal').textContent = profile.goal;
  document.getElementById('roadmapSubtitle').textContent = `A practical path from your current skills to ${profile.goal.toLowerCase()}.`;
  document.getElementById('careerSelect').value = profile.goal;
  document.getElementById('careerTitle').textContent = profile.goal;
  renderChips('profileSkills', profile.skills);
  renderChips('profileLanguages', profile.programmingLanguages);
  renderChips('profileCertificates', profile.certificates);
  renderChips('profileInterests', profile.interests);
  document.getElementById('profileProjects').textContent = profile.projects.join(' · ') || 'Add a project to your profile';
  populateProfileForm();
  updateProfileCompletion();
  const score = careerScore();
  document.getElementById('matchScore').textContent = score;
  document.getElementById('careerScore').textContent = `${score}%`;
  document.getElementById('matchMeter').style.width = `${score}%`;
  document.getElementById('matchRing').style.background = `conic-gradient(from -90deg, #a78bfa 0%, #67e8f9 ${score}%, rgba(255,255,255,.08) ${score}%)`;
  document.getElementById('totalSkills').textContent = getProfileSkills().length;
  renderCareerMatch(profile.goal);
  renderRoadmap();
  updateAgents();
}

function renderAvatar(elementId, photo, initial) {
  const avatar = document.getElementById(elementId);
  avatar.replaceChildren();
  if (photo) {
    const image = document.createElement('img');
    image.className = 'avatar-image';
    image.src = photo;
    image.alt = '';
    avatar.append(image);
  } else avatar.textContent = initial;
}

function renderProfilePhotoPreview(photo) {
  const image = document.getElementById('profilePhotoImage');
  const fallback = document.getElementById('profilePhotoFallback');
  if (!image || !fallback) return;
  image.hidden = !photo;
  fallback.hidden = Boolean(photo);
  if (photo) image.src = photo;
  else image.removeAttribute('src');
}

async function prepareProfilePhoto(file) {
  if (!file.type.startsWith('image/')) throw new Error('Choose an image file.');
  if (file.size > 12 * 1024 * 1024) throw new Error('Choose an image under 12 MB.');
  const imageUrl = URL.createObjectURL(file);
  try {
    const image = new Image();
    await new Promise((resolve, reject) => {
      image.onload = resolve;
      image.onerror = reject;
      image.src = imageUrl;
    });
    const scale = Math.min(1, 512 / Math.max(image.naturalWidth, image.naturalHeight));
    const canvas = document.createElement('canvas');
    canvas.width = Math.max(1, Math.round(image.naturalWidth * scale));
    canvas.height = Math.max(1, Math.round(image.naturalHeight * scale));
    const context = canvas.getContext('2d');
    if (!context) throw new Error('Your browser could not process this image.');
    context.drawImage(image, 0, 0, canvas.width, canvas.height);
    return canvas.toDataURL('image/jpeg', 0.84);
  } finally {
    URL.revokeObjectURL(imageUrl);
  }
}

function populateProfileForm() {
  const form = document.getElementById('profileForm');
  if (!form) return;
  form.elements.name.value = profile.name;
  form.elements.email.value = profile.email;
  form.elements.college.value = profile.college;
  form.elements.department.value = profile.department;
  form.elements.studyYear.value = profile.studyYear;
  form.elements.goal.value = profile.goal;
  form.elements.skills.value = profile.skills.join(', ');
  form.elements.programmingLanguages.value = profile.programmingLanguages.join(', ');
  form.elements.certificates.value = profile.certificates.join(', ');
  form.elements.projects.value = profile.projects.join(', ');
  form.elements.interests.value = profile.interests.join(', ');
}

function setProfileEditMode(editing) {
  document.getElementById('profileEditPanel').hidden = !editing;
  document.getElementById('editProfile').hidden = editing;
  document.getElementById('cancelProfile').hidden = !editing;
  document.getElementById('saveProfile').hidden = !editing;
  document.querySelectorAll('#profileForm input, #profileForm select').forEach(field => { field.disabled = !editing; });
  if (editing) document.getElementById('profileForm').elements.name.focus();
}

function updateProfileCompletion() {
  const values = [profile.name, profile.email, profile.college, profile.department, profile.studyYear, profile.skills.length, profile.programmingLanguages.length, profile.certificates.length, profile.projects.length, profile.goal, profile.interests.length, profile.photo];
  const complete = values.filter(value => Array.isArray(value) ? value.length > 0 : String(value || '').trim().length > 0).length;
  const percent = Math.round(complete / values.length * 100);
  document.getElementById('profileCompletionPercent').textContent = `${percent}%`;
  document.getElementById('profileCompletionFill').style.width = `${percent}%`;
}

function renderChips(containerId, values) {
  const container = document.getElementById(containerId);
  container.replaceChildren();
  (values.length ? values : ['Not added']).forEach(value => {
    const chip = document.createElement('span');
    chip.className = 'chip';
    chip.textContent = value;
    container.append(chip);
  });
}

function updateProgressUI() {
  const completed = lessons.filter(lesson => lesson.completed).length;
  const percent = Math.round(completed / lessons.length * 100);
  document.getElementById('progressPercent').textContent = percent;
  document.getElementById('progressDonutValue').textContent = `${percent}%`;
  document.getElementById('progressMeter').style.width = `${percent}%`;
  document.getElementById('progressDonut').style.background = `conic-gradient(#a78bfa 0 ${percent}%, rgba(255,255,255,.08) ${percent}%)`;
  document.getElementById('lessonCount').textContent = `${completed} of ${lessons.length}`;
  document.getElementById('completedLessons').textContent = completed;
  document.getElementById('lessonTotals').textContent = `${completed} complete · ${lessons.length - completed} to go`;
  document.getElementById('progressSummaryText').textContent = `You've completed ${completed} out of ${lessons.length} lessons. Keep your rhythm steady.`;
  document.getElementById('roadmapProgress').textContent = `${percent}%`;
  document.getElementById('roadmapProgressBar').style.width = `${percent}%`;
  document.getElementById('agentProgressResult').textContent = completed >= 4 ? 'Learner is on track' : 'Extra practice recommended';
  document.getElementById('agentProgressDetail').textContent = `${completed} lessons complete · 7-day streak`;
  renderLessons();
}

function renderActivities() {
  const list = document.getElementById('activityList');
  list.replaceChildren();
  activities.slice(0, 3).forEach(item => {
    const row = document.createElement('div');
    row.className = 'activity-item';
    row.innerHTML = `<span class="activity-icon"><i data-lucide="${item.icon}"></i></span><span class="activity-copy"><strong></strong><small></small></span>`;
    row.querySelector('strong').textContent = item.text;
    row.querySelector('small').textContent = item.time;
    list.append(row);
  });
  lucide.createIcons();
}

function addActivity(icon, text) {
  activities.unshift({ icon, text, time: 'Just now' });
  activities = activities.slice(0, 8);
  saveStorage('skillpath-activities', activities);
  renderActivities();
}

function renderCareerMatch(career) {
  const requirements = CAREER_SKILLS[career] || CAREER_SKILLS['Full Stack Developer'];
  const score = careerScore(career);
  document.getElementById('careerTitle').textContent = career;
  document.getElementById('careerScore').textContent = `${score}%`;
  document.getElementById('matchRing').style.background = `conic-gradient(from -90deg, #a78bfa 0%, #67e8f9 ${score}%, rgba(255,255,255,.08) ${score}%)`;
  const rows = document.getElementById('matchSkills');
  rows.replaceChildren();
  requirements.forEach(skill => {
    const level = skillLevel(skill);
    const row = document.createElement('div');
    row.className = 'match-skill-row';
    row.innerHTML = `<div class="match-skill-name"><strong></strong><small class="match-status"></small></div><div class="match-skill-meter"><span></span></div><span class="match-skill-pct"></span>`;
    row.querySelector('.match-skill-name strong').textContent = skill;
    row.querySelector('.match-status').textContent = level >= 65 ? 'Strong' : level > 0 ? 'Growing' : 'To learn';
    if (!level) row.querySelector('.match-status').classList.add('gap');
    row.querySelector('.match-skill-meter span').style.width = `${level}%`;
    row.querySelector('.match-skill-pct').textContent = level ? `${level}%` : 'New';
    rows.append(row);
  });
  const gaps = document.getElementById('careerGaps');
  gaps.replaceChildren();
  const missing = getMissingSkills(career);
  (missing.length ? missing.slice(0, 4) : ['Keep building depth']).forEach((skill, index) => {
    const item = document.createElement('div');
    item.className = 'gap-item';
    item.innerHTML = `<span><i data-lucide="${index === 0 ? 'zap' : 'plus'}"></i></span><strong></strong><small></small>`;
    item.querySelector('strong').textContent = skill;
    item.querySelector('small').textContent = index === 0 ? 'Start here' : 'Next up';
    gaps.append(item);
  });
  lucide.createIcons();
}

function calculateSkillAnalysis(studentProfile) {
  const career = studentProfile.goal;
  const requiredSkills = CAREERS[career]?.requirements || CAREERS['Full Stack Developer'].requirements;
  const currentSkills = getProfileSkills(studentProfile).map(name => ({ name, level: skillLevel(name, studentProfile) }));
  const strongSkills = currentSkills.filter(skill => skill.level >= 65);
  const weakSkills = currentSkills.filter(skill => skill.level > 0 && skill.level < 65);
  const missingSkills = getMissingSkills(career, studentProfile);
  const matchedSkills = requiredSkills.filter(skill => skillLevel(skill, studentProfile) > 0);
  const recommendationOrder = {
    'Full Stack Developer': ['JavaScript', 'CSS', 'React', 'Node.js'],
    'Cybersecurity Engineer': ['Networking', 'Linux', 'Security fundamentals', 'SIEM', 'Incident response'],
    'Data Analyst': ['Statistics', 'Data visualization', 'Spreadsheets', 'Communication'],
    'Software Developer': ['Data structures', 'Testing', 'APIs', 'Problem solving', 'Git']
  }[career] || [];
  const courseBySkill = {
    CSS: 'Build a responsive layout',
    JavaScript: 'JavaScript, made practical',
    React: 'React foundations',
    'Node.js': 'Node.js in 100 seconds',
    HTML: 'Build a responsive layout',
    SQL: 'SQL practice playground',
    Python: 'Python for Everybody',
    Networking: 'Networking fundamentals lab',
    Linux: 'Linux command line practice',
    'Security fundamentals': 'Security essentials',
    SIEM: 'SIEM alert investigation',
    'Incident response': 'Incident response tabletop',
    Statistics: 'Statistics foundations',
    'Data visualization': 'Data visualization practice',
    Spreadsheets: 'Spreadsheet analysis practice',
    Communication: 'Data storytelling workshop',
    'Data structures': 'Data structures coding practice',
    Testing: 'Testing your applications',
    APIs: 'API design practice',
    'Problem solving': 'Problem-solving patterns',
    Git: 'Git and GitHub fundamentals'
  };
  const orderedGaps = [...missingSkills].sort((left, right) => {
    const leftRank = recommendationOrder.indexOf(left);
    const rightRank = recommendationOrder.indexOf(right);
    return (leftRank < 0 ? 99 : leftRank) - (rightRank < 0 ? 99 : rightRank);
  });
  const recommendations = orderedGaps.map(skill => ({
    skill,
    course: courseBySkill[skill] || `${skill} guided practice`,
    reason: skill === orderedGaps[0] ? 'Recommended first' : 'Build this next'
  }));
  const nextSkill = orderedGaps[0];
  const nextSteps = nextSkill
    ? [
      `Start with ${nextSkill} using ${courseBySkill[nextSkill] || 'a guided beginner lesson'}.`,
      `Practice ${orderedGaps.slice(0, 2).join(' and ')} with a small hands-on exercise.`,
      `Add each new skill to your profile, then run this analysis again.`
    ]
    : ['Deepen your strongest skills with a portfolio project.', 'Practice explaining your technical decisions.', 'Re-run the analysis as your career goal evolves.'];

  return {
    name: studentProfile.name,
    career,
    createdAt: new Date().toISOString(),
    currentSkills,
    requiredSkills,
    requiredLevels: requiredSkills.map(skill => skillLevel(skill, studentProfile)),
    strongSkills,
    weakSkills,
    missingSkills,
    matchedSkills,
    matchPercent: requiredSkills.length ? Math.round(matchedSkills.length / requiredSkills.length * 100) : 0,
    recommendations,
    nextSteps
  };
}

function renderAnalysisSkillLevels(containerId, skills, emptyMessage) {
  const container = document.getElementById(containerId);
  container.replaceChildren();
  if (!skills.length) {
    const empty = document.createElement('p');
    empty.className = 'analysis-list-empty';
    empty.textContent = emptyMessage;
    container.append(empty);
    return;
  }
  skills.forEach(skill => {
    const row = document.createElement('div');
    row.className = 'analysis-level-row';
    row.innerHTML = '<div class="analysis-level-heading"><strong></strong><span></span></div><div class="analysis-level-track"><span></span></div>';
    row.querySelector('strong').textContent = skill.name;
    row.querySelector('.analysis-level-heading span').textContent = `${skill.level}%`;
    row.querySelector('.analysis-level-track span').style.width = `${skill.level}%`;
    container.append(row);
  });
}

function clearLatestAnalysis() {
  latestAnalysis = null;
  saveStorage('skillpath-analysis', null);
  renderAnalysisResults(null);
  document.getElementById('analysisStatus').textContent = 'Your profile changed. Run a fresh analysis to update your results.';
  document.getElementById('analysisDescription').textContent = `Ready to compare your saved skills with ${profile.goal}.`;
}

function renderAnalysisResults(analysis = latestAnalysis) {
  const content = document.getElementById('analysisResultsContent');
  const empty = document.getElementById('analysisEmptyState');
  content.hidden = !analysis;
  empty.hidden = Boolean(analysis);
  if (!analysis) return;

  document.getElementById('analysisResultHeading').textContent = `${analysis.name}'s skill analysis`;
  document.getElementById('analysisResultSubtitle').textContent = `Your current skills compared with ${analysis.career} requirements.`;
  document.getElementById('analysisResultMeta').textContent = `Compared ${analysis.currentSkills.length} current skills with ${analysis.career} requirements · sample analysis from your saved profile`;
  document.getElementById('analysisResultTime').textContent = new Intl.DateTimeFormat('en', { dateStyle: 'medium', timeStyle: 'short' }).format(new Date(analysis.createdAt));
  document.getElementById('analysisTotalSkills').textContent = analysis.currentSkills.length;
  document.getElementById('analysisStrongCount').textContent = analysis.strongSkills.length;
  document.getElementById('analysisWeakCount').textContent = analysis.weakSkills.length;
  document.getElementById('analysisMissingCount').textContent = analysis.missingSkills.length;
  document.getElementById('analysisCareerTag').textContent = analysis.career;
  document.getElementById('analysisGapTag').textContent = `${analysis.missingSkills.length} ${analysis.missingSkills.length === 1 ? 'gap' : 'gaps'}`;
  document.getElementById('analysisMatchPercent').textContent = `${analysis.matchPercent}%`;
  document.getElementById('analysisMatchRing').style.background = `conic-gradient(from -90deg, #a78bfa 0%, #67e8f9 ${analysis.matchPercent}%, rgba(255,255,255,.08) ${analysis.matchPercent}%)`;
  document.getElementById('analysisMatchedCount').textContent = `${analysis.matchedSkills.length} / ${analysis.requiredSkills.length}`;
  document.getElementById('analysisMatchSummary').textContent = `${analysis.matchedSkills.length} of ${analysis.requiredSkills.length} required skills are present in your profile.`;
  renderChips('analysisCurrentSkills', analysis.currentSkills.map(skill => skill.name));
  renderChips('analysisRequiredSkills', analysis.requiredSkills);
  renderAnalysisSkillLevels('analysisStrongSkills', analysis.strongSkills, 'Add skills to your profile to find your strengths.');
  renderAnalysisSkillLevels('analysisWeakSkills', analysis.weakSkills, 'No weak skills identified. Keep building your toolkit.');

  const missingContainer = document.getElementById('analysisMissingSkills');
  missingContainer.replaceChildren();
  if (analysis.missingSkills.length) {
    analysis.missingSkills.forEach((skill, index) => {
      const item = document.createElement('div');
      item.className = 'analysis-missing-item';
      item.innerHTML = `<span class="analysis-missing-number">0${index + 1}</span><strong></strong><span class="analysis-missing-label">Not in your profile</span>`;
      item.querySelector('strong').textContent = skill;
      missingContainer.append(item);
    });
  } else {
    const complete = document.createElement('p');
    complete.className = 'analysis-list-empty';
    complete.textContent = 'All required career skills are represented in your profile.';
    missingContainer.append(complete);
  }

  const recommendations = document.getElementById('analysisRecommendations');
  recommendations.replaceChildren();
  analysis.recommendations.forEach((recommendation, index) => {
    const item = document.createElement('article');
    item.className = 'analysis-recommendation';
    item.innerHTML = `<span class="recommendation-rank">0${index + 1}</span><div><span class="recommendation-skill"></span><strong></strong><small></small></div><button class="icon-button analysis-course-link" type="button" aria-label="Open courses"><i data-lucide="arrow-up-right"></i></button>`;
    item.querySelector('.recommendation-skill').textContent = recommendation.skill;
    item.querySelector('strong').textContent = recommendation.course;
    item.querySelector('small').textContent = recommendation.reason;
    item.querySelector('button').addEventListener('click', () => navigate('courses'));
    recommendations.append(item);
  });

  const steps = document.getElementById('analysisNextSteps');
  steps.replaceChildren();
  analysis.nextSteps.forEach(step => {
    const item = document.createElement('li');
    item.textContent = step;
    steps.append(item);
  });

  if (window.Chart) {
    if (charts.analysisComparison) charts.analysisComparison.destroy();
    charts.analysisComparison = new Chart(document.getElementById('analysisComparisonChart'), {
      type: 'bar',
      data: {
        labels: analysis.requiredSkills,
        datasets: [
          { label: 'Current level', data: analysis.requiredLevels, backgroundColor: analysis.requiredLevels.map(level => level > 0 ? 'rgba(103,232,249,.78)' : 'rgba(244,159,206,.42)'), borderRadius: 4, barPercentage: .72 },
          { label: 'Required level', data: analysis.requiredSkills.map(() => 100), backgroundColor: 'rgba(167,139,250,.25)', borderRadius: 4, barPercentage: .72 }
        ]
      },
      options: {
        indexAxis: 'y',
        maintainAspectRatio: false,
        plugins: { legend: { display: false }, tooltip: { backgroundColor: '#20243a', padding: 9, callbacks: { label: context => `${context.dataset.label}: ${context.raw}%` } } },
        scales: {
          x: { min: 0, max: 100, grid: { color: 'rgba(190,198,226,.06)' }, border: { display: false }, ticks: { stepSize: 25, callback: value => `${value}%`, font: { size: 8 } } },
          y: { grid: { display: false }, border: { display: false }, ticks: { font: { size: 9 }, color: '#a9afc3' } }
        }
      }
    });
  }
  lucide.createIcons();
}

function downloadAnalysisReport() {
  if (!latestAnalysis) {
    showToast('Run a skill analysis before downloading a report');
    return;
  }
  const lines = [
    'SKILLPATH AI · SKILL GAP ANALYSIS',
    `Student: ${latestAnalysis.name}`,
    `Target career: ${latestAnalysis.career}`,
    `Career match: ${latestAnalysis.matchPercent}%`,
    '',
    `Strong skills: ${latestAnalysis.strongSkills.map(skill => `${skill.name} (${skill.level}%)`).join(', ') || 'None identified'}`,
    `Skills to improve: ${latestAnalysis.weakSkills.map(skill => `${skill.name} (${skill.level}%)`).join(', ') || 'None identified'}`,
    `Missing skills: ${latestAnalysis.missingSkills.join(', ') || 'None'}`,
    `Recommended courses: ${latestAnalysis.recommendations.map(item => item.course).join(', ') || 'Continue with a portfolio project'}`,
    '',
    'Next steps:',
    ...latestAnalysis.nextSteps.map((step, index) => `${index + 1}. ${step}`),
    '',
    'Generated by SkillPath AI sample analysis. No AI API was used.'
  ];
  const blob = new Blob([lines.join('\n')], { type: 'text/plain;charset=utf-8' });
  const url = URL.createObjectURL(blob);
  const link = document.createElement('a');
  link.href = url;
  link.download = `SkillPath-Analysis-${normalize(latestAnalysis.name).replace(/\s+/g, '-')}.txt`;
  link.click();
  URL.revokeObjectURL(url);
}

function renderRoadmap() {
  const career = CAREERS[profile.goal] || CAREERS['Full Stack Developer'];
  document.getElementById('roadmapDuration').textContent = career.stages[0].weeks.startsWith('Weeks') ? '8 weeks' : '8 weeks';
  const container = document.getElementById('roadmapStages');
  container.replaceChildren();
  career.stages.forEach((stage, stageIndex) => {
    const card = document.createElement('article');
    const completedCount = lessons.filter(lesson => lesson.completed).length;
    card.className = `stage-card ${stageIndex === 0 ? 'current' : ''} ${completedCount >= 4 && stageIndex === 0 ? 'complete' : ''}`;
    const taskMarkup = stage.tasks.map((task, taskIndex) => {
      const lessonIndex = stageIndex === 0 ? taskIndex + 4 : -1;
      const checked = lessonIndex >= 0 && lessons[lessonIndex]?.completed;
      return `<label class="stage-task ${checked ? 'done' : ''}"><input type="checkbox" data-lesson="${lessonIndex}" ${checked ? 'checked' : ''}><span></span></label>`;
    }).join('');
    card.innerHTML = `<div class="stage-top"><span class="stage-number"><i data-lucide="${stageIndex === 0 ? 'circle-dot' : stageIndex === 1 ? 'layers-2' : 'rocket'}"></i> ${stage.level}</span><span class="stage-duration">${stage.weeks}</span></div><h3>${stage.title}</h3><p>${stage.summary}</p><div class="stage-skills">${stage.skills.map(skill => `<span>${escapeHTML(skill)}</span>`).join('')}</div><div class="stage-task-list">${stage.tasks.map((task, taskIndex) => {
      const lessonIndex = stageIndex === 0 ? taskIndex + 4 : -1;
      const checked = lessonIndex >= 0 && lessons[lessonIndex]?.completed;
      return `<label class="stage-task ${checked ? 'done' : ''}"><input type="checkbox" data-lesson="${lessonIndex}" ${checked ? 'checked' : ''}><span>${escapeHTML(task)}</span></label>`;
    }).join('')}</div><div class="stage-cta"><button class="text-button" data-go="courses">Explore resources <i data-lucide="arrow-right"></i></button></div>`;
    container.append(card);
  });
  container.querySelectorAll('input[data-lesson]').forEach(input => input.addEventListener('change', () => {
    const index = Number(input.dataset.lesson);
    if (index >= 0 && lessons[index]) setLesson(index, input.checked);
    else showToast('Task added to your focus list');
  }));
  lucide.createIcons();
}

function renderLessons() {
  const list = document.getElementById('lessonList');
  if (!list) return;
  list.replaceChildren();
  lessons.forEach((lesson, index) => {
    const row = document.createElement('div');
    row.className = `lesson-row ${lesson.completed ? 'completed' : ''}`;
    row.innerHTML = `<button class="lesson-check" aria-label="${lesson.completed ? 'Mark incomplete' : 'Mark completed'}: ${escapeHTML(lesson.title)}"><i data-lucide="check"></i></button><div><strong></strong><small></small></div><span></span>`;
    row.querySelector('strong').textContent = lesson.title;
    row.querySelector('small').textContent = lesson.module;
    row.querySelector('span').textContent = lesson.duration;
    row.querySelector('.lesson-check').addEventListener('click', () => setLesson(index, !lesson.completed));
    list.append(row);
  });
  lucide.createIcons();
}

function setLesson(index, completed) {
  if (lessons[index].completed === completed) return;
  lessons[index].completed = completed;
  saveStorage('skillpath-lessons', lessons);
  updateProgressUI();
  renderRoadmap();
  if (completed) {
    addActivity('circle-check-big', `Completed ${lessons[index].title}`);
    showToast('Lesson marked complete. Nice work!');
  } else showToast('Lesson moved back to your list');
}

function renderResources(search = '') {
  const grid = document.getElementById('courseGrid');
  const query = normalize(search);
  const filtered = RESOURCES.filter(resource => (activeFilter === 'all' || resource.type === activeFilter) && (!query || `${resource.title} ${resource.description} ${resource.format}`.toLowerCase().includes(query)));
  document.getElementById('resourceCount').textContent = `${filtered.length} resource${filtered.length === 1 ? '' : 's'}`;
  grid.replaceChildren();
  if (!filtered.length) {
    const empty = document.createElement('div');
    empty.className = 'empty-results';
    empty.textContent = 'No resources found. Try another search.';
    grid.append(empty);
    return;
  }
  filtered.forEach(resource => {
    const card = document.createElement('article');
    card.className = 'resource-card';
    card.innerHTML = `<div class="resource-art ${resource.art}"><span>${escapeHTML(resource.mark)}</span><i data-lucide="${resource.icon}"></i></div><div class="resource-content"><div class="resource-meta"><span>${resource.format}</span><small>${resource.duration}</small></div><h3>${escapeHTML(resource.title)}</h3><p>${escapeHTML(resource.description)}</p><div class="resource-footer"><span class="resource-level">${resource.level}</span><a class="resource-link" href="${resource.url}" target="_blank" rel="noopener noreferrer">Open resource <i data-lucide="arrow-up-right"></i></a></div></div>`;
    grid.append(card);
  });
  lucide.createIcons();
}

function updateAgents() {
  document.getElementById('agentProfileResult').textContent = `${profile.name.split(/\s+/)[0]} · ${profile.education.split('·')[0].trim() || 'Learner'}`;
  document.getElementById('agentSkillsResult').textContent = `${profile.skills.length} profile skills mapped`;
  document.getElementById('agentCareerResult').textContent = `${careerScore()}% career alignment`;
  document.getElementById('agentCareerName').textContent = profile.goal;
  document.getElementById('agentRoadmapResult').textContent = `${profile.goal} roadmap ready`;
}

function renderAgentLog() {
  const entries = [
    ['user-round-search', 'Profile Agent', `${profile.name.split(/\s+/)[0]}'s profile and learning context are ready.`],
    ['scan-search', 'Skill Analysis Agent', `${profile.skills.length} existing skills mapped against your goal.`],
    ['briefcase-business', 'Career Agent', `${careerScore()}% match for ${profile.goal}.`],
    ['map', 'Learning Agent', 'Your week-by-week learning path is ready to explore.'],
    ['chart-no-axes-combined', 'Progress Agent', `${lessons.filter(lesson => lesson.completed).length} completed lessons are shaping your recommendations.`]
  ];
  const list = document.getElementById('agentLog');
  list.replaceChildren();
  entries.forEach(([icon, name, text]) => {
    const row = document.createElement('div');
    row.className = 'agent-log-item';
    row.innerHTML = `<span class="agent-log-icon"><i data-lucide="${icon}"></i></span><div><strong></strong><small></small></div>`;
    row.querySelector('strong').textContent = name;
    row.querySelector('small').textContent = text;
    list.append(row);
  });
  lucide.createIcons();
}

function escapeHTML(value) {
  return String(value).replace(/[&<>"']/g, character => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' })[character]);
}

function showToast(message) {
  document.getElementById('toastMessage').textContent = message;
  const toast = document.getElementById('toast');
  toast.classList.add('show');
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => toast.classList.remove('show'), 2600);
}

function navigate(viewName) {
  const target = document.getElementById(`view-${viewName}`);
  if (!target) return;
  document.querySelectorAll('.view').forEach(view => view.classList.toggle('active', view === target));
  document.querySelectorAll('.nav-item').forEach(item => item.classList.toggle('active', item.dataset.view === viewName));
  document.getElementById('pageLabel').textContent = target.dataset.title;
  document.getElementById('sidebar').classList.remove('open');
  if (viewName === 'agents') renderAgentLog();
  if (viewName === 'progress') updateProgressChart();
  if (viewName === 'analysis-results') renderAnalysisResults();
  window.requestAnimationFrame(() => Object.values(charts).forEach(chart => chart.resize()));
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

function initCharts() {
  if (!window.Chart) return;
  Chart.defaults.color = '#8188a2';
  Chart.defaults.font.family = "'DM Sans', sans-serif";
  const overviewCanvas = document.getElementById('overviewChart');
  charts.overview = new Chart(overviewCanvas, {
    type: 'line',
    data: {
      labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
      datasets: [
        { label: 'Learning hours', data: [0.6, 1.2, 0.7, 1.4, 0.9, 1.1, 0.6], borderColor: '#a78bfa', backgroundColor: 'rgba(167,139,250,.13)', borderWidth: 2, pointRadius: 2.5, pointBackgroundColor: '#c4b5fd', fill: true, tension: .4, yAxisID: 'y' },
        { label: 'Lessons', data: [1, 2, 1, 3, 1, 2, 1], borderColor: '#67e8f9', backgroundColor: 'transparent', borderWidth: 1.5, pointRadius: 2, pointBackgroundColor: '#67e8f9', tension: .4, yAxisID: 'y1' }
      ]
    },
    options: { maintainAspectRatio: false, interaction: { intersect: false, mode: 'index' }, plugins: { legend: { display: false }, tooltip: { backgroundColor: '#20243a', borderColor: 'rgba(255,255,255,.1)', borderWidth: 1, titleFont: { size: 10 }, bodyFont: { size: 9 }, padding: 9 } }, scales: { x: { grid: { display: false }, border: { display: false }, ticks: { font: { size: 8 }, color: '#777f98' } }, y: { min: 0, max: 2, grid: { color: 'rgba(190,198,226,.06)' }, border: { display: false }, ticks: { stepSize: 1, font: { size: 7 }, color: '#6f7791' } }, y1: { display: false, min: 0, max: 4 } } }
  });
  charts.skills = new Chart(document.getElementById('skillsChart'), {
    type: 'radar',
    data: { labels: ['Python', 'SQL', 'HTML & CSS', 'JavaScript', 'React', 'Node.js'], datasets: [{ data: [82, 74, 38, 0, 0, 0], borderColor: '#a78bfa', backgroundColor: 'rgba(167,139,250,.16)', pointBackgroundColor: ['#c4b5fd','#c4b5fd','#67e8f9','#59617e','#59617e','#59617e'], pointBorderColor: '#17192c', pointRadius: 3, borderWidth: 2 }] },
    options: { maintainAspectRatio: false, plugins: { legend: { display: false }, tooltip: { callbacks: { label: context => `${context.raw}%` } } }, scales: { r: { min: 0, max: 100, ticks: { display: false, stepSize: 25 }, grid: { color: 'rgba(190,198,226,.09)' }, angleLines: { color: 'rgba(190,198,226,.09)' }, pointLabels: { color: '#a9afc3', font: { size: 9, family: "'DM Sans', sans-serif" } } } } }
  });
  updateProgressChart();
}

function updateProgressChart() {
  if (!window.Chart) return;
  const canvas = document.getElementById('progressChart');
  if (!canvas) return;
  if (charts.progress) return;
  charts.progress = new Chart(canvas, {
    type: 'bar',
    data: { labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8'], datasets: [{ label: 'Lessons completed', data: [3, 4, 2, 5, 3, 4, 5, 4], borderRadius: 4, borderSkipped: false, backgroundColor: ['rgba(167,139,250,.54)','rgba(167,139,250,.65)','rgba(167,139,250,.48)','rgba(167,139,250,.7)','rgba(167,139,250,.59)','rgba(167,139,250,.67)','rgba(103,232,249,.76)','rgba(103,232,249,.9)'], barPercentage: .55 }] },
    options: { maintainAspectRatio: false, plugins: { legend: { display: false }, tooltip: { backgroundColor: '#20243a', padding: 9, titleFont: { size: 10 }, bodyFont: { size: 9 }, callbacks: { label: context => `${context.raw} lessons` } } }, scales: { x: { grid: { display: false }, border: { display: false }, ticks: { font: { size: 8 }, color: '#777f98' } }, y: { beginAtZero: true, max: 6, grid: { color: 'rgba(190,198,226,.06)' }, border: { display: false }, ticks: { stepSize: 2, font: { size: 8 }, color: '#777f98' } } } }
  });
}

function mentorReply(question) {
  const text = normalize(question);
  const name = profile.name.split(/\s+/)[0];
  if (/(career|job|role|full.?stack|right for me)/.test(text)) return `${name}, ${profile.goal} is a practical goal with a lot of room to explore. Your ${profile.skills.slice(0, 2).join(' and ')} foundation already gives you a useful start. Try a small project next, then see which parts of the work you enjoy most.`;
  if (/(next|learn|start|roadmap|where)/.test(text)) {
    const next = getMissingSkills(profile.goal)[0] || 'a portfolio project';
    return `Your best next step is ${next}. It's one of the most important gaps between your current skills and ${profile.goal}. Start with the beginner lesson in your roadmap, then reinforce it with a small hands-on exercise. Short, consistent sessions will make this feel manageable.`;
  }
  if (/(javascript|js|code|function|bug|program)/.test(text)) return `A good way to get comfortable with JavaScript is to use it for something visible. Start with variables and functions, then make a button respond to a click. Once that works, try changing text on the page. I can help break any part into smaller steps.`;
  if (/(poor|bad|fail|quiz|assessment|stuck|hard)/.test(text)) return `Getting a question wrong is useful information, not a verdict. Revisit the concept that felt unfamiliar, then try a few smaller practice problems before retaking the quiz. I've added a revision recommendation to your learning path so you can practice without rushing ahead.`;
  if (/(project|build|portfolio|practice)/.test(text)) return `Try building a ${profile.goal === 'Data Analyst' ? 'small dataset dashboard that answers one clear question' : profile.goal === 'Cybersecurity Engineer' ? 'Python log analyzer that flags unusual activity' : 'responsive task tracker with a form and interactive filters'}. Keep the first version tiny, then add one feature at a time. A finished small project teaches more than a perfect unfinished one.`;
  return `That's a thoughtful question. With your ${profile.skills.join(', ')} background and goal of ${profile.goal}, I'd break it into one small concept to learn and one thing to build. Tell me which part feels most confusing, and we'll work through it together.`;
}

function sendChatMessage(message) {
  const cleanMessage = message.trim();
  if (!cleanMessage) return;
  addChatBubble(cleanMessage, 'user');
  const input = document.getElementById('chatInput');
  input.value = '';
  window.setTimeout(() => addChatBubble(mentorReply(cleanMessage), 'assistant'), 450);
}

function addChatBubble(text, role) {
  const messages = document.getElementById('chatMessages');
  const bubble = document.createElement('div');
  bubble.className = `chat-message ${role === 'user' ? 'user-message' : 'assistant-message'}`;
  const icon = role === 'user' ? profile.name.trim().split(/\s+/)[0][0].toUpperCase() : '<i data-lucide="sparkles"></i>';
  bubble.innerHTML = `<span class="chat-avatar">${icon}</span><div class="message-body"><p></p><span>Just now</span></div>`;
  bubble.querySelector('p').textContent = text;
  messages.append(bubble);
  lucide.createIcons();
  messages.scrollTop = messages.scrollHeight;
}

function generateRoadmap() {
  renderRoadmap();
  const missing = getMissingSkills(profile.goal);
  document.getElementById('roadmapSubtitle').textContent = missing.length ? `A practical path to ${profile.goal}, starting with ${missing[0]}.` : `A practical path to deepen your skills and grow as a ${profile.goal.toLowerCase()}.`;
  document.getElementById('agentRoadmapResult').textContent = `${profile.goal} roadmap refreshed`;
  addActivity('map', `Roadmap generated for ${profile.goal}`);
  showToast('Your personalized roadmap is ready');
}

function setWorkflowProgress(percent, activeAgent, isRunning) {
  const progress = document.getElementById('workflowProgressBar');
  document.getElementById('workflowPercent').textContent = `${percent}%`;
  document.getElementById('workflowProgressFill').style.width = `${percent}%`;
  document.getElementById('workflowActiveAgent').textContent = activeAgent;
  progress.setAttribute('aria-valuenow', String(percent));
  document.getElementById('workflowProgressPanel').setAttribute('aria-busy', String(isRunning));
  document.getElementById('workflowLoader').hidden = !isRunning;
}

function setAgentStatus(agentId, state) {
  const status = document.querySelector(`[data-agent-status="${agentId}"]`);
  const card = document.querySelector(`[data-agent="${agentId}"]`);
  if (!status || !card) return;
  status.className = `agent-card-status ${state}`;
  status.textContent = state[0].toUpperCase() + state.slice(1);
  card.classList.toggle('processing', state === 'processing');
  card.classList.toggle('completed', state === 'completed');
}

function setAgentResult(agentId, title, detail) {
  const result = document.querySelector(`[data-agent="${agentId}"] .agent-result`);
  result.querySelector('strong').textContent = title;
  result.querySelector('small').textContent = detail;
}

function renderSummaryList(elementId, items) {
  const list = document.getElementById(elementId);
  list.replaceChildren();
  (items.length ? items : ['No gaps identified']).forEach(item => {
    const row = document.createElement('li');
    row.textContent = item;
    list.append(row);
  });
}

function buildWorkflowSteps() {
  const courseBySkill = {
    JavaScript: 'JavaScript, made practical',
    React: 'React foundations',
    'Node.js': 'Node.js in 100 seconds',
    SQL: 'SQL practice playground',
    Python: 'Python for Everybody',
    'HTML & CSS': 'Build a responsive layout',
    'Basic HTML': 'Build a responsive layout',
    Networking: 'Networking fundamentals lab',
    Linux: 'Linux command line practice',
    'Security fundamentals': 'Security essentials',
    SIEM: 'SIEM alert investigation',
    'Incident response': 'Incident response tabletop',
    Statistics: 'Statistics foundations',
    'Data visualization': 'Data visualization practice',
    Spreadsheets: 'Spreadsheet analysis practice',
    Communication: 'Data storytelling workshop',
    'Data structures': 'Data structures coding practice',
    Git: 'Git and GitHub fundamentals',
    Testing: 'Testing your applications',
    APIs: 'API design practice',
    'Problem solving': 'Problem-solving patterns'
  };

  return [
    {
      id: 'profile',
      title: 'Profile Agent',
      run: context => {
        context.student = { ...profile, skills: getProfileSkills(profile) };
        return {
          title: 'Student profile understood',
          detail: `${context.student.name} · ${context.student.skills.join(', ') || 'No skills added'} · goal: ${context.student.goal}`
        };
      }
    },
    {
      id: 'skills',
      title: 'Skill Analysis Agent',
      run: context => {
        context.skillLevels = context.student.skills.map(skill => ({ name: skill, level: skillLevel(skill, context.student) }));
        context.strongSkills = context.skillLevels.filter(skill => skill.level >= 65).map(skill => skill.name);
        context.weakSkills = context.skillLevels.filter(skill => skill.level > 0 && skill.level < 65).map(skill => skill.name);
        context.skillGaps = getMissingSkills(context.student.goal, context.student);
        return {
          title: `${context.strongSkills.length} strengths · ${context.weakSkills.length} growing · ${context.skillGaps.length} gaps`,
          detail: `Strong: ${context.strongSkills.join(', ') || 'keep building'} · Next: ${context.skillGaps.slice(0, 3).join(', ') || 'deepen current skills'}`
        };
      }
    },
    {
      id: 'career',
      title: 'Career Agent',
      run: context => {
        context.careerMatch = careerScore(context.student.goal, context.student);
        context.careerRequirements = CAREER_SKILLS[context.student.goal] || [];
        return {
          title: `${context.careerMatch}% match · ${context.student.goal}`,
          detail: `${context.careerRequirements.filter(skill => skillLevel(skill, context.student) > 0).length} of ${context.careerRequirements.length} required skills underway`
        };
      }
    },
    {
      id: 'learning',
      title: 'Learning Agent',
      run: context => {
        context.roadmap = CAREERS[context.student.goal]?.stages || CAREERS['Full Stack Developer'].stages;
        context.recommendedCourses = context.skillGaps.slice(0, 3).map(skill => courseBySkill[skill] || `${skill} guided practice`);
        if (!context.recommendedCourses.length) context.recommendedCourses = ['Build a portfolio project', 'Practice interview challenges'];
        return {
          title: `${context.roadmap.length}-stage roadmap personalized`,
          detail: `Start with ${context.roadmap[0].title} · ${context.recommendedCourses[0]}`
        };
      }
    },
    {
      id: 'progress',
      title: 'Progress Agent',
      run: context => {
        context.completedLessons = lessons.filter(lesson => lesson.completed).length;
        context.progressPercent = Math.round(context.completedLessons / lessons.length * 100);
        context.nextAction = context.progressPercent < 35
          ? `Complete “${lessons.find(lesson => !lesson.completed)?.title || 'your next lesson'}” to build a steady learning rhythm.`
          : `Continue with ${context.recommendedCourses[0]} and finish one focused practice session.`;
        context.progressSuggestion = context.progressPercent < 35
          ? 'Keep sessions short and revisit one concept before moving ahead.'
          : 'Your pace is steady; keep alternating lessons with hands-on practice.';
        return {
          title: `${context.completedLessons} lessons complete · ${context.progressPercent}% progress`,
          detail: context.progressSuggestion
        };
      }
    }
  ];
}

function renderWorkflowSummary(context) {
  renderSummaryList('summarySkillGaps', context.skillGaps);
  document.getElementById('summaryCareerMatch').textContent = `${context.careerMatch}%`;
  document.getElementById('summaryCareerDetail').textContent = `Match for ${context.student.goal}`;
  renderSummaryList('summaryCourses', context.recommendedCourses);
  renderSummaryList('summaryRoadmap', context.roadmap.map(stage => `${stage.level}: ${stage.title} (${stage.weeks})`));
  document.getElementById('summaryNextAction').textContent = context.nextAction;
  document.getElementById('workflowSummary').hidden = false;
}

async function runAgentWorkflow() {
  const button = document.getElementById('runAgents');
  if (button.disabled) return;

  const status = document.getElementById('workflowStatus');
  const summary = document.getElementById('workflowSummary');
  const message = document.getElementById('workflowMessage');
  const steps = buildWorkflowSteps();
  const context = {};

  button.disabled = true;
  button.innerHTML = '<i class="workflow-loading-icon" data-lucide="loader-circle"></i> Agents collaborating...';
  lucide.createIcons();
  summary.hidden = true;
  status.textContent = 'Agents collaborating...';
  message.textContent = 'AI Agents are collaborating...';
  setWorkflowProgress(0, 'Preparing Profile Agent...', true);
  steps.forEach(step => {
    setAgentStatus(step.id, 'pending');
    setAgentResult(step.id, 'Waiting for agent run', 'This agent has not started yet');
  });

  try {
    for (const [index, step] of steps.entries()) {
      const card = document.querySelector(`[data-agent="${step.id}"]`);
      setAgentStatus(step.id, 'processing');
      status.textContent = `${step.title} processing`;
      setWorkflowProgress(index * 20, `${step.title} is processing...`, true);
      card.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'nearest' });
      await new Promise(resolve => window.setTimeout(resolve, 720));

      const result = step.run(context);
      setAgentResult(step.id, result.title, result.detail);
      setAgentStatus(step.id, 'completed');
      setWorkflowProgress((index + 1) * 20, `${step.title} completed`, true);
    }

    renderWorkflowSummary(context);
    message.textContent = 'All five agents completed successfully.';
    status.textContent = 'Workflow complete';
    setWorkflowProgress(100, 'Your personalized action plan is ready', false);
    renderAgentLog();
    addActivity('network', 'AI agent team completed a personalized workflow');
    showToast('All five agents completed successfully');
  } catch (error) {
    message.textContent = 'The sample workflow needs another try.';
    status.textContent = 'Workflow paused';
    setWorkflowProgress(Number(document.getElementById('workflowPercent').textContent.replace('%', '')), 'Please run the workflow again', false);
    console.error('Sample agent workflow failed:', error);
    showToast('The workflow could not finish. Please try again.');
  } finally {
    button.disabled = false;
    button.innerHTML = '<i data-lucide="play"></i> Run agent workflow';
    lucide.createIcons();
  }
}

function init() {
  document.getElementById('todayLabel').textContent = new Intl.DateTimeFormat('en', { weekday: 'short', month: 'short', day: 'numeric' }).format(new Date());
  lucide.createIcons();
  updateProfileUI();
  updateProgressUI();
  renderActivities();
  renderResources();
  renderAgentLog();
  initCharts();

  document.querySelectorAll('[data-view]').forEach(item => item.addEventListener('click', () => navigate(item.dataset.view)));
  document.querySelectorAll('[data-go]').forEach(item => item.addEventListener('click', () => navigate(item.dataset.go)));
  document.getElementById('menuToggle').addEventListener('click', () => document.getElementById('sidebar').classList.toggle('open'));

  const profileForm = document.getElementById('profileForm');
  document.getElementById('editProfile').addEventListener('click', () => {
    profileDraftPhoto = profile.photo;
    populateProfileForm();
    renderProfilePhotoPreview(profileDraftPhoto);
    document.getElementById('removeProfilePhoto').disabled = !profileDraftPhoto;
    setProfileEditMode(true);
  });
  document.getElementById('cancelProfile').addEventListener('click', () => {
    profileDraftPhoto = profile.photo;
    document.getElementById('profilePhotoInput').value = '';
    populateProfileForm();
    renderProfilePhotoPreview(profile.photo);
    setProfileEditMode(false);
  });
  document.getElementById('profilePhotoInput').addEventListener('change', async event => {
    const file = event.target.files?.[0];
    if (!file) return;
    try {
      profileDraftPhoto = await prepareProfilePhoto(file);
      renderProfilePhotoPreview(profileDraftPhoto);
      document.getElementById('removeProfilePhoto').disabled = false;
      showToast('Photo preview ready. Save changes to keep it.');
    } catch (error) {
      event.target.value = '';
      showToast(error.message || 'This photo could not be loaded');
    }
  });
  document.getElementById('removeProfilePhoto').addEventListener('click', () => {
    profileDraftPhoto = '';
    document.getElementById('profilePhotoInput').value = '';
    document.getElementById('removeProfilePhoto').disabled = true;
    renderProfilePhotoPreview('');
  });
  document.addEventListener('keydown', event => { if (event.key === 'Escape') { setProfileEditMode(false); document.getElementById('sidebar').classList.remove('open'); } });
  profileForm.addEventListener('submit', event => {
    event.preventDefault();
    const formData = new FormData(profileForm);
    const splitValues = name => String(formData.get(name) || '').split(',').map(value => value.trim()).filter(Boolean);
    const previousGoal = profile.goal;
    profile = normalizeProfile({
      name: String(formData.get('name')).trim(),
      email: String(formData.get('email')).trim(),
      college: String(formData.get('college')).trim(),
      department: String(formData.get('department')).trim(),
      studyYear: String(formData.get('studyYear')),
      goal: String(formData.get('goal')),
      skills: splitValues('skills'),
      programmingLanguages: splitValues('programmingLanguages'),
      certificates: splitValues('certificates'),
      projects: splitValues('projects'),
      interests: splitValues('interests'),
      photo: profileDraftPhoto
    });
    saveStorage('skillpath-profile', profile);
    profileDraftPhoto = '';
    updateProfileUI();
    setProfileEditMode(false);
    document.getElementById('profilePhotoInput').value = '';
    if (previousGoal !== profile.goal) {
      addActivity('target', `Career goal updated to ${profile.goal}`);
      showToast(`Roadmap adapted for ${profile.goal}`);
    } else showToast('Your profile has been saved');
    clearLatestAnalysis();
    if (charts.skills) {
      charts.skills.data.datasets[0].data = ['Python', 'SQL', 'HTML & CSS', 'JavaScript', 'React', 'Node.js'].map(skillLevel);
      charts.skills.update();
    }
  });

  document.getElementById('careerSelect').addEventListener('change', event => {
    const career = event.target.value;
    profile.goal = career;
    saveStorage('skillpath-profile', profile);
    updateProfileUI();
    renderCareerMatch(career);
    clearLatestAnalysis();
    addActivity('briefcase-business', `Explored ${career} career match`);
    showToast(`Career match updated for ${career}`);
  });

  document.getElementById('analyzeSkills').addEventListener('click', async () => {
    const button = document.getElementById('analyzeSkills');
    button.disabled = true;
    button.innerHTML = '<i class="workflow-loading-icon" data-lucide="loader-circle"></i> Analyzing your toolkit';
    lucide.createIcons();
    const savedProfile = localStorage.getItem('skillpath-profile');
    if (savedProfile) profile = normalizeProfile(loadStorage('skillpath-profile', profile));
    updateProfileUI();
    document.getElementById('analysisStatus').textContent = 'Analyzing your saved skills and career requirements...';
    try {
      await new Promise(resolve => window.setTimeout(resolve, 350));
      latestAnalysis = calculateSkillAnalysis(profile);
      saveStorage('skillpath-analysis', latestAnalysis);
      renderAnalysisResults(latestAnalysis);
      const missing = latestAnalysis.missingSkills;
      document.getElementById('analysisStatus').textContent = `${latestAnalysis.currentSkills.length} skills analyzed · ${missing.length} missing for ${profile.goal}`;
      document.getElementById('analysisDescription').textContent = `Strongest skill: ${latestAnalysis.strongSkills[0]?.name || 'Keep building'}. ${missing.length ? `Recommended next: ${latestAnalysis.recommendations[0]?.skill || missing[0]}.` : 'Keep deepening your career skills.'}`;
      document.getElementById('analysisTime').textContent = 'Updated just now';
      if (charts.skills) {
        charts.skills.data.datasets[0].data = ['Python', 'SQL', 'HTML & CSS', 'JavaScript', 'React', 'Node.js'].map(skillLevel);
        charts.skills.update();
      }
      addActivity('scan-search', `Skill analysis completed for ${profile.goal}`);
      navigate('analysis-results');
      showToast('Your personalized analysis is ready');
    } catch (error) {
      console.error('Skill analysis failed:', error);
      showToast('Analysis could not finish. Please try again.');
    } finally {
      button.disabled = false;
      button.innerHTML = '<i data-lucide="sparkles"></i> Analyze my skills';
      lucide.createIcons();
    }
  });
  document.getElementById('downloadAnalysis').addEventListener('click', downloadAnalysisReport);

  document.getElementById('generateRoadmap').addEventListener('click', generateRoadmap);
  document.getElementById('runAgents').addEventListener('click', runAgentWorkflow);
  document.getElementById('courseSearch').addEventListener('input', event => renderResources(event.target.value));
  document.querySelectorAll('.filter-chip').forEach(button => button.addEventListener('click', () => {
    activeFilter = button.dataset.filter;
    document.querySelectorAll('.filter-chip').forEach(chip => chip.classList.toggle('active', chip === button));
    renderResources(document.getElementById('courseSearch').value);
  }));

  document.getElementById('chatForm').addEventListener('submit', event => {
    event.preventDefault();
    sendChatMessage(document.getElementById('chatInput').value);
  });
  document.querySelectorAll('.suggestion-chip').forEach(button => button.addEventListener('click', () => sendChatMessage(button.textContent)));
  document.getElementById('clearChat').addEventListener('click', () => {
    const messages = document.getElementById('chatMessages');
    messages.innerHTML = '<div class="chat-date">TODAY · YOUR LEARNING SESSION</div>';
    addChatBubble(`Conversation cleared. What would you like to work on, ${profile.name.split(/\s+/)[0]}?`, 'assistant');
  });

  document.getElementById('poorAssessment').addEventListener('click', () => {
    document.getElementById('agentProgressResult').textContent = 'Revision recommended';
    document.getElementById('agentProgressDetail').textContent = 'Quiz signals a need for more practice';
    document.getElementById('progressSummaryText').textContent = 'A quiz surfaced a concept worth revisiting. Review the revision recommendation below, then try again.';
    const firstPending = lessons.findIndex(lesson => !lesson.completed);
    if (firstPending >= 0) {
      lessons[firstPending].module += ' · REVISIT';
      saveStorage('skillpath-lessons', lessons);
      renderLessons();
    }
    addActivity('rotate-ccw', 'Revision practice recommended after a tough quiz');
    showToast('Revision lessons and extra practice added to your plan');
  });

  document.getElementById('chartRange').addEventListener('change', event => {
    if (!charts.overview) return;
    const monthly = event.target.value === 'month';
    charts.overview.data.labels = monthly ? ['Wk 1', 'Wk 2', 'Wk 3', 'Wk 4'] : ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];
    charts.overview.data.datasets[0].data = monthly ? [4.1, 5.3, 4.7, 6.5] : [0.6, 1.2, 0.7, 1.4, 0.9, 1.1, 0.6];
    charts.overview.data.datasets[1].data = monthly ? [7, 9, 8, 12] : [1, 2, 1, 3, 1, 2, 1];
    charts.overview.options.scales.y.max = monthly ? 8 : 2;
    charts.overview.options.scales.y1.max = monthly ? 14 : 4;
    charts.overview.update();
  });
}

document.addEventListener('DOMContentLoaded', init);