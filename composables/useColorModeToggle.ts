export function useColorModeToggle() {
  const colorMode = useColorMode();

  const toggleMode = () => {
    colorMode.preference = colorMode.preference === 'dark' ? 'light' : 'dark';
  };

  return { colorMode, toggleMode };
}