import * as Core from '@chalkysticks/sdk-core';
import * as Authentication from '@chalkysticks/sdk-authentication';
import * as Pad from '@chalkysticks/sdk-pad';
import * as Players from '@chalkysticks/sdk-players';
import * as Tv from '@chalkysticks/sdk-tv';
import * as Venues from '@chalkysticks/sdk-venues';
import * as Wallet from '@chalkysticks/sdk-wallet';
export { default as ChalkySticks } from '@chalkysticks/sdk-core';
export * as Core from '@chalkysticks/sdk-core';
export * as Authentication from '@chalkysticks/sdk-authentication';
export const Collection = {
    ...Core.Collection,
    ...Pad.Collection,
    ...Players.Collection,
    ...Tv.Collection,
    ...Venues.Collection,
    ...Wallet.Collection,
};
export const Model = {
    ...Core.Model,
    ...Authentication.Model,
    ...Pad.Model,
    ...Players.Model,
    ...Tv.Model,
    ...Venues.Model,
    ...Wallet.Model,
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcmMvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxLQUFLLElBQUksTUFBTSx3QkFBd0IsQ0FBQztBQUMvQyxPQUFPLEtBQUssY0FBYyxNQUFNLGtDQUFrQyxDQUFDO0FBQ25FLE9BQU8sS0FBSyxHQUFHLE1BQU0sdUJBQXVCLENBQUM7QUFDN0MsT0FBTyxLQUFLLE9BQU8sTUFBTSwyQkFBMkIsQ0FBQztBQUNyRCxPQUFPLEtBQUssRUFBRSxNQUFNLHNCQUFzQixDQUFDO0FBQzNDLE9BQU8sS0FBSyxNQUFNLE1BQU0sMEJBQTBCLENBQUM7QUFDbkQsT0FBTyxLQUFLLE1BQU0sTUFBTSwwQkFBMEIsQ0FBQztBQUtuRCxPQUFPLEVBQUUsT0FBTyxJQUFJLFlBQVksRUFBRSxNQUFNLHdCQUF3QixDQUFDO0FBRWpFLE9BQU8sS0FBSyxJQUFJLE1BQU0sd0JBQXdCLENBQUM7QUFDL0MsT0FBTyxLQUFLLGNBQWMsTUFBTSxrQ0FBa0MsQ0FBQztBQUVuRSxNQUFNLENBQUMsTUFBTSxVQUFVLEdBQUc7SUFDekIsR0FBRyxJQUFJLENBQUMsVUFBVTtJQUNsQixHQUFHLEdBQUcsQ0FBQyxVQUFVO0lBQ2pCLEdBQUcsT0FBTyxDQUFDLFVBQVU7SUFDckIsR0FBRyxFQUFFLENBQUMsVUFBVTtJQUNoQixHQUFHLE1BQU0sQ0FBQyxVQUFVO0lBQ3BCLEdBQUcsTUFBTSxDQUFDLFVBQVU7Q0FDcEIsQ0FBQztBQUVGLE1BQU0sQ0FBQyxNQUFNLEtBQUssR0FBRztJQUNwQixHQUFHLElBQUksQ0FBQyxLQUFLO0lBQ2IsR0FBRyxjQUFjLENBQUMsS0FBSztJQUN2QixHQUFHLEdBQUcsQ0FBQyxLQUFLO0lBQ1osR0FBRyxPQUFPLENBQUMsS0FBSztJQUNoQixHQUFHLEVBQUUsQ0FBQyxLQUFLO0lBQ1gsR0FBRyxNQUFNLENBQUMsS0FBSztJQUNmLEdBQUcsTUFBTSxDQUFDLEtBQUs7Q0FDZixDQUFDIn0=