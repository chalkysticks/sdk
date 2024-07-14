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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcmMvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxLQUFLLGNBQWMsTUFBTSxrQ0FBa0MsQ0FBQztBQUNuRSxPQUFPLEtBQUssSUFBSSxNQUFNLHdCQUF3QixDQUFDO0FBQy9DLE9BQU8sS0FBSyxHQUFHLE1BQU0sdUJBQXVCLENBQUM7QUFDN0MsT0FBTyxLQUFLLE9BQU8sTUFBTSwyQkFBMkIsQ0FBQztBQUNyRCxPQUFPLEtBQUssRUFBRSxNQUFNLHNCQUFzQixDQUFDO0FBQzNDLE9BQU8sS0FBSyxNQUFNLE1BQU0sMEJBQTBCLENBQUM7QUFDbkQsT0FBTyxLQUFLLE1BQU0sTUFBTSwwQkFBMEIsQ0FBQztBQUVuRCxPQUFPLEVBQUUsY0FBYyxFQUFFLElBQUksRUFBRSxHQUFHLEVBQUUsT0FBTyxFQUFFLEVBQUUsRUFBRSxNQUFNLEVBQUUsTUFBTSxFQUFFLENBQUM7QUFFbEUsTUFBTSxDQUFDLE1BQU0sVUFBVSxHQUFHO0lBQ3pCLEdBQUcsR0FBRyxDQUFDLFVBQVU7SUFDakIsR0FBRyxFQUFFLENBQUMsVUFBVTtJQUNoQixHQUFHLE1BQU0sQ0FBQyxVQUFVO0lBQ3BCLEdBQUcsTUFBTSxDQUFDLFVBQVU7Q0FDcEIsQ0FBQztBQUVGLE1BQU0sQ0FBQyxNQUFNLEtBQUssR0FBRztJQUNwQixHQUFHLGNBQWMsQ0FBQyxLQUFLO0lBQ3ZCLEdBQUcsSUFBSSxDQUFDLEtBQUs7SUFDYixHQUFHLEdBQUcsQ0FBQyxLQUFLO0lBQ1osR0FBRyxFQUFFLENBQUMsS0FBSztJQUNYLEdBQUcsTUFBTSxDQUFDLEtBQUs7SUFDZixHQUFHLE1BQU0sQ0FBQyxLQUFLO0NBQ2YsQ0FBQztBQUdGLGVBQWU7SUFDZCxjQUFjO0lBQ2QsVUFBVTtJQUNWLElBQUk7SUFDSixLQUFLO0lBQ0wsR0FBRztJQUNILE9BQU87SUFDUCxFQUFFO0lBQ0YsTUFBTTtJQUNOLE1BQU07Q0FDTixDQUFDIn0=