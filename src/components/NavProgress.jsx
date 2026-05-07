import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

export default function NavProgress() {
  const location = useLocation();
  const [width, setWidth] = useState(0);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    setVisible(true);
    setWidth(0);
    const t1 = setTimeout(() => setWidth(75), 30);
    const t2 = setTimeout(() => setWidth(100), 250);
    const t3 = setTimeout(() => { setVisible(false); setWidth(0); }, 550);
    return () => { clearTimeout(t1); clearTimeout(t2); clearTimeout(t3); };
  }, [location.pathname]);

  if (!visible) return null;
  return (
    <div className="fixed top-0 left-0 right-0 z-[200] h-0.5 pointer-events-none">
      <div
        className="h-full bg-gold-500 transition-all duration-300 ease-out"
        style={{ width: `${width}%` }}
      />
    </div>
  );
}
