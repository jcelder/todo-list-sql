
CREATE TABLE tasks (
  id SERIAL PRIMARY KEY,
  task TEXT NOT NULL,
  complete BOOLEAN DEFAULT false
);

DROP ROLE IF EXISTS test;
CREATE USER test WITH PASSWORD '1234';
GRANT ALL PRIVILEGES ON TABLE tasks TO test;
GRANT USAGE, SELECT ON ALL SEQUENCES IN SCHEMA public TO test;
