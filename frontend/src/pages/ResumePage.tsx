import { useState, useCallback } from 'react';
import { motion } from 'framer-motion';
import { useDropzone } from 'react-dropzone';
import {
  Upload,
  FileText,
  CheckCircle2,
  AlertCircle,
  Loader2,
  Brain,
  Code2,
  Award,
  Briefcase,
  GraduationCap,
  Star,
} from 'lucide-react';

const mockSkills = [
  { name: 'JavaScript', proficiency: 85, category: 'Programming' },
  { name: 'React', proficiency: 80, category: 'Framework' },
  { name: 'Python', proficiency: 75, category: 'Programming' },
  { name: 'Node.js', proficiency: 70, category: 'Backend' },
  { name: 'SQL', proficiency: 65, category: 'Database' },
  { name: 'System Design', proficiency: 55, category: 'Architecture' },
  { name: 'Docker', proficiency: 50, category: 'DevOps' },
  { name: 'AWS', proficiency: 45, category: 'Cloud' },
];

export default function ResumePage() {
  const [uploadState, setUploadState] = useState<'idle' | 'uploading' | 'analyzing' | 'done'>('idle');
  const [fileName, setFileName] = useState('');

  const onDrop = useCallback((acceptedFiles: File[]) => {
    if (acceptedFiles.length > 0) {
      setFileName(acceptedFiles[0].name);
      setUploadState('uploading');

      // Simulate upload + analysis
      setTimeout(() => setUploadState('analyzing'), 1500);
      setTimeout(() => setUploadState('done'), 4000);
    }
  }, []);

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept: {
      'application/pdf': ['.pdf'],
      'application/vnd.openxmlformats-officedocument.wordprocessingml.document': ['.docx'],
    },
    maxFiles: 1,
    maxSize: 10 * 1024 * 1024,
  });

  return (
    <motion.div
      className="page-container max-w-5xl"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
    >
      <div className="mb-8">
        <h1 className="section-title">Resume Analysis</h1>
        <p className="section-subtitle">Upload your resume for AI-powered skill extraction and interview planning.</p>
      </div>

      <div className="grid lg:grid-cols-2 gap-8">
        {/* Upload Section */}
        <div>
          <div
            {...getRootProps()}
            className={`card cursor-pointer text-center py-16 px-8 transition-all ${
              isDragActive ? 'border-primary-500/50 bg-primary-500/5' : ''
            }`}
            style={{
              borderStyle: 'dashed',
              borderWidth: '2px',
              borderColor: isDragActive ? undefined : 'oklch(1 0 0 / 0.1)',
            }}
          >
            <input {...getInputProps()} />
            {uploadState === 'idle' && (
              <div>
                <div
                  className="w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4"
                  style={{ background: 'oklch(0.59 0.22 275 / 0.1)' }}
                >
                  <Upload className="w-8 h-8" style={{ color: 'oklch(0.68 0.17 275)' }} />
                </div>
                <h3 className="font-bold text-lg mb-2">
                  {isDragActive ? 'Drop your resume here' : 'Upload Your Resume'}
                </h3>
                <p className="text-sm mb-4" style={{ color: 'oklch(0.5 0.01 280)' }}>
                  Drag & drop your PDF or DOCX file here, or click to browse
                </p>
                <p className="text-xs" style={{ color: 'oklch(0.4 0.01 280)' }}>
                  Maximum file size: 10MB
                </p>
              </div>
            )}

            {uploadState === 'uploading' && (
              <div>
                <Loader2 className="w-12 h-12 mx-auto mb-4 animate-spin" style={{ color: 'oklch(0.68 0.17 275)' }} />
                <h3 className="font-bold text-lg mb-1">Uploading...</h3>
                <p className="text-sm" style={{ color: 'oklch(0.5 0.01 280)' }}>{fileName}</p>
              </div>
            )}

            {uploadState === 'analyzing' && (
              <div>
                <Brain className="w-12 h-12 mx-auto mb-4 animate-pulse" style={{ color: 'oklch(0.70 0.17 195)' }} />
                <h3 className="font-bold text-lg mb-1">AI Analyzing...</h3>
                <p className="text-sm" style={{ color: 'oklch(0.5 0.01 280)' }}>
                  Extracting skills, projects, and experience...
                </p>
              </div>
            )}

            {uploadState === 'done' && (
              <div>
                <CheckCircle2 className="w-12 h-12 mx-auto mb-4" style={{ color: 'oklch(0.72 0.19 155)' }} />
                <h3 className="font-bold text-lg mb-1">Analysis Complete!</h3>
                <p className="text-sm" style={{ color: 'oklch(0.5 0.01 280)' }}>{fileName}</p>
              </div>
            )}
          </div>

          {/* Analysis Summary Cards */}
          {uploadState === 'done' && (
            <motion.div
              className="grid grid-cols-2 gap-3 mt-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
            >
              {[
                { icon: Code2, label: 'Skills Found', value: '12', color: 'oklch(0.59 0.22 275)' },
                { icon: Briefcase, label: 'Experience', value: '3 years', color: 'oklch(0.70 0.17 195)' },
                { icon: GraduationCap, label: 'Education', value: 'B.Tech CS', color: 'oklch(0.72 0.19 155)' },
                { icon: Award, label: 'Certifications', value: '2', color: 'oklch(0.80 0.16 85)' },
              ].map((item) => (
                <div key={item.label} className="card p-4">
                  <item.icon className="w-5 h-5 mb-2" style={{ color: item.color }} />
                  <p className="text-lg font-bold">{item.value}</p>
                  <p className="text-xs" style={{ color: 'oklch(0.5 0.01 280)' }}>{item.label}</p>
                </div>
              ))}
            </motion.div>
          )}
        </div>

        {/* Skill Matrix */}
        <div>
          <div className="card">
            <h2 className="font-bold text-lg mb-1">Skill Matrix</h2>
            <p className="text-sm mb-6" style={{ color: 'oklch(0.5 0.01 280)' }}>
              {uploadState === 'done' ? 'Extracted from your resume' : 'Upload a resume to see your skill analysis'}
            </p>

            {uploadState === 'done' ? (
              <div className="space-y-4">
                {mockSkills.map((skill, i) => (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.1 }}
                  >
                    <div className="flex items-center justify-between mb-1.5">
                      <div className="flex items-center gap-2">
                        <span className="text-sm font-medium">{skill.name}</span>
                        <span className="text-xs px-1.5 py-0.5 rounded" style={{ background: 'oklch(1 0 0 / 0.05)', color: 'oklch(0.5 0.01 280)' }}>
                          {skill.category}
                        </span>
                      </div>
                      <span className="text-sm font-bold">{skill.proficiency}%</span>
                    </div>
                    <div className="h-2 rounded-full" style={{ background: 'oklch(1 0 0 / 0.05)' }}>
                      <motion.div
                        className="h-full rounded-full"
                        style={{
                          background: skill.proficiency >= 70
                            ? 'linear-gradient(90deg, oklch(0.59 0.22 275), oklch(0.70 0.17 195))'
                            : skill.proficiency >= 50
                            ? 'linear-gradient(90deg, oklch(0.80 0.16 85), oklch(0.75 0.15 60))'
                            : 'linear-gradient(90deg, oklch(0.65 0.20 25), oklch(0.70 0.18 40))',
                        }}
                        initial={{ width: 0 }}
                        animate={{ width: `${skill.proficiency}%` }}
                        transition={{ duration: 0.8, delay: 0.3 + i * 0.1 }}
                      />
                    </div>
                  </motion.div>
                ))}
              </div>
            ) : (
              <div className="text-center py-12">
                <FileText className="w-12 h-12 mx-auto mb-3" style={{ color: 'oklch(0.3 0.01 280)' }} />
                <p className="text-sm" style={{ color: 'oklch(0.4 0.01 280)' }}>
                  No resume uploaded yet
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </motion.div>
  );
}
