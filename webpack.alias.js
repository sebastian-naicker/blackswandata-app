const path = require('path')

module.exports = {
	resolve: {
		alias: {
			'@assets': path.resolve(__dirname, './src/assets'),
			'@components': path.resolve(__dirname, './src/shared/common/components'),
			'@svgs': path.resolve(__dirname, './src/shared/common/resrcs/svgs'),
			'@redux': path.resolve(__dirname, './src/shared/local-redux'),
			'@utils': path.resolve(__dirname, './src/shared/utils'),
			'@pages': path.resolve(__dirname, './src/app/pages'),
			'@config': path.resolve(__dirname, './src/shared/config')
		}
	}
}
