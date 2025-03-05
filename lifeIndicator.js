export default function lifeIndicator (options = [{}]) {
  return options.sort((a,b) => b.health - a.health);
};
