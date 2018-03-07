
.PHONY: test

test:
	$(shell npm bin)/eslint amount.js
	npm test

.DEFAULT_GOAL := test
