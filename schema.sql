
CREATE TABLE tasks (
  id SERIAL PRIMARY KEY,
  task TEXT NOT NULL,
  complete BOOLEAN DEFAULT false
);
