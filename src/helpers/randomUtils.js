// helpers/randomUtils.js
export const getRandomAnimationStyle = () => {
  const duration = (Math.random() * 10 + 18).toFixed(2);
  const delay = (Math.random() * 5).toFixed(2);
  const rotate = Math.random() < 0.5 ? "-360deg" : "360deg";

  return {
    animation: `fall ${duration}s linear infinite`,
    animationDelay: `${delay}s`,
    '--rotate': rotate,
    position: 'absolute',
    top: 0,
    left: `${Math.random() * 100}%`,
    opacity: 1,
  };
};