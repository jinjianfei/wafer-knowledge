import { useState, useCallback } from 'react';
import './index.css';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import ContentArea from './components/ContentArea';
import { learningModules } from './data/learningData';

function App() {
  // Track which module and lesson are active
  const [activeModuleId, setActiveModuleId] = useState<string>(learningModules[0].id);
  const [activeLessonId, setActiveLessonId] = useState<string | null>(null);
  const [expandedModules, setExpandedModules] = useState<Set<string>>(
    new Set([learningModules[0].id])
  );

  const activeModule = learningModules.find(m => m.id === activeModuleId) || learningModules[0];
  const activeLesson = activeLessonId
    ? activeModule.lessons.find(l => l.id === activeLessonId) || null
    : null;

  const handleSelectModule = useCallback((moduleId: string) => {
    setActiveModuleId(moduleId);
    setActiveLessonId(null);
    setExpandedModules(prev => {
      const next = new Set(prev);
      next.add(moduleId);
      return next;
    });
  }, []);

  const handleSelectLesson = useCallback((moduleId: string, lessonId: string) => {
    setActiveModuleId(moduleId);
    setActiveLessonId(lessonId);
    setExpandedModules(prev => {
      const next = new Set(prev);
      next.add(moduleId);
      return next;
    });
  }, []);

  const handleToggleModule = useCallback((moduleId: string) => {
    setExpandedModules(prev => {
      const next = new Set(prev);
      if (next.has(moduleId)) next.delete(moduleId);
      else next.add(moduleId);
      return next;
    });
  }, []);

  return (
    <div className="min-h-screen" style={{ background: 'var(--content-bg)' }}>
      <Header />

      <div className="pt-14 flex min-h-screen">
        {/* Left Sidebar */}
        <Sidebar
          modules={learningModules}
          activeModuleId={activeModuleId}
          activeLessonId={activeLessonId}
          expandedModules={expandedModules}
          onSelectModule={handleSelectModule}
          onSelectLesson={handleSelectLesson}
          onToggleModule={handleToggleModule}
        />

        {/* Main Content */}
        <ContentArea
          module={activeModule}
          lesson={activeLesson}
          onSelectLesson={(lesson) => handleSelectLesson(activeModule.id, lesson.id)}
        />
      </div>
    </div>
  );
}

export default App;
