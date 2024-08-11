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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcmMvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0EsT0FBTyxLQUFLLG9CQUFvQixNQUFNLGtDQUFrQyxDQUFDO0FBQ3pFLE9BQU8sS0FBSyxVQUFVLE1BQU0sd0JBQXdCLENBQUM7QUFDckQsT0FBTyxLQUFLLFNBQVMsTUFBTSx1QkFBdUIsQ0FBQztBQUNuRCxPQUFPLEtBQUssYUFBYSxNQUFNLDJCQUEyQixDQUFDO0FBQzNELE9BQU8sS0FBSyxRQUFRLE1BQU0sc0JBQXNCLENBQUM7QUFDakQsT0FBTyxLQUFLLFlBQVksTUFBTSwwQkFBMEIsQ0FBQztBQUN6RCxPQUFPLEtBQUssWUFBWSxNQUFNLDBCQUEwQixDQUFDO0FBRXpELElBQVUsWUFBWSxDQXVDckI7QUF2Q0QsV0FBVSxZQUFZO0lBQ3JCLElBQWlCLFVBQVUsQ0FTMUI7SUFURCxXQUFpQixVQUFVO1FBQ1osaUJBQU0sR0FBRyxhQUFhLENBQUMsVUFBVSxDQUFDLE1BQU0sQ0FBQztRQUN6QyxrQkFBTyxHQUFHLFNBQVMsQ0FBQyxVQUFVLENBQUMsT0FBTyxDQUFDO1FBQ3ZDLG1CQUFRLEdBQUcsUUFBUSxDQUFDLFVBQVUsQ0FBQyxRQUFRLENBQUM7UUFDeEMsZ0JBQUssR0FBRyxZQUFZLENBQUMsVUFBVSxDQUFDLEtBQUssQ0FBQztRQUN0QyxzQkFBVyxHQUFHLFlBQVksQ0FBQyxVQUFVLENBQUMsV0FBVyxDQUFDO1FBQ2xELHFCQUFVLEdBQUcsWUFBWSxDQUFDLFVBQVUsQ0FBQyxVQUFVLENBQUM7UUFDaEQsb0JBQVMsR0FBRyxZQUFZLENBQUMsVUFBVSxDQUFDLFNBQVMsQ0FBQztRQUM5QyxpQkFBTSxHQUFHLFlBQVksQ0FBQyxVQUFVLENBQUMsTUFBTSxDQUFDO0lBQ3ZELENBQUMsRUFUZ0IsVUFBVSxHQUFWLHVCQUFVLEtBQVYsdUJBQVUsUUFTMUI7SUFFRCxJQUFpQixJQUFJLENBRXBCO0lBRkQsV0FBaUIsSUFBSTtRQUNOLGFBQVEsR0FBRyxRQUFRLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQztJQUNqRCxDQUFDLEVBRmdCLElBQUksR0FBSixpQkFBSSxLQUFKLGlCQUFJLFFBRXBCO0lBRUQsSUFBaUIsS0FBSyxDQWNyQjtJQWRELFdBQWlCLEtBQUs7UUFDUCxvQkFBYyxHQUFHLG9CQUFvQixDQUFDLEtBQUssQ0FBQyxjQUFjLENBQUM7UUFDM0QsVUFBSSxHQUFHLG9CQUFvQixDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDO1FBQzVDLFlBQU0sR0FBRyxhQUFhLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQztRQUNwQyxhQUFPLEdBQUcsU0FBUyxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUM7UUFDbEMsYUFBTyxHQUFHLFVBQVUsQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFDO1FBQ25DLFNBQUcsR0FBRyxvQkFBb0IsQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDO1FBQ3JDLGNBQVEsR0FBRyxRQUFRLENBQUMsS0FBSyxDQUFDLFFBQVEsQ0FBQztRQUNuQyxVQUFJLEdBQUcsb0JBQW9CLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUM7UUFDNUMsV0FBSyxHQUFHLFlBQVksQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDO1FBQ2pDLGlCQUFXLEdBQUcsWUFBWSxDQUFDLEtBQUssQ0FBQyxXQUFXLENBQUM7UUFDN0MsZ0JBQVUsR0FBRyxZQUFZLENBQUMsS0FBSyxDQUFDLFVBQVUsQ0FBQztRQUMzQyxlQUFTLEdBQUcsWUFBWSxDQUFDLEtBQUssQ0FBQyxTQUFTLENBQUM7UUFDekMsWUFBTSxHQUFHLFlBQVksQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDO0lBQ2xELENBQUMsRUFkZ0IsS0FBSyxHQUFMLGtCQUFLLEtBQUwsa0JBQUssUUFjckI7SUFFYSwyQkFBYyxHQUFHLG9CQUFvQixDQUFDO0lBQ3RDLGlCQUFJLEdBQUcsVUFBVSxDQUFDO0lBQ2xCLGdCQUFHLEdBQUcsU0FBUyxDQUFDO0lBQ2hCLG9CQUFPLEdBQUcsYUFBYSxDQUFDO0lBQ3hCLGVBQUUsR0FBRyxRQUFRLENBQUM7SUFDZCxtQkFBTSxHQUFHLFlBQVksQ0FBQztJQUN0QixtQkFBTSxHQUFHLFlBQVksQ0FBQztBQUNyQyxDQUFDLEVBdkNTLFlBQVksS0FBWixZQUFZLFFBdUNyQjtBQUVELGVBQWUsWUFBWSxDQUFDIn0=