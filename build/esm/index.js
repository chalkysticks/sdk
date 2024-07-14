import * as AuthenticationModule from '@chalkysticks/sdk-authentication';
import * as CoreModule from '@chalkysticks/sdk-core';
import * as PadModule from '@chalkysticks/sdk-pad';
import * as PlayersModule from '@chalkysticks/sdk-players';
import * as TVModule from '@chalkysticks/sdk-tv';
import * as VenuesModule from '@chalkysticks/sdk-venues';
import * as WalletModule from '@chalkysticks/sdk-wallet';
var ChalkySticks;
(function (ChalkySticks) {
    let Collection;
    (function (Collection) {
        Collection.Wallet = WalletModule.Collection.Wallet;
        Collection.Venue = VenuesModule.Collection.Venue;
        Collection.VenueDetail = VenuesModule.Collection.VenueDetail;
        Collection.VenueMedia = VenuesModule.Collection.VenueMedia;
        Collection.VenueMeta = VenuesModule.Collection.VenueMeta;
        Collection.Schedule = TVModule.Collection.Schedule;
        Collection.Diagram = PadModule.Collection.Diagram;
    })(Collection = ChalkySticks.Collection || (ChalkySticks.Collection = {}));
    let Model;
    (function (Model) {
        Model.Wallet = WalletModule.Model.Wallet;
        Model.Venue = VenuesModule.Model.Venue;
        Model.VenueDetail = VenuesModule.Model.VenueDetail;
        Model.VenueMedia = VenuesModule.Model.VenueMedia;
        Model.VenueMeta = VenuesModule.Model.VenueMeta;
        Model.Schedule = TVModule.Model.Schedule;
        Model.Diagram = PadModule.Model.Diagram;
        Model.Base = AuthenticationModule.Core.Model.Base;
        Model.User = AuthenticationModule.Core.Model.User;
        Model.Authentication = AuthenticationModule.Model.Authentication;
        Model.Jwt = AuthenticationModule.Model.Jwt;
    })(Model = ChalkySticks.Model || (ChalkySticks.Model = {}));
    ChalkySticks.Authentication = AuthenticationModule;
    ChalkySticks.Core = CoreModule;
    ChalkySticks.Pad = PadModule;
    ChalkySticks.Players = PlayersModule;
    ChalkySticks.TV = TVModule;
    ChalkySticks.Venues = VenuesModule;
    ChalkySticks.Wallet = WalletModule;
})(ChalkySticks || (ChalkySticks = {}));
export default ChalkySticks;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcmMvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0EsT0FBTyxLQUFLLG9CQUFvQixNQUFNLGtDQUFrQyxDQUFDO0FBQ3pFLE9BQU8sS0FBSyxVQUFVLE1BQU0sd0JBQXdCLENBQUM7QUFDckQsT0FBTyxLQUFLLFNBQVMsTUFBTSx1QkFBdUIsQ0FBQztBQUNuRCxPQUFPLEtBQUssYUFBYSxNQUFNLDJCQUEyQixDQUFDO0FBQzNELE9BQU8sS0FBSyxRQUFRLE1BQU0sc0JBQXNCLENBQUM7QUFDakQsT0FBTyxLQUFLLFlBQVksTUFBTSwwQkFBMEIsQ0FBQztBQUN6RCxPQUFPLEtBQUssWUFBWSxNQUFNLDBCQUEwQixDQUFDO0FBRXpELElBQVUsWUFBWSxDQWdDckI7QUFoQ0QsV0FBVSxZQUFZO0lBQ3JCLElBQWlCLFVBQVUsQ0FRMUI7SUFSRCxXQUFpQixVQUFVO1FBQ1osaUJBQU0sR0FBRyxZQUFZLENBQUMsVUFBVSxDQUFDLE1BQU0sQ0FBQztRQUN4QyxnQkFBSyxHQUFHLFlBQVksQ0FBQyxVQUFVLENBQUMsS0FBSyxDQUFDO1FBQ3RDLHNCQUFXLEdBQUcsWUFBWSxDQUFDLFVBQVUsQ0FBQyxXQUFXLENBQUM7UUFDbEQscUJBQVUsR0FBRyxZQUFZLENBQUMsVUFBVSxDQUFDLFVBQVUsQ0FBQztRQUNoRCxvQkFBUyxHQUFHLFlBQVksQ0FBQyxVQUFVLENBQUMsU0FBUyxDQUFDO1FBQzlDLG1CQUFRLEdBQUcsUUFBUSxDQUFDLFVBQVUsQ0FBQyxRQUFRLENBQUM7UUFDeEMsa0JBQU8sR0FBRyxTQUFTLENBQUMsVUFBVSxDQUFDLE9BQU8sQ0FBQztJQUN0RCxDQUFDLEVBUmdCLFVBQVUsR0FBVix1QkFBVSxLQUFWLHVCQUFVLFFBUTFCO0lBRUQsSUFBaUIsS0FBSyxDQVlyQjtJQVpELFdBQWlCLEtBQUs7UUFDUCxZQUFNLEdBQUcsWUFBWSxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUM7UUFDbkMsV0FBSyxHQUFHLFlBQVksQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDO1FBQ2pDLGlCQUFXLEdBQUcsWUFBWSxDQUFDLEtBQUssQ0FBQyxXQUFXLENBQUM7UUFDN0MsZ0JBQVUsR0FBRyxZQUFZLENBQUMsS0FBSyxDQUFDLFVBQVUsQ0FBQztRQUMzQyxlQUFTLEdBQUcsWUFBWSxDQUFDLEtBQUssQ0FBQyxTQUFTLENBQUM7UUFDekMsY0FBUSxHQUFHLFFBQVEsQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUFDO1FBQ25DLGFBQU8sR0FBRyxTQUFTLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQztRQUNsQyxVQUFJLEdBQUcsb0JBQW9CLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUM7UUFDNUMsVUFBSSxHQUFHLG9CQUFvQixDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDO1FBQzVDLG9CQUFjLEdBQUcsb0JBQW9CLENBQUMsS0FBSyxDQUFDLGNBQWMsQ0FBQztRQUMzRCxTQUFHLEdBQUcsb0JBQW9CLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQztJQUNwRCxDQUFDLEVBWmdCLEtBQUssR0FBTCxrQkFBSyxLQUFMLGtCQUFLLFFBWXJCO0lBRWEsMkJBQWMsR0FBRyxvQkFBb0IsQ0FBQztJQUN0QyxpQkFBSSxHQUFHLFVBQVUsQ0FBQztJQUNsQixnQkFBRyxHQUFHLFNBQVMsQ0FBQztJQUNoQixvQkFBTyxHQUFHLGFBQWEsQ0FBQztJQUN4QixlQUFFLEdBQUcsUUFBUSxDQUFDO0lBQ2QsbUJBQU0sR0FBRyxZQUFZLENBQUM7SUFDdEIsbUJBQU0sR0FBRyxZQUFZLENBQUM7QUFDckMsQ0FBQyxFQWhDUyxZQUFZLEtBQVosWUFBWSxRQWdDckI7QUFFRCxlQUFlLFlBQVksQ0FBQyJ9