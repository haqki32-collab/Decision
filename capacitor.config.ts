import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.yesno.decision',
  appName: 'Yes No Decision',
  webDir: 'dist',
  server: {
    androidScheme: 'https'
  }
};

export default config;