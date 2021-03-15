export default function Condition(cond) {
  const icon = {
    storm: {
      name: 'rainy-outline',
      color: '#1ec9ff',
    },
    clear_day: {
      name: 'partly-sunny-outline',
      color: '#FFB300',
    },
    rain: {
      name: 'rainy-outline',
      color: '#1ec9ff',
    },
    default: {
      name: 'cloud-outline',
      color: '#1ec9ff',
    },
  };

  return icon[cond] || icon.default;
}
