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
        Factory.Beacon = PlayersModule.Factory.Beacon;
        Factory.Diagram = PadModule.Factory.Diagram;
        Factory.Live = TVModule.Factory.Live;
        Factory.Player = PlayersModule.Factory.Player;
        Factory.Schedule = TVModule.Factory.Schedule;
        Factory.Venue = VenuesModule.Factory.Venue;
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcmMvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0EsT0FBTyxLQUFLLG9CQUFvQixNQUFNLGtDQUFrQyxDQUFDO0FBQ3pFLE9BQU8sS0FBSyxVQUFVLE1BQU0sd0JBQXdCLENBQUM7QUFDckQsT0FBTyxLQUFLLFNBQVMsTUFBTSx1QkFBdUIsQ0FBQztBQUNuRCxPQUFPLEtBQUssYUFBYSxNQUFNLDJCQUEyQixDQUFDO0FBQzNELE9BQU8sS0FBSyxRQUFRLE1BQU0sc0JBQXNCLENBQUM7QUFDakQsT0FBTyxLQUFLLFlBQVksTUFBTSwwQkFBMEIsQ0FBQztBQUN6RCxPQUFPLEtBQUssWUFBWSxNQUFNLDBCQUEwQixDQUFDO0FBRXpELElBQVUsWUFBWSxDQWdEckI7QUFoREQsV0FBVSxZQUFZO0lBQ3JCLElBQWlCLFVBQVUsQ0FTMUI7SUFURCxXQUFpQixVQUFVO1FBQ1osaUJBQU0sR0FBRyxhQUFhLENBQUMsVUFBVSxDQUFDLE1BQU0sQ0FBQztRQUN6QyxrQkFBTyxHQUFHLFNBQVMsQ0FBQyxVQUFVLENBQUMsT0FBTyxDQUFDO1FBQ3ZDLG1CQUFRLEdBQUcsUUFBUSxDQUFDLFVBQVUsQ0FBQyxRQUFRLENBQUM7UUFDeEMsZ0JBQUssR0FBRyxZQUFZLENBQUMsVUFBVSxDQUFDLEtBQUssQ0FBQztRQUN0QyxzQkFBVyxHQUFHLFlBQVksQ0FBQyxVQUFVLENBQUMsV0FBVyxDQUFDO1FBQ2xELHFCQUFVLEdBQUcsWUFBWSxDQUFDLFVBQVUsQ0FBQyxVQUFVLENBQUM7UUFDaEQsb0JBQVMsR0FBRyxZQUFZLENBQUMsVUFBVSxDQUFDLFNBQVMsQ0FBQztRQUM5QyxpQkFBTSxHQUFHLFlBQVksQ0FBQyxVQUFVLENBQUMsTUFBTSxDQUFDO0lBQ3ZELENBQUMsRUFUZ0IsVUFBVSxHQUFWLHVCQUFVLEtBQVYsdUJBQVUsUUFTMUI7SUFFRCxJQUFpQixJQUFJLENBRXBCO0lBRkQsV0FBaUIsSUFBSTtRQUNOLGFBQVEsR0FBRyxRQUFRLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQztJQUNqRCxDQUFDLEVBRmdCLElBQUksR0FBSixpQkFBSSxLQUFKLGlCQUFJLFFBRXBCO0lBRUQsSUFBaUIsT0FBTyxDQU92QjtJQVBELFdBQWlCLE9BQU87UUFDVCxjQUFNLEdBQUcsYUFBYSxDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUM7UUFDdEMsZUFBTyxHQUFHLFNBQVMsQ0FBQyxPQUFPLENBQUMsT0FBTyxDQUFDO1FBQ3BDLFlBQUksR0FBRyxRQUFRLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQztRQUM3QixjQUFNLEdBQUcsYUFBYSxDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUM7UUFDdEMsZ0JBQVEsR0FBRyxRQUFRLENBQUMsT0FBTyxDQUFDLFFBQVEsQ0FBQztRQUNyQyxhQUFLLEdBQUcsWUFBWSxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUM7SUFDbEQsQ0FBQyxFQVBnQixPQUFPLEdBQVAsb0JBQU8sS0FBUCxvQkFBTyxRQU92QjtJQUVELElBQWlCLEtBQUssQ0FjckI7SUFkRCxXQUFpQixLQUFLO1FBQ1Asb0JBQWMsR0FBRyxvQkFBb0IsQ0FBQyxLQUFLLENBQUMsY0FBYyxDQUFDO1FBQzNELFVBQUksR0FBRyxvQkFBb0IsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQztRQUM1QyxZQUFNLEdBQUcsYUFBYSxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUM7UUFDcEMsYUFBTyxHQUFHLFNBQVMsQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFDO1FBQ2xDLGFBQU8sR0FBRyxVQUFVLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQztRQUNuQyxTQUFHLEdBQUcsb0JBQW9CLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQztRQUNyQyxjQUFRLEdBQUcsUUFBUSxDQUFDLEtBQUssQ0FBQyxRQUFRLENBQUM7UUFDbkMsVUFBSSxHQUFHLG9CQUFvQixDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDO1FBQzVDLFdBQUssR0FBRyxZQUFZLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQztRQUNqQyxpQkFBVyxHQUFHLFlBQVksQ0FBQyxLQUFLLENBQUMsV0FBVyxDQUFDO1FBQzdDLGdCQUFVLEdBQUcsWUFBWSxDQUFDLEtBQUssQ0FBQyxVQUFVLENBQUM7UUFDM0MsZUFBUyxHQUFHLFlBQVksQ0FBQyxLQUFLLENBQUMsU0FBUyxDQUFDO1FBQ3pDLFlBQU0sR0FBRyxZQUFZLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQztJQUNsRCxDQUFDLEVBZGdCLEtBQUssR0FBTCxrQkFBSyxLQUFMLGtCQUFLLFFBY3JCO0lBRWEsMkJBQWMsR0FBRyxvQkFBb0IsQ0FBQztJQUN0QyxpQkFBSSxHQUFHLFVBQVUsQ0FBQztJQUNsQixnQkFBRyxHQUFHLFNBQVMsQ0FBQztJQUNoQixvQkFBTyxHQUFHLGFBQWEsQ0FBQztJQUN4QixlQUFFLEdBQUcsUUFBUSxDQUFDO0lBQ2QsbUJBQU0sR0FBRyxZQUFZLENBQUM7SUFDdEIsbUJBQU0sR0FBRyxZQUFZLENBQUM7QUFDckMsQ0FBQyxFQWhEUyxZQUFZLEtBQVosWUFBWSxRQWdEckI7QUFFRCxlQUFlLFlBQVksQ0FBQyJ9