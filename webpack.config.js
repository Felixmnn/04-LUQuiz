const createExpoWebpackConfigAsync = require('@expo/webpack-config');

module.exports = async function (env, argv) {
  const config = await createExpoWebpackConfigAsync(env, argv);
  config.resolve.alias = {
    ...(config.resolve.alias || {}),
    'react-native$': 'react-native-web',
  };

  config.module.rules.push({
    test: /\.css$/,
    use: ['style-loader', 'css-loader', 'postcss-loader'], 
  });
  
  return config;
};

