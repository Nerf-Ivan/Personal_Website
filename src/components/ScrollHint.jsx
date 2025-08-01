import { Mouse, ArrowDown } from 'lucide-react';

const bounceStyle = {
  animation: 'bounce 2s infinite',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  color: '#666',
};

// Define keyframes globally or use styled-components / Emotion
const globalStyle = `
@keyframes bounce {
  0%, 100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(10px);
  }
}
`;

function ScrollIndicator() {
  return (
    <>
      {/* Inject the keyframes into your document */}
      <style>{globalStyle}</style>
      <div style={bounceStyle}>
        <Mouse size={32} />
        <ArrowDown size={20} style={{ marginTop: '4px' }} />
      </div>
    </>
  );
}
export default ScrollIndicator;