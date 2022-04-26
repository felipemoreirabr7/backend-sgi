CREATE TABLE "users" (
  "id" SERIAL PRIMARY KEY,
  "user1" text NOT NULL,
  "name" text NOT NULL,
  "password" text NOT NULL
);

CREATE TABLE "ponto" (
  "user1" text NOT NULL,
  "lat" text NOT NULL,
  "long" text NOT NULL,
  "campus" text NOT NULL
);