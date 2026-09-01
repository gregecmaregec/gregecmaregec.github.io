.PHONY: serve build

HOST ?= 127.0.0.1
PORT ?= 4000
JEKYLL_CONFIG = _config.yml,_config.local.yml

serve:
	bundle exec jekyll serve --config $(JEKYLL_CONFIG) --host $(HOST) --port $(PORT) --livereload

build:
	bundle exec jekyll build --config $(JEKYLL_CONFIG)
