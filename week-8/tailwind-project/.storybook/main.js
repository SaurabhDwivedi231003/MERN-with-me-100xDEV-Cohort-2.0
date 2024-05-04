
export default {

    stories : ['../src/**/*.mdx' , '../stories/**/*.stories.0(js|jsx|mjs|ts|tsx)'] ,
    addons : [ '@storybook/addon-links' , '@storybook/addon-essentials'],
    // framework: '@storybook/react-vite', // 👈 Add this
    core:{
        builder : '@storybook/builder-vite',
    },
  };