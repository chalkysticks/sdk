import * as Core from '@chalkysticks/sdk-core';
import * as Authentication from '@chalkysticks/sdk-authentication';
import * as Players from '@chalkysticks/sdk-players';
export { ChalkySticks } from '@chalkysticks/sdk-core';
export * as Core from '@chalkysticks/sdk-core';
export const Collection = {
    ...Core.Collection,
    ...Players.Collection,
};
export const Model = {
    ...Core.Model,
    ...Authentication.Model,
    ...Players.Model,
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcmMvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxLQUFLLElBQUksTUFBTSx3QkFBd0IsQ0FBQztBQUMvQyxPQUFPLEtBQUssY0FBYyxNQUFNLGtDQUFrQyxDQUFDO0FBRW5FLE9BQU8sS0FBSyxPQUFPLE1BQU0sMkJBQTJCLENBQUM7QUFRckQsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLHdCQUF3QixDQUFDO0FBRXRELE9BQU8sS0FBSyxJQUFJLE1BQU0sd0JBQXdCLENBQUM7QUFFL0MsTUFBTSxDQUFDLE1BQU0sVUFBVSxHQUFHO0lBQ3pCLEdBQUcsSUFBSSxDQUFDLFVBQVU7SUFFbEIsR0FBRyxPQUFPLENBQUMsVUFBVTtDQUlyQixDQUFDO0FBRUYsTUFBTSxDQUFDLE1BQU0sS0FBSyxHQUFHO0lBQ3BCLEdBQUcsSUFBSSxDQUFDLEtBQUs7SUFDYixHQUFHLGNBQWMsQ0FBQyxLQUFLO0lBRXZCLEdBQUcsT0FBTyxDQUFDLEtBQUs7Q0FJaEIsQ0FBQyJ9