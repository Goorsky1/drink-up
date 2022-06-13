-- Table: public.beer

-- DROP TABLE IF EXISTS public.beer;

CREATE TABLE IF NOT EXISTS public.beer
(
    id SERIAL NOT NULL,
    "styleName" character varying COLLATE pg_catalog."default" NOT NULL,
    "styleCountry" character varying COLLATE pg_catalog."default" NOT NULL,
    strength integer NOT NULL,
    color character varying COLLATE pg_catalog."default" NOT NULL,
    foam character varying COLLATE pg_catalog."default" NOT NULL,
    scent character varying[] COLLATE pg_catalog."default" NOT NULL,
    taste character varying[] COLLATE pg_catalog."default" NOT NULL,
    bitterness character varying COLLATE pg_catalog."default" NOT NULL,
    CONSTRAINT beer_pkey PRIMARY KEY (id)
)

TABLESPACE pg_default;

ALTER TABLE IF EXISTS public.beer
    OWNER to postgres;