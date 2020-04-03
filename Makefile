.PHONY: assets clean sass test ts-main ts-renderer start npm-start

assets:
	cp -R ./src/assets/ ./dist/assets/
	cp ./src/index.html ./dist/index.html

clean:
	rm -rf ./dist
	mkdir dist

npm-start:
	npm run start

sass:
	npm run sass

start: clean assets sass ts-main ts-renderer npm-start

test:
	npm run test

ts-main:
	npm run build:main

ts-renderer:
	npm run build:renderer
