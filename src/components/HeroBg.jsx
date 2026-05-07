export default function HeroBg() {
  return (
    <>
      {/* top gold border */}
      <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-gold-500 to-transparent" />
      {/* bottom gold border */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold-500/50 to-transparent" />

      <svg
        className="absolute inset-0 w-full h-full"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="xMidYMid slice"
      >
        {/* arcs — top-right */}
        <circle cx="100%" cy="0" r="360" fill="none" stroke="#C9A84C" strokeWidth="0.9" opacity="0.32"/>
        <circle cx="100%" cy="0" r="295" fill="none" stroke="#C9A84C" strokeWidth="0.7" opacity="0.24"/>
        <circle cx="100%" cy="0" r="230" fill="none" stroke="#C9A84C" strokeWidth="0.5" opacity="0.16"/>
        <circle cx="100%" cy="0" r="165" fill="none" stroke="#C9A84C" strokeWidth="0.4" opacity="0.10"/>

        {/* arcs — bottom-left */}
        <circle cx="0" cy="100%" r="280" fill="none" stroke="#C9A84C" strokeWidth="0.8" opacity="0.26"/>
        <circle cx="0" cy="100%" r="210" fill="none" stroke="#C9A84C" strokeWidth="0.6" opacity="0.18"/>
        <circle cx="0" cy="100%" r="140" fill="none" stroke="#C9A84C" strokeWidth="0.4" opacity="0.11"/>

        {/* slash lines — right cluster */}
        <line x1="58%" y1="-5%" x2="105%" y2="95%"  stroke="#C9A84C" strokeWidth="0.8" opacity="0.36"/>
        <line x1="64%" y1="-5%" x2="105%" y2="80%"  stroke="#C9A84C" strokeWidth="0.7" opacity="0.30"/>
        <line x1="70%" y1="-5%" x2="105%" y2="62%"  stroke="#C9A84C" strokeWidth="0.6" opacity="0.24"/>
        <line x1="76%" y1="-5%" x2="105%" y2="44%"  stroke="#C9A84C" strokeWidth="0.5" opacity="0.18"/>
        <line x1="82%" y1="-5%" x2="105%" y2="26%"  stroke="#C9A84C" strokeWidth="0.4" opacity="0.13"/>
        <line x1="88%" y1="-5%" x2="105%" y2="10%"  stroke="#C9A84C" strokeWidth="0.3" opacity="0.09"/>

        {/* slash lines — left cluster */}
        <line x1="0" y1="8%"   x2="42%" y2="105%"  stroke="#C9A84C" strokeWidth="0.8" opacity="0.30"/>
        <line x1="0" y1="26%"  x2="34%" y2="105%"  stroke="#C9A84C" strokeWidth="0.6" opacity="0.23"/>
        <line x1="0" y1="46%"  x2="22%" y2="105%"  stroke="#C9A84C" strokeWidth="0.5" opacity="0.17"/>
        <line x1="0" y1="64%"  x2="10%" y2="105%"  stroke="#C9A84C" strokeWidth="0.3" opacity="0.11"/>

        {/* horizontal accents */}
        <line x1="0" y1="50%" x2="100%" y2="50%" stroke="#C9A84C" strokeWidth="0.5" opacity="0.14"/>
        <line x1="60%" y1="25%" x2="100%" y2="25%" stroke="#C9A84C" strokeWidth="0.3" opacity="0.08"/>
        <line x1="0"   y1="75%" x2="38%"  y2="75%" stroke="#C9A84C" strokeWidth="0.3" opacity="0.08"/>

        {/* small diamond center-top */}
        <polygon points="500,8 507,15 500,22 493,15" fill="none" stroke="#C9A84C" strokeWidth="1" opacity="0.50"/>
      </svg>
    </>
  );
}
