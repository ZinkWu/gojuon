import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { getPracticeMode, getSelectedKeys } from '../../utils';

const Config: React.FC = () => {
  const [selectedRows, setSelectedRows] = useState<string[]>([]);
  const [practiceMode, setPracticeMode] = useState<string>('all');
  const navigate = useNavigate();

  const seionRows = [
    { key: 'vowel', label: '元音(aiueo)' },
    { key: 'k', label: 'k行' },
    { key: 's', label: 's行' },
    { key: 't', label: 't行' },
    { key: 'n', label: 'n行' },
    { key: 'h', label: 'h行' },
    { key: 'm', label: 'm行' },
    { key: 'y', label: 'y行' },
    { key: 'r', label: 'r行' },
    { key: 'w', label: 'w行' },
  ];

  const dakuonRows = [
    { key: 'g', label: 'g行' },
    { key: 'z', label: 'z行' },
    { key: 'd', label: 'd行' },
    { key: 'b', label: 'b行' },
    { key: 'p', label: 'p行' },
  ];

  const youonRows = [
    { key: 'ky', label: 'ky行' },
    { key: 'sy', label: 'sy行' },
    { key: 'ty', label: 'ty行' },
    { key: 'ny', label: 'ny行' },
    { key: 'hy', label: 'hy行' },
    { key: 'my', label: 'my行' },
    { key: 'ry', label: 'ry行' },
    { key: 'gy', label: 'gy行' },
    { key: 'zy', label: 'zy行' },
    { key: 'dy', label: 'dy行' },
    { key: 'by', label: 'by行' },
    { key: 'py', label: 'py行' },
  ];

  const handleSave = (path: string) => {
    localStorage.setItem('selectedRows', JSON.stringify(selectedRows));
    localStorage.setItem('practiceMode', practiceMode);
    navigate(`/${path}`);
  };

  const handleLoad = () => {
    const selectedKeys = getSelectedKeys();
    setSelectedRows(selectedKeys);
    const savedPracticeMode = getPracticeMode();
    if (savedPracticeMode) {
      setPracticeMode(savedPracticeMode);
    }
  };

  return (
    <div className="flex flex-col items-center p-2">
      <h2 className="text-2xl font-bold mb-4">配置卡片</h2>
      <div className="w-full max-w-2xl">
        <div>
          <div className="space-y-4">
            {[
              { title: '清音', rows: seionRows },
              { title: '浊音和半浊音', rows: dakuonRows },
              { title: '拗音', rows: youonRows },
            ].map(({ title, rows }) => (
              <div key={title}>
                <h4 className="text-lg font-medium mb-2">{title}</h4>
                <div className="grid grid-cols-3 gap-2">
                  {rows.map((row) => (
                    <button
                      key={row.key}
                      className={`p-2 border rounded ${
                        selectedRows.includes(row.key) ? 'bg-green-600 text-white' : 'bg-white text-gray-700'
                      }`}
                      onClick={() => {
                        setSelectedRows((prevRows) =>
                          prevRows.includes(row.key) ? prevRows.filter((r) => r !== row.key) : [...prevRows, row.key],
                        );
                      }}
                    >
                      {row.label}
                    </button>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="mt-4 w-full">
        <h4 className="text-lg font-medium mb-2">练习模式</h4>
        <div className="flex space-x-4">
          {['hiragana', 'katakana', 'all'].map((mode) => (
            <label key={mode} className="flex items-center text-sm">
              <input
                type="radio"
                value={mode}
                checked={practiceMode === mode}
                onChange={(e) => setPracticeMode(e.target.value)}
                className="mr-2 accent-green-600"
              />
              {mode === 'hiragana' ? '平假⇄罗马' : mode === 'katakana' ? '片假⇄ 罗马' : '全部'}
            </label>
          ))}
        </div>
      </div>
      <div className="flex gap-4 mt-2">
        <button
          disabled={selectedRows.length === 0}
          className={`mt-4 px-4 py-2 rounded ${selectedRows.length === 0 ? 'bg-gray-400 cursor-not-allowed' : 'bg-green-600'} text-white`}
          onClick={() => handleSave('practice')}
        >
          练习
        </button>
        <button
          disabled={selectedRows.length === 0}
          className={`mt-4 px-4 py-2 rounded ${selectedRows.length === 0 ? 'bg-gray-400 cursor-not-allowed' : 'bg-green-600'} text-white`}
          onClick={() => handleSave('play-audio')}
        >
          听写练习
        </button>
        <button className="mt-4 bg-green-600 text-white px-4 py-2 rounded" onClick={handleLoad}>
          使用上次配置
        </button>
      </div>
    </div>
  );
};

export default Config;
