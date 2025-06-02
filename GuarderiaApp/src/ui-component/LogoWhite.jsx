export default function LogoGuarderia() {
  return (
    <svg width="200" viewBox="0 0 600 150" xmlns="http://www.w3.org/2000/svg">
      {/* Fondo transparente, no se dibuja el rectángulo */}
      <g transform="translate(30,40)">
        <circle cx="30" cy="30" r="26" fill="#ffffff" />
        <circle cx="10" cy="4" r="6" fill="#ffffff" />
        <circle cx="20" cy="-4" r="7" fill="#ffffff" />
        <circle cx="30" cy="-4" r="7" fill="#ffffff" />
        <circle cx="40" cy="0" r="6" fill="#ffffff" />
      </g>

      <text x="120" y="70" fontFamily="'Comic Sans MS', cursive" fontSize="42" fill="#ffffff" fontWeight="bold">
        Pequeños Pasos
      </text>

      <text x="122" y="105" fontFamily="'Comic Sans MS', cursive" fontSize="20" fill="#ffffff">
        Centro de cuidado infantil
      </text>
    </svg>
  );
}
