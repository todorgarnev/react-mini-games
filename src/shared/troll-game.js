export const trollGame = {
  title: 'Forest Adventure',
  intro: {
    prompt: 'You\'re walking through the forest, minding your own business, and you run into a troll! Do you FIGHT him, PAY him, or RUN?',
    options: [{
      name: 'Fight',
      path: 'choose_fight'
    }, {
      name: 'Pay',
      path: 'choose_pay'
    }, {
      name: 'Run',
      path: 'choose_run'
    }]
  },
  choose_fight: {
    prompt: 'How courageous! Are you strong?',
    options: [{
      name: 'Yes',
      path: 'ask_smart_yes'
    }, {
      name: 'No',
      path: 'ask_smart_no'
    }]
  },
  ask_smart_yes: {
    prompt: 'Are you smart?',
    options: [{
      name: 'Yes',
      path: 'fight_win'
    }, {
      name: 'No',
      path: 'fight_win'
    }]
  },
  ask_smart_no: {
    prompt: 'Are you smart?',
    options: [{
      name: 'Yes',
      path: 'fight_win'
    }, {
      name: 'No',
      path: 'fight_lose'
    }]
  },
  fight_win: {
    prompt: 'You only need one of the two! You beat the troll--nice work!',
    options: [{
      name: 'Start Again',
      path: 'intro'
    }]
  },
  fight_lose: {
    prompt: 'You\'re not strong OR smart? Well, if you were smarter, you probably wouldn\'t have tried to fight a troll. You lose!',
    options: [{
      name: 'Start Again',
      path: 'intro'
    }]
  },
  choose_pay: {
    prompt: 'All right, we\'ll pay the troll.Do you have any money?',
    options: [{
      name: 'Yes',
      path: 'pay_yes'
    }, {
      name: 'No',
      path: 'pay_lose'
    }]
  },
  pay_yes: {
    prompt: 'Is your money in Troll Dollars?',
    options: [{
      name: 'Yes',
      path: 'pay_win'
    }, {
      name: 'No',
      path: 'pay_lose'
    }]
  },
  pay_win: {
    prompt: 'Great! You pay the troll and continue on your merry way.',
    options: [{
      name: 'Start Again',
      path: 'intro'
    }]
  },
  pay_lose: {
    prompt: 'Dang! This troll only takes Troll Dollars. You get whomped!',
    options: [{
      name: 'Start Again',
      path: 'intro'
    }]
  },
  choose_run: {
    prompt: 'Let\'s book it! Are you fast?',
    options: [{
      name: 'Yes',
      path: 'ask_fast_yes'
    }, {
      name: 'No',
      path: 'ask_fast_no'
    }]
  },
  ask_fast_yes: {
    prompt: 'Did you get a head start?',
    options: [{
      name: 'Yes',
      path: 'run_win'
    }, {
      name: 'No',
      path: 'run_win'
    }]
  },
  ask_fast_no: {
    prompt: 'Did you get a head start?',
    options: [{
      name: 'Yes',
      path: 'run_win'
    }, {
      name: 'No',
      path: 'run_lose'
    }]
  },
  run_win: {
    prompt: 'You got away--barely! You live to stroll through the forest another day.',
    options: [{
      name: 'Start Again',
      path: 'intro'
    }]
  },
  run_lose: {
    prompt: 'You\'re not fast and you didn\'t get a head start? You never had a chance! The troll eats you.',
    options: [{
      name: 'Start Again',
      path: 'intro'
    }]
  }
};
