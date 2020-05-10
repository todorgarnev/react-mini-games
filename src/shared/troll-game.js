export const trollGame = {
  gameTitle: 'Forest Adventure',
  intro: {
    prompt: 'You\'re walking through the forest, minding your own business, and you run into a troll! Do you FIGHT him, PAY him, or RUN?',
    options: [{
      name: 'Fight',
      path: 'chooseFight'
    }, {
      name: 'Pay',
      path: 'choosePay'
    }, {
      name: 'Run',
      path: 'chooseRun'
    }]
  },
  chooseFight: {
    prompt: 'How courageous! Are you strong?',
    options: [{
      name: 'Yes',
      path: 'askSmartYes'
    }, {
      name: 'No',
      path: 'askSmartNo'
    }]
  },
  askSmartYes: {
    prompt: 'Are you smart?',
    options: [{
      name: 'Yes',
      path: 'fightWin'
    }, {
      name: 'No',
      path: 'fightWin'
    }]
  },
  askSmartNo: {
    prompt: 'Are you smart?',
    options: [{
      name: 'Yes',
      path: 'fightWin'
    }, {
      name: 'No',
      path: 'fightLose'
    }]
  },
  fightWin: {
    prompt: 'You only need one of the two! You beat the troll--nice work!',
    options: [{
      name: 'Start Again',
      path: 'intro'
    }]
  },
  fightLose: {
    prompt: 'You\'re not strong OR smart? Well, if you were smarter, you probably wouldn\'t have tried to fight a troll. You lose!',
    options: [{
      name: 'Start Again',
      path: 'intro'
    }]
  },
  choosePay: {
    prompt: 'All right, we\'ll pay the troll. Do you have any money?',
    options: [{
      name: 'Yes',
      path: 'payYes'
    }, {
      name: 'No',
      path: 'payLose'
    }]
  },
  payYes: {
    prompt: 'Is your money in Troll Dollars?',
    options: [{
      name: 'Yes',
      path: 'payWin'
    }, {
      name: 'No',
      path: 'payLose'
    }]
  },
  payWin: {
    prompt: 'Great! You pay the troll and continue on your merry way.',
    options: [{
      name: 'Start Again',
      path: 'intro'
    }]
  },
  payLose: {
    prompt: 'Dang! This troll only takes Troll Dollars. You get whomped!',
    options: [{
      name: 'Start Again',
      path: 'intro'
    }]
  },
  chooseRun: {
    prompt: 'Let\'s book it! Are you fast?',
    options: [{
      name: 'Yes',
      path: 'askFastYes'
    }, {
      name: 'No',
      path: 'askFastNo'
    }]
  },
  askFastYes: {
    prompt: 'Did you get a head start?',
    options: [{
      name: 'Yes',
      path: 'runWin'
    }, {
      name: 'No',
      path: 'runWin'
    }]
  },
  askFastNo: {
    prompt: 'Did you get a head start?',
    options: [{
      name: 'Yes',
      path: 'runWin'
    }, {
      name: 'No',
      path: 'runLose'
    }]
  },
  runWin: {
    prompt: 'You got away--barely! You live to stroll through the forest another day.',
    options: [{
      name: 'Start Again',
      path: 'intro'
    }]
  },
  runLose: {
    prompt: 'You\'re not fast and you didn\'t get a head start? You never had a chance! The troll eats you.',
    options: [{
      name: 'Start Again',
      path: 'intro'
    }]
  }
};
