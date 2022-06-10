INSERT INTO public.beer ("styleName","styleCountry",strength,color,foam,scent,taste,bitterness) VALUES
	 ('American Pale Ale','us',5,'lightYellow','plenty','{"citrus","malt"}','{"bitter","fruity"}','4'),
	 ('Světlý Ležák','czech',5,'lightYellow','plenty','{"malt","herbs"}','{"malty","bitter"}','4'),
	 ('Polotmavé','czech',7,'lightBrown','plenty','{"caramel","malt"}','{"malty","bitter","sweet","seasoning"}','3'),
	 ('German Pils','germany',5,'lightYellow','plenty','{"malt","herbs"}','{"malty","bitter"}','4'),
	 ('Munich Helles','germany',5,'lightYellow','little','{"malt","herbs"}','{"malty"}','2'),
	 ('Tmavý Ležák','czech',5,'darkBrown','little','{"malt","caramel"}','{"chocolate","coffee","seasoning"}','3'),
	 ('Märzenbier','germany',7,'lightYellow','plenty','{"malt","herbs"}','{"malty","bitter"}','3'),
	 ('Munich Dunkel','germany',7,'darkBrown','little','{"chocolate","caramel","malt"}','{"chocolate","malty","sweet"}','3'),
	 ('Schwarzbier','germany',5,'darkBlack','little','{"chocolate","coffee"}','{"chocolate","coffee"}','3'),
	 ('Dunkelweizen','germany',5,'darkBrown','plenty','{"fruits","herbs","chocolate","caramel"}','{"fruity","sweet","chocolate"}','2')
	 ON CONFLICT DO NOTHING;
INSERT INTO public.beer ("styleName","styleCountry",strength,color,foam,scent,taste,bitterness) VALUES
	 ('Hefeweizen','germany',5,'darkYellow','plenty','{"fruits","malt"}','{"fruity","sweet","malty"}','2'),
	 ('Bock','germany',7,'darkBrown','plenty','{"caramel","roasted"}','{"malty","seasoning"}','3'),
	 ('Doppelbock','germany',10,'darkBrown','plenty','{"caramel","roasted"}','{"malty","seasoning"}','3'),
	 ('Eisbock','germany',11,'red','little','{"fruits","malt","chocolate","caramel"}','{"sweet","chocolate","seasoning"}','3'),
	 ('Berliner Weisse','germany',5,'lightYellow','plenty','{"malt","fruits"}','{"sour","fruity"}','1'),
	 ('Gose','germany',5,'lightYellow','plenty','{"malt","fruits","herbs"}','{"sour","fruity"}','2'),
	 ('Belgian Pale Ale','belgium',5,'lightBrown','plenty','{"malt","fruits"}','{"malty","fruity","bitter"}','3'),
	 ('Belgian IPA','belgium',10,'lightBrown','little','{"fruits","citrus","herbs"}','{"fruity","bitter","sweet"}','5'),
	 ('Belgian Blond Ale','belgium',7,'lightYellow','plenty','{"malt","herbs"}','{"malty","bitter","fruity"}','3'),
	 ('Witbier','belgium',5,'lightYellow','plenty','{"citrus","herbs","fruits"}','{"sweet","fruity","seasoning"}','2')
	 ON CONFLICT DO NOTHING;
INSERT INTO public.beer ("styleName","styleCountry",strength,color,foam,scent,taste,bitterness) VALUES
	 ('Saison','belgium',7,'lightBrown','plenty','{"fruits","malt","herbs"}','{"fruity","bitter","malty"}','3'),
	 ('Tripel','belgium',10,'lightYellow','plenty','{"herbs","fruits","malts","citrus"}','{"fruity","malty","sweet","seasoning"}','3'),
	 ('Quadrupel','belgium',11,'red','plenty','{"caramel","fruits","herbs"}','{"sweet","fruity","seasoning"}','3'),
	 ('Flanders Red Ale','belgium',7,'red','little','{"fruits","chocolate"}','{"sour","fruity","seasoning"}','2'),
	 ('Lambic','belgium',7,'lightYellow','little','{"fruits","citrus"}','{"sour","fruity","seasoning"}','1'),
	 ('Kriek','belgium',7,'red','plenty','{"fruits","citrus"}','{"sour","fruity"}','1'),
	 ('Bitter','uk',3,'lightYellow','little','{"malt","herbs"}','{"malty","bitter","seasoning"}','4'),
	 ('Golden Ale','uk',5,'lightYellow','little','{"malt","herbs"}','{"malty","bitter"}','4'),
	 ('English IPA','uk',7,'lightYellow','plenty','{"malt","herbs"}','{"malty","bitter"}','5'),
	 ('Mild','uk',3,'darkBrown','plenty','{"chocolate","caramel"}','{"chocolate","sweet"}','2')
	 ON CONFLICT DO NOTHING;
