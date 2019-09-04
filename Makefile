build-app:
	rm -rf build
	rm -rf public
	npm run build

deploy:
	python3 deploy.py

dev:
	npm run dev

lint:
	npm run eslint .

surge:
	surge public --domain uzbat.surge.sh

build-server:
	npm run server -- --watch

build-client:
	npm run client -- --watch