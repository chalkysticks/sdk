import * as Core from '@chalkysticks/sdk-core';
import * as Authentication from '@chalkysticks/sdk-authentication';
import * as Pad from '@chalkysticks/sdk-pad';
import * as Players from '@chalkysticks/sdk-players';
import * as Tv from '@chalkysticks/sdk-tv';
import * as Venues from '@chalkysticks/sdk-venues';
import * as Wallet from '@chalkysticks/sdk-wallet';

export * from '@chalkysticks/sdk-core';

export { default as ChalkySticks } from '@chalkysticks/sdk-core';

export const Collection = {
	...Core.Collection,
	...Pad.Collection,
	...Players.Collection,
	...Tv.Collection,
	...Venues.Collection,
	...Wallet.Collection,
}

export const Model = {
	...Core.Model,
	...Authentication.Model,
	...Pad.Model,
	...Players.Model,
	...Tv.Model,
	...Venues.Model,
	...Wallet.Model,
}
