import { useEffect, useState } from 'react';
import { Github, Linkedin, Mail, ExternalLink, Code2, Briefcase, User, ChevronDown, GraduationCap, 
         Database, Server, Cloud, Globe, Layers, Smartphone, Monitor, Zap, GitBranch, Box } from 'lucide-react';

function App() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

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
      icon: <Monitor className="w-8 h-8" />,
      gradient: 'from-blue-500 to-purple-600',
      skills: [
        { name: 'React', icon: <Globe className="w-5 h-5" /> },
        { name: 'Next.js', icon: <Layers className="w-5 h-5" /> },
        { name: 'TypeScript', icon: <Code2 className="w-5 h-5" /> },
        { name: 'TurboRepo', icon: <GitBranch className="w-5 h-5" /> },
        { name: 'TailwindCSS', icon: <Smartphone className="w-5 h-5" /> }
      ]
    },
    {
      title: 'Backend',
      icon: <Server className="w-8 h-8" />,
      gradient: 'from-green-500 to-teal-600',
      skills: [
        { name: 'Node.js', icon: <Server className="w-5 h-5" /> },
        { name: 'WebSocket', icon: <Zap className="w-5 h-5" /> },
        { name: 'WebRTC', icon: <Globe className="w-5 h-5" /> }
      ]
    },
    {
      title: 'Databases',
      icon: <Database className="w-8 h-8" />,
      gradient: 'from-orange-500 to-red-600',
      skills: [
        { name: 'PostgreSQL', icon: <Database className="w-5 h-5" /> },
        { name: 'MongoDB', icon: <Database className="w-5 h-5" /> },
        { name: 'Redis', icon: <Box className="w-5 h-5" /> },
        { name: 'Prisma', icon: <Layers className="w-5 h-5" /> }
      ]
    },
    {
      title: 'Cloud & DevOps',
      icon: <Cloud className="w-8 h-8" />,
      gradient: 'from-purple-500 to-pink-600',
      skills: [
        { name: 'AWS', icon: <Cloud className="w-5 h-5" /> },
        { name: 'Docker', icon: <Box className="w-5 h-5" /> },
        { name: 'Kubernetes', icon: <Layers className="w-5 h-5" /> }
      ]
    }
  ];

  const projects = [
    // {
    //   title: 'Watch Party',
    //   description: 'A collaborative video watching platform where users can create rooms, upload videos that are transcoded into multiple resolutions, and control playback synchronously across all participants.',
    //   image: 'https://images.unsplash.com/photo-1522869635100-9f4c5e86aa37?auto=format&fit=crop&q=80&w=1632',
    //   techStack: ['React', 'TypeScript', 'WebSocket', 'Redis', 'FFMPEG', 'JWT', 'Tailwind'],
    //   liveLink: 'https://coll-yt.tumsab.xyz/',
    //   githubLink: 'https://github.com/Prashant-Kumar7/collabrative-yt.git',
    //   color: 'from-blue-500 to-purple-600'
    // },
    {
      title: 'Web Postman',
      description: 'A browser-based API development and testing platform inspired by Postman. It allows users to send HTTP requests, inspect responses, manage collections, and collaborate in real-time—all from the web without needing a desktop app.',
      image: 'https://www.ucertify.com/layout/themes/bootstrap4/images/platform_image/educator_header.webp',
      techStack: ['React.js', 'TypeScript', 'MikroORM', 'Tailwind', 'Node.js', 'Express.JS', 'PostgresSQL'],
      liveLink: 'https://web-postman-ashen.vercel.app/',
      githubLink: 'https://github.com/Prashant-Kumar7/web-postman',
      color: 'from-blue-500 to-purple-600'
    },
    {
      title: 'Random Video Chat',
      description: 'A WebRTC-based random video chatting application with peer-to-peer connections, featuring real-time communication and automatic peer matching.',
      image: 'https://i.pcmag.com/imagery/roundups/05igGAWa8LjJjVP0ug6myvX-4..v1702926112.jpg',
      techStack: ['React', 'TypeScript', 'WebRTC', 'WebSocket', 'Redis', 'Express', 'STUN/TURN'],
      liveLink: 'https://web-rtc-fe.vercel.app/',
      githubLink: 'https://github.com/Prashant-Kumar7/random-video-chat.git',
      color: 'from-green-500 to-teal-600'
    },
    {
      title: 'Pictionary Game',
      description: 'A multiplayer drawing and guessing game where players can create rooms, draw words, and guess others\' drawings. Features customizable game settings and real-time updates.',
      image: 'https://i.ytimg.com/vi/C8lMW0MODFs/maxresdefault.jpg',
      techStack: ['Next.js', 'TypeScript', 'WebSocket', 'Redis', 'Tailwind'],
      liveLink: 'https://skribble-next-app.vercel.app/',
      githubLink: 'https://github.com/Prashant-Kumar7/skribble.git',
      color: 'from-orange-500 to-red-600'
    },
    {
      title: 'Educators Platform',
      description: 'An interactive learning and collaboration platform designed for educators and students. It includes features like screen sharing, a real-time collaborative whiteboard, and a smart notes-to-slides converter to enhance presentations.',
      image: 'https://www.ucertify.com/layout/themes/bootstrap4/images/platform_image/educator_header.webp',
      techStack: ['React.js', 'TypeScript', 'WebSockets', 'Redis', 'Tailwind', 'Node.js', 'AWS S3'],
      liveLink: 'https://edushare-olive.vercel.app/',
      githubLink: 'https://github.com/Prashant-Kumar7/edushare',
      color: 'from-purple-500 to-pink-600'
    },
    
  ];

  return (
    <div className="min-h-screen bg-gray-50 overflow-x-hidden">
      {/* Custom Cursor Effect */}
      <div 
        className="fixed w-6 h-6 bg-indigo-500 rounded-full pointer-events-none z-50 mix-blend-difference transition-transform duration-150 ease-out"
        style={{
          left: mousePosition.x - 12,
          top: mousePosition.y - 12,
          transform: `scale(${mousePosition.x > 0 ? 1 : 0})`
        }}
      />

      {/* Hero Section */}
      <section className="min-h-screen flex flex-col justify-center relative px-4 sm:px-6 lg:px-8 overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-br from-indigo-50 via-white to-purple-50"></div>
          <div className="absolute top-0 left-0 w-full h-full">
            <div className="absolute top-20 left-20 w-72 h-72 bg-purple-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
            <div className="absolute top-40 right-20 w-72 h-72 bg-yellow-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
            <div className="absolute -bottom-8 left-40 w-72 h-72 bg-pink-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000"></div>
          </div>
        </div>
        
        <div className="relative z-10 max-w-6xl mx-auto text-center">
          <div className="mb-8 relative">
            <div className="w-44 h-44 mx-auto relative group">
              <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-full animate-spin-slow"></div>
              <img
                src="./MyPic.jpg"
                alt="Profile"
                className="w-40 h-40 rounded-full mx-auto border-4 border-white shadow-2xl object-cover relative z-10 top-2 left-2 group-hover:scale-105 transition-transform duration-300"
              />
            </div>
          </div>
          
          <h1 className="text-6xl sm:text-7xl font-bold text-gray-900 mb-6">
            Hi, I'm{' '}
            <span className="bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent hover:from-purple-600 hover:to-indigo-600 transition-all duration-500">
              Prashant Kumar
            </span>
          </h1>
          
          <div className="relative mb-8">
            <p className="text-2xl sm:text-3xl text-gray-700 font-light">
              Full Stack Developer
            </p>
            <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-32 h-1 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-full"></div>
          </div>
          
          <div className="flex justify-center space-x-6 mb-16">
            {[
              { icon: <Github size={28} />, href: "https://github.com/Prashant-Kumar7", color: "from-gray-800 to-gray-900" },
              { icon: <Linkedin size={28} />, href: "https://www.linkedin.com/in/prashant-kumar-8985b62b4/", color: "from-blue-600 to-blue-700" },
              { icon: <Mail size={28} />, href: "mailto:ajoysoni7777@gmail.com", color: "from-red-500 to-red-600" }
            ].map((social, index) => (
              <a
                key={index}
                href={social.href}
                className={`group relative p-4 bg-gradient-to-r ${social.color} text-white rounded-full hover:scale-110 transform transition-all duration-300 shadow-lg hover:shadow-xl`}
              >
                <div className="absolute inset-0 bg-gradient-to-r from-white to-transparent opacity-0 group-hover:opacity-20 rounded-full transition-opacity duration-300"></div>
                {social.icon}
              </a>
            ))}
          </div>
          
          <div className="animate-bounce-slow">
            <ChevronDown size={32} className="text-gray-600 mx-auto" />
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-24 bg-white reveal-on-scroll relative">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center justify-center p-3 bg-gradient-to-r from-indigo-500 to-purple-600 text-white rounded-full mb-4">
              <User size={32} />
            </div>
            <h2 className="text-4xl font-bold text-gray-900 mb-4">About Me</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-indigo-500 to-purple-600 mx-auto rounded-full"></div>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <div className="bg-gradient-to-r from-indigo-50 to-purple-50 rounded-2xl p-8 shadow-xl">
              <p className="text-xl text-gray-700 leading-relaxed text-center">
                I'm a passionate developer with expertise in building scalable web applications.
                I specialize in React, Node.js, and modern web technologies, creating seamless user experiences 
                and robust backend solutions. When I'm not coding, you can find me exploring new technologies 
                or contributing to open source projects.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 reveal-on-scroll">
            <div className="inline-flex items-center justify-center p-3 bg-gradient-to-r from-green-500 to-teal-600 text-white rounded-full mb-4">
              <GraduationCap size={32} />
            </div>
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Education</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-green-500 to-teal-600 mx-auto rounded-full"></div>
          </div>
          
          <div className="space-y-8">
            {[
              {
                degree: "Bachelor of Technology in Computer Science",
                institution: "Dr. A.P.J. Abdul Kalam Technical University (AKTU)",
                period: "2021 - 2025",
                status: "Fourth Year",
                description: "Pursuing B.Tech in Computer Science and Engineering with a focus on modern web technologies and cloud computing.",
                color: "from-blue-500 to-purple-600"
              },
              {
                degree: "Senior Secondary (XII)",
                institution: "Kendriya Vidyalaya Sangathan (KVS)",
                period: "Completed 2021",
                status: "Completed",
                description: "Completed senior secondary education with a focus on Physics, Chemistry, Mathematics, and Computer Science.",
                color: "from-green-500 to-teal-600"
              },
              {
                degree: "Secondary (X)",
                institution: "Kendriya Vidyalaya Sangathan (KVS)",
                period: "Completed 2019",
                status: "Completed",
                description: "Completed secondary education with a comprehensive curriculum including Mathematics, Science, and Computer Applications.",
                color: "from-orange-500 to-red-600"
              }
            ].map((edu, index) => (
              <div key={index} className="reveal-on-scroll group">
                <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 relative overflow-hidden">
                  <div className={`absolute top-0 left-0 w-full h-1 bg-gradient-to-r ${edu.color}`}></div>
                  <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center mb-6">
                    <div className="flex-1">
                      <h3 className="text-2xl font-bold text-gray-900 mb-2">{edu.degree}</h3>
                      <p className="text-lg text-gray-600 font-medium">{edu.institution}</p>
                    </div>
                    <div className="mt-4 lg:mt-0 flex items-center space-x-4">
                      <span className={`inline-flex items-center px-4 py-2 rounded-full text-sm font-medium bg-gradient-to-r ${edu.color} text-white shadow-lg`}>
                        {edu.status}
                      </span>
                      <span className="text-gray-500 font-medium">{edu.period}</span>
                    </div>
                  </div>
                  <div className="border-t border-gray-100 pt-6">
                    <p className="text-gray-600 leading-relaxed">{edu.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-24 bg-white relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-indigo-50 to-purple-50 opacity-50"></div>
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center mb-16 reveal-on-scroll">
            <div className="inline-flex items-center justify-center p-3 bg-gradient-to-r from-indigo-500 to-purple-600 text-white rounded-full mb-4">
              <Code2 size={32} />
            </div>
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Technical Skills</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-indigo-500 to-purple-600 mx-auto rounded-full"></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {skillCategories.map((category, index) => (
              <div 
                key={category.title} 
                className="reveal-on-scroll group"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-3 relative overflow-hidden">
                  <div className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-br ${category.gradient} opacity-10 rounded-full -translate-y-16 translate-x-16`}></div>
                  
                  <div className="flex items-center mb-6">
                    <div className={`p-3 bg-gradient-to-r ${category.gradient} text-white rounded-xl mr-4 shadow-lg`}>
                      {category.icon}
                    </div>
                    <h3 className="text-2xl font-bold text-gray-800">{category.title}</h3>
                  </div>
                  
                  <div className="space-y-3">
                    {category.skills.map((skill) => (
                      <div
                        key={skill.name}
                        className="flex items-center p-3 bg-gray-50 rounded-xl hover:bg-gray-100 transition-all duration-300 group-hover:bg-white border border-transparent hover:border-gray-200"
                      >
                        <div className="p-2 bg-white rounded-lg shadow-sm mr-3">
                          {skill.icon}
                        </div>
                        <span className="font-medium text-gray-700">{skill.name}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 reveal-on-scroll">
            <div className="inline-flex items-center justify-center p-3 bg-gradient-to-r from-orange-500 to-red-600 text-white rounded-full mb-4">
              <Briefcase size={32} />
            </div>
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Featured Projects</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-orange-500 to-red-600 mx-auto rounded-full"></div>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
            {projects.map((project, index) => (
              <div 
                key={project.title} 
                className="reveal-on-scroll group"
                style={{ animationDelay: `${index * 0.3}s` }}
              >
                <div className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-4 relative">
                  <div className="relative overflow-hidden">
                    <img 
                      src={project.image} 
                      alt={project.title} 
                      className="w-full h-56 object-cover transform group-hover:scale-110 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-20 transition-opacity duration-500"></div>
                    <div className={`absolute top-4 right-4 w-4 h-4 bg-gradient-to-r ${project.color} rounded-full`}></div>
                  </div>
                  
                  <div className="p-8">
                    <h3 className="text-2xl font-bold mb-4 text-gray-900">{project.title}</h3>
                    <p className="text-gray-600 mb-6 leading-relaxed">{project.description}</p>
                    
                    <div className="mb-6">
                      <h4 className="text-sm font-bold text-gray-700 mb-3 uppercase tracking-wide">Technologies</h4>
                      <div className="flex flex-wrap gap-2">
                        {project.techStack.map((tech) => (
                          <span
                            key={tech}
                            className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm font-medium border hover:border-gray-300 transition-all duration-300"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                    
                    <div className="flex space-x-4">
                      <a
                        href={project.liveLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`flex-1 inline-flex items-center justify-center px-6 py-3 bg-gradient-to-r ${project.color} text-white rounded-xl hover:shadow-lg transition-all duration-300 transform hover:scale-105 font-medium`}
                      >
                        <ExternalLink size={18} className="mr-2" />
                        Live Demo
                      </a>
                      <a
                        href={project.githubLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 inline-flex items-center justify-center px-6 py-3 bg-gray-900 text-white rounded-xl hover:bg-gray-800 transition-all duration-300 transform hover:scale-105 font-medium"
                      >
                        <Github size={18} className="mr-2" />
                        Code
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-24 bg-white relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-indigo-50 to-purple-50"></div>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center reveal-on-scroll relative">
          <div className="inline-flex items-center justify-center p-3 bg-gradient-to-r from-indigo-500 to-purple-600 text-white rounded-full mb-8">
            <Mail size={32} />
          </div>
          <h2 className="text-4xl font-bold text-gray-900 mb-6">Let's Create Something Amazing</h2>
          <p className="text-xl text-gray-600 mb-10 leading-relaxed">
            I'm always excited to discuss new projects, creative ideas, and opportunities to collaborate.
          </p>
          <a
            href="mailto:ajoysoni7777@gmail.com"
            className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-xl hover:from-purple-600 hover:to-indigo-600 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl font-medium text-lg"
          >
            <Mail size={24} className="mr-3" />
            Get in Touch
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-indigo-900 to-purple-900 opacity-50"></div>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative">
          <p className="text-lg">© {new Date().getFullYear()} Prashant Kumar. Crafted with passion and code.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;