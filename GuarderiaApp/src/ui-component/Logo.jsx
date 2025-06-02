import { useTheme } from '@mui/material/styles';

export default function LogoGuarderia() {
  const theme = useTheme();

  return (
    <svg
      width="200"

      viewBox="0 0 600 150"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect width="600" height="150" fill="white" />
      <g transform="translate(30,40)">
        <circle cx="30" cy="30" r="26" fill={theme.palette.secondary.main} />
        <circle cx="10" cy="4" r="6" fill={theme.palette.primary.light} />
        <circle cx="20" cy="-4" r="7" fill={theme.palette.primary.light} />
        <circle cx="30" cy="-4" r="7" fill={theme.palette.primary.light} />
        <circle cx="40" cy="0" r="6" fill={theme.palette.primary.light} />
      </g>

      <text
        x="120"
        y="70"
        fontFamily="'Comic Sans MS', cursive"
        fontSize="42"
        fill={theme.palette.secondary.main}
        fontWeight="bold"
      >
        Pequeños Pasos
      </text>

      <text
        x="122"
        y="105"
        fontFamily="'Comic Sans MS', cursive"
        fontSize="20"
        fill={theme.palette.secondary.main}
      >
        Centro de cuidado infantil
      </text>
    </svg>
  );
}
