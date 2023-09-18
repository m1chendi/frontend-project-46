install:
	npm ci

publish:
	npm publish --dry-run

gendiff: 
	bin/gendiff.js

run:
	node bin/gendiff file1.json file2.json

lint:
	npx eslint .

lint-fix:
	npx eslint . --fix