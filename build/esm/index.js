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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcmMvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBSUEsT0FBTyxLQUFLLElBQUksTUFBTSx3QkFBd0IsQ0FBQztBQUMvQyxPQUFPLEtBQUssY0FBYyxNQUFNLGtDQUFrQyxDQUFDO0FBQ25FLE9BQU8sS0FBSyxHQUFHLE1BQU0sdUJBQXVCLENBQUM7QUFDN0MsT0FBTyxLQUFLLE9BQU8sTUFBTSwyQkFBMkIsQ0FBQztBQUNyRCxPQUFPLEtBQUssRUFBRSxNQUFNLHNCQUFzQixDQUFDO0FBQzNDLE9BQU8sS0FBSyxNQUFNLE1BQU0sMEJBQTBCLENBQUM7QUFDbkQsT0FBTyxLQUFLLE1BQU0sTUFBTSwwQkFBMEIsQ0FBQztBQUVuRCxjQUFjLHdCQUF3QixDQUFDO0FBRXZDLE9BQU8sRUFBRSxPQUFPLElBQUksWUFBWSxFQUFFLE1BQU0sd0JBQXdCLENBQUM7QUFFakUsTUFBTSxDQUFDLE1BQU0sVUFBVSxHQUFHO0lBQ3pCLEdBQUcsSUFBSSxDQUFDLFVBQVU7SUFDbEIsR0FBRyxHQUFHLENBQUMsVUFBVTtJQUNqQixHQUFHLE9BQU8sQ0FBQyxVQUFVO0lBQ3JCLEdBQUcsRUFBRSxDQUFDLFVBQVU7SUFDaEIsR0FBRyxNQUFNLENBQUMsVUFBVTtJQUNwQixHQUFHLE1BQU0sQ0FBQyxVQUFVO0NBQ3BCLENBQUE7QUFFRCxNQUFNLENBQUMsTUFBTSxLQUFLLEdBQUc7SUFDcEIsR0FBRyxJQUFJLENBQUMsS0FBSztJQUNiLEdBQUcsY0FBYyxDQUFDLEtBQUs7SUFDdkIsR0FBRyxHQUFHLENBQUMsS0FBSztJQUNaLEdBQUcsT0FBTyxDQUFDLEtBQUs7SUFDaEIsR0FBRyxFQUFFLENBQUMsS0FBSztJQUNYLEdBQUcsTUFBTSxDQUFDLEtBQUs7SUFDZixHQUFHLE1BQU0sQ0FBQyxLQUFLO0NBQ2YsQ0FBQSJ9