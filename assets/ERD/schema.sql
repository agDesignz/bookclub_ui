-- SUPABASE SCHEMA --

-- WARNING: This schema is for context only and is not meant to be run.
-- Table order and constraints may not be valid for execution.

CREATE TABLE public.book (
  id bigint GENERATED ALWAYS AS IDENTITY NOT NULL,
  title text NOT NULL,
  author text NOT NULL,
  cover character varying,
  key character varying NOT NULL,
  description text,
  finished boolean DEFAULT false,
  user_id uuid,
  suggestion text,
  CONSTRAINT book_pkey PRIMARY KEY (id),
  CONSTRAINT book_user_id_fkey FOREIGN KEY (user_id) REFERENCES public.profile(user_id)
);
CREATE TABLE public.meeting (
  id bigint GENERATED ALWAYS AS IDENTITY NOT NULL,
  date date,
  time time without time zone,
  location character varying,
  book_id bigint,
  CONSTRAINT meeting_pkey PRIMARY KEY (id),
  CONSTRAINT meeting_book_id_fkey FOREIGN KEY (book_id) REFERENCES public.book(id)
);
CREATE TABLE public.profile (
  user_id uuid NOT NULL DEFAULT auth.uid(),
  username character varying NOT NULL UNIQUE,
  email text NOT NULL UNIQUE,
  is_approved boolean NOT NULL DEFAULT false,
  is_admin boolean NOT NULL DEFAULT false,
  id bigint GENERATED ALWAYS AS IDENTITY NOT NULL,
  CONSTRAINT profile_pkey PRIMARY KEY (user_id),
  CONSTRAINT user_profile_user_id_fkey FOREIGN KEY (user_id) REFERENCES auth.users(id)
);
CREATE TABLE public.vote (
  id bigint GENERATED ALWAYS AS IDENTITY NOT NULL,
  user_id uuid DEFAULT gen_random_uuid(),
  book_id bigint,
  CONSTRAINT vote_pkey PRIMARY KEY (id),
  CONSTRAINT vote_user_id_fkey FOREIGN KEY (user_id) REFERENCES public.profile(user_id),
  CONSTRAINT vote_book_id_fkey FOREIGN KEY (book_id) REFERENCES public.book(id)
);