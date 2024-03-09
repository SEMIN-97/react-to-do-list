import styled from 'styled-components';

interface ThemeIconProps {
  isDarkMode: boolean;
  onToggleMode: () => void;
}

const ThemeButton = styled.button`
  position: absolute;
  top: 30px;
  right: 30px;
  font-size: 32px;
  content: 'dark_mode';
`;

export default function ThemeIcon({ isDarkMode, onToggleMode }: ThemeIconProps) {
  return (
    <ThemeButton className="material-symbols-outlined" onClick={onToggleMode}>
      { isDarkMode ? 'light_mode' : 'dark_mode' }
    </ThemeButton>
  );
}
