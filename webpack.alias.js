const path = require('path');

module.exports = {
	resolve: {
		alias: {
			Assets: path.resolve(__dirname, './src/assets'),
			Components: path.resolve(__dirname, './src/shared/common/components'),
			Svgs: path.resolve(__dirname, './src/shared/common/resrcs/svgs'),
			Redux: path.resolve(__dirname, './src/shared/local-redux'),
			Utils: path.resolve(__dirname, './src/shared/utils'),
			Pages: path.resolve(__dirname, './src/app/pages'),
			Config: path.resolve(__dirname, './src/shared/config')
		}
	}
};
