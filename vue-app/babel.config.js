module.exports = {
  presets: [
    '@vue/cli-plugin-babel/preset'
  ],
  // PS mint-ui 的按需引入配置
  plugins: [
    ["component",
      {
        "libraryName": "mint-ui",
        "style": true
      }
    ]
  ]
}
