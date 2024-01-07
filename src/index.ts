import * as Authentication from '@chalkysticks/sdk-authentication';
import * as Core from '@chalkysticks/sdk-core';
import * as Pad from '@chalkysticks/sdk-pad';
import * as Players from '@chalkysticks/sdk-players';
import * as Tv from '@chalkysticks/sdk-tv';
import * as Venues from '@chalkysticks/sdk-venues';
import * as Wallet from '@chalkysticks/sdk-wallet';

export * as Authentication from '@chalkysticks/sdk-authentication';
export * as Core from '@chalkysticks/sdk-core';
export * as Pad from '@chalkysticks/sdk-pad';
export * as Players from '@chalkysticks/sdk-players';
export * as TV from '@chalkysticks/sdk-tv';
export * as Venues from '@chalkysticks/sdk-venues';
export * as Wallet from '@chalkysticks/sdk-wallet';

// Exports
// ---------------------------------------------------------------------------

export { ChalkySticks } from '@chalkysticks/sdk-core';

export const Collection: any = {
	...Pad.Collection,
	...Tv.Collection,
	...Venues.Collection,
	...Wallet.Collection,
};

export const Model: any = {
	...Authentication.Model,
	...Core.Model,
	...Pad.Model,
	...Tv.Model,
	...Venues.Model,
	...Wallet.Model,
};
