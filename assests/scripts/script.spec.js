const RockPaperScissors = require('./script');

describe('RockPaperScissors', () => { 
    test('Run one round of the RoShamBo', () => { 
        expect(RockPaperScissors().toBe(true));
    });
    test('Rock beats Scissors', () => {
        expect(RockPaperScissors(rock).toBe(true));
    });
    test('Scissors beats Paper', () => { 
        expect(RockPaperScissors(Scissors).toBe(true)); 
    });
    test('Paper beats Rock', () => { 
        expect(RockPaperScissors( getUserChoice(Paper),getComputerChoice(Rock)).toEqual("You Won This Round, Computer Lose One Life"));
    });
    test('Cpu selects the same as User', () => { 
        expect(RockPaperScissors(getUserChoice == getComputerChoice).toEqual("Tie, Try Again"));
    });
});