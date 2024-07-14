import * as Authentication from '@chalkysticks/sdk-authentication';
import * as Core from '@chalkysticks/sdk-core';
import * as Pad from '@chalkysticks/sdk-pad';
import * as Players from '@chalkysticks/sdk-players';
import * as TV from '@chalkysticks/sdk-tv';
import * as Venues from '@chalkysticks/sdk-venues';
import * as Wallet from '@chalkysticks/sdk-wallet';

export { Authentication, Core, Pad, Players, TV, Venues, Wallet };

export const Collection = {
	...Pad.Collection,
	...TV.Collection,
	...Venues.Collection,
	...Wallet.Collection,
};

export const Model = {
	...Authentication.Model,
	...Core.Model,
	...Pad.Model,
	...TV.Model,
	...Venues.Model,
	...Wallet.Model,
};

// Export default namespace
export default {
	Authentication,
	Collection,
	Core,
	Model,
	Pad,
	Players,
	TV,
	Venues,
	Wallet,
};
