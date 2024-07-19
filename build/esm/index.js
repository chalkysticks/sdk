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
        Collection.Diagram = PadModule.Collection.Diagram;
        Collection.Schedule = TVModule.Collection.Schedule;
        Collection.Venue = VenuesModule.Collection.Venue;
        Collection.VenueDetail = VenuesModule.Collection.VenueDetail;
        Collection.VenueMedia = VenuesModule.Collection.VenueMedia;
        Collection.VenueMeta = VenuesModule.Collection.VenueMeta;
        Collection.Wallet = WalletModule.Collection.Wallet;
    })(Collection = ChalkySticks.Collection || (ChalkySticks.Collection = {}));
    let Model;
    (function (Model) {
        Model.Authentication = AuthenticationModule.Model.Authentication;
        Model.Base = AuthenticationModule.Core.Model.Base;
        Model.Diagram = PadModule.Model.Diagram;
        Model.Geocode = CoreModule.Model.Geocode;
        Model.Jwt = AuthenticationModule.Model.Jwt;
        Model.Schedule = TVModule.Model.Schedule;
        Model.User = AuthenticationModule.Core.Model.User;
        Model.Venue = VenuesModule.Model.Venue;
        Model.VenueDetail = VenuesModule.Model.VenueDetail;
        Model.VenueMedia = VenuesModule.Model.VenueMedia;
        Model.VenueMeta = VenuesModule.Model.VenueMeta;
        Model.Wallet = WalletModule.Model.Wallet;
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcmMvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0EsT0FBTyxLQUFLLG9CQUFvQixNQUFNLGtDQUFrQyxDQUFDO0FBQ3pFLE9BQU8sS0FBSyxVQUFVLE1BQU0sd0JBQXdCLENBQUM7QUFDckQsT0FBTyxLQUFLLFNBQVMsTUFBTSx1QkFBdUIsQ0FBQztBQUNuRCxPQUFPLEtBQUssYUFBYSxNQUFNLDJCQUEyQixDQUFDO0FBQzNELE9BQU8sS0FBSyxRQUFRLE1BQU0sc0JBQXNCLENBQUM7QUFDakQsT0FBTyxLQUFLLFlBQVksTUFBTSwwQkFBMEIsQ0FBQztBQUN6RCxPQUFPLEtBQUssWUFBWSxNQUFNLDBCQUEwQixDQUFDO0FBRXpELElBQVUsWUFBWSxDQWlDckI7QUFqQ0QsV0FBVSxZQUFZO0lBQ3JCLElBQWlCLFVBQVUsQ0FRMUI7SUFSRCxXQUFpQixVQUFVO1FBQ1osa0JBQU8sR0FBRyxTQUFTLENBQUMsVUFBVSxDQUFDLE9BQU8sQ0FBQztRQUN2QyxtQkFBUSxHQUFHLFFBQVEsQ0FBQyxVQUFVLENBQUMsUUFBUSxDQUFDO1FBQ3hDLGdCQUFLLEdBQUcsWUFBWSxDQUFDLFVBQVUsQ0FBQyxLQUFLLENBQUM7UUFDdEMsc0JBQVcsR0FBRyxZQUFZLENBQUMsVUFBVSxDQUFDLFdBQVcsQ0FBQztRQUNsRCxxQkFBVSxHQUFHLFlBQVksQ0FBQyxVQUFVLENBQUMsVUFBVSxDQUFDO1FBQ2hELG9CQUFTLEdBQUcsWUFBWSxDQUFDLFVBQVUsQ0FBQyxTQUFTLENBQUM7UUFDOUMsaUJBQU0sR0FBRyxZQUFZLENBQUMsVUFBVSxDQUFDLE1BQU0sQ0FBQztJQUN2RCxDQUFDLEVBUmdCLFVBQVUsR0FBVix1QkFBVSxLQUFWLHVCQUFVLFFBUTFCO0lBRUQsSUFBaUIsS0FBSyxDQWFyQjtJQWJELFdBQWlCLEtBQUs7UUFDUCxvQkFBYyxHQUFHLG9CQUFvQixDQUFDLEtBQUssQ0FBQyxjQUFjLENBQUM7UUFDM0QsVUFBSSxHQUFHLG9CQUFvQixDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDO1FBQzVDLGFBQU8sR0FBRyxTQUFTLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQztRQUNsQyxhQUFPLEdBQUcsVUFBVSxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUM7UUFDbkMsU0FBRyxHQUFHLG9CQUFvQixDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUM7UUFDckMsY0FBUSxHQUFHLFFBQVEsQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUFDO1FBQ25DLFVBQUksR0FBRyxvQkFBb0IsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQztRQUM1QyxXQUFLLEdBQUcsWUFBWSxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUM7UUFDakMsaUJBQVcsR0FBRyxZQUFZLENBQUMsS0FBSyxDQUFDLFdBQVcsQ0FBQztRQUM3QyxnQkFBVSxHQUFHLFlBQVksQ0FBQyxLQUFLLENBQUMsVUFBVSxDQUFDO1FBQzNDLGVBQVMsR0FBRyxZQUFZLENBQUMsS0FBSyxDQUFDLFNBQVMsQ0FBQztRQUN6QyxZQUFNLEdBQUcsWUFBWSxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUM7SUFDbEQsQ0FBQyxFQWJnQixLQUFLLEdBQUwsa0JBQUssS0FBTCxrQkFBSyxRQWFyQjtJQUVhLDJCQUFjLEdBQUcsb0JBQW9CLENBQUM7SUFDdEMsaUJBQUksR0FBRyxVQUFVLENBQUM7SUFDbEIsZ0JBQUcsR0FBRyxTQUFTLENBQUM7SUFDaEIsb0JBQU8sR0FBRyxhQUFhLENBQUM7SUFDeEIsZUFBRSxHQUFHLFFBQVEsQ0FBQztJQUNkLG1CQUFNLEdBQUcsWUFBWSxDQUFDO0lBQ3RCLG1CQUFNLEdBQUcsWUFBWSxDQUFDO0FBQ3JDLENBQUMsRUFqQ1MsWUFBWSxLQUFaLFlBQVksUUFpQ3JCO0FBRUQsZUFBZSxZQUFZLENBQUMifQ==