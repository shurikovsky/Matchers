import lifeIndicator from '..lifeIndicator.js';
let healthObject = [
    {name: "мечник", health: 10},
    {name: 'маг', health: 100},
    {name: 'лучник', health: 80},
  ]

  const healthObjectSort = [
    {name: 'маг', health: 100},
    {name: 'лучник', health: 80},
    {name: 'мечник', health: 10},  
  ]

test('sorted Array to health', () => {
    const result = lifeIndicator (healthObject)
        expect(result).toEqual(healthObjectSort);
    });