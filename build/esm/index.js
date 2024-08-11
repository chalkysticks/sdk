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
        Collection.Beacon = PlayersModule.Collection.Beacon;
        Collection.Diagram = PadModule.Collection.Diagram;
        Collection.Schedule = TVModule.Collection.Schedule;
        Collection.Venue = VenuesModule.Collection.Venue;
        Collection.VenueDetail = VenuesModule.Collection.VenueDetail;
        Collection.VenueMedia = VenuesModule.Collection.VenueMedia;
        Collection.VenueMeta = VenuesModule.Collection.VenueMeta;
        Collection.Wallet = WalletModule.Collection.Wallet;
    })(Collection = ChalkySticks.Collection || (ChalkySticks.Collection = {}));
    let Enum;
    (function (Enum) {
        Enum.GameType = TVModule.Enum.GameType;
    })(Enum = ChalkySticks.Enum || (ChalkySticks.Enum = {}));
    let Factory;
    (function (Factory) {
        Factory.Schedule = TVModule.Factory.Schedule;
    })(Factory = ChalkySticks.Factory || (ChalkySticks.Factory = {}));
    let Model;
    (function (Model) {
        Model.Authentication = AuthenticationModule.Model.Authentication;
        Model.Base = AuthenticationModule.Core.Model.Base;
        Model.Beacon = PlayersModule.Model.Beacon;
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcmMvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0EsT0FBTyxLQUFLLG9CQUFvQixNQUFNLGtDQUFrQyxDQUFDO0FBQ3pFLE9BQU8sS0FBSyxVQUFVLE1BQU0sd0JBQXdCLENBQUM7QUFDckQsT0FBTyxLQUFLLFNBQVMsTUFBTSx1QkFBdUIsQ0FBQztBQUNuRCxPQUFPLEtBQUssYUFBYSxNQUFNLDJCQUEyQixDQUFDO0FBQzNELE9BQU8sS0FBSyxRQUFRLE1BQU0sc0JBQXNCLENBQUM7QUFDakQsT0FBTyxLQUFLLFlBQVksTUFBTSwwQkFBMEIsQ0FBQztBQUN6RCxPQUFPLEtBQUssWUFBWSxNQUFNLDBCQUEwQixDQUFDO0FBRXpELElBQVUsWUFBWSxDQTJDckI7QUEzQ0QsV0FBVSxZQUFZO0lBQ3JCLElBQWlCLFVBQVUsQ0FTMUI7SUFURCxXQUFpQixVQUFVO1FBQ1osaUJBQU0sR0FBRyxhQUFhLENBQUMsVUFBVSxDQUFDLE1BQU0sQ0FBQztRQUN6QyxrQkFBTyxHQUFHLFNBQVMsQ0FBQyxVQUFVLENBQUMsT0FBTyxDQUFDO1FBQ3ZDLG1CQUFRLEdBQUcsUUFBUSxDQUFDLFVBQVUsQ0FBQyxRQUFRLENBQUM7UUFDeEMsZ0JBQUssR0FBRyxZQUFZLENBQUMsVUFBVSxDQUFDLEtBQUssQ0FBQztRQUN0QyxzQkFBVyxHQUFHLFlBQVksQ0FBQyxVQUFVLENBQUMsV0FBVyxDQUFDO1FBQ2xELHFCQUFVLEdBQUcsWUFBWSxDQUFDLFVBQVUsQ0FBQyxVQUFVLENBQUM7UUFDaEQsb0JBQVMsR0FBRyxZQUFZLENBQUMsVUFBVSxDQUFDLFNBQVMsQ0FBQztRQUM5QyxpQkFBTSxHQUFHLFlBQVksQ0FBQyxVQUFVLENBQUMsTUFBTSxDQUFDO0lBQ3ZELENBQUMsRUFUZ0IsVUFBVSxHQUFWLHVCQUFVLEtBQVYsdUJBQVUsUUFTMUI7SUFFRCxJQUFpQixJQUFJLENBRXBCO0lBRkQsV0FBaUIsSUFBSTtRQUNOLGFBQVEsR0FBRyxRQUFRLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQztJQUNqRCxDQUFDLEVBRmdCLElBQUksR0FBSixpQkFBSSxLQUFKLGlCQUFJLFFBRXBCO0lBRUQsSUFBaUIsT0FBTyxDQUV2QjtJQUZELFdBQWlCLE9BQU87UUFDVCxnQkFBUSxHQUFHLFFBQVEsQ0FBQyxPQUFPLENBQUMsUUFBUSxDQUFDO0lBQ3BELENBQUMsRUFGZ0IsT0FBTyxHQUFQLG9CQUFPLEtBQVAsb0JBQU8sUUFFdkI7SUFFRCxJQUFpQixLQUFLLENBY3JCO0lBZEQsV0FBaUIsS0FBSztRQUNQLG9CQUFjLEdBQUcsb0JBQW9CLENBQUMsS0FBSyxDQUFDLGNBQWMsQ0FBQztRQUMzRCxVQUFJLEdBQUcsb0JBQW9CLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUM7UUFDNUMsWUFBTSxHQUFHLGFBQWEsQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDO1FBQ3BDLGFBQU8sR0FBRyxTQUFTLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQztRQUNsQyxhQUFPLEdBQUcsVUFBVSxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUM7UUFDbkMsU0FBRyxHQUFHLG9CQUFvQixDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUM7UUFDckMsY0FBUSxHQUFHLFFBQVEsQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUFDO1FBQ25DLFVBQUksR0FBRyxvQkFBb0IsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQztRQUM1QyxXQUFLLEdBQUcsWUFBWSxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUM7UUFDakMsaUJBQVcsR0FBRyxZQUFZLENBQUMsS0FBSyxDQUFDLFdBQVcsQ0FBQztRQUM3QyxnQkFBVSxHQUFHLFlBQVksQ0FBQyxLQUFLLENBQUMsVUFBVSxDQUFDO1FBQzNDLGVBQVMsR0FBRyxZQUFZLENBQUMsS0FBSyxDQUFDLFNBQVMsQ0FBQztRQUN6QyxZQUFNLEdBQUcsWUFBWSxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUM7SUFDbEQsQ0FBQyxFQWRnQixLQUFLLEdBQUwsa0JBQUssS0FBTCxrQkFBSyxRQWNyQjtJQUVhLDJCQUFjLEdBQUcsb0JBQW9CLENBQUM7SUFDdEMsaUJBQUksR0FBRyxVQUFVLENBQUM7SUFDbEIsZ0JBQUcsR0FBRyxTQUFTLENBQUM7SUFDaEIsb0JBQU8sR0FBRyxhQUFhLENBQUM7SUFDeEIsZUFBRSxHQUFHLFFBQVEsQ0FBQztJQUNkLG1CQUFNLEdBQUcsWUFBWSxDQUFDO0lBQ3RCLG1CQUFNLEdBQUcsWUFBWSxDQUFDO0FBQ3JDLENBQUMsRUEzQ1MsWUFBWSxLQUFaLFlBQVksUUEyQ3JCO0FBRUQsZUFBZSxZQUFZLENBQUMifQ==