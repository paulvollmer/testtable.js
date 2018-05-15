BIN = ./node_modules/.bin

all: lint test
.PHONY: all

lint:
	@$(BIN)/eslint .
lint-fix:
	@$(BIN)/eslint --fix .
.PHONY: lint lint-fix

test:
	@$(BIN)/jest .
.PHONY: test

docs:
	@$(BIN)/esdoc
.PHONY: docs
