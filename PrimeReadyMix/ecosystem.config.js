module.exports = {
  apps : [{
    script: 'npm start',
	name:"ready-mix"
  }, ],

  deploy : {
    production : {
      user : 'ready-mix',
      path : '/home/reviewoil.com',
      'pre-deploy-local': '',
      'post-deploy' : 'source ~/.nvm/nvm.sh && npm install && npm run build && pm2 reload ecosystem.config.js --env production',
      'pre-setup': '',
      'ssh_options': 'ForwardAgent=yes'
    }
  }
};
