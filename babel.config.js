function buildPresets(babelEnv) {
    if (babelEnv === 'client') {
      return {
        presets: [
          [
            '@babel/env',
            {
              modules: false
            }
          ],
          '@babel/react'
        ]
      };
    }
  
    return {
      presets: [
        [
          '@babel/env',
          {
            targets: {
              node: 'current'
            },
            modules: false
          }
        ],
        '@babel/react'
      ]
    };
  }
  
  function buildPlugins(babelEnv) {
    if (babelEnv === 'client') {
      return {
        plugins: [
          '@babel/transform-runtime',
          '@babel/syntax-object-rest-spread',
          '@babel/transform-async-to-generator'
        ]
      };
    }
  }
  
  module.exports = (api) => {
    const babelEnv = api.env();
  
    return {
      ...buildPresets(babelEnv),
      ...buildPlugins(babelEnv)
    };
  };