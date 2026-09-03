.PHONY: dev serve build

HOST ?= 127.0.0.1
PORT ?= 4000
JEKYLL_CONFIG = _config.yml,_config.local.yml

# System Ruby is 2.6 and cannot run this site; prefer the mise toolchain when present.
BUNDLE := $(shell test -x $(HOME)/.local/share/mise/shims/bundle && echo $(HOME)/.local/share/mise/shims/bundle || echo bundle)

dev: serve

serve:
	$(BUNDLE) exec jekyll serve --config $(JEKYLL_CONFIG) --host $(HOST) --port $(PORT) --livereload

build:
	$(BUNDLE) exec jekyll build --config $(JEKYLL_CONFIG)
