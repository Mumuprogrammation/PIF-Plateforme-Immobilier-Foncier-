const { defineConfig } = require('vite');
const vue = require('@vitejs/plugin-vue');
const path = require('path');
//Sass plugin
plugins: [
    vue(),
    {
      apply: 'build',
      ...require('sass-plugin')(),
    },
  ]
  import { defineConfig } from 'vite';
  export default defineConfig({
    css:{
        preprocessorOptions:{
            scss:{
                additionalData:
                `@import './styles/main.scss';`,
            },
        },
    },
  });