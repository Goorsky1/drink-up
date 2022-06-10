CREATE TABLE IF NOT EXISTS public.beer (
    id integer NOT NULL,
    "styleName" character varying NOT NULL,
    "styleCountry" character varying NOT NULL,
    strength integer NOT NULL,
    color character varying NOT NULL,
    foam character varying NOT NULL,
    scent character varying[] NOT NULL,
    taste character varying[] NOT NULL,
    bitterness character varying NOT NULL
);
