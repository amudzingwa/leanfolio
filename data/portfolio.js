const about = {
  // each of these properties is optional - they can be left empty or deleted
  // each element in the `description` array will be treated as a separate paragraph
  name: 'John Asheley Mudzingwa',
  greetingEmoji: '👋🏾',
  role: 'Computer Science Student',
  company: 'Ohio Dominican University',
  description: [
    'I am a sophomore at Ohio Dominican University with a major in Computer Science and a minor in Economics. Throughout my studies, I have been focusing on software development and data analysis. Currently, I intern as a data analyst with a risk and insurance management company in Columbus, Ohio and build web and mobile applications with React and SwiftUI',
  ],
  resume: 'https://example.com',
  social: {
    github: 'https://github.com/amudzingwa',
    linkedin: 'https://linkedin.com/in/asheley-mudzingwa',
  },
}

const projects = [
  // projects can be added and removed
  // if the array is left empty, the "Projects" section won't render
  // each element in each `description` array will be treated as a separate paragraph
  {
    thumbnail: 'images/placeholder-image.jpeg',
    name: 'HeyVeeva Chatbot',
    description: [
      'An intelligent virtual assistant that streamlines patient communication for Veeva CRM users. Trained on custom data using TensorFlow for enhanced accuracy and personalized interactions. Buit for HackOhio Hackathon 2023',
    ],
    stack: ['Tensorflow', 'Keras', 'Hugging Face Transformers'],
    sourceCode: 'https://https://github.com/amudzingwa/hackohio-chatbot.com',
    // livePreview: 'https://example.com',
  },
  {
    thumbnail: 'images/Asheley-Mudzingwa-ClosePeople-App.png',
    name: 'Close People App',
    description: [
      'An iOS app designed to help users reach out to their support cirle during tough times. Developed using SwiftUI and Core Data to ensure seamless navigation and personalized experiences. (*in progress)',
    ],
    stack: ['SwiftUI', 'Core Data', 'Messaging API'],
    sourceCode: 'https://github.com/amudzingwa/close-people-app',
    // livePreview: 'https://example.com',
  },
  {
    thumbnail: 'images/Ashely-Mudzingwa-Library-Management-System.png',
    name: 'Library Management System',
    description: [
      'An SQL-based databased system simulating library operations. Built with a Python and TKinter frontend for interactive user interface when running locally.',
    ],
    stack: ['SQL', 'TKinker', 'Python'],
    sourceCode: 'https://github.com/amudzingwa/library',
    // livePreview: 'https://example.com',
  },
  {
    thumbnail: 'images/Asheley-Mudzingwa-Google-Playstore-Data-Analysis.png',
    name: 'Google Playstore Data Analysis',
    description: [
      'An data visualization project to uncover trends, patterns, and insights from Google Playstore data. Utilizes Python, Pandas, and Matplotlib for in-depth analysis and compelling visualizations.',
    ],
    stack: ['Python', 'Pandas', 'Metplotlib'],
    sourceCode: 'https://github.com/amudzingwa/google-playstore-eda-data-visualization',
    // livePreview: 'https://example.com',
  },
]

const skills = [
  // skills can be added or removed
  // if the array is left empty, the "Skills" section won't render
  'HTML',
  'CSS',
  'JavaScript',
  'Django',
  'React',
  'SwiftUI',
  'UIKit',
  'Git',
  'CI/CD',
  'SQL',
]

const contact = {
  // the `email` property is optional - it can be left empty or deleted
  // if so, the "Contact" section won't render
  email: 'me@amudzingwa.com',
}

export { about, projects, skills, contact }
