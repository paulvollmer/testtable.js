BIN = ./node_modules/.bin

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
