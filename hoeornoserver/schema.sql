CREATE TABLE login(
  id SERIAL PRIMARY KEY,
  email TEXT,
  password TEXT
);
CREATE TABLE tweets(
  id SERIAL PRIMARY KEY,
  tweets TEXT,
  login_id INTEGER REFERENCES login(id)
);
