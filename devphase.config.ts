import type { ProjectConfigOptions } from 'devphase';
import { DevPhase } from 'devphase/dist';

const config : ProjectConfigOptions = {
    testing: {
        blockTime: 250,
        envSetup: {
            setup: {
                custom: async (devPhase : DevPhase) => {
                    await devPhase.stackSetup();
                    console.log('Using default env setup done');
                },
            }
        }
    }
};

export default config;
