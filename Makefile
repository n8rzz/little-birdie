.PHONY: assets clean sass ts start npm-start

assets:
	cp -R ./src/assets/ ./dist/assets/

clean:
	rm -rf ./dist
	mkdir dist

sass:
	npm run sass

ts:
	npm run build
	cp ./src/index.html ./dist/index.html

npm-start:
	npm run start

start: clean assets sass ts npm-start
