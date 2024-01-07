import * as Authentication from '@chalkysticks/sdk-authentication';
import * as Core from '@chalkysticks/sdk-core';
import * as Pad from '@chalkysticks/sdk-pad';
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
export { ChalkySticks } from '@chalkysticks/sdk-core';
export const Collection = {
    ...Pad.Collection,
    ...Tv.Collection,
    ...Venues.Collection,
    ...Wallet.Collection,
};
export const Model = {
    ...Authentication.Model,
    ...Core.Model,
    ...Pad.Model,
    ...Tv.Model,
    ...Venues.Model,
    ...Wallet.Model,
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcmMvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxLQUFLLGNBQWMsTUFBTSxrQ0FBa0MsQ0FBQztBQUNuRSxPQUFPLEtBQUssSUFBSSxNQUFNLHdCQUF3QixDQUFDO0FBQy9DLE9BQU8sS0FBSyxHQUFHLE1BQU0sdUJBQXVCLENBQUM7QUFFN0MsT0FBTyxLQUFLLEVBQUUsTUFBTSxzQkFBc0IsQ0FBQztBQUMzQyxPQUFPLEtBQUssTUFBTSxNQUFNLDBCQUEwQixDQUFDO0FBQ25ELE9BQU8sS0FBSyxNQUFNLE1BQU0sMEJBQTBCLENBQUM7QUFFbkQsT0FBTyxLQUFLLGNBQWMsTUFBTSxrQ0FBa0MsQ0FBQztBQUNuRSxPQUFPLEtBQUssSUFBSSxNQUFNLHdCQUF3QixDQUFDO0FBQy9DLE9BQU8sS0FBSyxHQUFHLE1BQU0sdUJBQXVCLENBQUM7QUFDN0MsT0FBTyxLQUFLLE9BQU8sTUFBTSwyQkFBMkIsQ0FBQztBQUNyRCxPQUFPLEtBQUssRUFBRSxNQUFNLHNCQUFzQixDQUFDO0FBQzNDLE9BQU8sS0FBSyxNQUFNLE1BQU0sMEJBQTBCLENBQUM7QUFDbkQsT0FBTyxLQUFLLE1BQU0sTUFBTSwwQkFBMEIsQ0FBQztBQUtuRCxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0sd0JBQXdCLENBQUM7QUFFdEQsTUFBTSxDQUFDLE1BQU0sVUFBVSxHQUFRO0lBQzlCLEdBQUcsR0FBRyxDQUFDLFVBQVU7SUFDakIsR0FBRyxFQUFFLENBQUMsVUFBVTtJQUNoQixHQUFHLE1BQU0sQ0FBQyxVQUFVO0lBQ3BCLEdBQUcsTUFBTSxDQUFDLFVBQVU7Q0FDcEIsQ0FBQztBQUVGLE1BQU0sQ0FBQyxNQUFNLEtBQUssR0FBUTtJQUN6QixHQUFHLGNBQWMsQ0FBQyxLQUFLO0lBQ3ZCLEdBQUcsSUFBSSxDQUFDLEtBQUs7SUFDYixHQUFHLEdBQUcsQ0FBQyxLQUFLO0lBQ1osR0FBRyxFQUFFLENBQUMsS0FBSztJQUNYLEdBQUcsTUFBTSxDQUFDLEtBQUs7SUFDZixHQUFHLE1BQU0sQ0FBQyxLQUFLO0NBQ2YsQ0FBQyJ9