import * as Pad from '@chalkysticks/sdk-pad';
import * as Venues from '@chalkysticks/sdk-venues';
export * as Authentication from '@chalkysticks/sdk-authentication';
export * as Core from '@chalkysticks/sdk-core';
export * as Pad from '@chalkysticks/sdk-pad';
export * as Players from '@chalkysticks/sdk-players';
export * as TV from '@chalkysticks/sdk-tv';
export * as Venues from '@chalkysticks/sdk-venues';
export * as Wallet from '@chalkysticks/sdk-wallet';
export { ChalkySticks } from '@chalkysticks/sdk-core';
type CombinedCollectionsType = {
    Pad: typeof Pad.Collection;
    Venues: typeof Venues.Collection;
};
export declare const Collections: CombinedCollectionsType;
