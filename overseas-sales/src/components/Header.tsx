import { BookOpen } from 'lucide-react';

export default function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-40 h-14 flex items-center px-5 border-b" style={{ background: 'var(--header-bg)', borderColor: 'var(--border-color)' }}>
      <div className="flex items-center gap-2.5">
        <div className="w-7 h-7 rounded-md flex items-center justify-center" style={{ background: '#4f6ef7' }}>
          <BookOpen className="w-4 h-4 text-white" strokeWidth={2} />
        </div>
        <span className="text-[15px] font-semibold tracking-tight" style={{ color: 'var(--text-primary)', fontFamily: 'var(--font-display)' }}>
          海外销售学习手册
        </span>
        <span className="text-xs ml-2 hidden sm:inline" style={{ color: 'var(--text-muted)' }}>
          半导体硅片 · ST客户专项
        </span>
      </div>
    </header>
  );
}
