CREATE TABLE IF NOT EXISTS sessions (
  id TEXT PRIMARY KEY,
  started_at TEXT NOT NULL,
  updated_at TEXT NOT NULL,
  completed_at TEXT,
  status TEXT NOT NULL DEFAULT 'started',
  current_step INTEGER NOT NULL DEFAULT 0,
  total_questions INTEGER NOT NULL DEFAULT 0,
  source TEXT,
  user_agent TEXT,
  ip_hash TEXT,
  country TEXT,
  colo TEXT,
  answers_json TEXT,
  bonus_answers_json TEXT,
  main_result_code TEXT,
  main_result_codes_json TEXT,
  main_similarity INTEGER,
  mode_kicker TEXT,
  bonus_title TEXT,
  bonus_accuracy INTEGER,
  bonus_correct INTEGER,
  bonus_total INTEGER
);

CREATE INDEX IF NOT EXISTS idx_sessions_started_at ON sessions(started_at);
CREATE INDEX IF NOT EXISTS idx_sessions_status ON sessions(status);
CREATE INDEX IF NOT EXISTS idx_sessions_main_result_code ON sessions(main_result_code);
