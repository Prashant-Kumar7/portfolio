import  { useEffect } from 'react';
import { Github, Linkedin, Mail, ExternalLink, Code2, Briefcase, User, ChevronDown, GraduationCap } from 'lucide-react';

function App() {
  useEffect(() => {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-slide-up', 'opacity-100');
          observer.unobserve(entry.target);
        }
      });
    }, observerOptions);

    document.querySelectorAll('.reveal-on-scroll').forEach((element) => {
      element.classList.add('opacity-0');
      observer.observe(element);
    });

    return () => observer.disconnect();
  }, []);

  const skillCategories = [
    {
      title: 'Frontend',
      skills: ['React', 'Next.js', 'TypeScript', 'TurboRepo', 'TailwindCSS']
    },
    {
      title: 'Backend',
      skills: ['Node.js', 'WebSocket', 'WebRTC']
    },
    {
      title: 'Databases',
      skills: ['PostgreSQL', 'MongoDB', 'Redis', 'Prisma']
    },
    {
      title: 'Cloud & DevOps',
      skills: ['AWS', 'Docker', 'Kubernetes']
    }
  ];

  const projects = [
    {
      title: 'Watch Party',
      description: 'A collaborative video watching platform where users can create rooms, upload videos that are transcoded into multiple resolutions, and control playback synchronously across all participants.',
      image: 'https://images.unsplash.com/photo-1522869635100-9f4c5e86aa37?auto=format&fit=crop&q=80&w=1632',
      techStack: ['React', 'TypeScript', 'WebSocket', 'Redis', 'FFMPEG', 'JWT', 'Tailwind'],
      liveLink: 'https://coll-yt.tumsab.xyz/',
      githubLink: 'https://github.com/Prashant-Kumar7/collabrative-yt.git'
    },
    {
      title: 'Random Video Chat',
      description: 'A WebRTC-based random video chatting application with peer-to-peer connections, featuring real-time communication and automatic peer matching.',
      image: 'https://i.pcmag.com/imagery/roundups/05igGAWa8LjJjVP0ug6myvX-4..v1702926112.jpg',
      techStack: ['React', 'TypeScript', 'WebRTC', 'WebSocket', 'Redis', 'Express', 'STUN/TURN'],
      liveLink: 'https://web-rtc.tumsab.xyz/',
      githubLink: 'https://github.com/Prashant-Kumar7/random-video-chat.git'
    },
    {
      title: 'Pictionary Game',
      description: 'A multiplayer drawing and guessing game where players can create rooms, draw words, and guess others\' drawings. Features customizable game settings and real-time updates.',
      image: 'https://i.ytimg.com/vi/C8lMW0MODFs/maxresdefault.jpg',
      techStack: ['Next.js', 'TypeScript', 'WebSocket', 'Redis', 'Tailwind'],
      liveLink: 'https://skribble.tumsab.xyz/',
      githubLink: 'https://github.com/Prashant-Kumar7/skribble.git'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="min-h-screen flex flex-col justify-center relative px-4 sm:px-6 lg:px-8">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-indigo-100 opacity-70"></div>
          <img
            src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=2072"
            alt="Background"
            className="w-full h-full object-cover"
          />
        </div>
        
        <div className="relative z-10 max-w-5xl mx-auto text-center">
          <div className="mb-8 animate-float">
            <img
              src="./MyPic.jpg"
              alt="Profile"
              className="w-40 h-40 rounded-full mx-auto border-4 border-white shadow-lg object-cover hover:scale-105 transition-transform duration-300"
            />
          </div>
          <h1 className="text-5xl sm:text-6xl font-bold text-gray-900 mb-6 animate-fade-in">
            Hi, I'm <span className="text-indigo-600 hover:text-indigo-500 transition-colors duration-300">Prashant Kumar</span>
          </h1>
          <p className="text-xl sm:text-2xl text-gray-700 mb-8 animate-fade-in" style={{ animationDelay: '0.2s' }}>
            Full Stack Developer
          </p>
          <div className="flex justify-center space-x-4 mb-12 animate-fade-in" style={{ animationDelay: '0.4s' }}>
            <a href="https://github.com/Prashant-Kumar7" className="p-2 bg-gray-900 text-white rounded-full hover:bg-gray-700 transition-colors duration-300 hover:scale-110 transform">
              <Github size={24} />
            </a>
            <a href="https://linkedin.com" className="p-2 bg-blue-600 text-white rounded-full hover:bg-blue-500 transition-colors duration-300 hover:scale-110 transform">
              <Linkedin size={24} />
            </a>
            <a href="mailto:contact@example.com" className="p-2 bg-red-600 text-white rounded-full hover:bg-red-500 transition-colors duration-300 hover:scale-110 transform">
              <Mail size={24} />
            </a>
          </div>
          <div className="animate-bounce-slow absolute bottom-8 left-1/2 transform -translate-x-1/2">
            <ChevronDown size={32} className="text-gray-600" />
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 bg-white reveal-on-scroll">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-center mb-12">
            <User size={32} className="text-indigo-600 mr-3" />
            <h2 className="text-3xl font-bold text-gray-900">About Me</h2>
          </div>
          <div className="prose prose-lg mx-auto">
            <p className="text-gray-600 text-center">
              I'm a passionate developer with expertise in building web applications.
              I specialize in React, Node.js, and modern web technologies.
              When I'm not coding, you can find me exploring new technologies or contributing to open source projects.
            </p>
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-center mb-12 reveal-on-scroll">
            <GraduationCap size={32} className="text-indigo-600 mr-3" />
            <h2 className="text-3xl font-bold text-gray-900">Education</h2>
          </div>
          <div className="space-y-8">
            {/* B.Tech */}
            <div className="bg-white rounded-lg shadow-sm p-8 reveal-on-scroll hover:shadow-lg transition-shadow duration-300 transform hover:-translate-y-1">
              <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-4">
                <div>
                  <h3 className="text-xl font-semibold text-gray-900">Bachelor of Technology in Computer Science</h3>
                  <p className="text-lg text-gray-600">Dr. A.P.J. Abdul Kalam Technical University (AKTU)</p>
                </div>
                <div className="mt-2 md:mt-0 flex items-center space-x-4">
                  <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-green-100 text-green-800">
                    Fourth Year
                  </span>
                  <span className="text-gray-500">2021 - 2025</span>
                </div>
              </div>
              <div className="border-t border-gray-200 pt-4 mt-4">
                <p className="text-gray-600">
                  Pursuing B.Tech in Computer Science and Engineering with a focus on modern web technologies and cloud computing.
                  Currently in the final year of studies, gaining hands-on experience with industry-standard tools and practices.
                </p>
              </div>
            </div>

            {/* 12th Grade */}
            <div className="bg-white rounded-lg shadow-sm p-8 reveal-on-scroll hover:shadow-lg transition-shadow duration-300 transform hover:-translate-y-1">
              <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-4">
                <div>
                  <h3 className="text-xl font-semibold text-gray-900">Senior Secondary (XII)</h3>
                  <p className="text-lg text-gray-600">Kendriya Vidyalaya Sangathan (KVS)</p>
                </div>
                <div className="mt-2 md:mt-0">
                  <span className="text-gray-500">Completed 2021</span>
                </div>
              </div>
              <div className="border-t border-gray-200 pt-4 mt-4">
                <p className="text-gray-600">
                  Completed senior secondary education with a focus on Physics, Chemistry, Mathematics, and Computer Science.
                  Developed a strong foundation in scientific principles and programming concepts.
                </p>
              </div>
            </div>

            {/* 10th Grade */}
            <div className="bg-white rounded-lg shadow-sm p-8 reveal-on-scroll hover:shadow-lg transition-shadow duration-300 transform hover:-translate-y-1">
              <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-4">
                <div>
                  <h3 className="text-xl font-semibold text-gray-900">Secondary (X)</h3>
                  <p className="text-lg text-gray-600">Kendriya Vidyalaya Sangathan (KVS)</p>
                </div>
                <div className="mt-2 md:mt-0">
                  <span className="text-gray-500">Completed 2019</span>
                </div>
              </div>
              <div className="border-t border-gray-200 pt-4 mt-4">
                <p className="text-gray-600">
                  Completed secondary education with a comprehensive curriculum including Mathematics, Science, and Computer Applications.
                  Built a strong academic foundation and analytical thinking skills.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-20 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-center mb-12 reveal-on-scroll">
            <Code2 size={32} className="text-indigo-600 mr-3" />
            <h2 className="text-3xl font-bold text-gray-900">Skills</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {skillCategories.map((category, index) => (
              <div 
                key={category.title} 
                className="reveal-on-scroll bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-all duration-300 transform hover:-translate-y-1"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <h3 className="text-xl font-semibold text-gray-800 mb-4">{category.title}</h3>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-3 py-1 bg-indigo-100 text-indigo-700 rounded-full text-sm font-medium hover:bg-indigo-200 transition-colors duration-300"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-center mb-12 reveal-on-scroll">
            <Briefcase size={32} className="text-indigo-600 mr-3" />
            <h2 className="text-3xl font-bold text-gray-900">Projects</h2>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <div 
                key={project.title} 
                className="reveal-on-scroll bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 transform hover:-translate-y-2"
                style={{ animationDelay: `${index * 0.3}s` }}
              >
                <div className="relative overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.title} 
                    className="w-full h-48 object-cover transform hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                  <p className="text-gray-600 mb-4">{project.description}</p>
                  
                  {/* Tech Stack */}
                  <div className="mb-4">
                    <h4 className="text-sm font-semibold text-gray-700 mb-2">Tech Stack:</h4>
                    <div className="flex flex-wrap gap-2">
                      {project.techStack.map((tech) => (
                        <span
                          key={tech}
                          className="px-2 py-1 bg-indigo-100 text-indigo-700 rounded-full text-sm hover:bg-indigo-200 transition-colors duration-300"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  {/* Project Links */}
                  <div className="flex space-x-4">
                    <a
                      href={project.liveLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center text-indigo-600 hover:text-indigo-500 transition-colors duration-300"
                    >
                      <ExternalLink size={16} className="mr-1" />
                      Live Demo
                    </a>
                    <a
                      href={project.githubLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center text-gray-700 hover:text-gray-600 transition-colors duration-300"
                    >
                      <Github size={16} className="mr-1" />
                      Source Code
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center reveal-on-scroll">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Let's Connect</h2>
          <p className="text-xl text-gray-600 mb-8">
            I'm always open to discussing new projects and opportunities.
          </p>
          <a
            href="mailto:contact@example.com"
            className="inline-flex items-center px-6 py-3 bg-indigo-600 text-white rounded-lg hover:bg-indigo-500 transition-all duration-300 transform hover:scale-105"
          >
            <Mail size={20} className="mr-2" />
            Get in Touch
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p>© {new Date().getFullYear()} Prashant Kumar. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;