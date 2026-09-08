.PHONY: dev serve build stop

HOST ?= 127.0.0.1
PORT ?= 4000
# jekyll --livereload always binds this port alongside PORT above; a killed
# serve process only stops holding it once we kill it too.
LIVERELOAD_PORT ?= 35729
JEKYLL_CONFIG = _config.yml,_config.local.yml

# System Ruby is 2.6 and cannot run this site; prefer the mise toolchain when present.
BUNDLE := $(shell test -x $(HOME)/.local/share/mise/shims/bundle && echo $(HOME)/.local/share/mise/shims/bundle || echo bundle)

dev: serve

serve:
	$(BUNDLE) exec jekyll serve --config $(JEKYLL_CONFIG) --host $(HOST) --port $(PORT) --livereload

# A long-lived `jekyll serve` can go stale (its file watcher dies silently
# while the HTTP server keeps answering), which then also blocks the next
# `make dev` from starting at all -- it can't bind a port the stale process
# still holds. `stop` kills whatever is listening on PORT and
# LIVERELOAD_PORT so the next `make dev` always gets a clean start.
stop:
	@PIDS=$$(lsof -ti tcp:$(PORT) -ti tcp:$(LIVERELOAD_PORT) 2>/dev/null); \
	if [ -n "$$PIDS" ]; then \
		echo "Stopping jekyll serve (pid(s): $$PIDS)"; \
		kill $$PIDS; \
	else \
		echo "No server running on port $(PORT)/$(LIVERELOAD_PORT)"; \
	fi

build:
	$(BUNDLE) exec jekyll build --config $(JEKYLL_CONFIG)
