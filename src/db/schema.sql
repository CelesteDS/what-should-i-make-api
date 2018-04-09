CREATE TYPE role AS ENUM ('regular', 'admin');
CREATE TYPE quantity_units AS ENUM ('cups', 'ounces', 'fluid ounces') -- &c &c

CREATE TABLE users (
  id SERIAL PRIMARY KEY,
  email TEXT NOT NULL UNIQUE,
  password TEXT NOT NULL,
  user_role role DEFAULT 'regular',
  joined_at DATE DEFAULT now()
);

CREATE TABLE recipes (
  id SERIAL PRIMARY KEY,
  title TEXT NOT NULL,
  tagline TEXT,
  directions TEXT NOT NULL,
  total_minutes INTEGER,
  active_minutes INTEGER
);

CREATE TABLE users_recipes (
  user_id INTEGER REFERENCES users (id),
  recipe_id INTEGER REFERENCES recipes (id),
  PRIMARY KEY (user_id, recipe_id),
  is_favorite BOOLEAN,
  notes TEXT
);

CREATE TABLE cupboards (
  id SERIAL PRIMARY KEY,
  user_id INTEGER REFERENCES users (id),
  created_at DATE DEFAULT now(),
  modified_at DATE DEFAULT now(),
  is_public BOOLEAN DEFAULT false
);

CREATE TABLE categories (
  name TEXT PRIMARY KEY
);

CREATE TABLE ingredients (
  id SERIAL PRIMARY KEY,
  name TEXT NOT NULL,
  akas TEXT,
  description TEXT,
  category TEXT REFERENCES categories (name)
);

CREATE TABLE cupboards_ingredients (
  cupboard_id INTEGER REFERENCES cupboards (id),
  ingredient_id INTEGER REFERENCES ingredients (id),
  quantity NUMBER,
  units quantity_units
);

CREATE TABLE modifiers (
  id SERIAL PRIMARY KEY,
  name TEXT NOT NULL,
  notes TEXT
);

CREATE TABLE ingredients_modifiers (
  ingredient_id INTEGER REFERENCES ingredients (id),
  modifier_id INTEGER REFERENCES modifiers (id),
  directions TEXT
);

CREATE TABLE recipes_ingredients (
  id SERIAL PRIMARY KEY,
  recipe_id INTEGER REFERENCES recipes (id),
  ingredient_id INTEGER REFERENCES ingredients (id),
  quantity NUMBER,
  units quantity_units,
  is_optional BOOLEAN DEFAULT FALSE
  -- in future quantity will be number, + column unit_of_measurement
  -- also, currently quantity can include adjectives, later will be own thing
);

CREATE TABLE recipe_ingredients_modifiers (
  recipes_ingredients_id INTEGER REFERENCES recipes_ingredients (id),
  modifiers_id INTEGER REFERENCES modifiers (id),
);

-- add adjectives table & ingredients adjectives join table (for directions, ie how to chop/cook/whatevs)
