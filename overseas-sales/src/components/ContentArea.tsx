import { useState } from 'react';
import type { ReactElement } from 'react';
import { Lightbulb, CheckCircle, AlertTriangle, MapPin, X } from 'lucide-react';
import type { Module, Lesson, FabSite } from '../data/learningData';
import { fabSites } from '../data/learningData';
import LeafletMap from './LeafletMap';

const countryColor = (code: string) => {
  if (code === 'FR') return '#3b6cf6';
  if (code === 'IT') return '#e8453c';
  return '#f5a623';
};

interface ContentAreaProps {
  module: Module;
  lesson: Lesson | null;
  onSelectLesson: (lesson: Lesson) => void;
}

// ─── Lesson Detail View ───
function LessonView({ module, lesson }: { module: Module; lesson: Lesson }) {
  return (
    <div className="doc-content max-w-3xl">
      <div className="flex items-center gap-2 mb-1">
        <span className="text-[11px] font-medium px-2 py-0.5 rounded" style={{ background: `${module.color}15`, color: module.color }}>
          {module.title}
        </span>
      </div>
      <h1 className="text-2xl font-bold mb-6" style={{ color: 'var(--text-primary)' }}>
        {lesson.title}
      </h1>

      <div className="text-[14px] leading-[1.8]" style={{ color: 'var(--text-secondary)' }}>
        {lesson.content.split('\n').map((paragraph, i) => {
          const trimmed = paragraph.trim();
          if (!trimmed) return <div key={i} className="h-3" />;
          if (trimmed.startsWith('|') && trimmed.endsWith('|')) return null; // handled as table
          if (trimmed.startsWith('**') && trimmed.endsWith('**') && !trimmed.includes(' ')) {
            return <h3 key={i}>{trimmed.replace(/\*\*/g, '')}</h3>;
          }
          if (trimmed.startsWith('- ') || trimmed.startsWith('* ')) {
            return (
              <ul key={i}>
                <li dangerouslySetInnerHTML={{ __html: formatInline(trimmed.slice(2)) }} />
              </ul>
            );
          }
          if (/^\d+\.\s/.test(trimmed)) {
            const match = trimmed.match(/^\d+\.\s(.+)$/);
            return (
              <ol key={i} start={Number(trimmed.match(/^\d+/)?.[0])}>
                <li dangerouslySetInnerHTML={{ __html: formatInline(match?.[1] || trimmed) }} />
              </ol>
            );
          }
          return <p key={i} dangerouslySetInnerHTML={{ __html: formatInline(trimmed) }} />;
        })}
      </div>

      {/* Render tables if present */}
      {renderTables(lesson.content)}

      {lesson.tips && lesson.tips.length > 0 && (
        <div className="tip-box mt-6">
          <div className="tip-box-title">
            <Lightbulb className="w-4 h-4" /> 实战经验
          </div>
          {lesson.tips.map((tip, i) => (
            <p key={i} className="mb-1.5 last:mb-0">{tip}</p>
          ))}
        </div>
      )}

      {lesson.checklist && lesson.checklist.length > 0 && (
        <div className="mt-6">
          <h4 className="text-sm font-semibold mb-3" style={{ color: 'var(--text-primary)' }}>
            <CheckCircle className="w-4 h-4 inline mr-1.5" style={{ color: '#3b6cf7' }} />
            学习检查清单
          </h4>
          <div className="flex flex-wrap gap-2">
            {lesson.checklist.map((item, i) => (
              <span key={i} className="checklist-item">{item}</span>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

function formatInline(text: string): string {
  return text
    .replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>')
    .replace(/🚫\s*(.+)/g, '<span style="color:#e8453c;font-weight:600;">$1</span>')
    .replace(/⚠️\s*(.+)/g, '<span style="color:#f5a623;font-weight:600;">$1</span>');
}

function renderTables(content: string) {
  const lines = content.split('\n');
  const tables: (ReactElement | null)[] = [];
  let buffer: string[] = [];
  let tableIdx = 0;

  for (const line of lines) {
    if (line.trim().startsWith('|')) {
      buffer.push(line.trim());
    } else if (buffer.length > 0) {
      tables.push(buildTable(buffer, tableIdx++));
      buffer = [];
    }
  }
  if (buffer.length > 0) tables.push(buildTable(buffer, tableIdx++));

  return tables.length > 0 ? <div className="mt-4">{tables}</div> : null;
}

function buildTable(lines: string[], idx: number) {
  const rows = lines
    .filter(l => !l.replace(/\|/g, '').replace(/-/g, '').replace(/\s/g, '')) // skip separator
    .map(l => l.split('|').filter(c => c.trim()));

  if (rows.length === 0) return null;

  return (
    <div className="overflow-x-auto mb-4" key={idx}>
      <table className="w-full">
        <thead>
          <tr>
            {rows[0].map((cell, i) => (
              <th key={i}>{cell.trim()}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.slice(1).map((row, ri) => (
            <tr key={ri}>
              {row.map((cell, ci) => (
                <td key={ci} dangerouslySetInnerHTML={{ __html: formatInline(cell.trim()) }} />
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

// ─── ST Module Overview ───
function STOverview({ onSelectLesson }: { onSelectLesson: (l: Lesson) => void }) {
  const [selectedSite, setSelectedSite] = useState<FabSite | null>(null);
  const module = { color: '#3b6cf6' } as Module;

  return (
    <div className="max-w-3xl">
      <h1 className="text-2xl font-bold mb-2">ST意法半导体深度解析</h1>
      <p className="mb-6" style={{ color: 'var(--text-secondary)' }}>
        ST是你在欧洲最重要的客户。深入了解ST的组织架构、技术战略、6个全球制造基地的布局和采购决策流程。
      </p>

      {/* Map */}
      <div className="mb-6 border rounded-lg overflow-hidden" style={{ borderColor: 'var(--border-color)', height: '360px' }}>
        <div className="flex items-center justify-between px-4 py-2.5 border-b" style={{ borderColor: 'var(--border-color)', background: '#fafbfc' }}>
          <h3 className="text-sm font-semibold flex items-center gap-2">
            <MapPin className="w-4 h-4" style={{ color: '#3b6cf6' }} /> ST 全球制造基地分布
          </h3>
          <div className="flex gap-3 text-[11px]">
            {[{l:'法国',c:'#3b6cf6'},{l:'意大利',c:'#e8453c'},{l:'新加坡',c:'#f5a623'}].map(d => (
              <span key={d.l} className="flex items-center gap-1">
                <span className="w-2 h-2 rounded-full inline-block" style={{ background: d.c }} />
                {d.l}
              </span>
            ))}
          </div>
        </div>
        <div className="h-[316px] isolate">
          <LeafletMap onSiteClick={setSelectedSite} />
        </div>
      </div>

      {/* Site Cards */}
      <div className="grid grid-cols-2 md:grid-cols-3 gap-3 mb-8">
        {fabSites.map(site => (
          <button
            key={site.id}
            onClick={() => setSelectedSite(site)}
            className="border rounded-lg p-3 text-left transition-colors hover:bg-gray-50"
            style={{ borderColor: 'var(--border-color)' }}
          >
            <div className="flex items-center gap-2 mb-1">
              <span
                className="w-5 h-5 rounded-full flex items-center justify-center text-[8px] font-bold text-white"
                style={{ background: countryColor(site.countryCode) }}
              >
                {site.countryCode}
              </span>
              <span className="text-[13px] font-semibold">{site.name}</span>
            </div>
            <p className="text-[11px]" style={{ color: 'var(--text-muted)' }}>{site.type}</p>
          </button>
        ))}
      </div>

      {/* Lesson list */}
      <LessonList module={module} lessons={[{id:'st1',title:'ST公司概况与组织架构',content:''},{id:'st2',title:'ST全球Fab分布与技术路线',content:''},{id:'st3',title:'ST的供应商管理体系',content:''}]} onSelect={onSelectLesson} />

      {/* Site detail modal */}
      {selectedSite && (
        <div className="fixed inset-0 z-[5000] flex items-center justify-center p-4 bg-black/40" onClick={() => setSelectedSite(null)}>
          <div className="bg-white rounded-xl shadow-xl max-w-lg w-full max-h-[80vh] overflow-y-auto p-6 relative z-[5001]" onClick={e => e.stopPropagation()}>
            <div className="flex items-start justify-between mb-4">
              <div className="flex items-center gap-3">
                <span className="w-9 h-9 rounded-full flex items-center justify-center text-xs font-bold text-white" style={{ background: countryColor(selectedSite.countryCode) }}>{selectedSite.countryCode}</span>
                <div>
                  <h3 className="font-bold text-base">{selectedSite.name}</h3>
                  <p className="text-xs" style={{ color: 'var(--text-muted)' }}>{selectedSite.city}, {selectedSite.country}</p>
                </div>
              </div>
              <button onClick={() => setSelectedSite(null)} className="p-1 rounded hover:bg-gray-100"><X className="w-4 h-4" style={{ color: 'var(--text-muted)' }} /></button>
            </div>
            <p className="text-sm mb-4 font-medium" style={{ color: countryColor(selectedSite.countryCode) }}>{selectedSite.type}</p>

            <div className="space-y-4">
              <div>
                <h4 className="text-xs font-semibold uppercase tracking-wider mb-2" style={{ color: 'var(--text-muted)' }}>文化指南</h4>
                <ul className="space-y-1.5">
                  {selectedSite.cultureNotes.map((n, i) => <li key={i} className="text-sm flex gap-2" style={{ color: 'var(--text-secondary)' }}><span className="text-gray-400">·</span>{n}</li>)}
                </ul>
              </div>
              {selectedSite.taboos.length > 0 && (
                <div className="warning-box !my-3">
                  <div className="warning-box-title"><AlertTriangle className="w-3.5 h-3.5" /> 注意事项</div>
                  {selectedSite.taboos.map((t, i) => <p key={i}>{t}</p>)}
                </div>
              )}
              <div>
                <h4 className="text-xs font-semibold uppercase tracking-wider mb-2" style={{ color: 'var(--text-muted)' }}>实战 Tips</h4>
                <ul className="space-y-1.5">
                  {selectedSite.tips.map((t, i) => <li key={i} className="text-sm flex gap-2" style={{ color: 'var(--text-secondary)' }}><span style={{ color: '#3b6cf6' }}>→</span>{t}</li>)}
                </ul>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

// ─── Cross-Culture Overview ───
function CultureOverview({ onSelectLesson }: { onSelectLesson: (l: Lesson) => void }) {
  const module = { color: '#e8453c' } as Module;

  return (
    <div className="max-w-3xl">
      <h1 className="text-2xl font-bold mb-2">跨文化商务沟通</h1>
      <p className="mb-6" style={{ color: 'var(--text-secondary)' }}>
        从国内销售到海外销售，最大的挑战不是产品知识，而是文化差异。了解法国、意大利、新加坡三国的商务文化、沟通风格和绝对禁忌。
      </p>

      {/* Country cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-3 mb-6">
        {[
          { country: '法国', code: 'FR', color: '#3b6cf6', sites: 'Rousset · Crolles · Tours', summary: '文化极度自豪，等级分明。午餐神圣不可侵犯，8月全法度假。', tags: ['等级制', '午餐禁忌', '8月度假', '思辨文化'] },
          { country: '意大利', code: 'IT', color: '#e8453c', sites: 'Agrate · Catania', summary: '关系（Relazioni）至上。Catania黑手党话题是绝对红线。', tags: ['关系优先', '黑手党禁区', '手势正常', 'Domani≠明天'] },
          { country: '新加坡', code: 'SG', color: '#f5a623', sites: 'AMK', summary: '多元文化融合。极度高效准时。种族宗教话题绝对避免。', tags: ['极度准时', '24h回复', '种族禁区', 'Singlish'] },
        ].map(c => (
          <div key={c.code} className="border rounded-lg p-4" style={{ borderColor: 'var(--border-color)', borderTop: `3px solid ${c.color}` }}>
            <div className="flex items-center gap-2 mb-2">
              <span className="w-5 h-5 rounded-full flex items-center justify-center text-[8px] font-bold text-white" style={{ background: c.color }}>{c.code}</span>
              <h3 className="font-bold text-sm">{c.country}</h3>
            </div>
            <p className="text-[11px] mb-2" style={{ color: 'var(--text-muted)' }}>{c.sites}</p>
            <p className="text-xs mb-3" style={{ color: 'var(--text-secondary)' }}>{c.summary}</p>
            <div className="flex flex-wrap gap-1">
              {c.tags.map(t => <span key={t} className="text-[10px] px-1.5 py-0.5 rounded bg-gray-100 text-gray-500">{t}</span>)}
            </div>
          </div>
        ))}
      </div>

      {/* Comparison table */}
      <div className="border rounded-lg overflow-hidden mb-8" style={{ borderColor: 'var(--border-color)' }}>
        <div className="px-4 py-2.5 border-b text-sm font-semibold" style={{ borderColor: 'var(--border-color)', background: '#fafbfc' }}>三国商务文化对比</div>
        <div className="overflow-x-auto">
          <table className="w-full text-[12px]" style={{ marginBottom: 0 }}>
            <thead>
              <tr>
                <th style={{ width: '100px' }}>维度</th>
                <th style={{ color: '#3b6cf6' }}>法国</th>
                <th style={{ color: '#e8453c' }}>意大利</th>
                <th style={{ color: '#f5a623' }}>新加坡</th>
              </tr>
            </thead>
            <tbody>
              {[
                ['决策速度', '慢（层级审批）', '慢（关系优先）', '快（数据驱动）'],
                ['时间管理', '灵活（午餐神圣）', '很灵活', '严格（准时）'],
                ['沟通风格', '直接但外交', '间接、关系导向', '间接/直接'],
                ['关系建立', '中等（需尊重）', '极度重要', '效率优先'],
                ['禁忌话题', '与德国比较', '黑手党/南北比较', '种族/宗教/政治'],
                ['晚餐文化', '不聊工作', '关系黄金时间', '高效随意'],
              ].map((row, i) => (
                <tr key={i}>
                  <td className="font-medium" style={{ color: 'var(--text-muted)' }}>{row[0]}</td>
                  <td>{row[1]}</td>
                  <td>{row[2]}</td>
                  <td>{row[3]}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <LessonList module={module} lessons={[{id:'c1',title:'法国商务文化与沟通策略',content:''},{id:'c2',title:'意大利商务文化与西西里岛特别指南',content:''},{id:'c3',title:'新加坡商务文化与AMK工厂对接',content:''}]} onSelect={onSelectLesson} />
    </div>
  );
}

// ─── Generic Module Overview ───
function GenericOverview({ module, onSelectLesson }: { module: Module; onSelectLesson: (l: Lesson) => void }) {
  return (
    <div className="max-w-3xl">
      <h1 className="text-2xl font-bold mb-2">{module.title}</h1>
      <p className="mb-6" style={{ color: 'var(--text-secondary)' }}>{module.description}</p>
      <LessonList module={module} lessons={module.lessons} onSelect={onSelectLesson} />
    </div>
  );
}

// ─── Lesson List ───
function LessonList({ module, lessons, onSelect }: { module: Module; lessons: { id: string; title: string; content: string }[]; onSelect: (l: Lesson) => void }) {
  return (
    <div className="space-y-2">
      <h2 className="text-lg font-semibold mb-3 pb-2 border-b" style={{ borderColor: 'var(--border-color)' }}>课程目录</h2>
      {lessons.map((lesson, i) => (
        <button
          key={lesson.id}
          onClick={() => onSelect(lesson as Lesson)}
          className="w-full flex items-center gap-3 px-4 py-3 border rounded-lg text-left transition-all hover:shadow-sm"
          style={{ borderColor: 'var(--border-color)', background: 'var(--card-bg)' }}
        >
          <span className="w-7 h-7 rounded-md flex items-center justify-center text-[11px] font-bold text-white flex-shrink-0" style={{ background: module.color }}>
            {String(i + 1).padStart(2, '0')}
          </span>
          <span className="text-[14px] font-medium" style={{ color: 'var(--text-primary)' }}>{lesson.title}</span>
        </button>
      ))}
    </div>
  );
}

// ─── Main Content Area ───
export default function ContentArea({ module, lesson, onSelectLesson }: ContentAreaProps) {
  return (
    <main
      className="flex-1 md:ml-64"
      style={{ background: 'var(--content-bg)' }}
    >
      <div className="max-w-4xl mx-auto px-6 py-8">
        {lesson ? (
          <LessonView module={module} lesson={lesson} />
        ) : module.id === 'st-deep-dive' ? (
          <STOverview onSelectLesson={onSelectLesson} />
        ) : module.id === 'cross-culture' ? (
          <CultureOverview onSelectLesson={onSelectLesson} />
        ) : (
          <GenericOverview module={module} onSelectLesson={onSelectLesson} />
        )}
      </div>
    </main>
  );
}