INSERT INTO public.beer ("styleName","styleCountry",strength,color,foam,scent,taste,bitterness) VALUES
	 ('Brown Ale','uk',5,'darkBrown','little','{"chocolate","caramel"}','{"chocolate","sweet"}','3'),
	 ('Irish Red Ale','uk',5,'red','little','{"malt","caramel","herbs"}','{"malty","bitter","seasoning"}','3'),
	 ('Dry Stout','uk',5,'darkBlack','little','{"chocolate","coffee","roasted"}','{"chocolate","coffee"}','3'),
	 ('Milk Stout','uk',5,'darkBlack','little','{"chocolate","coffee"}','{"chocolate","coffee","sweet"}','2'),
	 ('Foreign Extra Stout','uk',7,'darkBlack','plenty','{"chocolate","fruits","roasted"}','{"chocolate","fruity","sweet"}','5'),
	 ('Russian Imperial Stout','uk',11,'darkBlack','little','{"chocolate","coffee","roasted"}','{"fruits","chocolate","coffee","bitter","malty"}','5'),
	 ('Barley Wine','uk',11,'darkBrown','little','{"malt","fruits","caramel"}','{"sweet","malty","seasoning"}','5'),
	 ('International Pale Lager','us',5,'lightYellow','plenty','{"malt"}','{"malty"}','2'),
	 ('California Common','us',5,'red','little','{"citrus","caramel"}','{"bitter","sweet"}','4'),
	 ('American Wheat','us',5,'lightYellow','little','{"citrus","herbs"}','{"seasoning","sweet"}','2')
	 ON CONFLICT DO NOTHING;
INSERT INTO public.beer ("styleName","styleCountry",strength,color,foam,scent,taste,bitterness) VALUES
	 ('American Amber Ale','us',5,'lightBrown','little','{"caramel","citrus"}','{"bitter","fruity","sweet"}','4'),
	 ('East Coast IPA','us',7,'lightYellow','plenty','{"citrus","herbs","fruits"}','{"bitter","fruity","sweet"}','4'),
	 ('English Porter','uk',5,'darkBlack','little','{"chocolate","malt","roasted"}','{"chocolate","coffee"}','3'),
	 ('West Coast IPA','us',7,'lightYellow','plenty','{"citrus","herbs","fruits"}','{"bitter","fruity","sweet"}','5'),
	 ('New England IPA','us',7,'lightYellow','plenty','{"citrus","herbs","fruits"}','{"bitter","fruity","sweet"}','3'),
	 ('Red IPA','us',7,'red','plenty','{"citrus","herbs","fruits"}','{"bitter","fruity","sweet"}','5'),
	 ('Black IPA','us',7,'darkBlack','plenty','{"citrus","herbs","roasted"}','{"bitter","seasoning","coffee"}','5'),
	 ('Dubbel','belgium',7,'lightBrown','little','{"malt","fruits","chocolate","caramel"}','{"fruity","seasoning","bitter"}','3'),
	 ('Wheatwine','us',11,'lightBrown','little','{"malt","herbs","fruits"}','{"malty","sweet","fruity"}','4'),
	 ('Grodziskie','rest',3,'lightYellow','plenty','{"malt","herbs"}','{"malty","seasoning"}','3');
INSERT INTO public.beer ("styleName","styleCountry",strength,color,foam,scent,taste,bitterness) VALUES
	 ('Baltic Porter','rest',10,'darkBlack','little','{"chocolate","caramel","coffee"}','{"chocolate","sweet","coffee"}','3'),
	 ('Radler','rest',3,'lightYellow','plenty','{"fruits"}','{"fruity","sour"}','1'),
	 ('Sour','rest',5,'lightYellow','plenty','{"fruits","citrus"}','{"fruity","sour"}','2'),
	 ('Pastry Sour','rest',7,'lightYellow','plenty','{"fruits","citrus","chocolate","caramel"}','{"fruity","sour","chocolate","sweet"}','2'),
	 ('Pastry Stout','rest',10,'darkBlack','little','{"chocolate","caramel","coffee"}','{"chocolate","sweet","coffee"}','1')
	 ON CONFLICT DO NOTHING;
