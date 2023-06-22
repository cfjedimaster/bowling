module.exports = {
	tags: [
		"posts",
		"alleys"
	],
	"layout": "layouts/post.njk",
	"permalink": "{{ state | slugify }}/{{ city | slugify }}/{{ alley | slugify }}/"
};
